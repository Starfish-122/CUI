import { toRem } from '@/styles/utils';
import ColorPicker from './ColorPicker';
import { ColorPaletteContainer, ColorPaletteLabel, ColorContianer, ColorSwatch } from './styles';

const ColorPalette = ({ colors = [], selectedColor, onColorSelect, label = '색상 선택' }) => {
    const handleCustomColorChange = (color) => {
        onColorSelect(color);
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
                    initialColor={
                        selectedColor && !colors.find((c) => c.value === selectedColor)
                            ? selectedColor
                            : '#ffffff'
                    }
                />
            </ColorContianer>
        </ColorPaletteContainer>
    );
};

export default ColorPalette;
