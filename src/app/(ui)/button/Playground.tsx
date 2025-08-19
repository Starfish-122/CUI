'use client';

import { useState } from 'react';
import Button from '@/components/base/button/Button';
import CheckBox from '@/components/base/checkBox';
import Frame from '@/components/utils/Playground/Frame';

interface ButtonControls {
    children: string;
    $variant: string;
    $bgColor: string;
    $size: string;
    disabled: boolean;
    $fullWidth: boolean;
}

interface RenderControlsProps {
    controls: any;
    onControlChange: (key: string, value: any) => void;
    handleColorSelect: (color: string, key: string) => void;
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

const ButtonPlayground = (): React.JSX.Element => {
    const [controls, setControls] = useState<ButtonControls>({
        children: '버튼',
        $variant: 'filled',
        $bgColor: '',
        $size: 'md',
        disabled: false,
        $fullWidth: false,
    });

    const handleControlChange = (key: string, value: any): void => {
        setControls((prev) => ({ ...prev, [key]: value }));
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

        return `<Button ${props} />`;
    };

    const handleReset = (): void => {
        setControls({
            children: '버튼',
            $variant: 'filled',
            $bgColor: '',
            $size: 'md',
            disabled: false,
            $fullWidth: false,
        });
    };

    const renderControls = ({
        controls,
        onControlChange,
        handleColorSelect,
        themeColors,
        ControlGroup,
        ControlLabel,
        ControlInput,
        ControlSelect,
        ColorPalette,
    }: RenderControlsProps): React.JSX.Element => (
        <>
            <ControlGroup>
                <ControlLabel>버튼 내용</ControlLabel>
                <ControlInput
                    type="text"
                    value={controls.children}
                    onChange={(e) => onControlChange('children', e.target.value)}
                    placeholder="버튼 텍스트를 입력하세요"
                />
            </ControlGroup>

            <ControlGroup>
                <ControlLabel>버튼 타입</ControlLabel>
                <ControlSelect
                    value={controls.$variant}
                    onChange={(e) => onControlChange('$variant', e.target.value)}
                >
                    <option value="filled">Filled</option>
                    <option value="outline">Outline</option>
                    <option value="text">Text</option>
                </ControlSelect>
            </ControlGroup>

            <ColorPalette
                colors={themeColors}
                selectedColor={controls.$bgColor}
                onColorSelect={(color) => handleColorSelect(color, '$bgColor')}
                label="버튼 색상"
            />

            <ControlGroup>
                <ControlLabel>버튼 크기</ControlLabel>
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
                    id="pl-fullWidth"
                    name="fullWidth"
                    checked={controls.$fullWidth}
                    onChange={(e) => onControlChange('$fullWidth', e.target.checked)}
                >
                    전체 너비(100%)
                </CheckBox>
            </ControlGroup>
        </>
    );

    const renderPreview = (controls: ButtonControls): React.JSX.Element => (
        <Button
            $variant={controls.$variant}
            $bgColor={controls.$bgColor || undefined}
            $size={controls.$size}
            disabled={controls.disabled}
            $fullWidth={controls.$fullWidth}
        >
            {controls.children}
        </Button>
    );

    return (
        <Frame
            title="Button Playground"
            controls={controls}
            onControlChange={handleControlChange}
            onReset={handleReset}
            generateCode={generateCode}
            renderPreview={renderPreview}
            renderControls={renderControls}
        />
    );
};

export default ButtonPlayground;
