'use client';

import styled from 'styled-components';
import { media, flexCenter, flexColumn } from '@/styles/mixins';

import Main from '@/components/templates/Main/Main';

const HeroSection = styled.section`
    margin-bottom: 5rem;
    max-width: 1200px;
    margin: 0 auto;
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

export default function Home() {
    return (
        <>
            <HeroSection>
                <HeroWrapper>
                    <HeroTitle>CUI</HeroTitle>
                </HeroWrapper>
            </HeroSection>

            <HeroSection>
                <Main />
            </HeroSection>
        </>
    );
}
