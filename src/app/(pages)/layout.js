'use client';

import styled from 'styled-components';
import { toRem } from '@/styles/utils';

const LayoutContainer = styled.div`
    background: ${({ theme }) => theme.colors.blue100};
    padding: 2rem;
    max-width: ${toRem(1024)};
    margin: auto;
    min-height: 100vh;
`;

const Article = styled.article`
    margin: 2rem auto;
    padding: 1rem;
    min-height: 50vh;
`;

export default function PagesLayout({ children }) {
    return (
        <LayoutContainer>
            <Article>{children}</Article>
        </LayoutContainer>
    );
}
