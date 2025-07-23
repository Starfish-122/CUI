'use client';

import styled from 'styled-components';
import { media } from '@/styles/mixins';
import { UIBox } from '@/components/base/core';

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
            <StyledUIBox>{children}</StyledUIBox>
        </>
    );
}
