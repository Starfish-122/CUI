import { useState, useRef, useEffect } from 'react';

import {
    ColorPickerContainer,
    ColorPickerButton,
    ColorPickerOverlay,
    ColorPickerPopup,
    SaturationLightnessArea,
    SaturationLightnessHandle,
    HueSlider,
    HueHandle,
    LightnessSlider,
    LightnessHandle,
    HexInput,
    SliderContainer,
    SliderGroup,
    ColorPreview,
} from './styles';

interface ColorPickerProps {
    onColorChange: (color: string) => void;
    initialColor?: string;
}

type DragType = 'saturation' | 'hue' | 'lightness' | null;

const hexToHsl = (hex: string): { h: number; s: number; l: number } => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
};

const hslToHex = (h: number, s: number, l: number): string => {
    h /= 360;
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
    const m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;

    if (0 <= h && h < 1) {
        r = c;
        g = x;
        b = 0;
    } else if (1 <= h && h < 2) {
        r = x;
        g = c;
        b = 0;
    } else if (2 <= h && h < 3) {
        r = 0;
        g = c;
        b = x;
    } else if (3 <= h && h < 4) {
        r = 0;
        g = x;
        b = c;
    } else if (4 <= h && h < 5) {
        r = x;
        g = 0;
        b = c;
    } else if (5 <= h && h < 6) {
        r = c;
        g = 0;
        b = x;
    }

    const rHex = Math.round((r + m) * 255)
        .toString(16)
        .padStart(2, '0');
    const gHex = Math.round((g + m) * 255)
        .toString(16)
        .padStart(2, '0');
    const bHex = Math.round((b + m) * 255)
        .toString(16)
        .padStart(2, '0');

    return `#${rHex}${gHex}${bHex}`;
};

const ColorPicker = ({ onColorChange, initialColor = '#ffffff' }: ColorPickerProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [color, setColor] = useState<string>(initialColor);
    const [hue, setHue] = useState<number>(0);
    const [saturation, setSaturation] = useState<number>(0);
    const [lightness, setLightness] = useState<number>(100);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragType, setDragType] = useState<DragType>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    // 외부 클릭 감지
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;

            if (dragType === 'saturation') {
                const rect = document
                    .querySelector('[data-saturation-area]')
                    ?.getBoundingClientRect();
                if (rect) {
                    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

                    const newSaturation = x * 100;
                    const newLightness = (1 - y) * 100;

                    setSaturation(newSaturation);
                    setLightness(newLightness);

                    const newColor = hslToHex(hue, newSaturation, newLightness);
                    setColor(newColor);
                    onColorChange(newColor);
                }
            } else if (dragType === 'hue') {
                const rect = document.querySelector('[data-hue-slider]')?.getBoundingClientRect();
                if (rect) {
                    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                    const newHue = x * 360;

                    setHue(newHue);
                    const newColor = hslToHex(newHue, saturation, lightness);
                    setColor(newColor);
                    onColorChange(newColor);
                }
            } else if (dragType === 'lightness') {
                const rect = document
                    .querySelector('[data-lightness-slider]')
                    ?.getBoundingClientRect();
                if (rect) {
                    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                    const newLightness = x * 100;

                    setLightness(newLightness);
                    const newColor = hslToHex(hue, saturation, newLightness);
                    setColor(newColor);
                    onColorChange(newColor);
                }
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            setDragType(null);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragType, hue, saturation, lightness, onColorChange]);

    useEffect(() => {
        const hsl = hexToHsl(initialColor);
        setHue(hsl.h);
        setSaturation(hsl.s);
        setLightness(hsl.l);
        setColor(initialColor);
    }, [initialColor]);

    const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = e.target.value;
        if (/^#[0-9A-F]{6}$/i.test(newColor)) {
            setColor(newColor);
            const hsl = hexToHsl(newColor);
            setHue(hsl.h);
            setSaturation(hsl.s);
            setLightness(hsl.l);
            onColorChange(newColor);
        }
    };

    const handleSaturationMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragType('saturation');
        e.preventDefault();
    };

    const handleHueMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragType('hue');
        e.preventDefault();
    };

    const handleLightnessMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragType('lightness');
        e.preventDefault();
    };

    return (
        <ColorPickerContainer>
            <ColorPickerButton $color={color} onClick={() => setIsOpen(!isOpen)} type="button" />
            {isOpen && (
                <ColorPickerOverlay>
                    <ColorPickerPopup ref={popupRef}>
                        <ColorPreview $color={color} />
                        <HexInput value={color} onChange={handleHexChange} placeholder="#000000" />
                        <SliderContainer>
                            <SliderGroup>
                                <SaturationLightnessArea
                                    data-saturation-area
                                    $hue={hue}
                                    onMouseDown={handleSaturationMouseDown}
                                >
                                    <SaturationLightnessHandle
                                        $saturation={saturation}
                                        $lightness={lightness}
                                    />
                                </SaturationLightnessArea>
                            </SliderGroup>
                            <SliderGroup>
                                <HueSlider data-hue-slider onMouseDown={handleHueMouseDown}>
                                    <HueHandle $hue={hue} />
                                </HueSlider>
                            </SliderGroup>
                            <SliderGroup>
                                <LightnessSlider
                                    data-lightness-slider
                                    $hue={hue}
                                    $saturation={saturation}
                                    onMouseDown={handleLightnessMouseDown}
                                >
                                    <LightnessHandle $lightness={lightness} />
                                </LightnessSlider>
                            </SliderGroup>
                        </SliderContainer>
                    </ColorPickerPopup>
                </ColorPickerOverlay>
            )}
        </ColorPickerContainer>
    );
};

export default ColorPicker;
