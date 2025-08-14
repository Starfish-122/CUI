'use client';

import { useState } from 'react';
import Button from '@/components/base/button/Button';
import CheckBox from '@/components/base/checkBox';
import Frame from '@/components/base/Playground/Frame';

const ButtonPlayground = () => {
    const [controls, setControls] = useState({
        children: '버튼',
        $variant: 'filled',
        $bgColor: '',
        $size: 'md',
        disabled: false,
        $fullWidth: false,
    });

    const handleControlChange = (key, value) => {
        setControls((prev) => ({ ...prev, [key]: value }));
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

        return `<Button ${props} />`;
    };

    const handleReset = () => {
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
    }) => (
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

    const renderPreview = (controls) => (
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
