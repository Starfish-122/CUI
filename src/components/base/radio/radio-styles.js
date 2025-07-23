import styled, { css } from 'styled-components';
import { toRem } from '@/styles/utils';

// 라디오 버튼 크기 스타일
const sizeStyles = {
    sm: css`
        width: ${toRem(14)};
        height: ${toRem(14)};
    `,
    md: css`
        width: ${toRem(18)};
        height: ${toRem(18)};
    `,
    lg: css`
        width: ${toRem(22)};
        height: ${toRem(22)};
    `,
};

// 색상 정의
const COLOR_VARIANTS = {
    outline: {
        border: 'blue500',
        background: 'light900',
        text: 'black500',
    },
    filled: {
        border: 'blue500',
        background: 'blue500',
        text: 'black500',
    },
    default: {
        border: 'gray500',
        background: 'gray500',
        text: 'black500',
    },
    disabled: {
        border: 'gray200',
        background: 'gray200',
        text: 'gray500',
    },
};

// 색상 계산 유틸리티 함수들
const getColor = ({ $bgColor, $textColor, $variant, theme, colorType }) => {
    // 커스텀 색상 우선
    if (colorType === 'background' && $bgColor) return $bgColor;
    if (colorType === 'text' && $textColor) return $textColor;

    // variant 색상
    const variant = COLOR_VARIANTS[$variant] || COLOR_VARIANTS.default;
    const colorKey = variant[colorType];

    return theme.colors[colorKey] || theme.colors.gray700;
};

const getBorderColor = (props) => getColor({ ...props, colorType: 'border' });
const getBackgroundColor = (props) => getColor({ ...props, colorType: 'background' });
const getTextColor = (props) => getColor({ ...props, colorType: 'text' });

// 비활성화 상태 체크
const isDisabled = ({ $variant, $disabled }) => $variant === 'disabled' || $disabled;

// 공통 스타일
const disabledStyles = css`
    cursor: not-allowed;
    opacity: 0.6;

    &:hover,
    &:focus {
        transform: none;
        box-shadow: none;
    }

    &:checked {
        transform: none;
        box-shadow: none;
    }

    &:focus:checked {
        box-shadow: none;
    }
`;

export const RadioContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-right: ${({ theme }) => theme.spacing.md};
    cursor: ${({ $variant, $disabled }) =>
        isDisabled({ $variant, $disabled }) ? 'not-allowed' : 'pointer'};
`;

export const RadioInput = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 2px solid ${({ theme }) => theme.colors.gray300};
    border-radius: 50%;
    margin: 0;
    cursor: ${({ $variant, $disabled }) =>
        isDisabled({ $variant, $disabled }) ? 'not-allowed' : 'pointer'};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    background: ${({ theme }) => theme.colors.light900};
    flex-shrink: 0;
    opacity: ${({ $variant, $disabled }) => (isDisabled({ $variant, $disabled }) ? 0.6 : 1)};

    ${({ $size = 'md' }) => sizeStyles[$size] || sizeStyles.md}

    &:hover, &:focus {
        outline: none;
        border-color: ${getBorderColor};
        transform: ${({ $variant, $disabled }) =>
            isDisabled({ $variant, $disabled }) ? 'none' : 'scale(1.05)'};
        box-shadow: ${({ $variant, $disabled, theme }) => {
            if (isDisabled({ $variant, $disabled })) return 'none';
            const borderColor = getBorderColor({ $variant, theme });
            return `0 0.5rem 0.5rem 0 ${borderColor}cc`;
        }};
    }

    &:checked {
        background-color: ${getBackgroundColor};
        border-width: 4px;
        border-color: ${getBorderColor};
        transform: ${({ $variant, $disabled }) =>
            isDisabled({ $variant, $disabled }) ? 'none' : 'scale(1.1)'};
        box-shadow: ${({ $variant, $disabled, theme }) =>
            isDisabled({ $variant, $disabled }) ? 'none' : theme.shadows.sm};
    }

    &:focus:checked {
        box-shadow: ${({ $variant, $disabled, theme }) => {
            if (isDisabled({ $variant, $disabled })) return 'none';
            const borderColor = getBorderColor({ $variant, theme });
            return `0 0 0 4px ${borderColor}33`;
        }};
    }

    &:disabled {
        ${disabledStyles}
    }
`;

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: ${({ $variant, $disabled }) =>
        isDisabled({ $variant, $disabled }) ? 'not-allowed' : 'pointer'};
    user-select: none;
    opacity: ${({ $variant, $disabled }) => (isDisabled({ $variant, $disabled }) ? 0.6 : 1)};

    span {
        margin-left: ${({ theme }) => theme.spacing.xs};
        font-size: ${({ theme }) => theme.fontSizes.md};
        color: ${getTextColor};
        font-weight: 500;
        transition: color 0.2s ease;
        line-height: 1.4;
    }

    &:hover span {
        color: ${({ $variant, $disabled, theme }) =>
            isDisabled({ $variant, $disabled })
                ? getTextColor({ $variant, theme })
                : theme.colors.gray900};
    }
`;
