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
