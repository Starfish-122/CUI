'use client';

import { useState } from 'react';
import Switch from '@/components/base/switch/Switch';
import CheckBox from '@/components/base/checkBox';
import Frame from '@/components/utils/Playground/Frame';

const SwitchPlayground = () => {
    const [controls, setControls] = useState({
        label: '스위치',
        $variant: 'default',
        $size: 'md',
        disabled: false,
        checked: false,
    });

    const handleControlChange = (key, value) => {
        setControls((prev) => ({ ...prev, [key]: value }));
    };

    const handleSwitchChange = (event, checked) => {
        handleControlChange('checked', checked);
    };

    const generateCode = () => {
        const props = Object.entries(controls)
            .map(([key, value]) => {
                if (typeof value === 'string') {
                    if (value === '') return '';
                    return `${key}="${value}"`;
                } else if (typeof value === 'boolean') {
                    return value ? key : '';
                }
                return `${key}={${JSON.stringify(value)}}`;
            })
            .filter(Boolean)
            .join(' ');

        return `<Switch ${props} />`;
    };

    const handleReset = () => {
        setControls({
            label: '스위치',
            $variant: 'default',
            $size: 'md',
            disabled: false,
            checked: false,
        });
    };

    const renderControls = ({
        controls,
        onControlChange,
        ControlGroup,
        ControlLabel,
        ControlInput,
        ControlSelect,
    }) => (
        <>
            <ControlGroup>
                <ControlLabel>스위치 라벨</ControlLabel>
                <ControlInput
                    type="text"
                    value={controls.label}
                    onChange={(e) => onControlChange('label', e.target.value)}
                    placeholder="스위치 라벨을 입력하세요"
                />
            </ControlGroup>

            <ControlGroup>
                <ControlLabel>스위치 타입</ControlLabel>
                <ControlSelect
                    value={controls.$variant}
                    onChange={(e) => onControlChange('$variant', e.target.value)}
                >
                    <option value="default">Default</option>
                    <option value="primary">Primary</option>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                </ControlSelect>
            </ControlGroup>

            <ControlGroup>
                <ControlLabel>스위치 크기</ControlLabel>
                <ControlSelect
                    value={controls.$size}
                    onChange={(e) => onControlChange('$size', e.target.value)}
                >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </ControlSelect>
            </ControlGroup>

            <ControlGroup>
                <CheckBox
                    type="checkbox"
                    id="pl-disabled"
                    name="disabled"
                    checked={controls.disabled}
                    onChange={(e) => onControlChange('disabled', e.target.checked)}
                >
                    비활성화
                </CheckBox>
            </ControlGroup>

            <ControlGroup>
                <CheckBox
                    id="pl-checked"
                    name="checked"
                    checked={controls.checked}
                    onChange={(e) => onControlChange('checked', e.target.checked)}
                >
                    체크 상태
                </CheckBox>
            </ControlGroup>
        </>
    );

    const renderPreview = (controls) => (
        <Switch
            label={controls.label}
            $variant={controls.$variant}
            $size={controls.$size}
            disabled={controls.disabled}
            checked={controls.checked}
            onChange={handleSwitchChange}
        />
    );

    return (
        <Frame
            title="Switch Playground"
            controls={controls}
            onControlChange={handleControlChange}
            onReset={handleReset}
            generateCode={generateCode}
            renderPreview={renderPreview}
            renderControls={renderControls}
        />
    );
};

export default SwitchPlayground;
