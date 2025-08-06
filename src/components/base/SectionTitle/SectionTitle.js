import styled from 'styled-components';
import { H3 } from '@/components/base/core';

const StyledSectionTitle = styled(H3)`
    color: ${({ theme }) => theme.colors.gray800};
    margin: ${({ theme }) => theme.spacing.wide} 0 ${({ theme }) => theme.spacing.lg} 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.md};

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 20px;
        background: linear-gradient(
            135deg,
            ${({ theme }) => theme.colors.blue400},
            ${({ theme }) => theme.colors.blue300}
        );
        border-radius: 2px;
    }
`;

export default function SectionTitle({ children, ...props }) {
    return <StyledSectionTitle {...props}>{children}</StyledSectionTitle>;
}
