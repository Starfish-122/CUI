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
    transition: ${({ theme }) => theme.transitions.medium};

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
    padding: 0 ${({ theme }) => theme.spacing.lg};
    ${flex({ gap: toRem(48) })}
    flex-wrap: wrap;

    ${media.md`
        ${flex({ gap: toRem(32) })}
    `}

    ${media.sm`
        ${flexColumn}
        gap: ${({ theme }) => theme.spacing.xxl};
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
    gap: ${({ theme }) => theme.spacing.sm};
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
    transition: ${({ theme }) => theme.transitions.short};

    &:hover {
        color: ${({ theme }) => theme.colors.blue600};
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
