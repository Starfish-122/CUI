import styled from 'styled-components';
import { flexCenter } from '@/styles/mixins';

export const SearchBarContainer = styled.div`
    ${flexCenter};
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    background: ${({ theme }) => theme.colors.light900};
`;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    flex: 1;
    font-size: ${({ theme }) => theme.fontSizes.md};
    background: transparent;
`;

export const SearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-left: ${({ theme }) => theme.spacing.xs};
`;
