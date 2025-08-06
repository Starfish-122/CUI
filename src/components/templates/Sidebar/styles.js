import styled from 'styled-components';
import { toRem, mediaQuery } from '@/styles/utils';
import { flexCenter, flexBetween } from '@/styles/mixins';
import Link from 'next/link';

export const SidebarContainer = styled.aside`
    width: ${toRem(280)};
    /* height: 100vh; */
    position: fixed;
    top: 0;
    /* left: 0; */
    background-color: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
    z-index: 9;
    box-shadow: 0 ${toRem(2)} ${toRem(4)} rgba(0, 0, 0, 0.1);

    height: 100%;
    left: ${toRem(-280)};
    transition: left 0.3s ease;

    ${(props) =>
        props.$isOpen &&
        `
            left: 0;
        `}

    ${mediaQuery('sm')} {
        left: 0;
        transition: none;
    }

    &::-webkit-scrollbar {
        width: ${toRem(4)};
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: ${toRem(10)};
    }
`;

export const SidebarHeader = styled.div`
    padding: ${toRem(16)};
    height: 3em;
    ${flexBetween};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    /* 하이드레이션 중에도 즉시 표시되도록 */
    background-color: #fff;
`;

export const SidebarLogo = styled(Link)`
    ${flexCenter};
    text-decoration: none;
    color: inherit;
`;

export const LogoIcon = styled.div`
    ${flexCenter};
    padding: 0 1rem;
    height: ${toRem(32)};
    font-weight: 700;
    font-size: ${toRem(16)};
    background-color: ${({ theme }) => theme.colors.blue600};
    color: white;
    border-radius: ${toRem(4)};
    margin-right: ${toRem(8)};
`;

export const LogoText = styled.span`
    font-weight: 600;
    font-size: ${toRem(18)};
`;

export const VersionTag = styled.div`
    font-size: ${toRem(12)};
    color: rgba(0, 0, 0, 0.6);
    padding: ${toRem(4)} ${toRem(6)};
    border-radius: ${toRem(4)};
    background-color: rgba(0, 0, 0, 0.08);
`;

export const CloseButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    font-size: ${toRem(16)};
    color: rgba(0, 0, 0, 0.6);
    padding: ${toRem(4)};
    border-radius: 50%;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const SidebarContent = styled.nav`
    padding: ${toRem(8)} 0;
    flex: 1;
    background-color: #fff;
`;

export const CategoryList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const CategoryItem = styled.li`
    margin: 0;
`;

export const CategoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${toRem(12)} ${toRem(16)};
    cursor: pointer;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray700};
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray50};
    }

    ${(props) =>
        props.$expanded &&
        `
        background-color: ${props.theme.colors.gray50};
    `}
`;

export const CategoryIcon = styled.span`
    font-size: ${toRem(12)};
    transition: transform 0.2s ease;
`;

export const ItemsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.gray25};
`;

export const Item = styled.li`
    margin: 0;
`;

export const ItemLink = styled(Link)`
    display: block;
    padding: ${toRem(8)} ${toRem(16)} ${toRem(8)} ${toRem(32)};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray600};
    font-size: ${toRem(14)};
    transition: all 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray100};
        color: ${({ theme }) => theme.colors.gray800};
    }

    ${(props) =>
        props.$isActive &&
        `
        background-color: ${props.theme.colors.blue50};
        color: ${props.theme.colors.blue600};
        font-weight: 500;
        border-right: 2px solid ${props.theme.colors.blue600};
    `}
`;

export const SidebarOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
    transition:
        opacity 0.3s ease,
        visibility 0.3s ease;
`;
