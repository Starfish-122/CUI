'use client';

import styled from 'styled-components';
import { media } from '@/styles/mixins';
import { UIBox } from '@/components/base/core';

const LayoutContainer = styled.div`
    /* background: ${({ theme }) => theme.colors.gray100}; */
    padding: ${({ theme }) => theme.spacing.md};
    min-height: 100vh;
    margin-left: 0;

    ${media.lg(`margin-left: 17.5rem;`)};
`;

const StyledUIBox = styled(UIBox)`
    padding: 0;
    margin: ${({ theme }) => theme.spacing.xl} auto;
    min-height: 50vh;
    /* background-color: ${({ theme }) => theme.colors.light900}; */
    border-radius: ${({ theme }) => theme.borderRadius.lg};
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
