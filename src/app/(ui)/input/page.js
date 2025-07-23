'use client';

import Radio from '@/components/base/radio';
import CheckBox from '@/components/base/checkBox';
import { useState } from 'react';

import UILayout from '@/components/templates/UILayout/UILayout';
import SectionTitle from '@/components/base/SectionTitle/SectionTitle';
import { SectionHeader, RadioGroup, RadioRow, ResultBox, StyledUIBox, CheckboxGrid } from './style';

// 라디오 데이터 정의
const RADIO_DATA = {
    fruits: [
        { id: 'apple', label: 'apple', variant: 'secondary' },
        { id: 'banana', label: '바나나', variant: 'blue400' },
        { id: 'orange', label: '오렌지' },
    ],
    styles: [
        { id: 'default', label: '기본 스타일' },
        { id: 'outline', label: '아웃라인 스타일', variant: 'outline' },
        { id: 'filled', label: '채워진 스타일', variant: 'filled' },
        { id: 'disabled', label: '비활성화 스타일', variant: 'disabled' },
    ],
    sizes: [
        { id: 'sm', label: '작은 크기', size: 'sm' },
        { id: 'md', label: '중간 크기', size: 'md' },
        { id: 'lg', label: '큰 크기', size: 'lg' },
    ],

    customColors: [
        {
            id: 'custom1',
            label: '배경 + 텍스트 1',
            size: 'lg',
            bgColor: '#FF6B6B',
            textColor: '#d8d6d5',
        },
        {
            id: 'custom2',
            label: '민트색 배경 + 자동 대비',
            size: 'lg',
            bgColor: '#4ECDC4',
        },
        {
            id: 'custom3',
            label: '배경 + 텍스트 2',
            size: 'lg',
            bgColor: '#45B7D1',
            textColor: '#45B7D1',
        },
        {
            id: 'custom4',
            label: '보라색 배경 + 자동 대비',
            size: 'lg',
            bgColor: '#A78BFA',
        },
        {
            id: 'custom5',
            label: '어두운 배경 + 텍스트',
            size: 'lg',
            bgColor: '#1F2937',
            textColor: '#A78BFA',
        },
        {
            id: 'custom6',
            label: '어두운 초록색 배경',
            size: 'lg',
            bgColor: '#059669',
        },
    ],
};

// 체크박스 데이터 정의
const CHECKBOX_DATA = {
    styles: [
        { id: 'default', label: '기본 스타일' },
        { id: 'outline', label: '아웃라인 스타일', variant: 'outline' },
        { id: 'filled', label: '채워진 스타일', variant: 'filled' },
        { id: 'disabled', label: '비활성화 스타일', variant: 'disabled' },
    ],
    sizes: [
        { id: 'sm', label: '작은 크기', size: 'sm' },
        { id: 'md', label: '중간 크기', size: 'md' },
        { id: 'lg', label: '큰 크기', size: 'lg' },
    ],
    customColors: [
        {
            id: 'custom1',
            label: '빨간색 배경 + 흰색 아이콘 (수동)',
            size: 'lg',
            bgColor: '#FF6B6B',
            textColor: '#FFFFFF',
        },
        {
            id: 'custom2',
            label: '민트색 배경 + 자동 대비 (밝기: 196)',
            size: 'lg',
            bgColor: '#4ECDC4',
        },
        {
            id: 'custom3',
            label: '파란색 배경 + 흰색 아이콘 (수동)',
            size: 'lg',
            bgColor: '#45B7D1',
            textColor: '#FFFFFF',
        },
        {
            id: 'custom4',
            label: '연한 초록색 배경 + 자동 대비 (밝기: 183)',
            size: 'lg',
            bgColor: '#96CEB4',
        },
        {
            id: 'custom5',
            label: '연한 노란색 배경 + 자동 대비 (밝기: 234)',
            size: 'lg',
            bgColor: '#FFEAA7',
        },
        {
            id: 'custom6',
            label: '연한 보라색 배경 + 자동 대비 (밝기: 200)',
            size: 'lg',
            bgColor: '#DDA0DD',
        },
        {
            id: 'dark1',
            label: '매우 어두운 회색 배경 (밝기: 31)',
            size: 'lg',
            bgColor: '#1F2937',
        },
        {
            id: 'dark2',
            label: '어두운 회색 배경 (밝기: 55)',
            size: 'lg',
            bgColor: '#374151',
        },
        {
            id: 'dark3',
            label: '어두운 초록색 배경 (밝기: 89)',
            size: 'lg',
            bgColor: '#059669',
        },
    ],
};

export default function InputPage() {
    // 상태 관리
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [selectedSize, setSelectedSize] = useState('md');
    const [selectedVariant, setSelectedVariant] = useState('default');

    // 체크박스 상태 초기화
    const initialCheckboxStates = Object.fromEntries(
        Object.values(CHECKBOX_DATA)
            .flat()
            .map((item) => [item.id, false])
    );
    const [checkboxStates, setCheckboxStates] = useState(initialCheckboxStates);

    // 이벤트 핸들러
    const handleCheckboxChange = (id) => {
        setCheckboxStates((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // 렌더링 함수들
    const renderCheckboxes = (checkboxList) => (
        <CheckboxGrid>
            {checkboxList.map(({ id, label, variant, size, bgColor, textColor }) => (
                <CheckBox
                    key={id}
                    id={`checkbox-${id}`}
                    name="checkbox"
                    checked={checkboxStates[id]}
                    onChange={() => handleCheckboxChange(id)}
                    $variant={variant}
                    $size={size}
                    $bgColor={bgColor}
                    $textColor={textColor}
                >
                    {label}
                </CheckBox>
            ))}
        </CheckboxGrid>
    );

    const renderRadioGroup = (data, selectedValue, onSelect, name) => (
        <RadioGroup>
            <RadioRow>
                {data.map(({ id, label, variant, size, bgColor, textColor }) => (
                    <Radio
                        key={id}
                        id={`${name}-${id}`}
                        name={name}
                        value={id}
                        checked={selectedValue === id}
                        onChange={() => onSelect(id)}
                        $variant={variant}
                        $size={size}
                        $bgColor={bgColor}
                        $textColor={textColor}
                    >
                        {label}
                    </Radio>
                ))}
            </RadioRow>
            <ResultBox>
                선택된 {name}: {selectedValue}
            </ResultBox>
        </RadioGroup>
    );

    return (
        <UILayout title="Input 컴포넌트 데모" subtitle="Radio와 Checkbox 컴포넌트를 확인해보세요">
            <SectionHeader>Radio 컴포넌트</SectionHeader>

            <SectionTitle>기본 라디오 버튼</SectionTitle>
            {renderRadioGroup(RADIO_DATA.styles, selectedVariant, setSelectedVariant, 'style')}

            <SectionTitle>크기</SectionTitle>
            {renderRadioGroup(RADIO_DATA.sizes, selectedSize, setSelectedSize, 'size')}

            <SectionTitle>커스텀 색상 </SectionTitle>
            <ResultBox style={{ marginBottom: '1rem' }}>
                배경색, 텍스트 색상($textColor를 지정하지 않으면 자동으로 대비 색상이 선택)
            </ResultBox>
            {renderRadioGroup(RADIO_DATA.customColors, selectedFruit, setSelectedFruit, 'custom')}

            <SectionHeader>Checkbox 컴포넌트</SectionHeader>

            <SectionTitle>기본 체크박스</SectionTitle>
            <StyledUIBox $variant="outline">{renderCheckboxes(CHECKBOX_DATA.styles)}</StyledUIBox>

            <SectionTitle>크기 </SectionTitle>
            <StyledUIBox $variant="outline">{renderCheckboxes(CHECKBOX_DATA.sizes)}</StyledUIBox>

            <SectionTitle>커스텀 색상 </SectionTitle>
            <ResultBox style={{ marginBottom: '1rem' }}>
                배경색, 텍스트 색상($textColor를 지정하지 않으면 자동으로 대비 색상이 선택)
            </ResultBox>
            <StyledUIBox $variant="outline">
                {renderCheckboxes(CHECKBOX_DATA.customColors)}
            </StyledUIBox>
        </UILayout>
    );
}
