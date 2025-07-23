import styled from 'styled-components';
import {
    flex,
    flexCenter,
    flexBetween,
    flexColumn,
    media,
    transition,
    boxShadow,
} from '@/styles/mixins';
import { toRem } from '@/styles/utils';

export const FooterContainer = styled.footer`
    background: ${({ theme }) => theme.colors.light900};
    border-top: 1px solid ${({ theme }) => theme.colors.gray200};
    padding: ${toRem(48)} 0 ${toRem(24)};
    margin-top: auto;
    font-family: ${({ theme }) => theme.fontFamily?.default || 'Noto Sans KR, sans-serif'};
    transition: margin-left 0.3s ease;

    ${(props) =>
        props.$hasSidebar &&
        props.$isSidebarOpen &&
        `
        @media (min-width: 1024px) {
            margin-left: 17.5rem;
        }
        `}
`;

export const FooterContent = styled.div`
    max-width: ${toRem(1200)};
    margin: 0 auto;
    padding: 0 ${toRem(24)};
    ${flex({ gap: toRem(48) })}
    flex-wrap: wrap;

    ${media.md`
        ${flex({ gap: toRem(32) })}
    `}

    ${media.sm`
        ${flexColumn}
        gap: ${toRem(32)};
    `}
`;

export const FooterSection = styled.div`
    flex: 1;
    min-width: ${toRem(200)};

    ${media.sm`
        min-width: auto;
        text-align: center;
    `}
`;

export const FooterBrand = styled.div`
    ${flexColumn}
    gap: ${toRem(12)};
`;

export const BrandLogo = styled.div`
    font-size: ${toRem(32)};
    font-weight: 900;
    color: ${({ theme }) => theme.colors.blue600};
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.blue600} 0%,
        ${({ theme }) => theme.colors.blue700} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
`;

export const BrandName = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black900};
    margin: 0;
`;

export const BrandDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray600};
    line-height: 1.6;
    margin: 0;
    max-width: ${toRem(280)};

    ${media.sm`
        max-width: none;
    `}
`;

export const SectionTitle = styled.h4`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black900};
    margin: 0 0 ${toRem(16)} 0;
    position: relative;

    /* &::after {
        content: '';
        position: absolute;
        bottom: ${toRem(-4)};
        left: 0;
        width: ${toRem(24)};
        height: ${toRem(2)};
        background: linear-gradient(
            135deg,
            ${({ theme }) => theme.colors.blue600} 0%,
            ${({ theme }) => theme.colors.blue700} 100%
        );
        border-radius: ${toRem(1)};

        ${media.sm`
            left: 50%;
            transform: translateX(-50%);
        `}
    } */
`;

export const FooterLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    ${flexColumn}
    gap: ${toRem(8)};
`;

export const LinkItem = styled.li`
    a {
        color: ${({ theme }) => theme.colors.gray600};
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        ${transition()}
        position: relative;
        padding: ${toRem(4)} 0;

        &:hover {
            color: ${({ theme }) => theme.colors.blue600};
            transform: translateX(${toRem(4)});
        }

        &::before {
            content: '';
            position: absolute;
            left: ${toRem(-8)};
            top: 50%;
            width: ${toRem(4)};
            height: ${toRem(4)};
            background: ${({ theme }) => theme.colors.blue600};
            border-radius: 50%;
            transform: translateY(-50%) scale(0);
            ${transition()}
        }

        &:hover::before {
            transform: translateY(-50%) scale(1);
        }
    }
`;

export const FooterDivider = styled.div`
    height: 1px;
    background: linear-gradient(
        90deg,
        transparent 0%,
        ${({ theme }) => theme.colors.gray200} 20%,
        ${({ theme }) => theme.colors.gray200} 80%,
        transparent 100%
    );
    margin: ${toRem(32)} auto ${toRem(24)};
    max-width: ${toRem(1200)};
`;

export const FooterBottom = styled.div`
    max-width: ${toRem(1200)};
    margin: 0 auto;
    padding: 0 ${toRem(24)};
    ${flexBetween}
    align-items: center;
    flex-wrap: wrap;
    gap: ${toRem(16)};

    ${media.sm`
        ${flexColumn}
        text-align: center;
        gap: ${toRem(16)};
    `}
`;

export const Copyright = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray500};
    margin: 0;
`;

export const FooterSocial = styled.div`
    ${flex({ gap: toRem(12) })}
`;

export const SocialLink = styled.a`
    ${flexCenter}
    width: ${toRem(40)};
    height: ${toRem(40)};
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray600};
    text-decoration: none;
    ${transition()}
    ${boxShadow('sm')}

    span {
        font-size: ${toRem(20)};
        font-weight: 400;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.blue600};
        color: ${({ theme }) => theme.colors.light900};
        transform: translateY(${toRem(-2)});
        ${boxShadow('md')}
    }

    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.blue600};
        outline-offset: 2px;
    }
`;
