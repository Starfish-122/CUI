'use client';

import styled from 'styled-components';
import { media, flexCenter, flexBetween } from '@/styles/mixins';

const LayoutContainer = styled.div`
    background: #f5f5f5;
    padding: 1rem;
    min-height: 100vh;
    margin-left: 0;

    ${media.lg(`margin-left: 17.5rem;`)};
`;
const Article = styled.article`
    margin: 2rem auto;
    padding: 1rem;
    min-height: 50vh;
    border-top: 1px solid;
    border-bottom: 1px solid;
`;

export default function UiLayout({ children }) {
    return (
        <>
            <LayoutContainer>
                <Article>{children}</Article>
            </LayoutContainer>
        </>
    );
}
