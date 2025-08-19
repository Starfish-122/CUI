'use client';

import { useState } from 'react';
import Switch from '@/components/base/switch/Switch';
import UILayout from '@/components/templates/UILayout/UILayout';
import Icon from '@/components/base/icon';
import SectionTitle from '@/components/utils/SectionTitle';
import CodeBlock from '@/components/utils/CodeBlock';
import SwitchPlayground from './Playground';
import { SectionHeader, SwitchContainer, SwitchRow, SwitchLabel, SwitchValue } from './styles';
import { importCode, variantCode, sizeCode, optionCode, eventCode, switchProps } from './data';
import PropsTable from '@/components/utils/PropsTable';

interface SwitchData {
    name: string;
    label: string;
    variant?: 'default' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    bgColor?: string;
    thumbColor?: string;
    initialValue: boolean;
}

interface SwitchGroupProps {
    switches: SwitchData[];
    switchStates: Record<string, boolean>;
    handleSwitchChange: (name: string) => (event: any, checked: boolean) => void;
}

// 스위치 데이터 정의
const SWITCH_DATA: {
    variants: SwitchData[];
    sizes: SwitchData[];
    special: SwitchData[];
} = {
    variants: [
        { name: 'default', label: '기본 스위치', initialValue: false },
        { name: 'success', label: 'Success 스위치', variant: 'success', initialValue: false },
        { name: 'warning', label: 'Warning 스위치', variant: 'warning', initialValue: true },
        { name: 'error', label: 'Error 스위치', variant: 'error', initialValue: false },
    ],
    sizes: [
        { name: 'small', label: '작은 스위치', size: 'sm', initialValue: false },
        { name: 'medium', label: '중간 스위치', size: 'md', initialValue: false },
        { name: 'large', label: '큰 스위치', size: 'lg', initialValue: true },
    ],
    special: [
        { name: 'disabled', label: '비활성화된 스위치', disabled: true, initialValue: true },
        {
            name: 'custom',
            label: '커스텀 색상 스위치',
            bgColor: '#9C27B0',
            thumbColor: '#FFFFFF',
            initialValue: false,
        },
    ],
};

/**
 * 스위치 그룹을 렌더링하는 컴포넌트
 */
const SwitchGroup: React.FC<SwitchGroupProps> = ({
    switches,
    switchStates,
    handleSwitchChange,
}) => (
    <SwitchContainer>
        {switches.map(({ name, label, variant, size, disabled, bgColor, thumbColor }) => (
            <SwitchRow key={name}>
                <Switch
                    $variant={variant}
                    $size={size}
                    $bgColor={bgColor}
                    $thumbColor={thumbColor}
                    checked={switchStates[name]}
                    onChange={handleSwitchChange(name)}
                    disabled={disabled}
                    label={label}
                />
                <SwitchValue>
                    {switchStates[name] ? (
                        <Icon color="red" name="lightbulb" />
                    ) : (
                        <Icon color="#ccc" name="light_off" />
                    )}
                </SwitchValue>
            </SwitchRow>
        ))}
    </SwitchContainer>
);

export default function SwitchPage(): React.JSX.Element {
    // 스위치 상태 초기화
    const initialSwitchStates: Record<string, boolean> = {
        default: false,
        success: false,
        warning: true,
        error: false,
        custom: false,
        disabled: true,
        small: false,
        medium: false,
        large: true,
    };

    const [switchStates, setSwitchStates] = useState<Record<string, boolean>>(initialSwitchStates);

    // 이벤트 핸들러
    const handleSwitchChange = (name: string) => (event: any, checked: boolean) => {
        setSwitchStates((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    return (
        <UILayout title="Switch 컴포넌트" subtitle="토글 스위치, 체크박스 대체">
            <SwitchPlayground />

            <SectionTitle>사용법</SectionTitle>
            <CodeBlock code={importCode} language="javascript" title="Import" />

            <SectionTitle>스위치 변형</SectionTitle>
            <SwitchGroup
                switches={SWITCH_DATA.variants.filter(
                    (item) => item.name === 'default' || item.name !== 'disabled'
                )}
                switchStates={switchStates}
                handleSwitchChange={handleSwitchChange}
            />
            <CodeBlock code={variantCode} language="jsx" title="Variants" />

            <SectionTitle>스위치 크기</SectionTitle>
            <SwitchGroup
                switches={SWITCH_DATA.sizes}
                switchStates={switchStates}
                handleSwitchChange={handleSwitchChange}
            />
            <CodeBlock code={sizeCode} language="jsx" title="Sizes" />

            <SectionTitle>스위치 옵션</SectionTitle>
            <SwitchGroup
                switches={SWITCH_DATA.special}
                switchStates={switchStates}
                handleSwitchChange={handleSwitchChange}
            />
            <CodeBlock code={optionCode} language="jsx" title="Options" />

            <SectionTitle>이벤트 처리</SectionTitle>
            <CodeBlock code={eventCode} language="jsx" title="Event Handling" />

            <SectionTitle>Props</SectionTitle>
            <PropsTable props={switchProps} title="Switch Props" />
        </UILayout>
    );
}
