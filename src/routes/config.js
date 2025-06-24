/**
 * 애플리케이션의 라우트 설정
 * 새 페이지를 추가할 때는 이 파일의 appRoutes 배열에만 항목을 추가하면 됩니다.
 */

// 앱의 모든 라우트 정의 (홈 페이지 제외)
export const appRoutes = [
    { path: 'button', label: 'Button' },
    { path: 'input', label: 'Input' },
    { path: 'searchBar', label: 'Search Bar' },
    // 새 라우트를 여기에 추가하세요
    // { path: 'newRoute', label: 'New Route' },
];

// 네비게이션 메뉴에 표시할 링크 (홈 페이지 포함)
export const navLinks = [
    { href: '/', label: 'Home' },
    ...appRoutes.map((route) => ({
        href: `/${route.path}`,
        label: route.label,
    })),
];

// API 라우트용 경로 배열
export const routePaths = appRoutes.map((route) => route.path);
