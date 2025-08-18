import styled from 'styled-components';
import { toRem } from '@/styles/utils';
import { media } from '@/styles/mixins';
import Link from 'next/link';

interface HeaderContainerProps {
    $hasSidebar?: boolean;
    $isSidebarOpen?: boolean;
    $isActive?: boolean;
}

interface HamburgerProps {
    $isOpen?: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    transition: margin-left 0.3s ease;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.light900};
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

export const StyledLink = styled(Link)<HeaderContainerProps>`
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

export const Hamburger = styled.button<HamburgerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${toRem(24)};
    height: ${toRem(20)};
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    position: relative;

    ${media.lg`
        display: none;
    `}
`;

export const HamburgerLine = styled.span<HamburgerProps>`
    width: 100%;
    height: ${toRem(2)};
    background-color: ${({ theme }) => theme.colors.gray800};
    transition: ${({ theme }) => theme.transitions.medium};
    transform-origin: center;

    /* 첫 번째 선 - X 버튼일 때 회전 */
    &:nth-child(1) {
        transform: ${({ $isOpen }) =>
            $isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0deg)'};
    }

    /* 두 번째 선 - X 버튼일 때 투명 */
    &:nth-child(2) {
        opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
        transform: ${({ $isOpen }) => ($isOpen ? 'scale(0)' : 'scale(1)')};
    }

    /* 세 번째 선 - X 버튼일 때 회전 */
    &:nth-child(3) {
        transform: ${({ $isOpen }) =>
            $isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0deg)'};
    }
`;
