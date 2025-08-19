interface SearchBarProp {
    name: string;
    default: string;
    type: string;
    description: string;
    options?: string[];
}

export const importCode: string = `import SearchBar from '@/components/common/searchBar';`;

export const basicCode: string = `<SearchBar 
    placeholder="검색어를 입력하세요"
    onSearch={(value) => console.log('검색:', value)}
/>`;

export const controlledCode: string = `const [searchValue, setSearchValue] = useState('');

const handleSearch = (value) => {
    console.log('검색 실행:', value);
    // 검색 로직 구현
};

<SearchBar 
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
    placeholder="제어된 검색바"
    onSearch={handleSearch}
/>`;

export const withIconCode: string = `<SearchBar 
    placeholder="아이콘이 있는 검색바"
    onSearch={(value) => console.log('검색:', value)}
/>`;

export const disabledCode: string = `<SearchBar 
    placeholder="비활성화된 검색바"
    onSearch={(value) => console.log('검색:', value)}
/>`;

export const customStyleCode: string = `<SearchBar 
    placeholder="커스텀 스타일 검색바"
    onSearch={(value) => console.log('검색:', value)}
/>`;

export const eventHandlingCode: string = `const [searchValue, setSearchValue] = useState('');
const [searchHistory, setSearchHistory] = useState([]);

const handleSearch = (value) => {
    if (value.trim()) {
        setSearchHistory(prev => [value, ...prev.slice(0, 4)]);
        console.log('검색 실행:', value);
    }
};

const handleChange = (e) => {
    setSearchValue(e.target.value);
    // 실시간 검색 로직
    if (e.target.value.length > 2) {
        console.log('실시간 검색:', e.target.value);
    }
};

<SearchBar 
    value={searchValue}
    onChange={handleChange}
    placeholder="이벤트 처리 예제"
    onSearch={handleSearch}
/>`;

export const searchBarProps: SearchBarProp[] = [
    {
        name: 'value',
        default: '-',
        type: 'String',
        description: '검색바의 현재 값 (제어 컴포넌트)',
    },
    {
        name: 'onChange',
        default: '-',
        type: 'Function',
        description: '값 변경 시 호출되는 콜백 함수',
    },
    {
        name: 'onSearch',
        default: '-',
        type: 'Function',
        description: '검색 실행 시 호출되는 콜백 함수 (Enter 키 또는 검색 버튼 클릭 시)',
    },
    {
        name: 'placeholder',
        default: '검색어를 입력하세요',
        type: 'String',
        description: '입력 필드의 플레이스홀더 텍스트',
    },
];
