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

const Frame = ({
    title = 'Playground',
    controls,
    onControlChange,
    onReset,
    generateCode,
    renderPreview,
    renderControls,
    getThemeColors,
}) => {
    const theme = useTheme();

    const defaultGetThemeColors = () => {
        return [
            { name: 'primary', value: theme?.colors?.primary },
            { name: 'secondary', value: theme?.colors?.secondary },
            { name: 'success', value: theme?.colors?.success },
            { name: 'warning', value: theme?.colors?.warning },
            { name: 'error', value: theme?.colors?.error },
        ];
    };

    const handleColorSelect = (color, colorKey) => {
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
                        <Icon name="refresh" size="sm" />
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
                </PlaygroundMain>
            </PlaygroundContent>

            <PlaygroundCode>
                <CodeHeader>
                    <CodeTitle>생성된 코드</CodeTitle>
                    <CopyButton text={generateCode()} />
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
                    {generateCode()}
                </StyledSyntaxHighlighter>
            </PlaygroundCode>
        </PlaygroundContainer>
    );
};

export default Frame;
