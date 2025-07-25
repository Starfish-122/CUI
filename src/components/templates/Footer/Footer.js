import Link from 'next/link';
import {
    FooterContainer,
    FooterContent,
    FooterSection,
    FooterBrand,
    FooterLinks,
    FooterSocial,
    FooterBottom,
    BrandLogo,
    BrandName,
    BrandDescription,
    SectionTitle,
    LinkItem,
    SocialLink,
    Copyright,
    FooterDivider,
} from './styles';

export default function Footer({ $hasSidebar = false, $isSidebarOpen = false }) {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer $hasSidebar={$hasSidebar} $isSidebarOpen={$isSidebarOpen}>
            <FooterContent>
                {/* 브랜드 섹션 */}
                <FooterSection>
                    <FooterBrand>
                        <BrandLogo>CUI</BrandLogo>
                        <BrandName>Concentrix User Interface</BrandName>
                        <BrandDescription>React 컴포넌트 UI 만들기!</BrandDescription>
                    </FooterBrand>
                </FooterSection>

                {/* 빠른 링크 섹션 */}
                <FooterSection>
                    {/* <SectionTitle>빠른 링크</SectionTitle> */}
                    <FooterLinks>
                        <LinkItem>
                            <Link href="/">홈</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link href="/all">컴포넌트</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link href="/guides">가이드</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link href="/about">소개</Link>
                        </LinkItem>
                    </FooterLinks>
                </FooterSection>

                {/* <FooterSection>
                    <SectionTitle>개발자 리소스</SectionTitle>
                    <FooterLinks>
                        <LinkItem>
                            <a href="https://github.com/Starfish-122/CUI" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </LinkItem>
                        <LinkItem>
                            <a href="/docs" target="_blank" rel="noopener noreferrer">
                                문서
                            </a>
                        </LinkItem>
                        <LinkItem>
                            <a href="/examples" target="_blank" rel="noopener noreferrer">
                                예제
                            </a>
                        </LinkItem>
                        <LinkItem>
                            <a href="/changelog" target="_blank" rel="noopener noreferrer">
                                변경사항
                            </a>
                        </LinkItem>
                    </FooterLinks>
                </FooterSection> */}
            </FooterContent>

            <FooterDivider />

            {/* 하단 섹션 */}
            <FooterBottom>
                <Copyright>© {currentYear} CUI Design System. All rights reserved.</Copyright>

                <FooterSocial>
                    <SocialLink
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <span className="material-symbols-outlined">code</span>
                    </SocialLink>
                    <SocialLink
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        <span className="material-symbols-outlined">share</span>
                    </SocialLink>
                    <SocialLink href="mailto:contact@cui.com" aria-label="Email">
                        <span className="material-symbols-outlined">mail</span>
                    </SocialLink>
                </FooterSocial>
            </FooterBottom>
        </FooterContainer>
    );
}
