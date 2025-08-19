'use client';

import { useState } from 'react';
import CheckBox from '@/components/base/checkBox';
import Frame from '@/components/utils/Playground/Frame';

interface CheckBoxControls {
    children: string;
    $variant: string;
    $size: string;
    disabled: boolean;
    checked: boolean;
}

interface RenderControlsProps {
    controls: any;
    onControlChange: (key: string, value: any) => void;
    handleColorSelect: (color: string, colorKey: string) => void;
    themeColors: any[];
    ControlGroup: React.ComponentType<{ children: React.ReactNode }>;
    ControlLabel: React.ComponentType<{ children: React.ReactNode }>;
    ControlInput: React.ComponentType<{
        type: string;
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        placeholder: string;
    }>;
    ControlSelect: React.ComponentType<{
        value: string;
        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
        children: React.ReactNode;
    }>;
    ColorPalette: any;
}

const CheckBoxPlayground = (): React.JSX.Element => {
    const [controls, setControls] = useState<CheckBoxControls>({
        children: '체크박스',
        $variant: 'default',
        $size: 'md',
        disabled: false,
        checked: false,
    });

    const handleControlChange = (key: string, value: any): void => {
        setControls((prev) => ({ ...prev, [key]: value }));
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        handleControlChange('checked', event.target.checked);
    };

    const generateCode = (): string => {
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

    const handleReset = (): void => {
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
    }: RenderControlsProps): React.JSX.Element => (
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

    const renderPreview = (controls: CheckBoxControls): React.JSX.Element => (
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
