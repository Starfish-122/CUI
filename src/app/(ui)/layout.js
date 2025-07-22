'use client';

import styled from 'styled-components';
import { media } from '@/styles/mixins';
import { UIBox } from '@/components/base/core';

const LayoutContainer = styled.div`
    background: #f5f5f5;
    padding: 1rem;
    min-height: 100vh;
    margin-left: 0;

    ${media.lg(`margin-left: 17.5rem;`)};
`;

const StyledUIBox = styled(UIBox)`
    margin: 2rem auto;
    min-height: 50vh;
    background-color: #ffffff;
    border-radius: 8px;
`;

export default function UiLayout({ children }) {
    return (
        <>
            <LayoutContainer>
                <StyledUIBox>{children}</StyledUIBox>
            </LayoutContainer>
        </>
    );
}
