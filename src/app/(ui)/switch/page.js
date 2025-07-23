'use client';

import { useState } from 'react';
import Switch from '@/components/base/switch/Switch';
import UILayout from '@/components/templates/UILayout/UILayout';
import SectionTitle from '@/components/base/SectionTitle';
import { SectionHeader, SwitchContainer, SwitchRow, SwitchLabel, SwitchValue } from './styles';

// 스위치 데이터 정의
const SWITCH_DATA = {
    variants: [
        { name: 'default', label: '기본 스위치', initialValue: false },
        { name: 'primary', label: 'Primary 스위치', variant: 'primary', initialValue: true },
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
const SwitchGroup = ({ switches, switchStates, handleSwitchChange }) => (
    <SwitchContainer>
        {switches.map(({ name, label, variant, size, disabled, bgColor, thumbColor }) => (
            <SwitchRow key={name}>
                {/* <SwitchLabel>{label}:</SwitchLabel> */}
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
                <SwitchValue>{switchStates[name] ? 'ON' : 'OFF'}</SwitchValue>
            </SwitchRow>
        ))}
    </SwitchContainer>
);

export default function SwitchPage() {
    // 스위치 상태 초기화
    const initialSwitchStates = {
        default: false,
        primary: true,
        success: false,
        warning: true,
        error: false,
        custom: false,
        disabled: true,
        small: false,
        medium: false,
        large: true,
    };

    const [switchStates, setSwitchStates] = useState(initialSwitchStates);

    // 이벤트 핸들러
    const handleSwitchChange = (name) => (event, checked) => {
        setSwitchStates((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    return (
        <UILayout title="Switch 컴포넌트 가이드" subtitle="toggle, input type=checkbox">
            <SwitchGroup
                switches={SWITCH_DATA.variants.filter(
                    (item) => item.name === 'default' || item.name === 'disabled'
                )}
                switchStates={switchStates}
                handleSwitchChange={handleSwitchChange}
            />

            <SwitchGroup
                switches={SWITCH_DATA.variants.filter(
                    (item) => item.name !== 'default' && item.name !== 'disabled'
                )}
                switchStates={switchStates}
                handleSwitchChange={handleSwitchChange}
            />

            <SwitchGroup
                switches={SWITCH_DATA.sizes}
                switchStates={switchStates}
                handleSwitchChange={handleSwitchChange}
            />

            <SwitchGroup
                switches={SWITCH_DATA.special.filter((item) => item.name === 'custom')}
                switchStates={switchStates}
                handleSwitchChange={handleSwitchChange}
            />
        </UILayout>
    );
}
