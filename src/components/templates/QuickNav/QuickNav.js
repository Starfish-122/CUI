import React, { useState, useEffect } from 'react';
import {
    QuickNavContainer,
    NavTitle,
    NavList,
    NavLink,
    NavLinkH1,
    NavLinkH2,
    NavLinkH3,
    NavLinkH4,
} from './styles';

export default function QuickNav() {
    const [headings, setHeadings] = useState([]);
    const [activeHeading, setActiveHeading] = useState('');

    useEffect(() => {
        // UILayout(ui/**/page.js)에서 헤딩 태그 찾기
        const findUILayoutContent = () => {
            const uiLayoutContent = document.querySelector('[data-ui-layout-content]');
            if (uiLayoutContent) {
                return uiLayoutContent;
            }

            const styledUIBox = document.querySelector('[class*="StyledUIBox"]');
            if (styledUIBox) {
                const firstChild = styledUIBox.children[0];
                if (firstChild) {
                    return firstChild;
                }
            }

            // body 전체에서 검색 (fallback)
            return document.body;
        };

        const contentContainer = findUILayoutContent();
        const headingElements = contentContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');

        const headingData = Array.from(headingElements).map((element, index) => {
            const id = element.id || `heading-${index}`;
            if (!element.id) {
                element.id = id;
            }
            return {
                id,
                text: element.textContent.trim(),
                level: parseInt(element.tagName.charAt(1)),
                element,
            };
        });

        setHeadings(headingData);

        // 현재 보이는 헤딩 감지
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveHeading(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -70% 0px',
                threshold: 0,
            }
        );

        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const scrollToHeading = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const renderNavLink = (heading) => {
        const { key, ...props } = {
            onClick: () => scrollToHeading(heading.id),
            $isActive: activeHeading === heading.id,
        };

        switch (heading.level) {
            case 1:
                return (
                    <NavLinkH1 key={heading.id} {...props}>
                        {heading.text}
                    </NavLinkH1>
                );
            case 2:
                return (
                    <NavLinkH2 key={heading.id} {...props}>
                        {heading.text}
                    </NavLinkH2>
                );
            case 3:
                return (
                    <NavLinkH3 key={heading.id} {...props}>
                        {heading.text}
                    </NavLinkH3>
                );
            case 4:
                return (
                    <NavLinkH4 key={heading.id} {...props}>
                        {heading.text}
                    </NavLinkH4>
                );
            default:
                return (
                    <NavLink key={heading.id} {...props}>
                        {heading.text}
                    </NavLink>
                );
        }
    };

    if (headings.length === 0) {
        return null;
    }

    return (
        <QuickNavContainer>
            <NavTitle>목차</NavTitle>
            <NavList>{headings.map(renderNavLink)}</NavList>
        </QuickNavContainer>
    );
}
