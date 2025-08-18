'use client';

import styled, { css } from 'styled-components';
import { H2 } from '@/components/utils/UIStyles';
import { media } from '@/styles/mixins';

interface DemoContainerProps {
    $hasSidebar?: boolean;
    $isSidebarOpen?: boolean;
}

interface HeaderProps {
    $titleColor: string;
}

interface SubtitleProps {
    $subtitleColor: string;
}

interface UILayoutProps {
    title: string;
    subtitle: string;
    titleColor?: string;
    subtitleColor?: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    hasSidebar?: boolean;
    isSidebarOpen?: boolean;
}

const DemoContainer = styled.div<DemoContainerProps>`
    padding: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme }) => theme.colors.light900};
    min-height: 80vh;

    ${media.sm(css`
        padding: ${({ theme }) => theme.spacing.xl};
    `)}
`;

const Header = styled.div<HeaderProps>`
    padding: ${({ theme }) => theme.spacing.xl} 0;
    color: ${({ $titleColor, theme }) =>
        theme.colors[$titleColor as keyof typeof theme.colors] || $titleColor};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const StyledH2 = styled(H2)`
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: 600;
    gap: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p<SubtitleProps>`
    color: ${({ $subtitleColor, theme }) =>
        theme.colors[$subtitleColor as keyof typeof theme.colors] ||
        $subtitleColor ||
        theme.colors.light900};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin: 0;
`;

const Content = styled.div``;

const getThemeColor = (colorKey: string, theme: any): string => {
    return theme.colors[colorKey as keyof typeof theme.colors] || colorKey;
};

interface HeaderComponentProps {
    title: string;
    subtitle: string;
    titleColor: string;
    subtitleColor: string;
    icon?: React.ReactNode;
}

const HeaderComponent = ({
    title,
    subtitle,
    titleColor,
    subtitleColor,
    icon,
}: HeaderComponentProps) => (
    <Header $titleColor={titleColor}>
        <StyledH2>
            {icon && icon}
            {title}
        </StyledH2>
        <Subtitle $subtitleColor={subtitleColor}>{subtitle}</Subtitle>
    </Header>
);

export default function UILayout({
    title,
    subtitle,
    titleColor = 'blue900',
    subtitleColor = 'blue900',
    children,
    icon,
    hasSidebar = false,
    isSidebarOpen = false,
}: UILayoutProps) {
    return (
        <DemoContainer $hasSidebar={hasSidebar} $isSidebarOpen={isSidebarOpen}>
            <HeaderComponent
                title={title}
                subtitle={subtitle}
                titleColor={titleColor}
                subtitleColor={subtitleColor}
                icon={icon}
            />
            <Content data-ui-layout-content>{children}</Content>
        </DemoContainer>
    );
}
