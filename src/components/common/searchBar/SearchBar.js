import React from 'react';
import '@/components/common/searchBar/SearchBar.scss';

export default function SearchBar({ value, onChange, placeholder }) {
    return (
        <div className="search-bar">
            <input
                className="search-bar__input"
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder || '검색어를 입력하세요'}
            />
            <button className="search-bar__button" type="submit">
                🔍
            </button>
        </div>
    );
}
