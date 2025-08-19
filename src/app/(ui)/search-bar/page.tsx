'use client';
import { useState } from 'react';
import SearchBar from '@/components/common/searchBar';
import UILayout from '@/components/templates/UILayout/UILayout';
import SectionTitle from '@/components/utils/SectionTitle';
import Icon from '@/components/base/icon';
import CodeBlock from '@/components/utils/CodeBlock';
import {
    basicCode,
    controlledCode,
    withIconCode,
    disabledCode,
    customStyleCode,
    eventHandlingCode,
    searchBarProps,
} from './data';
import PropsTable from '@/components/utils/PropsTable';
import { SearchContainer, SearchResult, DemoSection } from './styles';

export default function SearchBarPage(): React.JSX.Element {
    const [value, setValue] = useState<string>('');
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    const handleSearch = (searchValue: string) => {
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
            <SectionTitle>사용법</SectionTitle>
            <CodeBlock code={basicCode} language="jsx" title="Basic Usage" />

            <SectionTitle>기본 검색바</SectionTitle>
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

            <SectionTitle>제어된 검색바</SectionTitle>
            <CodeBlock code={controlledCode} language="jsx" title="Controlled Component" />

            <SectionTitle>아이콘과 함께 사용</SectionTitle>
            <CodeBlock code={withIconCode} language="jsx" title="With Icon" />

            <SectionTitle>비활성화 상태</SectionTitle>
            <CodeBlock code={disabledCode} language="jsx" title="Disabled State" />

            <SectionTitle>커스텀 스타일</SectionTitle>
            <CodeBlock code={customStyleCode} language="jsx" title="Custom Styling" />

            <SectionTitle>이벤트 처리</SectionTitle>
            <CodeBlock code={eventHandlingCode} language="jsx" title="Event Handling" />

            <DemoSection>
                <SectionTitle>최근 검색어</SectionTitle>
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

            <SectionTitle>Props</SectionTitle>
            <PropsTable props={searchBarProps} />
        </UILayout>
    );
}
