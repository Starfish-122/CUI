'use client';

import styled from 'styled-components';
import { H2 } from '@/components/base/core';

const DemoContainer = styled.div`
    padding: ${({ theme }) => theme.spacing.xl};
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.light900} 0%,
        ${({ theme }) => theme.colors.gray100} 100%
    );
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    min-height: 80vh;
`;

const Header = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
    padding: ${({ theme }) => theme.spacing.xl};
    background: linear-gradient(
        135deg,
        ${({ $primaryColor, theme }) => theme.colors[$primaryColor] || $primaryColor} 0%,
        ${({ $secondaryColor, theme }) => theme.colors[$secondaryColor] || $secondaryColor} 100%
    );
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    color: ${({ theme }) => theme.colors.light900};
`;

const StyledH2 = styled(H2)`
    color: ${({ theme }) => theme.colors.light900};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p`
    color: ${({ $subtitleColor, theme }) =>
        theme.colors[$subtitleColor] || $subtitleColor || theme.colors.light900};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin: 0;
`;

const Content = styled.div`
    /* 콘텐츠 영역 스타일 */
`;

/**
 * UI 데모 페이지를 위한 공통 레이아웃 컴포넌트
 *
 * @param {string} title - 페이지 제목
 * @param {string} subtitle - 페이지 부제목
 * @param {string} primaryColor - 헤더 그라데이션 주 색상 (theme 색상명 또는 hex 값)
 * @param {string} secondaryColor - 헤더 그라데이션 보조 색상 (theme 색상명 또는 hex 값)
 * @param {string} subtitleColor - 부제목 색상 (theme 색상명 또는 hex 값)
 * @param {React.ReactNode} children - 페이지 콘텐츠
 * @param {React.ReactNode} icon - 제목 옆에 표시할 아이콘 (선택사항)
 */
export default function UILayout({
    title,
    subtitle,
    primaryColor = 'blue500',
    secondaryColor = 'blue400',
    subtitleColor = 'light900',
    children,
    icon,
}) {
    return (
        <DemoContainer>
            <Header $primaryColor={primaryColor} $secondaryColor={secondaryColor}>
                <StyledH2>
                    {icon && icon}
                    {title}
                </StyledH2>
                <Subtitle $subtitleColor={subtitleColor}>{subtitle}</Subtitle>
            </Header>
            <Content>{children}</Content>
        </DemoContainer>
    );
}
