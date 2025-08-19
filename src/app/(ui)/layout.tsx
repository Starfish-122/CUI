'use client';

import styled, { css } from 'styled-components';
import { UIBox } from '@/components/utils/UIStyles';
import QuickNav from '@/components/templates/QuickNav/QuickNav';
import { media } from '@/styles/mixins';

const StyledUIBox = styled(UIBox)`
    padding: 0;
    margin: auto;
    min-height: 50vh;
    box-shadow: none;
    /* grid-template-columns: 1fr; */
    ${media.md(css`
        display: grid;
        grid-template-columns: 3fr auto;
    `)}
`;

interface UiLayoutProps {
    children: React.ReactNode;
}

export default function UiLayout({ children }: UiLayoutProps): React.JSX.Element {
    return (
        <>
            <StyledUIBox>
                {children}
                <QuickNav />
            </StyledUIBox>
        </>
    );
}
