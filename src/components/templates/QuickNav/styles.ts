import styled from 'styled-components';
import { media } from '@/styles/mixins';
import { toRem } from '@/styles/utils';

interface QuickNavContainerProps {
    $hasSidebar?: boolean;
    $isSidebarOpen?: boolean;
}

interface NavLinkProps {
    $isActive: boolean;
}

export const QuickNavContainer = styled.nav<QuickNavContainerProps>`
    display: none;
    background-color: ${({ theme }) => theme.colors.light900};
    padding: ${({ theme }) => theme.spacing.md};
    width: ${toRem(240)};
    max-height: 30vh;
    overflow-y: auto;
    position: sticky;
    top: 6%;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    box-sizing: border-box;

    ${media.md`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    `}
`;

export const NavTitle = styled.h3`
    margin: 0 0 ${toRem(12)} 0;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black900};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    padding-bottom: ${toRem(8)};
    width: 100%;
`;

export const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const NavItem = styled.li`
    margin-bottom: ${toRem(4)};
`;

export const NavLink = styled.a<NavLinkProps>`
    display: block;
    padding: ${toRem(6)} ${toRem(8)};
    color: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.black900)};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    transition: all 0.2s ease;
    cursor: pointer;
    border-left: 2px solid transparent;

    &:hover {
        background-color: ${({ theme }) => theme.colors.light800};
        color: ${({ theme }) => theme.colors.primary};
    }

    ${({ $isActive, theme }) =>
        $isActive &&
        `
        background-color: ${theme.colors.primary}10;
        color: ${theme.colors.primary};
        border-left-color: ${theme.colors.primary};
        font-weight: 500;
    `}
`;

export const NavLinkH2 = styled(NavLink)`
    font-weight: 500;
`;

export const NavLinkH3 = styled(NavLink)`
    padding-left: ${toRem(16)};
    font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const NavLinkH4 = styled(NavLink)`
    padding-left: ${toRem(24)};
    font-size: ${({ theme }) => theme.fontSizes.xs};
`;
