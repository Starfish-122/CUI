import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '@/styles/mixins';
import Icon from '@/components/base/icon';

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

export default function SearchBar({ value, onChange, placeholder }) {
    return (
        <>
            <SearchBarContainer>
                <SearchInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder || '검색어를 입력하세요'}
                />
                <SearchButton type="submit">
                    <Icon name="search" size="md" filled />
                </SearchButton>
            </SearchBarContainer>
        </>
    );
}
