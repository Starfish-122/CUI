'use client';

import styled from 'styled-components';
import { media, flexCenter, flexColumn } from '@/styles/mixins';

// import Guide from '@/components/templates/Guide/Guide';

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

export default function Home() {
    return (
        <>
            <HeroSection>
                <HeroWrapper>
                    <HeroTitle>CUI</HeroTitle>
                </HeroWrapper>
            </HeroSection>

            {/* <Guide /> */}
        </>
    );
}
