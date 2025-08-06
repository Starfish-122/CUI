import styled from 'styled-components';
import { toRem } from '@/styles/utils';

export const PlaygroundContainer = styled.div`
    background: ${({ theme }) => theme.colors.light900};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const PlaygroundHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
    background: ${({ theme }) => theme.colors.gray50};
`;

export const PlaygroundTitle = styled.h3`
    color: ${({ theme }) => theme.colors.gray800};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export const HeaderActions = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export const ActionButton = styled.button`
    background: ${({ theme }) => theme.colors.purple500};
    color: ${({ theme }) => theme.colors.black300};
    border: none;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.fast};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};

    &:hover {
        background: ${({ theme }) => theme.colors.purple600};
    }
`;

export const PlaygroundContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* min-height: 400px; */
`;

export const PlaygroundSidebar = styled.div`
    flex: 1;
    min-width: ${toRem(200)};
    border-right: 1px solid ${({ theme }) => theme.colors.gray200};
    background: ${({ theme }) => theme.colors.gray50};
    /* overflow-y: auto; */
    padding: ${({ theme }) => theme.spacing.lg};
`;

export const SidebarSection = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SidebarTitle = styled.p`
    color: ${({ theme }) => theme.colors.gray800};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding-bottom: ${({ theme }) => theme.spacing.sm};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export const PlaygroundMain = styled.div`
    flex: 1;
    min-width: 70%;
    display: flex;
    flex-direction: column;
`;

export const PlaygroundPreview = styled.div`
    flex: 1;
    padding: ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.light900};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
    gap: ${({ theme }) => theme.spacing.lg};
`;

export const PreviewTitle = styled.p`
    color: ${({ theme }) => theme.colors.gray700};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
    margin: 0;
    text-align: center;
`;

export const PlaygroundCode = styled.div`
    height: 180px;
    background: ${({ theme }) => theme.colors.gray900};
    color: ${({ theme }) => theme.colors.light900};
    padding: ${({ theme }) => theme.spacing.lg};
    overflow-y: auto;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    position: relative;

    pre {
        white-space: pre-wrap;
    }
`;

export const CodeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding-bottom: ${({ theme }) => theme.spacing.sm};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray700};
`;

export const CodeTitle = styled.span`
    color: ${({ theme }) => theme.colors.gray300};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
`;

export const CopyButton = styled.button`
    background: ${({ theme }) => theme.colors.gray700};
    color: ${({ theme }) => theme.colors.light900};
    border: none;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.fast};

    &:hover {
        background: ${({ theme }) => theme.colors.gray600};
    }
`;

export const ControlGroup = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ControlLabel = styled.label`
    display: block;
    color: ${({ theme }) => theme.colors.gray700};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ControlInput = styled.input`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.spacing.xs};

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.purple400};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple100};
    }
`;

export const ControlSelect = styled.select`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    background: ${({ theme }) => theme.colors.light900};

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.purple400};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple100};
    }
`;
