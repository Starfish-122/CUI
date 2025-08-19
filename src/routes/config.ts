// 애플리케이션의 라우트 설정
// 앱의 모든 라우트 정의 (홈 페이지 제외)

interface AppRoute {
    path: string;
    label: string;
}

interface NavLink {
    href: string;
    label: string;
}

interface SidebarItem {
    name: string;
    path: string;
}

interface SidebarCategory {
    id: string;
    name: string;
    items: SidebarItem[];
}

export const appRoutes: AppRoute[] = [
    // { path: 'about', label: 'About' },
    { path: 'guide', label: 'Guide' },
    { path: 'button', label: 'Components' },
    // 새 라우트 추가
    // { path: 'newRoute', label: 'New Route' },
];

// 네비게이션 메뉴에 표시할 페이지
export const navLinks: NavLink[] = [
    // { href: '/', label: 'Home' },
    ...appRoutes.map((route) => ({
        href: `/${route.path}`,
        label: route.label,
    })),
];

// API 라우트용 경로 배열
export const routePaths: string[] = appRoutes.map((route) => route.path);

// 사이드바에 표시할 카테고리 및 컴포넌트 정의
export const sidebarCategories: SidebarCategory[] = [
    {
        id: 'completed',
        name: 'Completed',
        items: [
            { name: 'Button', path: '/button' },
            { name: 'Switch', path: '/switch' },
        ],
    },
    {
        id: 'in-progress',
        name: 'In Progress',
        items: [
            { name: 'Radio', path: '/radio' },
            { name: 'CheckBox', path: '/checkbox' },
            { name: 'Search Bar', path: '/search-bar' },
        ],
    },
    {
        id: 'planned',
        name: 'Planned',
        items: [
            { name: 'Modal', path: '/modal' },
            { name: 'Tooltip', path: '/tooltip' },
            { name: 'Select', path: '/select' },
            { name: 'Text Field', path: '/text-field' },
            { name: 'Range Slider', path: '/range-slider' },
            { name: 'Pagination', path: '/pagination' },
            { name: 'Tabs', path: '/tabs' },
            { name: 'Accordion', path: '/accordion' },
            { name: 'Dropdown', path: '/dropdown' },
        ],
    },
];
