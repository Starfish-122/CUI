import styled from 'styled-components';

export const CopyBtn = styled.button`
    background: ${({ theme }) => theme.colors.blue400};
    color: ${({ theme }) => theme.colors.light900};
    border: none;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover,
    &:active {
        background: ${({ theme }) => theme.colors.blue500};
    }
`;
