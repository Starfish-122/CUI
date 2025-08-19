/**
 * 네비게이션 링크를 위한 유틸리티 함수
 * app 폴더 내의 라우트를 기반으로 네비게이션 링크를 생성합니다.
 */

interface NavLink {
    href: string;
    label: string;
}

// 특정 폴더 및 파일은 네비게이션에서 제외
const EXCLUDED_ROUTES: string[] = [
    'api', // API 라우트
    'layout.js',
    'page.js',
    'loading.js',
    'error.js',
    'not-found.js',
    'template.js',
    'default.js',
    'route.js',
    'robots.ts',
    'sitemap.ts',
    'favicon.ico',
    'icon.js',
    'global-error.js',
];

// 경로 그룹 및 개인 폴더 패턴
const isRouteGroup = (path: string): boolean => /^\([^)]+\)$/.test(path);
const isPrivateFolder = (path: string): boolean => path.startsWith('_');

/**
 * 라우트 이름을 사용자 친화적인 텍스트로 변환
 * @param route - 라우트 이름 (폴더명)
 * @returns 표시할 텍스트
 */
export const formatRouteName = (route: string): string => {
    // 첫 글자를 대문자로 변환
    return route.charAt(0).toUpperCase() + route.slice(1).replace(/-/g, ' ');
};

/**
 * 유효한 네비게이션 라우트인지 확인
 * @param route - 라우트 이름 (폴더명)
 * @returns 유효한 라우트인지 여부
 */
export const isValidRoute = (route: string): boolean => {
    return !EXCLUDED_ROUTES.includes(route) && !isPrivateFolder(route) && !route.includes('.');
};

/**
 * 네비게이션 링크 목록 생성
 * @param routes - app 폴더 내의 라우트 목록
 * @returns 네비게이션 링크 객체 배열 [{href, label}]
 */
export const generateNavLinks = (routes: string[]): NavLink[] => {
    // 홈 링크는 항상 포함
    const links: NavLink[] = [];
    // const links = [{ href: '/', label: 'Home' }];

    // 유효한 라우트만 필터링하여 링크 생성
    routes.forEach((route) => {
        if (isValidRoute(route)) {
            // 라우트 그룹인 경우 건너뛰기 (API에서 처리)
            if (isRouteGroup(route)) return;

            links.push({
                href: `/${route}`,
                label: formatRouteName(route),
            });
        }
    });

    return links;
};

export default generateNavLinks;
