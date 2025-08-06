'use client';

import { useState } from 'react';
import { useTheme } from 'styled-components';
import Icon from '@/components/base/icon';
import Button from '@/components/base/button';
import CheckBox from '@/components/base/checkBox';
import ColorPalette from './ColorPalette';
import {
    PlaygroundContainer,
    PlaygroundHeader,
    PlaygroundTitle,
    HeaderActions,
    ActionButton,
    PlaygroundContent,
    PlaygroundSidebar,
    SidebarSection,
    SidebarTitle,
    PlaygroundMain,
    PlaygroundPreview,
    PreviewTitle,
    PlaygroundCode,
    CodeHeader,
    CodeTitle,
    CopyButton,
    ControlGroup,
    ControlLabel,
    ControlInput,
    ControlSelect,
} from './styles';

const ButtonPlayground = () => {
    const theme = useTheme();
    const [controls, setControls] = useState({
        text: '버튼',
        $variant: 'default',
        $bgColor: '',
        $size: 'md',
        disabled: false,
        $fullWidth: false,
    });
    const [copied, setCopied] = useState(false);

    // theme에서 색상 정보를 가져와서 사용
    const getThemeColors = () => {
        return [
            { name: 'primary', value: theme?.colors?.primary || '#1976d2' },
            { name: 'secondary', value: theme?.colors?.secondary || '#6c757d' },
            { name: 'success', value: theme?.colors?.success || '#22c55e' },
            { name: 'warning', value: theme?.colors?.warning || '#f59e0b' },
            { name: 'error', value: theme?.colors?.error || '#ef4444' },
        ];
    };

    const handleControlChange = (key, value) => {
        setControls((prev) => ({ ...prev, [key]: value }));
    };

    const handleColorSelect = (color) => {
        if (controls.$bgColor === color) {
            handleControlChange('$bgColor', '');
        } else {
            handleControlChange('$bgColor', color);
        }
    };

    const generateCode = () => {
        const props = Object.entries(controls)
            .map(([key, value]) => {
                if (typeof value === 'string') {
                    if (value === '') return ''; // 빈 문자열은 제외
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

    const handleCopyCode = async () => {
        try {
            await navigator.clipboard.writeText(generateCode());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('코드 복사 실패:', err);
        }
    };

    const handleReset = () => {
        setControls({
            text: '버튼',
            $variant: 'default',
            $bgColor: '',
            $size: 'md',
            disabled: false,
            $fullWidth: false,
        });
    };

    return (
        <PlaygroundContainer>
            <PlaygroundHeader>
                <PlaygroundTitle>Button Playground</PlaygroundTitle>
                <HeaderActions>
                    <ActionButton onClick={handleReset}>
                        <Icon name="refresh" size="sm" />
                        초기화
                    </ActionButton>
                </HeaderActions>
            </PlaygroundHeader>

            <PlaygroundContent>
                <PlaygroundSidebar>
                    <SidebarSection>
                        <ControlGroup>
                            <ControlLabel>버튼 내용</ControlLabel>
                            <ControlInput
                                type="text"
                                value={controls.text}
                                onChange={(e) => handleControlChange('text', e.target.value)}
                                placeholder="버튼 텍스트를 입력하세요"
                            />
                        </ControlGroup>

                        <ControlGroup>
                            <ControlLabel>버튼 타입</ControlLabel>
                            <ControlSelect
                                value={controls.$variant}
                                onChange={(e) => handleControlChange('$variant', e.target.value)}
                            >
                                <option value="default">Default</option>
                                <option value="filled">Filled</option>
                                <option value="outline">Outline</option>
                                <option value="text">Text</option>
                            </ControlSelect>
                        </ControlGroup>

                        <ColorPalette
                            colors={getThemeColors()}
                            selectedColor={controls.$bgColor}
                            onColorSelect={handleColorSelect}
                            label="버튼 색상"
                        />

                        <ControlGroup>
                            <ControlLabel>버튼 크기</ControlLabel>
                            <ControlSelect
                                value={controls.$size}
                                onChange={(e) => handleControlChange('$size', e.target.value)}
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
                                onChange={(e) => handleControlChange('disabled', e.target.checked)}
                            >
                                비활성화
                            </CheckBox>
                        </ControlGroup>

                        <ControlGroup>
                            <CheckBox
                                id="pl-fullWidth"
                                name="fullWidth"
                                checked={controls.$fullWidth}
                                onChange={(e) =>
                                    handleControlChange('$fullWidth', e.target.checked)
                                }
                            >
                                전체 너비(100%)
                            </CheckBox>
                        </ControlGroup>
                    </SidebarSection>
                </PlaygroundSidebar>

                <PlaygroundMain>
                    <PlaygroundPreview>
                        <PreviewTitle>미리보기</PreviewTitle>

                        <Button
                            $variant={controls.$variant}
                            $bgColor={controls.$bgColor || undefined}
                            $size={controls.$size}
                            disabled={controls.disabled}
                            $fullWidth={controls.$fullWidth}
                        >
                            {controls.text}
                        </Button>
                    </PlaygroundPreview>
                </PlaygroundMain>
            </PlaygroundContent>

            <PlaygroundCode>
                <CodeHeader>
                    <CodeTitle>생성된 코드</CodeTitle>
                    <CopyButton onClick={handleCopyCode}>{copied ? '복사됨!' : '복사'}</CopyButton>
                </CodeHeader>
                <pre>{generateCode()}</pre>
            </PlaygroundCode>
        </PlaygroundContainer>
    );
};

export default ButtonPlayground;
