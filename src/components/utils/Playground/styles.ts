import styled from 'styled-components';
import { toRem } from '@/styles/utils';

interface ColorSwatchProps {
    $color: string;
    $isSelected: boolean;
}

interface ColorPickerButtonProps {
    $color: string;
}

interface ColorPreviewProps {
    $color: string;
}

interface SaturationLightnessAreaProps {
    $hue: number;
}

interface SaturationLightnessHandleProps {
    $saturation: number;
    $lightness: number;
}

interface HueHandleProps {
    $hue: number;
}

interface LightnessSliderProps {
    $hue: number;
    $saturation: number;
}

interface LightnessHandleProps {
    $lightness: number;
}

export const PlaygroundContainer = styled.div`
    background: ${({ theme }) => theme.colors.light900};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
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
    background: ${({ theme }) => theme.colors.gray100};
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
    background: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.light900};
    border: none;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.medium};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};

    &:hover {
        background: ${({ theme }) => theme.colors.blue600};
    }
`;

export const PlaygroundContent = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const PlaygroundSidebar = styled.div`
    flex: 1;
    min-width: ${toRem(200)};
    border-right: 1px solid ${({ theme }) => theme.colors.gray200};
    background: ${({ theme }) => theme.colors.gray100};
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
    gap: ${({ theme }) => theme.spacing.lg};
`;

export const PreviewTitle = styled.p`
    color: ${({ theme }) => theme.colors.gray700};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
    margin: 0;
`;

export const PlaygroundCode = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.gray200};
    background: ${({ theme }) => theme.colors.gray100};
`;

export const CodeTitle = styled.h4`
    color: ${({ theme }) => theme.colors.gray800};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 600;
    margin: 0;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

// 컨트롤 컴포넌트들
export const ControlGroup = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

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
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    background: ${({ theme }) => theme.colors.light900};

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.blue500};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue100};
    }
`;

export const ControlSelect = styled.select`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    background: ${({ theme }) => theme.colors.light900};
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.blue500};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue100};
    }
`;

// 색상 팔레트 컴포넌트들
export const ColorPaletteContainer = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ColorPaletteLabel = styled.label`
    display: block;
    color: ${({ theme }) => theme.colors.gray700};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ColorContianer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xs};
`;

export const ColorSwatch = styled.button<ColorSwatchProps>`
    width: ${toRem(32)};
    height: ${toRem(32)};
    border: 2px solid
        ${({ $isSelected, theme }) => ($isSelected ? theme.colors.blue500 : theme.colors.gray300)};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background-color: ${({ $color }) => $color};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.1);
        border-color: ${({ theme }) => theme.colors.blue400};
    }
`;

// 색상 선택기 컴포넌트들
export const ColorPickerContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const ColorPickerButton = styled.button<ColorPickerButtonProps>`
    width: ${toRem(32)};
    height: ${toRem(32)};
    border: 2px solid ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background-color: ${({ $color }) => $color};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors.blue400};
    }
`;

export const ColorPickerOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ColorPickerPopup = styled.div`
    background: ${({ theme }) => theme.colors.light900};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing.lg};
    box-shadow: ${({ theme }) => theme.shadows.xl};
    min-width: ${toRem(300)};
`;

export const ColorPreview = styled.div<ColorPreviewProps>`
    width: 100%;
    height: ${toRem(60)};
    background-color: ${({ $color }) => $color};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const HexInput = styled.input`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-family: monospace;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.md};

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.blue500};
    }
`;

export const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
`;

export const SliderGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
`;

export const SaturationLightnessArea = styled.div<SaturationLightnessAreaProps>`
    width: 100%;
    height: ${toRem(150)};
    background: linear-gradient(to right, white, hsl(${({ $hue }) => $hue}, 100%, 50%));
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    cursor: crosshair;
`;

export const SaturationLightnessHandle = styled.div<SaturationLightnessHandleProps>`
    position: absolute;
    width: ${toRem(12)};
    height: ${toRem(12)};
    border: 2px solid white;
    border-radius: 50%;
    background: hsl(${({ $saturation, $lightness }) => `${$saturation}%, ${$lightness}%`});
    left: ${({ $saturation }) => ($saturation / 100) * 100}%;
    top: ${({ $lightness }) => ((100 - $lightness) / 100) * 100}%;
    transform: translate(-50%, -50%);
    pointer-events: none;
`;

export const HueSlider = styled.div`
    width: 100%;
    height: ${toRem(20)};
    background: linear-gradient(
        to right,
        hsl(0, 100%, 50%),
        hsl(60, 100%, 50%),
        hsl(120, 100%, 50%),
        hsl(180, 100%, 50%),
        hsl(240, 100%, 50%),
        hsl(300, 100%, 50%),
        hsl(360, 100%, 50%)
    );
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    position: relative;
    cursor: pointer;
`;

export const HueHandle = styled.div<HueHandleProps>`
    position: absolute;
    width: ${toRem(20)};
    height: ${toRem(20)};
    border: 2px solid white;
    border-radius: 50%;
    background: hsl(${({ $hue }) => $hue}, 100%, 50%);
    left: ${({ $hue }) => ($hue / 360) * 100}%;
    transform: translateX(-50%);
    pointer-events: none;
`;

export const LightnessSlider = styled.div<LightnessSliderProps>`
    width: 100%;
    height: ${toRem(20)};
    background: linear-gradient(
        to right,
        hsl(${({ $hue, $saturation }) => `${$hue}, ${$saturation}%, 0%`}),
        hsl(${({ $hue, $saturation }) => `${$hue}, ${$saturation}%, 50%`}),
        hsl(${({ $hue, $saturation }) => `${$hue}, ${$saturation}%, 100%`})
    );
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    position: relative;
    cursor: pointer;
`;

export const LightnessHandle = styled.div<LightnessHandleProps>`
    position: absolute;
    width: ${toRem(20)};
    height: ${toRem(20)};
    border: 2px solid white;
    border-radius: 50%;
    background: hsl(${({ $lightness }) => `0, 0%, ${$lightness}%`});
    left: ${({ $lightness }) => ($lightness / 100) * 100}%;
    transform: translateX(-50%);
    pointer-events: none;
`;
