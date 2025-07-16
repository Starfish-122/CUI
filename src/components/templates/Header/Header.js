'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppRoutes } from '@/routes/hooks';
import { useState } from 'react';
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

/**
 * 헤더 컴포넌트
 * routes/hooks.js에서 제공하는 훅을 사용하여 네비게이션 메뉴를 표시합니다.
 */
export default function Header({ hasSidebar = false, isSidebarOpen = false }) {
    const currentPath = usePathname();
    // 라우트 설정에서 네비게이션 링크 가져오기
    const navLinks = useAppRoutes();

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleSidebar = () => {
        setMenuOpen((prev) => !prev);

        const event = new CustomEvent('toggle-sidebar');
        window.dispatchEvent(event);
    };

    return (
        <HeaderContainer hasSidebar={hasSidebar} isSidebarOpen={isSidebarOpen}>
            <Container>
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
                                    isActive={currentPath === link.href}
                                    passHref
                                    legacyBehavior={false}
                                >
                                    {link.label}
                                </StyledLink>
                            </NavItem>
                        ))}
                    </NavList>
                </Navigation>

                <Hamburger onClick={toggleSidebar} aria-label="메뉴 토글">
                    <HamburgerLine />
                    <HamburgerLine />
                    <HamburgerLine />
                </Hamburger>
            </Container>
        </HeaderContainer>
    );
}
