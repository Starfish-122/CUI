'use client';

import theme from '@/styles/theme';
import {
    ContentSection,
    SectionTitle,
    ItemWrapper,
    Item,
    ColorBox,
    ItemName,
    ValueText,
    FontSizeExample,
    SpacingExample,
    BorderRadiusExample,
    ShadowExample,
    TransitionExample,
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

export default function Guide() {
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

            {/* Font Sizes Section */}
            <ContentSection>
                <SectionTitle>Font Sizes</SectionTitle>
                <ItemWrapper>
                    {Object.entries(theme.fontSizes).map(([key, value]) => (
                        <Item key={`fontSize-${key}`}>
                            <FontSizeExample $size={value}>Aa</FontSizeExample>
                            <ItemName>
                                {key}
                                <ValueText>{value}</ValueText>
                            </ItemName>
                        </Item>
                    ))}
                </ItemWrapper>
            </ContentSection>

            {/* Spacing Section */}
            <ContentSection>
                <SectionTitle>Spacing</SectionTitle>
                <ItemWrapper>
                    {Object.entries(theme.spacing).map(([key, value]) => (
                        <Item key={`spacing-${key}`}>
                            <SpacingExample $space={value}>{key}</SpacingExample>
                            <ItemName>
                                <ValueText>{value}</ValueText>
                            </ItemName>
                        </Item>
                    ))}
                </ItemWrapper>
            </ContentSection>

            {/* Breakpoints Section */}
            <ContentSection>
                <SectionTitle>Breakpoints</SectionTitle>
                <ItemWrapper>
                    {Object.entries(theme.breakpoints).map(([key, value]) => (
                        <Item key={`breakpoint-${key}`}>
                            <SpacingExample>{key}</SpacingExample>
                            <ItemName>
                                <ValueText>{value}</ValueText>
                            </ItemName>
                        </Item>
                    ))}
                </ItemWrapper>
            </ContentSection>

            {/* Border Radius Section */}
            <ContentSection>
                <SectionTitle>Border Radius</SectionTitle>
                <ItemWrapper>
                    {Object.entries(theme.borderRadius).map(([key, value]) => (
                        <Item key={`borderRadius-${key}`}>
                            <BorderRadiusExample $radius={value}>{key}</BorderRadiusExample>
                            <ItemName>
                                <ValueText>{value}</ValueText>
                            </ItemName>
                        </Item>
                    ))}
                </ItemWrapper>
            </ContentSection>

            {/* Shadows Section */}
            <ContentSection>
                <SectionTitle>Shadows</SectionTitle>
                <ItemWrapper>
                    {Object.entries(theme.shadows).map(([key, value]) => (
                        <Item key={`shadow-${key}`}>
                            <ShadowExample $shadow={value}>{key}</ShadowExample>
                            <ItemName>
                                <ValueText>{value}</ValueText>
                            </ItemName>
                        </Item>
                    ))}
                </ItemWrapper>
            </ContentSection>

            {/* Transitions Section */}
            <ContentSection>
                <SectionTitle>Transitions</SectionTitle>
                <ItemWrapper>
                    {Object.entries(theme.transitions).map(([key, value]) => (
                        <Item key={`transition-${key}`}>
                            <TransitionExample $transition={value}>{key}</TransitionExample>
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
