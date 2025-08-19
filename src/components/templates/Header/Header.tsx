'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppRoutes } from '@/routes/hooks';
import { useState, useEffect } from 'react';
import {
    HeaderContainer,
    Container,
    Logo,
    Navigation,
    Hamburger,
    HamburgerLine,
    NavList,
    NavItem,
    StyledLink,
} from './styles';

export interface HeaderProps {
    $hasSidebar?: boolean;
    $isSidebarOpen?: boolean;
}

const isUIPath = (pathname: string): boolean => {
    // (ui) 폴더의 하위 경로
    return pathname !== '/' && pathname !== '/guide' && pathname.split('/').length === 2;
};

/**
 * 헤더 컴포넌트
 * routes/hooks.js 훅으로 네비게이션 메뉴 표시
 */
export default function Header({ $hasSidebar = false, $isSidebarOpen = false }: HeaderProps) {
    const currentPath = usePathname();
    const navLinks = useAppRoutes();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isUIPage, setIsUIPage] = useState(false);

    useEffect(() => {
        setIsUIPage(isUIPath(currentPath));
    }, [currentPath]);

    // 사이드바 상태 확인
    useEffect(() => {
        const checkSidebarState = () => {
            const sidebar = document.querySelector('[data-sidebar]') as HTMLElement;
            if (sidebar) {
                const isOpen = sidebar.getAttribute('data-sidebar') === 'open';
                setIsSidebarOpen(isOpen);
            }
        };

        // 초기 확인
        checkSidebarState();

        // 사이드바 토글 이벤트 리스너
        const handleSidebarToggle = () => {
            // DOM 업데이트를 기다린 후 상태 확인
            requestAnimationFrame(() => {
                setTimeout(checkSidebarState, 50);
            });
        };

        // 사이드바 상태 변경 이벤트 리스너
        const handleSidebarStateChanged = (event: CustomEvent) => {
            // 상태 업데이트를 다음 렌더링 사이클로 지연
            requestAnimationFrame(() => {
                setIsSidebarOpen(event.detail.isOpen);
            });
        };

        window.addEventListener('toggle-sidebar', handleSidebarToggle);
        window.addEventListener(
            'sidebar-state-changed',
            handleSidebarStateChanged as EventListener
        );

        // MutationObserver로 사이드바 상태 변화 감지
        const observer = new MutationObserver(() => {
            requestAnimationFrame(checkSidebarState);
        });
        const sidebar = document.querySelector('[data-sidebar]');
        if (sidebar) {
            observer.observe(sidebar, { attributes: true, attributeFilter: ['data-sidebar'] });
        }

        return () => {
            window.removeEventListener('toggle-sidebar', handleSidebarToggle);
            window.removeEventListener(
                'sidebar-state-changed',
                handleSidebarStateChanged as EventListener
            );
            observer.disconnect();
        };
    }, []);

    const toggleSidebar = () => {
        const event = new CustomEvent('toggle-sidebar');
        window.dispatchEvent(event);
    };

    return (
        <HeaderContainer $hasSidebar={$hasSidebar} $isSidebarOpen={$isSidebarOpen}>
            <Container>
                {/* (ui) 폴더에서만 햄버거 버튼 표시 */}
                {isUIPage && (
                    <Hamburger
                        onClick={toggleSidebar}
                        aria-label="메뉴 토글"
                        $isOpen={isSidebarOpen}
                    >
                        <HamburgerLine $isOpen={isSidebarOpen} />
                        <HamburgerLine $isOpen={isSidebarOpen} />
                        <HamburgerLine $isOpen={isSidebarOpen} />
                    </Hamburger>
                )}

                <Logo>
                    <Link href="/">
                        <h1>CUI</h1>
                    </Link>
                </Logo>

                <Navigation>
                    <NavList>
                        {navLinks.map((link) => (
                            <NavItem key={link.href}>
                                <StyledLink
                                    href={link.href}
                                    $isActive={currentPath === link.href}
                                    passHref
                                    legacyBehavior={false}
                                >
                                    {link.label}
                                </StyledLink>
                            </NavItem>
                        ))}
                    </NavList>
                </Navigation>
            </Container>
        </HeaderContainer>
    );
}
