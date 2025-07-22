'use client';

import React from 'react';
import theme from '@/styles/theme';
import {
    ContentSection,
    SectionTitle,
    ItemWrapper,
    Item,
    ItemName,
    ValueText,
    SpacingExample,
    BorderRadiusExample,
    ShadowExample,
    TransitionExample,
} from './styles';

export default function StyleSection() {
    return (
        <>
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
