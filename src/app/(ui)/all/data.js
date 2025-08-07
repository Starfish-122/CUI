export const components = [
    {
        name: 'Button',
        icon: 'radio_button_checked',
        description: 'playground 포함',
        status: 'completed',
        path: '/button',
    },
    {
        name: 'Radio',
        icon: 'radio_button_checked',
        description: 'Radio 컴포넌트',
        status: 'in-progress',
        path: '/radio',
    },
    {
        name: 'Checkbox',
        icon: 'check_box',
        description: 'Checkbox 컴포넌트',
        status: 'in-progress',
        path: '/checkbox',
    },
    {
        name: 'Switch',
        icon: 'toggle_on',
        description: 'Switch 컴포넌트',
        status: 'in-progress',
        path: '/switch',
    },
    {
        name: 'SearchBar',
        icon: 'search',
        description: '실시간 검색 기능을 제공하는 검색바',
        status: 'in-progress',
        path: '/search-bar',
    },
    {
        name: 'Modal',
        icon: 'fullscreen',
        description: '다양한 크기와 스타일의 모달 다이얼로그',
        status: 'planned',
        path: '/modal',
    },
    {
        name: 'Tooltip',
        icon: 'info',
        description: '사용자에게 추가 정보를 제공하는 툴팁',
        status: 'planned',
        path: '/tooltip',
    },
    {
        name: 'Select',
        icon: 'expand_more',
        description: '드롭다운 형태의 선택 컴포넌트',
        status: 'planned',
        path: '/select',
    },
];

export const getStatusText = (status) => {
    switch (status) {
        case 'completed':
            return '완료';
        case 'in-progress':
            return '진행중';
        case 'planned':
            return '예정';
        default:
            return '알 수 없음';
    }
};
