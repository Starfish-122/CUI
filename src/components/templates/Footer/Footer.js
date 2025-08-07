import {
    FooterContainer,
    FooterContent,
    FooterSection,
    FooterBrand,
    FooterSocial,
    BrandLogo,
    BrandName,
    BrandDescription,
    SocialLink,
} from './styles';

export default function Footer({ $hasSidebar = false, $isSidebarOpen = false }) {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer $hasSidebar={$hasSidebar} $isSidebarOpen={$isSidebarOpen}>
            <FooterContent>
                <FooterSection>
                    <FooterBrand>
                        <BrandLogo>CUI</BrandLogo>
                        <BrandName>Concentrix User Interface</BrandName>
                        <BrandDescription>React 컴포넌트 UI 만들기!</BrandDescription>
                    </FooterBrand>
                </FooterSection>

                <FooterSocial>
                    <SocialLink
                        href="https://github.com/Starfish-122/CUI"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <span className="material-symbols-outlined">code</span>
                    </SocialLink>

                    <SocialLink href="mailto:sera.lee@concentrix.com" aria-label="Email">
                        <span className="material-symbols-outlined">mail</span>
                    </SocialLink>
                </FooterSocial>
            </FooterContent>
        </FooterContainer>
    );
}
