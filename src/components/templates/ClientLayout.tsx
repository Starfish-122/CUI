'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/globalStyles';
import Header from '@/components/templates/Header/Header';
import Footer from '@/components/templates/Footer/Footer';
import Sidebar from '@/components/templates/Sidebar/Sidebar';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { toRem } from '@/styles/utils';
import { sidebarCategories } from '@/routes/config';

interface LayoutContainerProps {
    children: React.ReactNode;
}

interface ContentWrapperProps {
    children: React.ReactNode;
}

interface MainContentProps {
    $hasSidebar: boolean;
    $isSidebarOpen: boolean;
}

interface ClientLayoutProps {
    children: React.ReactNode;
}

const SIDEBAR_PATHS = ['/components', '/guides', '/all'] as const;
const TABLET_BREAKPOINT = 1024;
const SIDEBAR_MARGIN = '17.5rem';

const isAllPath = (pathname: string): boolean => {
    return pathname === '/all';
};

const isUiComponentPath = (pathname: string): boolean => {
    return sidebarCategories.some((category) =>
        category.items.some((item) => pathname === item.path)
    );
};

const isDefaultSidebarPath = (pathname: string): boolean => {
    return SIDEBAR_PATHS.some((path) => pathname.startsWith(path));
};

// 사이드바 표시 여부 결정
const shouldShowSidebar = (pathname: string): boolean => {
    return isAllPath(pathname) || isUiComponentPath(pathname) || isDefaultSidebarPath(pathname);
};

const LayoutContainer = styled.div<LayoutContainerProps>`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const ContentWrapper = styled.div<ContentWrapperProps>`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

const MainContent = styled.main<MainContentProps>`
    flex: 1;
    padding: ${toRem(20)};
    transition: margin-left 0.3s ease;
    margin: 0 auto;
    min-height: 70vh;
    ${(props) =>
        props.$hasSidebar &&
        props.$isSidebarOpen &&
        `
        @media (min-width: ${TABLET_BREAKPOINT}px) {
            margin-left: ${SIDEBAR_MARGIN};
        }
        `}
`;

export default function ClientLayout({ children }: ClientLayoutProps) {
    const pathname = usePathname();
    const [hasSidebar, setHasSidebar] = useState<boolean>(false);
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);

    // 현재 경로에 따라 사이드바 표시 여부 결정
    useEffect(() => {
        const shouldShow = shouldShowSidebar(pathname);
        setHasSidebar(shouldShow);
    }, [pathname]);

    useEffect(() => {
        const handleToggleSidebar = () => {
            setSidebarOpen((prev) => !prev);
        };

        window.addEventListener('toggle-sidebar', handleToggleSidebar);

        return () => {
            window.removeEventListener('toggle-sidebar', handleToggleSidebar);
        };
    }, []);

    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <LayoutContainer>
                    <Header $hasSidebar={hasSidebar} $isSidebarOpen={isSidebarOpen} />
                    <ContentWrapper>
                        {hasSidebar && <Sidebar />}
                        <MainContent $hasSidebar={hasSidebar} $isSidebarOpen={isSidebarOpen}>
                            {children}
                        </MainContent>
                    </ContentWrapper>
                    <Footer $hasSidebar={hasSidebar} $isSidebarOpen={isSidebarOpen} />
                </LayoutContainer>
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
}
