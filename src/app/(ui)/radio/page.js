'use client';

import { useState } from 'react';
import Radio from '@/components/base/radio';
import UILayout from '@/components/templates/UILayout/UILayout';
import SectionTitle from '@/components/base/SectionTitle/SectionTitle';
import { SectionHeader, RadioGroup, RadioRow, ResultBox } from './styles';
import RadioPlayground from '@/playground/RadioPL/RadioPlayground';

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

/**
 * 라디오 그룹을 렌더링하는 컴포넌트
 */
const RadioGroupComponent = ({ data, selectedValue, onSelect, name }) => (
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

export default function RadioPage() {
    // 상태 관리
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [selectedSize, setSelectedSize] = useState('md');
    const [selectedVariant, setSelectedVariant] = useState('default');

    return (
        <UILayout title="Radio 컴포넌트 가이드" subtitle="input type=radio">
            <RadioPlayground />
            <SectionTitle>기본 라디오 버튼</SectionTitle>
            <RadioGroupComponent
                data={RADIO_DATA.styles}
                selectedValue={selectedVariant}
                onSelect={setSelectedVariant}
                name="style"
            />

            <SectionTitle>크기</SectionTitle>
            <RadioGroupComponent
                data={RADIO_DATA.sizes}
                selectedValue={selectedSize}
                onSelect={setSelectedSize}
                name="size"
            />

            <SectionTitle>커스텀 색상</SectionTitle>
            <ResultBox style={{ marginBottom: '1rem' }}>
                배경색, 텍스트 색상($textColor를 지정하지 않으면 자동으로 대비 색상이 선택)
            </ResultBox>
            <RadioGroupComponent
                data={RADIO_DATA.customColors}
                selectedValue={selectedFruit}
                onSelect={setSelectedFruit}
                name="custom"
            />
        </UILayout>
    );
}
