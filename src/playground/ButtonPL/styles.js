import styled from 'styled-components';

export const PlaygroundOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: ${({ theme }) => theme.spacing.lg};
`;

export const PlaygroundContainer = styled.div`
    background: ${({ theme }) => theme.colors.light900};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    box-shadow: ${({ theme }) => theme.shadows.xxxl};
    width: 90vw;
    max-width: 1000px;
    height: 80vh;
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
`;

export const PlaygroundTitle = styled.h2`
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

export const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.gray600};
    transition: all ${({ theme }) => theme.transitions.fast};

    &:hover {
        background: ${({ theme }) => theme.colors.gray200};
        color: ${({ theme }) => theme.colors.gray800};
    }
`;

export const PlaygroundContent = styled.div`
    display: flex;
    flex: 1;
    overflow: hidden;
`;

export const PlaygroundSidebar = styled.div`
    width: 30%;
    border-right: 1px solid ${({ theme }) => theme.colors.gray200};
    background: ${({ theme }) => theme.colors.gray50};
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacing.lg};
`;

export const SidebarSection = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SidebarTitle = styled.h3`
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
    display: flex;
    flex-direction: column;
    overflow: hidden;
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

export const PreviewTitle = styled.h4`
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
