'use client';

import { useState } from 'react';
import CheckBox from '@/components/base/checkBox';
import UILayout from '@/components/templates/UILayout/UILayout';
import SectionTitle from '@/components/utils/SectionTitle/SectionTitle';
import CodeBlock from '@/components/utils/CodeBlock';
import { SectionHeader, StyledUIBox, CheckboxGrid, ResultBox } from './styles';
import {
    importCode,
    variantCode,
    sizeCode,
    colorCode,
    eventCode,
    groupCode,
    checkboxProps,
} from './data';
import PropsTable from '@/components/utils/PropsTable';

interface CheckboxData {
    id: string;
    label: string;
    variant?: string;
    size?: string;
    bgColor?: string;
    textColor?: string;
}

interface CheckboxGroupProps {
    checkboxList: CheckboxData[];
    checkboxStates: Record<string, boolean>;
    handleCheckboxChange: (id: string) => void;
}

// 체크박스 데이터 정의
const CHECKBOX_DATA: {
    styles: CheckboxData[];
    sizes: CheckboxData[];
    customColors: CheckboxData[];
} = {
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

/**
 * 체크박스 그룹을 렌더링하는 컴포넌트
 */
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    checkboxList,
    checkboxStates,
    handleCheckboxChange,
}) => (
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

export default function CheckboxPage(): React.JSX.Element {
    // 체크박스 상태 초기화
    const initialCheckboxStates: Record<string, boolean> = Object.fromEntries(
        Object.values(CHECKBOX_DATA)
            .flat()
            .map((item) => [item.id, false])
    );
    const [checkboxStates, setCheckboxStates] =
        useState<Record<string, boolean>>(initialCheckboxStates);

    // 이벤트 핸들러
    const handleCheckboxChange = (id: string) => {
        setCheckboxStates((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <UILayout title="Checkbox 컴포넌트" subtitle="다중 선택 입력 요소">
            <SectionTitle>사용법</SectionTitle>
            <CodeBlock code={importCode} language="javascript" title="Import" />

            <SectionTitle>체크박스 변형</SectionTitle>
            <StyledUIBox $variant="outline">
                <CheckboxGroup
                    checkboxList={CHECKBOX_DATA.styles}
                    checkboxStates={checkboxStates}
                    handleCheckboxChange={handleCheckboxChange}
                />
            </StyledUIBox>
            <CodeBlock code={variantCode} language="jsx" title="Variants" />

            <SectionTitle>체크박스 크기</SectionTitle>
            <StyledUIBox $variant="outline">
                <CheckboxGroup
                    checkboxList={CHECKBOX_DATA.sizes}
                    checkboxStates={checkboxStates}
                    handleCheckboxChange={handleCheckboxChange}
                />
            </StyledUIBox>
            <CodeBlock code={sizeCode} language="jsx" title="Sizes" />

            <SectionTitle>커스텀 색상</SectionTitle>
            <ResultBox style={{ marginBottom: '1rem' }}>
                배경색, 텍스트 색상($textColor를 지정하지 않으면 자동으로 대비 색상이 선택)
            </ResultBox>
            <StyledUIBox $variant="outline">
                <CheckboxGroup
                    checkboxList={CHECKBOX_DATA.customColors.slice(0, 3)}
                    checkboxStates={checkboxStates}
                    handleCheckboxChange={handleCheckboxChange}
                />
            </StyledUIBox>
            <CodeBlock code={colorCode} language="jsx" title="Colors" />

            <SectionTitle>이벤트 처리</SectionTitle>
            <CodeBlock code={eventCode} language="jsx" title="Event Handling" />

            <SectionTitle>그룹 사용법</SectionTitle>
            <CodeBlock code={groupCode} language="jsx" title="Group Usage" />

            <SectionTitle>Props</SectionTitle>
            <PropsTable props={checkboxProps} />
        </UILayout>
    );
}
