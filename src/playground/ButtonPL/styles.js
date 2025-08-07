import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { toRem } from '@/styles/utils';
import { CodeBlockContainer } from '@/components/base/CodeBlock/styles';

export const PlaygroundContainer = styled.div`
    background: ${({ theme }) => theme.colors.light900};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const PlaygroundHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
    background: ${({ theme }) => theme.colors.gray50};
`;

export const PlaygroundTitle = styled.h3`
    color: ${({ theme }) => theme.colors.gray800};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export const HeaderActions = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export const ActionButton = styled.button`
    background: ${({ theme }) => theme.colors.purple500};
    color: ${({ theme }) => theme.colors.black300};
    border: none;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.fast};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};

    &:hover {
        background: ${({ theme }) => theme.colors.purple600};
    }
`;

export const PlaygroundContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* min-height: 400px; */
`;

export const PlaygroundSidebar = styled.div`
    flex: 1;
    min-width: ${toRem(200)};
    border-right: 1px solid ${({ theme }) => theme.colors.gray200};
    background: ${({ theme }) => theme.colors.gray50};
    /* overflow-y: auto; */
    padding: ${({ theme }) => theme.spacing.lg};
`;

export const SidebarSection = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const PlaygroundMain = styled.div`
    flex: 1;
    min-width: 70%;
    display: flex;
    flex-direction: column;
`;

export const PlaygroundPreview = styled.div`
    flex: 1;
    padding: ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.light900};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.gray200}; */
    gap: ${({ theme }) => theme.spacing.lg};
`;

export const PreviewTitle = styled.p`
    color: ${({ theme }) => theme.colors.gray700};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
    margin: 0;
    text-align: center;
`;

export const PlaygroundCode = styled(CodeBlockContainer)`
    margin: ${({ theme }) => theme.spacing.lg};
    box-shadow: none;

    /* height: 180px;    
    overflow-y: auto;
    position: relative;
    */
`;

export const CodeTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
`;

export const ControlGroup = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

// export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
//     margin: 0;
//     border-radius: 0;
//     font-size: ${({ theme }) => theme.fontSizes.sm};
//     line-height: 1.5;
// `;

export const ControlLabel = styled.label`
    display: block;
    color: ${({ theme }) => theme.colors.gray700};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ControlInput = styled.input`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.spacing.xs};

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.purple400};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple100};
    }
`;

export const ControlSelect = styled.select`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    background: ${({ theme }) => theme.colors.light900};

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.purple400};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple100};
    }
`;

export const ColorSwatch = styled.button`
    width: ${toRem(40)};
    height: ${toRem(40)};
    border: 1px solid ${(props) => (props.$isSelected ? props.$color : '#e0e0e0')};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    &::before {
        content: '';
        width: ${toRem(24)};
        height: ${toRem(24)};
        border-radius: 50%;
        background-color: ${(props) => props.$color};
    }
`;

export const ColorContianer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${toRem(8)};
    margin-top: ${toRem(8)};
`;

export const ColorPaletteContainer = styled.div`
    margin-bottom: ${toRem(16)};
    position: relative;
`;

export const ColorPaletteLabel = styled.label`
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray800};
    margin-bottom: ${toRem(8)};
`;

export const ColorPickerContainer = styled.div`
    display: inline-block;
`;

/**
 * @typedef {Object} ColorPickerButtonProps
 * @property {string} [$color] - 버튼 배경색
 */

/** @type {import('styled-components').StyledComponent<'button', any, { $color?: string }>} */
export const ColorPickerButton = styled.button`
    width: ${toRem(40)};
    height: ${toRem(40)};
    border: 1px solid #e0e0e0;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background: ${(props) => props.$color || 'white'};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    &::before {
        content: '';
        width: ${toRem(20)};
        height: ${toRem(20)};
        background: conic-gradient(
            from 0deg,
            #ff0000,
            #ff8000,
            #ffff00,
            #80ff00,
            #00ff00,
            #00ff80,
            #00ffff,
            #0080ff,
            #0000ff,
            #8000ff,
            #ff00ff,
            #ff0080,
            #ff0000
        );
        border-radius: 50%;
        mask: radial-gradient(circle at center, transparent 30%, black 30%);
        -webkit-mask: radial-gradient(circle at center, transparent 30%, black 30%);
    }
`;

export const ColorPickerPopup = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${toRem(16)};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: ${toRem(200)};
    margin-top: ${toRem(8)};
`;

export const ColorPickerOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
`;

export const SaturationLightnessArea = styled.div`
    width: 100%;
    height: ${toRem(120)};
    background:
        linear-gradient(to right, white, ${(props) => props.$hueColor}),
        linear-gradient(to top, black, transparent);
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    position: relative;
    cursor: crosshair;
    margin-bottom: ${toRem(12)};
    user-select: none;
    background-blend-mode: multiply;
`;

export const SaturationLightnessHandle = styled.div`
    position: absolute;
    width: ${toRem(12)};
    height: ${toRem(12)};
    border: 2px solid white;
    border-radius: 50%;
    background: ${(props) => props.$color};
    transform: translate(-50%, -50%);
    cursor: crosshair;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    pointer-events: none;
`;

export const HueSlider = styled.div`
    width: 100%;
    height: ${toRem(20)};
    background: linear-gradient(
        to right,
        #ff0000,
        #ff8000,
        #ffff00,
        #80ff00,
        #00ff00,
        #00ff80,
        #00ffff,
        #0080ff,
        #0000ff,
        #8000ff,
        #ff00ff,
        #ff0080,
        #ff0000
    );
    border-radius: ${toRem(10)};
    position: relative;
    cursor: pointer;
    margin-bottom: ${toRem(12)};
    user-select: none;
`;

export const HueHandle = styled.div`
    position: absolute;
    width: ${toRem(16)};
    height: ${toRem(16)};
    background: white;
    border: 2px solid #333;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: ${(props) => props.$position}%;
    cursor: pointer;
    pointer-events: none;
`;

export const LightnessSlider = styled.div`
    width: 100%;
    height: ${toRem(20)};
    background: linear-gradient(to right, black, ${(props) => props.$hueColor}, white);
    border-radius: ${toRem(10)};
    position: relative;
    cursor: pointer;
    margin-bottom: ${toRem(12)};
    user-select: none;
`;

export const LightnessHandle = styled.div`
    position: absolute;
    width: ${toRem(16)};
    height: ${toRem(16)};
    background: white;
    border: 2px solid #333;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: ${(props) => props.$position}%;
    cursor: pointer;
    pointer-events: none;
`;

export const ColorPreview = styled.div`
    width: ${toRem(40)};
    height: ${toRem(40)};
    background: ${(props) => props.$color};
    border: 1px solid #e0e0e0;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    margin-bottom: ${toRem(12)};
`;

export const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${toRem(12)};
    margin-bottom: ${toRem(12)};
`;

export const SliderGroup = styled.div`
    flex: 1;
`;

export const HexInput = styled.input`
    width: 100%;
    padding: ${toRem(8)};
    border: 1px solid #e0e0e0;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-family: monospace;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-align: center;
`;
