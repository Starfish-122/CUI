import styled from 'styled-components';
export const SearchContainer = styled.div`
    padding: ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.light900};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.md};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    transition: all ${({ theme }) => theme.transitions.medium};

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.lg};
        transform: translateY(-2px);
    }
`;

export const SearchResult = styled.div`
    margin-top: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.md};
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.gray100} 0%,
        ${({ theme }) => theme.colors.light900} 100%
    );
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: 2px solid ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.gray700};
    font-weight: 500;
    text-align: center;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export const DemoSection = styled.div`
    margin-top: ${({ theme }) => theme.spacing.xxl};
`;
