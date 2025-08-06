import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { toRem } from '@/styles/utils';

const ColorPickerContainer = styled.div`
    display: inline-block;
`;

/**
 * @typedef {Object} ColorPickerButtonProps
 * @property {string} [$color] - 버튼 배경색
 */

/** @type {import('styled-components').StyledComponent<'button', any, { $color?: string }>} */
const ColorPickerButton = styled.button`
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

const ColorPickerPopup = styled.div`
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

const ColorPickerOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
`;

const SaturationLightnessArea = styled.div`
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

const SaturationLightnessHandle = styled.div`
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

const HueSlider = styled.div`
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

const HueHandle = styled.div`
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

const LightnessSlider = styled.div`
    width: 100%;
    height: ${toRem(20)};
    background: linear-gradient(to right, black, ${(props) => props.$hueColor}, white);
    border-radius: ${toRem(10)};
    position: relative;
    cursor: pointer;
    margin-bottom: ${toRem(12)};
    user-select: none;
`;

const LightnessHandle = styled.div`
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

const ColorPreview = styled.div`
    width: ${toRem(40)};
    height: ${toRem(40)};
    background: ${(props) => props.$color};
    border: 1px solid #e0e0e0;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    margin-bottom: ${toRem(12)};
`;

const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${toRem(12)};
    margin-bottom: ${toRem(12)};
`;

const SliderGroup = styled.div`
    flex: 1;
`;

const HexInput = styled.input`
    width: 100%;
    padding: ${toRem(8)};
    border: 1px solid #e0e0e0;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-family: monospace;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-align: center;
`;

const ColorPicker = ({ onColorChange, initialColor = '#ffffff' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState(initialColor);
    const [hue, setHue] = useState(0);
    const [saturation, setSaturation] = useState(0);
    const [lightness, setLightness] = useState(100);
    const [isDragging, setIsDragging] = useState(false);
    const [dragType, setDragType] = useState(null);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
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
        const handleMouseMove = (e) => {
            if (!isDragging) return;

            if (dragType === 'saturation') {
                const rect = document
                    .querySelector('[data-saturation-area]')
                    ?.getBoundingClientRect();
                if (rect) {
                    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

                    // x축: 채도 (0% ~ 100%)
                    // y축: 명도 (100% ~ 0%)
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

    const hexToHsl = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h,
            s,
            l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
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

        return [h * 360, s * 100, l * 100];
    };

    const hslToHex = (h, s, l) => {
        h /= 360;
        s /= 100;
        l /= 100;

        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        let r, g, b;
        if (s === 0) {
            r = g = b = l;
        } else {
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        const toHex = (c) => {
            const hex = Math.round(c * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };

        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const handleSaturationLightnessMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setDragType('saturation');

        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

        // x축: 채도 (0% ~ 100%)
        // y축: 명도 (100% ~ 0%)
        const newSaturation = x * 100;
        const newLightness = (1 - y) * 100;

        setSaturation(newSaturation);
        setLightness(newLightness);

        const newColor = hslToHex(hue, newSaturation, newLightness);
        setColor(newColor);
        onColorChange(newColor);
    };

    const handleHueMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setDragType('hue');

        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const newHue = x * 360;

        setHue(newHue);
        const newColor = hslToHex(newHue, saturation, lightness);
        setColor(newColor);
        onColorChange(newColor);
    };

    const handleLightnessMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setDragType('lightness');

        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const newLightness = x * 100;

        setLightness(newLightness);
        const newColor = hslToHex(hue, saturation, newLightness);
        setColor(newColor);
        onColorChange(newColor);
    };

    const handleHexChange = (e) => {
        const hex = e.target.value;
        if (/^#[0-9A-F]{6}$/i.test(hex)) {
            setColor(hex);
            const [h, s, l] = hexToHsl(hex);
            setHue(h);
            setSaturation(s);
            setLightness(l);
            onColorChange(hex);
        }
    };

    // 초기 색상 설정
    useEffect(() => {
        if (initialColor !== '#ffffff') {
            const [h, s, l] = hexToHsl(initialColor);
            setHue(h);
            setSaturation(s);
            setLightness(l);
            setColor(initialColor);
        }
    }, [initialColor]);

    const hueColor = hslToHex(hue, 100, 50);

    return (
        <ColorPickerContainer>
            <ColorPickerButton $color={color} onClick={() => setIsOpen(!isOpen)} />

            {isOpen && (
                <>
                    <ColorPickerOverlay onClick={() => setIsOpen(false)} />
                    <ColorPickerPopup ref={popupRef}>
                        <SaturationLightnessArea
                            data-saturation-area
                            $hueColor={hueColor}
                            onMouseDown={handleSaturationLightnessMouseDown}
                            style={{
                                background: `
                                    linear-gradient(to right, white, ${hueColor}),
                                    linear-gradient(to top, black, transparent)
                                `,
                                backgroundBlendMode: 'multiply',
                            }}
                        >
                            <SaturationLightnessHandle
                                $color={color}
                                style={{
                                    left: `${saturation}%`,
                                    top: `${100 - lightness}%`,
                                }}
                            />
                        </SaturationLightnessArea>

                        <SliderContainer>
                            <SliderGroup>
                                <HueSlider data-hue-slider onMouseDown={handleHueMouseDown}>
                                    <HueHandle $position={(hue / 360) * 100} />
                                </HueSlider>
                            </SliderGroup>

                            <ColorPreview $color={color} />
                        </SliderContainer>

                        <LightnessSlider
                            data-lightness-slider
                            $hueColor={hueColor}
                            onMouseDown={handleLightnessMouseDown}
                        >
                            <LightnessHandle $position={lightness} />
                        </LightnessSlider>

                        <HexInput value={color} onChange={handleHexChange} placeholder="#ffffff" />
                    </ColorPickerPopup>
                </>
            )}
        </ColorPickerContainer>
    );
};

export default ColorPicker;
