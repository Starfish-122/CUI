import styled from 'styled-components';
import { ContentSection } from '@/components/base/core';

export const StyledContentSection = styled(ContentSection)`
    background: ${({ theme }) => theme.colors.light900};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transition: all ${({ theme }) => theme.transitions.medium};

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.md};
        transform: translateY(-2px);
    }
`;

export const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
    align-items: center;
`;

export const FullWidthSection = styled(StyledContentSection)`
    .full-width-button {
        width: 100%;
        margin-top: ${({ theme }) => theme.spacing.md};
    }
`;

export const CustomColorSection = styled(StyledContentSection)`
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.gray100} 0%,
        ${({ theme }) => theme.colors.light900} 100%
    );
`;
