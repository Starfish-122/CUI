import styled from 'styled-components';
import { H2 } from '@/components/base/core';

export const AllDemoContainer = styled.div`
    padding: ${({ theme }) => theme.spacing.xl};
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.light900} 0%,
        ${({ theme }) => theme.colors.gray100} 100%
    );
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    min-height: 80vh;
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
    padding: ${({ theme }) => theme.spacing.xl};
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.blue400} 0%,
        ${({ theme }) => theme.colors.blue300} 100%
    );
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    color: ${({ theme }) => theme.colors.light900};
`;

export const StyledH2 = styled(H2)`
    color: ${({ theme }) => theme.colors.light900};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: 700;
`;

export const Subtitle = styled.p`
    color: ${({ theme }) => theme.colors.purple100 || '#f3e8ff'};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin: 0;
`;

export const ComponentsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const ComponentCard = styled.div`
    background: ${({ theme }) => theme.colors.light900};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing.xl};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    transition: all ${({ theme }) => theme.transitions.medium};
    cursor: pointer;

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.md};
        transform: translateY(-4px);
        border-color: ${({ theme }) => theme.colors.gray900};
    }
`;

export const ComponentIcon = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.md};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ComponentTitle = styled.h3`
    color: ${({ theme }) => theme.colors.gray800};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    text-align: center;
`;

export const ComponentDescription = styled.p`
    color: ${({ theme }) => theme.colors.gray600};
    font-size: ${({ theme }) => theme.fontSizes.md};
    text-align: center;
    line-height: 1.5;
`;

export const StatusBadge = styled.span`
    display: inline-block;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    background: ${({ $status, theme }) =>
        $status === 'ready'
            ? theme.colors.green600
            : $status === 'in-progress'
              ? theme.colors.blue400
              : theme.colors.gray700};
    color: ${({ theme }) => theme.colors.light900};
    border-radius: ${({ theme }) => theme.borderRadius.pill};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    margin-top: ${({ theme }) => theme.spacing.sm};
`;
