import styled, { css, keyframes } from 'styled-components';
import { toRem } from '@/styles/utils';
import { inlineFlex, flexCenter, flexBetween } from '@/styles/mixins';

const drawCheck = keyframes`
    0% {
        stroke-dashoffset: 24;
    }
    100% {
        stroke-dashoffset: 0;
    }
`;

// 색상 계산 유틸리티 함수들
const calculateBrightness = (hexColor) => {
    if (!hexColor || !hexColor.startsWith('#')) return 128;

    const hex = hexColor.replace('#', '');
    if (hex.length !== 6) return 128;

    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    return r * 0.299 + g * 0.587 + b * 0.114;
};

const getContrastColor = (backgroundColor) => {
    const brightness = calculateBrightness(backgroundColor);
    return brightness < 128 ? '#FFFFFF' : '#2C3E50';
};

const getBackgroundColor = ({ $bgColor, $variant, theme }) => {
    if ($bgColor) return $bgColor;

    const variantColors = {
        outline: theme.colors.white,
        filled: theme.colors.blue100,
        primary: theme.colors.blue500,
        blue: theme.colors.blue500,
    };

    return variantColors[$variant] || theme.colors[$variant] || theme.colors.blue500;
};

const getBorderColor = ({ $bgColor, $variant, theme }) => {
    if ($bgColor) return $bgColor;

    const variantColors = {
        outline: theme.colors.blue500,
        filled: theme.colors.blue300,
        primary: theme.colors.blue500,
        blue: theme.colors.blue500,
    };

    return variantColors[$variant] || theme.colors[$variant] || theme.colors.blue500;
};

const getIconColor = ({ $textColor, $bgColor, $variant, theme }) => {
    // 1. 커스텀 텍스트 색상이 있으면 우선 사용
    if ($textColor) return $textColor;

    // 2. 특별한 케이스들 (배경색 계산 없이 직접 반환)
    if (!$bgColor) {
        const specialCases = {
            outline: theme.colors.blue500,
            filled: theme.colors.blue700,
        };
        if (specialCases[$variant]) return specialCases[$variant];
    }

    // 3. 배경색에 따른 대비 색상 계산
    const backgroundColor = getBackgroundColor({ $bgColor, $variant, theme });
    return getContrastColor(backgroundColor);
};

// 크기별 스타일 정의
const sizeStyles = {
    sm: css`
        width: ${toRem(16)};
        height: ${toRem(16)};
    `,
    md: css`
        width: ${toRem(20)};
        height: ${toRem(20)};
    `,
    lg: css`
        width: ${toRem(24)};
        height: ${toRem(24)};
    `,
};

const checkIconStyles = {
    sm: css`
        width: ${toRem(10)};
        height: ${toRem(8)};
        stroke-width: 2;
    `,
    md: css`
        width: ${toRem(12)};
        height: ${toRem(10)};
        stroke-width: 2.5;
    `,
    lg: css`
        width: ${toRem(14)};
        height: ${toRem(12)};
        stroke-width: 3;
    `,
};

export const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export const CheckBoxInput = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 2px solid ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    margin: 0;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    background: ${({ theme }) => theme.colors.white};
    flex-shrink: 0;

    ${({ $size = 'md' }) => sizeStyles[$size] || sizeStyles.md}

    &:hover {
        border-color: ${({ theme }) => theme.colors.blue400};
        transform: scale(1.05);
        box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
    }

    &:checked {
        background: ${getBackgroundColor};
        border-color: ${getBorderColor};
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }

    &:focus:checked {
        box-shadow:
            0 0 0 3px rgba(59, 130, 246, 0.2),
            0 4px 12px rgba(59, 130, 246, 0.3);
    }
`;

export const CheckBoxLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    span {
        font-size: ${({ theme }) => theme.fontSizes.md};
        color: ${({ theme }) => theme.colors.gray700};
        font-weight: 500;
        transition: color 0.2s ease;
        line-height: 1.4;
    }

    &:hover span {
        color: ${({ theme }) => theme.colors.gray900};
    }
`;

export const CheckIcon = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    color: ${getIconColor};
    z-index: 1;

    ${({ $size = 'md' }) => checkIconStyles[$size] || checkIconStyles.md}

    input:checked ~ & {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
`;

export const CheckPath = styled.path`
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    transition: stroke-dashoffset 0.3s ease;

    input:checked ~ svg & {
        animation: ${drawCheck} 0.4s ease forwards;
    }
`;
