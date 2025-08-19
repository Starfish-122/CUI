'use client';

import { useState } from 'react';
import Radio from '@/components/base/radio/Radio';
import CheckBox from '@/components/base/checkBox';
import Frame from '@/components/utils/Playground/Frame';

interface RadioControls {
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

const RadioPlayground = (): React.JSX.Element => {
    const [controls, setControls] = useState<RadioControls>({
        children: '라디오 버튼',
        $variant: 'default',
        $size: 'md',
        disabled: false,
        checked: false,
    });

    const handleControlChange = (key: string, value: any): void => {
        setControls((prev) => ({ ...prev, [key]: value }));
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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

        return `<Radio value="radio1" name="radio-group" id="radio1" ${props} />`;
    };

    const handleReset = (): void => {
        setControls({
            children: '라디오 버튼',
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
                <ControlLabel>라디오 버튼 라벨</ControlLabel>
                <ControlInput
                    type="text"
                    value={controls.children}
                    onChange={(e) => onControlChange('children', e.target.value)}
                    placeholder="라디오 버튼 라벨을 입력하세요"
                />
            </ControlGroup>

            <ControlGroup>
                <ControlLabel>라디오 버튼 타입</ControlLabel>
                <ControlSelect
                    value={controls.$variant}
                    onChange={(e) => onControlChange('$variant', e.target.value)}
                >
                    <option value="default">Default</option>
                    <option value="filled">Filled</option>
                </ControlSelect>
            </ControlGroup>

            <ControlGroup>
                <ControlLabel>라디오 버튼 크기</ControlLabel>
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

    const renderPreview = (controls: RadioControls): React.JSX.Element => (
        <Radio
            id="preview-radio"
            name="preview"
            value="preview"
            $variant={controls.$variant}
            $size={controls.$size as 'sm' | 'md' | 'lg'}
            disabled={controls.disabled}
            checked={controls.checked}
            onChange={handleRadioChange}
        >
            {controls.children}
        </Radio>
    );

    return (
        <Frame
            title="Radio Playground"
            controls={controls}
            onControlChange={handleControlChange}
            onReset={handleReset}
            generateCode={generateCode}
            renderPreview={renderPreview}
            renderControls={renderControls}
        />
    );
};

export default RadioPlayground;
