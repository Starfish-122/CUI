'use client';
import { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '@/components/common/searchBar';
import UILayout from '@/components/templates/UILayout/UILayout';
import Icon from '@/components/base/icon';

const SearchContainer = styled.div`
    padding: ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.light900};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.md};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    transition: all ${({ theme }) => theme.transitions.medium};

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.lg};
        transform: translateY(-2px);
    }
`;

const SearchResult = styled.div`
    margin-top: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.md};
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.gray100} 0%,
        ${({ theme }) => theme.colors.light900} 100%
    );
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: 2px solid ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.gray700};
    font-weight: 500;
    text-align: center;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

const DemoSection = styled.div`
    margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const SectionTitle = styled.h3`
    color: ${({ theme }) => theme.colors.gray800};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export default function SearchBarPage() {
    const [value, setValue] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

    const handleSearch = (searchValue) => {
        if (searchValue.trim()) {
            setSearchHistory((prev) => [searchValue, ...prev.slice(0, 4)]);
        }
    };

    return (
        <UILayout
            title="SearchBar 컴포넌트"
            subtitle="실시간 검색 기능을 확인해보세요"
            icon={<Icon name="search" size="lg" filled color="#ffffff" />}
        >
            <SearchContainer>
                <SearchBar
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="검색어를 입력하세요"
                    onSearch={handleSearch}
                />

                {value && (
                    <SearchResult>
                        <Icon name="search" size="md" filled />
                        검색어: {value}
                    </SearchResult>
                )}
            </SearchContainer>

            <DemoSection>
                <SectionTitle>
                    <Icon name="history" size="md" />
                    최근 검색어
                </SectionTitle>
                <SearchContainer>
                    {searchHistory.length > 0 ? (
                        searchHistory.map((item, index) => (
                            <SearchResult key={index} style={{ marginBottom: '0.5rem' }}>
                                <Icon name="schedule" size="sm" />
                                {item}
                            </SearchResult>
                        ))
                    ) : (
                        <SearchResult>
                            <Icon name="search_off" size="lg" />
                            아직 검색 기록이 없습니다
                        </SearchResult>
                    )}
                </SearchContainer>
            </DemoSection>
        </UILayout>
    );
}
