'use client';
import { useState } from 'react';
import SearchBar from '@/components/common/searchBar';

export default function CardPage() {
    const [value, setValue] = useState('');
    return (
        <div>
            <h2 className="hero-title">SearchBar 컴포넌트</h2>

            <SearchBar
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="검색어를 입력하세요"
            />
        </div>
    );
}
