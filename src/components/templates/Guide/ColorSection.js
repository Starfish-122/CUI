'use client';

import React from 'react';
import theme from '@/styles/theme';
import {
    ContentSection,
    SectionTitle,
    ItemWrapper,
    Item,
    ColorBox,
    ItemName,
    ValueText,
} from './styles';

// 색상이 밝은지 어두운지 확인하는 함수
const isLightColor = (hex) => {
    // hex가 없거나 유효하지 않으면 기본값으로 어두운 색상 반환
    if (!hex || typeof hex !== 'string') return false;

    // RGB 값 추출
    let r, g, b;
    if (hex.startsWith('#')) {
        const cleanHex = hex.substring(1);
        if (cleanHex.length === 3) {
            r = parseInt(cleanHex[0] + cleanHex[0], 16);
            g = parseInt(cleanHex[1] + cleanHex[1], 16);
            b = parseInt(cleanHex[2] + cleanHex[2], 16);
        } else {
            r = parseInt(cleanHex.substr(0, 2), 16);
            g = parseInt(cleanHex.substr(2, 2), 16);
            b = parseInt(cleanHex.substr(4, 2), 16);
        }
    } else {
        return false;
    }

    // 명도 계산 (YIQ 공식)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128; // 128 이상이면 밝은 색상
};

export default function ColorSection() {
    return (
        <>
            {/* Colors Section */}
            <ContentSection>
                <SectionTitle>Colors</SectionTitle>
                <ItemWrapper>
                    {Object.entries(theme.colors).map(([key, value]) => (
                        <Item key={`color-${key}`}>
                            <ColorBox $color={value} $darkText={isLightColor(value)}>
                                {key}
                            </ColorBox>
                            <ItemName>
                                <ValueText>{value}</ValueText>
                            </ItemName>
                        </Item>
                    ))}
                </ItemWrapper>
            </ContentSection>
        </>
    );
}
