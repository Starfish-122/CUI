'use client';

import styled from 'styled-components';
import { UIBox } from '@/components/utils/UIStyles';
import QuickNav from '@/components/templates/QuickNav/QuickNav';

const StyledUIBox = styled(UIBox)`
    padding: 0;
    margin: auto;
    min-height: 50vh;
    /* background-color: ${({ theme }) => theme.colors.blue400}; */
    box-shadow: none;
    display: grid;
    grid-template-columns: 3fr auto;
`;

export default function UiLayout({ children }) {
    return (
        <>
            <StyledUIBox>
                {children}
                <QuickNav />
            </StyledUIBox>
        </>
    );
}
