/**
 * 애플리케이션의 라우트 설정
 * 새 페이지를 추가할 때는 이 파일의 appRoutes 배열에만 항목을 추가하면 됩니다.
 */

// 앱의 모든 라우트 정의 (홈 페이지 제외)
export const appRoutes = [
    // { path: 'about', label: 'About' },
    { path: 'guide', label: 'Guide' },
    { path: 'all', label: 'Components' },
    // 새 라우트를 여기에 추가하세요
    // { path: 'newRoute', label: 'New Route' },
];

// 네비게이션 메뉴에 표시할 페이지
export const navLinks = [
    // { href: '/', label: 'Home' },
    ...appRoutes.map((route) => ({
        href: `/${route.path}`,
        label: route.label,
    })),
];

// API 라우트용 경로 배열
export const routePaths = appRoutes.map((route) => route.path);

// 사이드바에 표시할 카테고리 및 컴포넌트 정의
export const sidebarCategories = [
    {
        id: 'Progress',
        name: 'Progress',
        items: [
            { name: 'Button', path: '/button' },
            { name: 'Radio', path: '/radio' },
            { name: 'CheckBox', path: '/checkbox' },
            { name: 'Switch', path: '/switch' },
            { name: 'Search Bar', path: '/search-bar' },
            // { name: 'Select Box', path: '/select-box' },
            // { name: 'Text Field', path: '/text-field' },
            // { name: 'Range Slider', path: '/range-slider' },
            // { name: 'Checkbox', path: '/checkbox' },
        ],
    },
    {
        id: 'navigation',
        name: 'Navigation',
        items: [
            { name: 'Breadcrumb', path: '/breadcrumb' },
            { name: 'Pagination', path: '/pagination' },
            { name: 'Tabs', path: '/tabs' },
            { name: 'Accordion', path: '/accordion' },
            { name: 'Dropdown', path: '/dropdown' },
        ],
    },
    {
        id: 'layout',
        name: 'Layout',
        items: [
            { name: 'Grid Container', path: '/grid-container' },
            { name: 'Collapse Section', path: '/collapse-section' },
        ],
    },
    {
        id: 'dataDisplay',
        name: 'Data Display',
        items: [
            { name: 'Table', path: '/table' },
            { name: 'Card', path: '/card' },
            { name: 'List', path: '/list' },
            { name: 'Badge', path: '/badge' },
            { name: 'Alert', path: '/alert' },
            { name: 'Tooltip', path: '/tooltip' },
        ],
    },
];
