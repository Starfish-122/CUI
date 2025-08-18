'use client';

import React from 'react';
import theme from '@/styles/theme';
import { H2, H3, H4 } from '@/components/utils/UIStyles';
import {
    ContentSection,
    SectionTitle,
    ItemWrapper,
    Item,
    ItemName,
    ValueText,
    FontSizeExample,
} from './styles';

export default function TextSection() {
    return (
        <>
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

            {/* Typography Examples */}
            <ContentSection>
                <SectionTitle>Typography</SectionTitle>
                <div style={{ textAlign: 'left', padding: '1rem' }}>
                    <H2>제목 크기 H2</H2>

                    <H3>제목 크기 H3</H3>

                    <H4>제목 크기 H4</H4>

                    <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                        일반 텍스트 (굵은 글씨)
                    </p>

                    <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
                        작은 텍스트 / 캡션
                    </p>
                    <p style={{ fontStyle: 'italic' }}>기울임꼴 텍스트</p>
                </div>
            </ContentSection>
        </>
    );
}
