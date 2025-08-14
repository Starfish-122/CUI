'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { useAppRoutes } from '@/routes/hooks';
import { sidebarCategories } from '@/routes/config';
import {
    SidebarContainer,
    SidebarHeader,
    SidebarLogo,
    LogoIcon,
    VersionTag,
    CloseButton,
    SidebarContent,
    CategoryList,
    CategoryItem,
    CategoryHeader,
    CategoryIcon,
    ItemsList,
    Item,
    ItemLink,
    SidebarOverlay,
} from './styles';

export default function Sidebar() {
    const pathname = usePathname();
    const navLinks = useAppRoutes();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isTablet, setIsTablet] = useState(false);
    const sidebarRef = useRef(null);

    const [expandedCategories, setExpandedCategories] = useState({
        // all: true,
        // inputs: true,
        // navigation: false,
        // layout: false,
        // dataDisplay: false,
        completed: true,
        'in-progress': false,
        planned: false,
    });

    useEffect(() => {
        const checkIsTablet = () => {
            const Tablet = window.innerWidth < 1024;
            setIsTablet(Tablet);
            setIsSidebarOpen(!Tablet); // PC에서는 펼침, 모바일에서는 접음
            console.log(Tablet);
        };

        // 초기 로드 시 확인
        checkIsTablet();

        // 화면 크기 변경 시 확인
        window.addEventListener('resize', checkIsTablet);

        return () => {
            window.removeEventListener('resize', checkIsTablet);
        };
    }, []);

    const toggleCategory = (category) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const closeSidebar = useCallback(() => {
        if (isTablet) {
            setIsSidebarOpen(false);
        }
    }, [isTablet]);

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
            if (isTablet) {
                closeSidebar();
            }
        };

        handleRouteChange();

        return () => {
            // 컴포넌트 언마운트 시 정리
        };
    }, [pathname, isTablet, closeSidebar]);

    // 사이드바 외부 클릭 시 닫기 (모바일에서만)
    useEffect(() => {
        const handleOutsideClick = (event) => {
            const hamburger = document.querySelector('.header__hamburger');

            if (
                isTablet &&
                isSidebarOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
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
    }, [isSidebarOpen, isTablet, closeSidebar]);

    return (
        <>
            {isTablet && <SidebarOverlay $visible={isSidebarOpen} onClick={closeSidebar} />}

            <SidebarContainer ref={sidebarRef} $isOpen={isSidebarOpen}>
                <SidebarHeader>
                    {/* <SidebarLogo href="/"><LogoIcon>CUI</LogoIcon></SidebarLogo> */}
                    <VersionTag>v1.0</VersionTag>
                    {isTablet && (
                        <CloseButton onClick={closeSidebar} aria-label="사이드바 닫기">
                            ✕
                        </CloseButton>
                    )}
                </SidebarHeader>

                <SidebarContent>
                    <CategoryList>
                        {sidebarCategories.map((category) => (
                            <CategoryItem key={category.id}>
                                <CategoryHeader
                                    $expanded={expandedCategories[category.id]}
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    <span>{category.name}</span>
                                    <CategoryIcon>
                                        {expandedCategories[category.id] ? '▼' : '▶'}
                                    </CategoryIcon>
                                </CategoryHeader>

                                {expandedCategories[category.id] && (
                                    <ItemsList>
                                        {category.items.map((item) => (
                                            <Item key={item.path}>
                                                <ItemLink
                                                    href={item.path}
                                                    $isActive={pathname === item.path}
                                                >
                                                    {item.name}
                                                </ItemLink>
                                            </Item>
                                        ))}
                                    </ItemsList>
                                )}
                            </CategoryItem>
                        ))}
                    </CategoryList>
                </SidebarContent>
            </SidebarContainer>
        </>
    );
}
