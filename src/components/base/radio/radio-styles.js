import styled, { css } from 'styled-components';
import { toRem } from '@/styles/utils';
import { inlineFlex, flexCenter, flexBetween } from '@/styles/mixins';

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

export const RadioContainer = styled.div`
    ${inlineFlex}
    ${flexCenter}
    position: relative;
    margin-right: ${({ theme }) => theme.spacing.md};
    cursor: pointer;
`;

export const RadioInput = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 2px solid
        ${({ theme, $variant }) =>
            $variant === 'primary' ? theme.colors.blue600 : theme.colors.gray600};
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    ${({ $size = 'md' }) => sizeStyles[$size] || sizeStyles.md}

    &:checked {
        background-color: white;
        border-width: 4px;

        ${({ theme, $variant = 'primary' }) =>
            $variant === 'primary'
                ? `border-color: ${theme.colors.blue600};`
                : `border-color: ${theme.colors.gray600};`}
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
`;

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
        margin-left: ${({ theme }) => theme.spacing.xs};
        font-size: ${({ theme }) => theme.fontSizes.md};
        color: ${({ theme }) => theme.colors.black600};
    }
`;
