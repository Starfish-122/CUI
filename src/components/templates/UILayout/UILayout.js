'use client';

import styled from 'styled-components';
import { H2 } from '@/components/base/core';
import { media } from '@/styles/mixins';

const DemoContainer = styled.div`
    padding: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme }) => theme.colors.light900};
    min-height: 80vh;

    ${media.sm`
        padding: ${({ theme }) => theme.spacing.xl};
    `}
`;

const Header = styled.div`
    padding: ${({ theme }) => theme.spacing.xl} 0;
    color: ${({ $titleColor, theme }) => theme.colors[$titleColor] || $titleColor};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const StyledH2 = styled(H2)`
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: 600;
    gap: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p`
    color: ${({ $subtitleColor, theme }) =>
        theme.colors[$subtitleColor] || $subtitleColor || theme.colors.light900};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin: 0;
`;

const Content = styled.div``;

/**
 *
 * @param {string} title - 페이지 제목
 * @param {string} subtitle - 페이지 부제목
 * @param {string} titleColor - 제목 색상
 * @param {string} subtitleColor - 부제목 색상
 * @param {React.ReactNode} children - 페이지 콘텐츠
 * @param {React.ReactNode} icon - 제목 옆에 표시할 아이콘 (선택사항)
 */
export default function UILayout({
    title,
    subtitle,
    titleColor = 'blue900',
    subtitleColor = 'blue900',
    children,
    icon,
}) {
    return (
        <DemoContainer>
            <Header $titleColor={titleColor}>
                <StyledH2>
                    {icon && icon}
                    {title}
                </StyledH2>
                <Subtitle $subtitleColor={subtitleColor}>{subtitle}</Subtitle>
            </Header>
            <Content data-ui-layout-content>{children}</Content>
        </DemoContainer>
    );
}
