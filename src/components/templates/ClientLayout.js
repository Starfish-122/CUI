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
import { media } from '@/styles/mixins';
import { sidebarCategories } from '@/routes/config';

// 사이드바가 필요한 경로 패턴 목록
const SIDEBAR_PATHS = ['/components', '/guides', '/all'];

const LayoutContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

const MainContent = styled.main`
    flex: 1;
    padding: ${toRem(20)};
    transition: margin-left 0.3s ease;

    ${(props) => props.$hasSidebar && props.$isSidebarOpen && media.lg`margin-left: ${toRem(280)};`}

    margin: 0 auto;
    min-height: 70vh;
`;

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const [hasSidebar, setHasSidebar] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    // 현재 경로에 따라 사이드바 표시 여부 결정
    useEffect(() => {
        // /all 경로 확인
        const isAllPath = pathname === '/all';

        // sidebarCategories에 정의된 모든 UI 컴포넌트 경로 확인
        const isUiComponentPath = sidebarCategories.some((category) =>
            category.items.some((item) => pathname === item.path)
        );

        // 기존 사이드바 경로 체크
        const isDefaultSidebarPath = SIDEBAR_PATHS.some((path) => pathname.startsWith(path));

        setHasSidebar(isAllPath || isUiComponentPath || isDefaultSidebarPath);
    }, [pathname]);

    // 사이드바 토글 이벤트 리스너
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
                    <Header hasSidebar={hasSidebar} isSidebarOpen={isSidebarOpen} />
                    <ContentWrapper>
                        {hasSidebar && <Sidebar />}
                        <MainContent $hasSidebar={hasSidebar} $isSidebarOpen={isSidebarOpen}>
                            {children}
                        </MainContent>
                    </ContentWrapper>
                    <Footer />
                </LayoutContainer>
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
}
