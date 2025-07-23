import styled, { css } from 'styled-components';
import { inlineFlex } from '@/styles/mixins';

// 상수 정의
const VARIANTS = {
    DEFAULT: 'default',
    FILLED: 'filled',
    OUTLINE: 'outline',
    TEXT: 'text',
};

const SIZES = {
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
};

const THEME_COLORS = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
};

// 기본 버튼 스타일
const baseButtonStyles = css`
    ${inlineFlex};
    gap: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-weight: 500;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.short};
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

// 색상 유틸리티 함수들
const getThemeColor = (theme, colorName) => {
    const colorMap = {
        [THEME_COLORS.PRIMARY]: theme.colors.primary,
        [THEME_COLORS.SECONDARY]: theme.colors.secondary,
        [THEME_COLORS.SUCCESS]: theme.colors.success,
        [THEME_COLORS.WARNING]: theme.colors.warning,
        [THEME_COLORS.ERROR]: theme.colors.error,
    };

    return colorMap[colorName] || colorName;
};

const createHoverEffect = (bgColor) => css`
    &:hover:not(:disabled) {
        background-color: ${bgColor}cc;
    }
`;

const createOutlineHoverEffect = (bgColor, lightColor) => css`
    &:hover:not(:disabled) {
        color: ${lightColor};
        background-color: ${bgColor};
    }
`;

// Variant별 스타일 생성 함수
const createVariantStyle = (theme, variant, bgColor) => {
    const lightColor = theme.colors.light900;

    switch (variant) {
        case VARIANTS.OUTLINE:
            return css`
                background-color: transparent;
                color: ${bgColor};
                border: 1px solid ${bgColor};
                ${createOutlineHoverEffect(bgColor, lightColor)}
            `;

        case VARIANTS.TEXT:
            return css`
                background-color: transparent;
                color: ${bgColor};
                border: none;
                ${createOutlineHoverEffect(bgColor, lightColor)}
            `;

        default: // default, filled
            return css`
                background-color: ${bgColor};
                color: ${lightColor};
                border: none;
                ${createHoverEffect(bgColor)}
            `;
    }
};

// 기본 variant 스타일 (bgColor가 없을 때 사용)
const variantStyles = {
    [VARIANTS.DEFAULT]: css`
        background-color: ${({ theme }) => theme.colors.blue500};
        color: ${({ theme }) => theme.colors.light900};
        border: none;
        ${({ theme }) => createHoverEffect(theme.colors.blue500)}
    `,

    [VARIANTS.FILLED]: css`
        background-color: ${({ theme }) => theme.colors.blue500};
        color: ${({ theme }) => theme.colors.light900};
        border: none;
        ${({ theme }) => createHoverEffect(theme.colors.blue500)}
    `,

    [VARIANTS.OUTLINE]: css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.blue500};
        border: 1px solid ${({ theme }) => theme.colors.blue500};
        ${({ theme }) => createOutlineHoverEffect(theme.colors.blue500, theme.colors.light900)}
    `,

    [VARIANTS.TEXT]: css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.blue500};
        border: none;
        ${({ theme }) => createOutlineHoverEffect(theme.colors.blue500, theme.colors.light900)}
    `,
};

// 크기별 스타일
const sizeStyles = {
    [SIZES.SM]: css`
        padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
        font-size: ${({ theme }) => theme.fontSizes.sm};
    `,

    [SIZES.MD]: css`
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
        font-size: ${({ theme }) => theme.fontSizes.md};
    `,

    [SIZES.LG]: css`
        padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
        font-size: ${({ theme }) => theme.fontSizes.lg};
    `,
};

// 커스텀 배경색 스타일 생성
const createCustomBgColorStyle = ({ theme, $bgColor, $variant }) => {
    if (!$bgColor) return null;

    const bgColor = getThemeColor(theme, $bgColor);
    return createVariantStyle(theme, $variant, bgColor);
};

// 커스텀 텍스트 색상 스타일 생성
const createCustomTextColorStyle = ($textColor) => {
    if (!$textColor) return null;

    return css`
        color: ${$textColor};
    `;
};

export const BasicButton = styled.button`
    ${baseButtonStyles}

    ${({ $variant = VARIANTS.DEFAULT }) =>
        variantStyles[$variant] || variantStyles[VARIANTS.DEFAULT]}
  
    ${({ $size = SIZES.MD }) => sizeStyles[$size] || sizeStyles[SIZES.MD]}
    
    ${({ theme, $bgColor, $variant }) => createCustomBgColorStyle({ theme, $bgColor, $variant })}
    
    ${({ $textColor }) => createCustomTextColorStyle($textColor)}
`;
