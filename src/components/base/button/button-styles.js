import styled, { css } from 'styled-components';
import { toRem } from '@/styles/utils';
import { inlineFlex, flexCenter, flexBetween } from '@/styles/mixins';

const baseButtonStyles = css`
    ${inlineFlex}
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-weight: 500;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.short};
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    i {
        margin-right: ${({ theme }) => theme.spacing.sm};
        font-style: normal;
    }
`;

const variantStyles = {
    primary: css`
        background-color: ${({ theme }) => theme.colors.blue600};
        color: ${({ theme }) => theme.colors.light900};
        border: none;

        &:hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.blue600}cc;
        }
    `,

    secondary: css`
        background-color: ${({ theme }) => theme.colors.blue700};
        color: ${({ theme }) => theme.colors.light900};
        border: none;

        &:hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.blue700}cc;
        }
    `,

    outline: css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.black900700};
        border: 1px solid ${({ theme }) => theme.colors.blue500};

        &:hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.blue500};
        }
    `,
};

const sizeStyles = {
    sm: css`
        padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
        font-size: ${({ theme }) => theme.fontSizes.sm};
    `,

    md: css`
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
        font-size: ${({ theme }) => theme.fontSizes.md};
    `,

    lg: css`
        padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
        font-size: ${({ theme }) => theme.fontSizes.lg};
    `,
};

export const BasicButton = styled.button`
    ${baseButtonStyles}

    ${({ $variant = 'primary' }) => variantStyles[$variant] || variantStyles.primary}
  
    
    ${({ $size = 'md' }) => sizeStyles[$size] || sizeStyles.md}
    
    
    ${({ $bgColor }) =>
        $bgColor &&
        `
        background-color: ${$bgColor};
        &:hover:not(:disabled) {
            background-color: ${$bgColor}cc;
        }
    `}
    
    ${({ $textColor }) =>
        $textColor &&
        `
        color: ${$textColor};
    `}
`;
