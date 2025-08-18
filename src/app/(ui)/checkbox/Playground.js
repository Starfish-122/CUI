'use client';

import { useState } from 'react';
import CheckBox from '@/components/base/checkBox';
import Frame from '@/components/base/Playground/Frame';

const CheckBoxPlayground = () => {
    const [controls, setControls] = useState({
        children: '체크박스',
        $variant: 'default',
        $size: 'md',
        disabled: false,
        checked: false,
    });

    const handleControlChange = (key, value) => {
        setControls((prev) => ({ ...prev, [key]: value }));
    };

    const handleCheckboxChange = (event) => {
        handleControlChange('checked', event.target.checked);
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

        return `<CheckBox ${props} />`;
    };

    const handleReset = () => {
        setControls({
            children: '체크박스',
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
                <ControlLabel>체크박스 라벨</ControlLabel>
                <ControlInput
                    type="text"
                    value={controls.children}
                    onChange={(e) => onControlChange('children', e.target.value)}
                    placeholder="체크박스 라벨을 입력하세요"
                />
            </ControlGroup>

            <ControlGroup>
                <ControlLabel>체크박스 타입</ControlLabel>
                <ControlSelect
                    value={controls.$variant}
                    onChange={(e) => onControlChange('$variant', e.target.value)}
                >
                    <option value="default">Default</option>
                    <option value="secondary">Secondary</option>
                    <option value="outline">Outline</option>
                    <option value="filled">Filled</option>
                    <option value="primary">Primary</option>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                </ControlSelect>
            </ControlGroup>

            <ControlGroup>
                <ControlLabel>체크박스 크기</ControlLabel>
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
        <CheckBox
            id="preview-checkbox"
            name="preview"
            $variant={controls.$variant}
            $size={controls.$size}
            disabled={controls.disabled}
            checked={controls.checked}
            onChange={handleCheckboxChange}
        >
            {controls.children}
        </CheckBox>
    );

    return (
        <Frame
            title="CheckBox Playground"
            controls={controls}
            onControlChange={handleControlChange}
            onReset={handleReset}
            generateCode={generateCode}
            renderPreview={renderPreview}
            renderControls={renderControls}
        />
    );
};

export default CheckBoxPlayground;
