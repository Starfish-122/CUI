import styled from 'styled-components';
import { toRem } from '@/styles/utils';
import { media, flexCenter, flexBetween } from '@/styles/mixins';
import Link from 'next/link';

export const HeaderContainer = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    transition: margin-left 0.3s ease;

    ${(props) =>
        props.$hasSidebar &&
        props.$isSidebarOpen &&
        `
        @media (min-width: 1024px) {
            padding-left: 17.5rem;
        }
        `}
`;

export const Container = styled.div`
    ${flexBetween};
    max-width: 1024px;
    margin: 0 auto;
    padding: ${toRem(16)} ${toRem(20)};
`;

export const Logo = styled.div`
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.gray900};

        &:hover {
            color: ${({ theme }) => theme.colors.blue600};
        }
    }

    h1 {
        font-size: ${toRem(20)};
        font-weight: 600;
    }
`;

export const Navigation = styled.nav``;

export const NavList = styled.ul`
    display: flex;
    gap: ${toRem(24)};
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
    transition: color 0.2s;
    font-size: ${toRem(14)};
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
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: ${toRem(24)};
    height: ${toRem(20)};
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: flex;
    }
`;

export const HamburgerLine = styled.span`
    width: 100%;
    height: ${toRem(2)};
    background-color: ${({ theme }) => theme.colors.gray800};
    transition: all 0.3s ease;
`;
