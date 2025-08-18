import { toRem } from '@/styles/utils';
import ColorPicker from './ColorPicker';
import { ColorPaletteContainer, ColorPaletteLabel, ColorContianer, ColorSwatch } from './styles';

interface ColorItem {
    name: string;
    value: string;
}

interface ColorPaletteProps {
    colors?: ColorItem[];
    selectedColor?: string;
    onColorSelect: (color: string) => void;
    label?: string;
}

const ColorPalette = ({
    colors = [],
    selectedColor,
    onColorSelect,
    label = '색상 선택',
}: ColorPaletteProps) => {
    const handleCustomColorChange = (color: string): void => {
        onColorSelect(color);
    };

    const isCustomColor = (): boolean => {
        return selectedColor ? !colors.find((c) => c.value === selectedColor) : false;
    };

    return (
        <ColorPaletteContainer>
            <ColorPaletteLabel>{label}</ColorPaletteLabel>
            <ColorContianer>
                {colors.map((color) => (
                    <ColorSwatch
                        key={color.name}
                        $color={color.value}
                        $isSelected={selectedColor === color.value}
                        onClick={() => onColorSelect(color.value)}
                        title={color.name}
                    />
                ))}
                <ColorPicker
                    onColorChange={handleCustomColorChange}
                    initialColor={isCustomColor() ? selectedColor! : '#ffffff'}
                />
            </ColorContianer>
        </ColorPaletteContainer>
    );
};

export default ColorPalette;
