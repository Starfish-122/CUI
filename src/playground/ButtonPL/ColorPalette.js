import styled from 'styled-components';
import { toRem } from '@/styles/utils';
import ColorPicker from './ColorPicker';

const ColorSwatch = styled.button`
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

const ColorContianer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${toRem(8)};
    margin-top: ${toRem(8)};
`;

const ColorPaletteContainer = styled.div`
    margin-bottom: ${toRem(16)};
    position: relative;
`;

const ColorPaletteLabel = styled.label`
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray800};
    margin-bottom: ${toRem(8)};
`;

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
