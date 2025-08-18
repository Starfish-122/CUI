import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const CodeBlockContainer = styled.div`
    position: relative;
    margin: ${({ theme }) => theme.spacing.lg} 0;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const CodeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.gray100};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray700};
`;

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
    margin: 0;
    border-radius: 0;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.5;
`;
