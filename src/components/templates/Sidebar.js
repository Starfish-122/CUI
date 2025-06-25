'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppRoutes } from '@/routes/hooks';
import { sidebarCategories } from '@/routes/config';

export default function Sidebar() {
    const pathname = usePathname();
    const navLinks = useAppRoutes();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // 카테고리 확장 상태 관리
    const [expandedCategories, setExpandedCategories] = useState({
        inputs: true,
        navigation: false,
        layout: false,
        dataDisplay: false,
    });

    // 화면 크기에 따라 사이드바 상태 설정
    useEffect(() => {
        const checkIsMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setIsSidebarOpen(!mobile); // PC에서는 펼침, 모바일에서는 접음
        };

        // 초기 로드 시 확인
        checkIsMobile();

        // 화면 크기 변경 시 확인
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    // 카테고리 확장/축소 토글
    const toggleCategory = (category) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    // 사이드바 토글 함수
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    // 사이드바 닫기 함수
    const closeSidebar = () => {
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    };

    // 커스텀 이벤트 리스너 등록
    useEffect(() => {
        const handleToggleEvent = () => {
            toggleSidebar();
        };

        window.addEventListener('toggle-sidebar', handleToggleEvent);

        return () => {
            window.removeEventListener('toggle-sidebar', handleToggleEvent);
        };
    }, []);

    // 경로 변경 시 사이드바 닫기 (모바일에서)
    useEffect(() => {
        const handleRouteChange = () => {
            if (isMobile) {
                closeSidebar();
            }
        };

        // 현재 경로 변경 시 이벤트 처리
        handleRouteChange();

        // 경로 변경 이벤트 리스너 추가
        return () => {
            // 컴포넌트 언마운트 시 정리
        };
    }, [pathname, isMobile]);

    // 사이드바 외부 클릭 시 닫기 (모바일에서만)
    useEffect(() => {
        const handleOutsideClick = (event) => {
            const sidebar = document.querySelector('.sidebar');
            const hamburger = document.querySelector('.header__hamburger');

            if (
                isMobile &&
                isSidebarOpen &&
                sidebar &&
                !sidebar.contains(event.target) &&
                hamburger &&
                !hamburger.contains(event.target)
            ) {
                closeSidebar();
            }
        };

        if (isSidebarOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isSidebarOpen, isMobile]);

    return (
        <>
            {isMobile && (
                <div
                    className={`sidebar-overlay ${isSidebarOpen ? 'sidebar-overlay--visible' : ''}`}
                    onClick={closeSidebar}
                ></div>
            )}

            <aside className={`sidebar ${isSidebarOpen ? 'sidebar--open' : ''}`}>
                <div className="sidebar__header">
                    <Link href="/" className="sidebar__logo">
                        <div className="sidebar__logo-icon">CUI</div>
                        <span className="sidebar__logo-text">Concentrix UI</span>
                    </Link>
                    <div className="sidebar__version">v1.0</div>
                    {isMobile && (
                        <button
                            className="sidebar__close"
                            onClick={closeSidebar}
                            aria-label="사이드바 닫기"
                        >
                            ✕
                        </button>
                    )}
                </div>

                <div className="sidebar__content">
                    {expandedCategories.all && (
                        <Link
                            href="/all"
                            className={`sidebar__item  ${pathname === '/all' ? 'sidebar__item--active' : ''}`}
                        >
                            All components
                        </Link>
                    )}

                    {sidebarCategories.map((category) => (
                        <ul key={category.id} className="sidebar__category">
                            <li>
                                <div
                                    className={`sidebar__category-header ${expandedCategories[category.id] ? 'sidebar__category-header--expanded' : ''}`}
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    <span>{category.name}</span>
                                    <span className="sidebar__category-icon">
                                        {expandedCategories[category.id] ? '▼' : '▶'}
                                    </span>
                                </div>

                                {expandedCategories[category.id] && (
                                    <ul className="sidebar__items">
                                        {category.items.map((item) => (
                                            <li key={item.path}>
                                                <Link
                                                    href={item.path}
                                                    className={`sidebar__item ${pathname === item.path ? 'sidebar__item--active' : ''}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </ul>
                    ))}
                </div>
            </aside>
        </>
    );
}
