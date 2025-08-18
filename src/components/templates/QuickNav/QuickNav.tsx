import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import {
    QuickNavContainer,
    NavTitle,
    NavList,
    NavLink,
    NavLinkH2,
    NavLinkH3,
    NavLinkH4,
} from './styles';

interface HeadingData {
    id: string;
    text: string;
    level: number;
    element: HTMLElement;
}

interface NavLinkProps {
    heading: HeadingData;
    isActive: boolean;
    onClick: (id: string) => void;
}

const HEADING_SELECTOR = 'h2, h3, h4, h5, h6';
const UI_LAYOUT_CONTENT_SELECTOR = '[data-ui-layout-content]';
const OBSERVER_OPTIONS = {
    rootMargin: '-10% 0px -80% 0px',
    threshold: 0,
} as const;
const HEADING_FIND_DELAY = 300;

const findHeadings = (): HTMLElement[] => {
    const uiLayoutContent = document.querySelector(UI_LAYOUT_CONTENT_SELECTOR);

    if (!uiLayoutContent) {
        console.warn('data-ui-layout-content 요소를 찾을 수 없습니다.');
        return [];
    }

    const headings = uiLayoutContent.querySelectorAll(HEADING_SELECTOR);
    return Array.from(headings) as HTMLElement[];
};

const generateHeadingId = (element: HTMLElement, pageName: string, index: number): string => {
    return element.id || `heading-${pageName}-${index}`;
};

const processHeadingElement = (
    element: HTMLElement,
    pageName: string,
    index: number
): HeadingData => {
    const id = generateHeadingId(element, pageName, index);

    if (!element.id) {
        element.id = id;
    }

    return {
        id,
        text: element.textContent?.trim() || '',
        level: parseInt(element.tagName.charAt(1)),
        element,
    };
};

const getPageName = (pathname: string): string => {
    return pathname.split('/').pop() || 'page';
};

const NavLinkComponent = ({ heading, isActive, onClick }: NavLinkProps) => {
    const handleClick = useCallback(() => {
        onClick(heading.id);
    }, [heading.id, onClick]);

    const commonProps = {
        onClick: handleClick,
        $isActive: isActive,
    };

    switch (heading.level) {
        case 2:
            return (
                <NavLinkH2 key={heading.id} {...commonProps}>
                    {heading.text}
                </NavLinkH2>
            );
        case 3:
            return (
                <NavLinkH3 key={heading.id} {...commonProps}>
                    {heading.text}
                </NavLinkH3>
            );
        case 4:
            return (
                <NavLinkH4 key={heading.id} {...commonProps}>
                    {heading.text}
                </NavLinkH4>
            );
        default:
            return (
                <NavLink key={heading.id} {...commonProps}>
                    {heading.text}
                </NavLink>
            );
    }
};

export default function QuickNav() {
    const [headings, setHeadings] = useState<HeadingData[]>([]);
    const [activeHeading, setActiveHeading] = useState<string>('');
    const pathname = usePathname();

    const scrollToHeading = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, []);

    const processHeadings = useCallback((pageName: string) => {
        const headingElements = findHeadings();
        const headingData = headingElements.map((element, index) =>
            processHeadingElement(element, pageName, index)
        );

        setHeadings(headingData);

        // Intersection Observer 설정
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveHeading(entry.target.id);
                }
            });
        }, OBSERVER_OPTIONS);

        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setHeadings([]);
        setActiveHeading('');

        const pageName = getPageName(pathname);

        const timer = setTimeout(() => {
            processHeadings(pageName);
        }, HEADING_FIND_DELAY);

        return () => clearTimeout(timer);
    }, [pathname, processHeadings]);

    if (headings.length === 0) {
        return null;
    }

    return (
        <QuickNavContainer>
            <NavTitle>목차</NavTitle>
            <NavList>
                {headings.map((heading) => (
                    <NavLinkComponent
                        key={heading.id}
                        heading={heading}
                        isActive={activeHeading === heading.id}
                        onClick={scrollToHeading}
                    />
                ))}
            </NavList>
        </QuickNavContainer>
    );
}
