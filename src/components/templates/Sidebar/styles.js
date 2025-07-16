import styled from 'styled-components';
import { toRem } from '@/styles/utils';
import { flexCenter, flexBetween } from '@/styles/mixins';
import Link from 'next/link';

export const SidebarContainer = styled.aside.attrs((props) => {
    // isOpen prop을 제외한 나머지 prop만 전달
    const { isOpen, ...rest } = props;
    return rest;
})`
    width: ${toRem(280)};
    height: 100vh;
    position: fixed;
    top: 0;
    left: ${toRem(-280)};
    background-color: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
    z-index: 1200;
    box-shadow: 0 ${toRem(2)} ${toRem(4)} rgba(0, 0, 0, 0.1);
    transition: left 0.3s ease;

    ${(props) =>
        props.isOpen &&
        `
        left: 0;
    `}

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
    ${flexBetween};
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
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
`;

export const CategoryList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const CategoryItem = styled.li``;

export const CategoryHeader = styled.div.attrs((props) => {
    // expanded prop을 제외한 나머지 prop만 전달
    const { expanded, ...rest } = props;
    return rest;
})`
    ${flexBetween};
    padding: ${toRem(12)} ${toRem(16)};
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: ${toRem(14)};

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }

    ${(props) =>
        props.expanded &&
        `
        background-color: rgba(0, 0, 0, 0.02);
    `}
`;

export const CategoryIcon = styled.span`
    font-size: ${toRem(10)};
`;

export const ItemsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li``;

export const ItemLink = styled(Link).attrs((props) => {
    // isActive prop을 제외한 나머지 prop만 전달
    const { isActive, ...rest } = props;
    return rest;
})`
    display: block;
    padding: ${toRem(8)} ${toRem(16)} ${toRem(8)} ${toRem(32)};
    font-size: ${toRem(14)};
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }

    ${(props) =>
        props.isActive &&
        `
        color: #3f51b5;
        background-color: rgba(63, 81, 181, 0.08);
        font-weight: 500;
    `}
`;

export const SidebarOverlay = styled.div.attrs((props) => {
    // visible prop을 제외한 나머지 prop만 전달
    const { visible, ...rest } = props;
    return rest;
})`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1100;
    visibility: hidden;
    opacity: 0;
    transition:
        visibility 0.3s,
        opacity 0.3s;

    ${(props) =>
        props.visible &&
        `
        visibility: visible;
        opacity: 1;
    `}
`;
