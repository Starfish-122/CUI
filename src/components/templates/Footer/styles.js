import styled from 'styled-components';
import { flexCenter } from '@/styles/mixins';

export const FooterContainer = styled.footer`
    max-width: 1024px;
    margin: 5rem auto 0;
    padding-top: 2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.gray300};
    ${flexCenter};
    flex-wrap: wrap;
    gap: 1.5rem;

    a {
        ${flexCenter}
        gap: 0.5rem;
        color: inherit;

        &:hover {
            text-decoration: underline;
            text-underline-offset: 4px;
        }
    }
`;
