'use client';

import styled from 'styled-components';
import { media, flexCenter, flexColumn } from '@/styles/mixins';

import { ColorSection, TextSection, StyleSection, UISection } from '@/components/templates/Guide';

const HeroSection = styled.section`
    margin-bottom: 5rem;
`;
const HeroWrapper = styled.div`
    ${flexCenter};
    ${flexColumn};
    text-align: center;
`;
const HeroTitle = styled.h1`
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;

    ${media.md`
        font-size: 3.75rem;
    `}
`;

export default function GuidePage() {
    return (
        <>
            <HeroSection>
                <HeroWrapper>
                    <HeroTitle>Theme Guide🎨</HeroTitle>
                </HeroWrapper>
            </HeroSection>

            <ColorSection />
            <TextSection />
            <StyleSection />
            <UISection />
        </>
    );
}
