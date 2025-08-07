import styled from 'styled-components';
import { toRem } from '@/styles/utils';
import { media } from '@/styles/mixins';
import Link from 'next/link';

export const HeaderContainer = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    transition: margin-left 0.3s ease;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.light900};

    /* ${(props) =>
        props.$hasSidebar &&
        props.$isSidebarOpen &&
        `
        @media (min-width: 1024px) {
            padding-left: 17.5rem;
        }
        `} */
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${({ theme }) => theme.spacing.md};
    margin: 0 auto;
    padding: ${toRem(16)} ${toRem(20)};
`;

export const Logo = styled.div`
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.gray900};
        transition: ${({ theme }) => theme.transitions.short};

        &:hover {
            color: ${({ theme }) => theme.colors.blue600};
        }
    }

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        font-weight: 600;
    }
`;

export const Navigation = styled.nav`
    flex: 1;
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing.xxl};
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const NavItem = styled.li`
    margin: 0;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ $isActive, theme }) => ($isActive ? theme.colors.blue600 : theme.colors.gray700)};
    transition: ${({ theme }) => theme.transitions.short};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
    position: relative;
    padding: ${toRem(8)} ${toRem(4)};

    ${({ $isActive, theme }) =>
        $isActive &&
        `
        &::after {
            content: '';
            position: absolute;
            bottom: ${toRem(-4)};
            left: 0;
            width: 100%;
            height: ${toRem(2)};
            background-color: ${theme.colors.blue600};
        }
    `}

    &:hover {
        color: ${({ theme }) => theme.colors.blue600};
    }
`;

export const Hamburger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${toRem(24)};
    height: ${toRem(20)};
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    ${media.lg`
        display: none;
    `}
`;

export const HamburgerLine = styled.span`
    width: 100%;
    height: ${toRem(2)};
    background-color: ${({ theme }) => theme.colors.gray800};
    transition: ${({ theme }) => theme.transitions.medium};
`;
