'use client';

import { useState } from 'react';
import { useTheme } from 'styled-components';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Icon from '@/components/base/icon';
import CopyButton from '@/components/utils/CopyButton';
import ColorPalette from '@/components/utils/Playground/ColorPalette';
import {
    PlaygroundContainer,
    PlaygroundHeader,
    PlaygroundTitle,
    HeaderActions,
    ActionButton,
    PlaygroundContent,
    PlaygroundSidebar,
    SidebarSection,
    PlaygroundMain,
    PlaygroundPreview,
    PreviewTitle,
    PlaygroundCode,
    CodeTitle,
    ControlGroup,
    ControlLabel,
    ControlInput,
    ControlSelect,
} from '@/components/utils/Playground/styles';
import { CodeHeader, StyledSyntaxHighlighter } from '@/components/utils/CodeBlock/styles';

interface Control {
    [key: string]: any;
}

interface ThemeColor {
    name: string;
    value: string;
}

interface ControlComponents {
    ControlGroup: any;
    ControlLabel: any;
    ControlInput: any;
    ControlSelect: any;
    ColorPalette: any;
}

interface FrameProps {
    title?: string;
    controls: Control;
    onControlChange: (key: string, value: any) => void;
    onReset: () => void;
    generateCode: (controls: Control) => string;
    renderPreview: (controls: Control) => React.ReactNode;
    renderControls?: (props: {
        controls: Control;
        onControlChange: (key: string, value: any) => void;
        handleColorSelect: (color: string, colorKey: string) => void;
        themeColors: ThemeColor[];
        ControlGroup: any;
        ControlLabel: any;
        ControlInput: any;
        ControlSelect: any;
        ColorPalette: any;
    }) => React.ReactNode;
    getThemeColors?: () => ThemeColor[];
}

const Frame = ({
    title = 'Playground',
    controls,
    onControlChange,
    onReset,
    generateCode,
    renderPreview,
    renderControls,
    getThemeColors,
}: FrameProps) => {
    const theme = useTheme();

    const defaultGetThemeColors = (): ThemeColor[] => {
        return [
            { name: 'primary', value: theme?.colors?.primary || '#000000' },
            { name: 'secondary', value: theme?.colors?.secondary || '#000000' },
            { name: 'success', value: theme?.colors?.success || '#000000' },
            { name: 'warning', value: theme?.colors?.warning || '#000000' },
            { name: 'error', value: theme?.colors?.error || '#000000' },
        ];
    };

    const handleColorSelect = (color: string, colorKey: string): void => {
        if (controls[colorKey] === color) {
            onControlChange(colorKey, '');
        } else {
            onControlChange(colorKey, color);
        }
    };

    const themeColors = getThemeColors ? getThemeColors() : defaultGetThemeColors();

    return (
        <PlaygroundContainer>
            <PlaygroundHeader>
                <PlaygroundTitle>{title}</PlaygroundTitle>
                <HeaderActions>
                    <ActionButton onClick={onReset}>
                        <Icon name="refresh" size="sm" color="light900" />
                        초기화
                    </ActionButton>
                </HeaderActions>
            </PlaygroundHeader>

            <PlaygroundContent>
                <PlaygroundSidebar>
                    <SidebarSection>
                        {renderControls ? (
                            renderControls({
                                controls,
                                onControlChange,
                                handleColorSelect,
                                themeColors,
                                ControlGroup,
                                ControlLabel,
                                ControlInput,
                                ControlSelect,
                                ColorPalette,
                            })
                        ) : (
                            <div>컨트롤이 정의되지 않았습니다.</div>
                        )}
                    </SidebarSection>
                </PlaygroundSidebar>

                <PlaygroundMain>
                    <PlaygroundPreview>
                        <PreviewTitle>미리보기</PreviewTitle>
                        {renderPreview ? (
                            renderPreview(controls)
                        ) : (
                            <div>미리보기가 정의되지 않았습니다.</div>
                        )}
                    </PlaygroundPreview>

                    <PlaygroundCode>
                        <CodeTitle>코드</CodeTitle>
                        <CodeHeader>
                            <span>Generated Code</span>
                            <CopyButton text={generateCode(controls)} />
                        </CodeHeader>
                        <StyledSyntaxHighlighter
                            language="jsx"
                            style={tomorrow}
                            customStyle={{
                                padding: '1rem',
                                margin: 0,
                                fontSize: '0.875rem',
                            }}
                        >
                            {generateCode(controls)}
                        </StyledSyntaxHighlighter>
                    </PlaygroundCode>
                </PlaygroundMain>
            </PlaygroundContent>
        </PlaygroundContainer>
    );
};

export default Frame;
