import React, { useState, useEffect } from 'react';
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

export default function QuickNav() {
    const [headings, setHeadings] = useState([]);
    const [activeHeading, setActiveHeading] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        // 페이지 전환 시 상태 초기화
        setHeadings([]);
        setActiveHeading('');

        // 페이지 로드 후 헤딩 찾기
        const findHeadings = () => {
            const uiLayoutContent = document.querySelector('[data-ui-layout-content]');

            if (!uiLayoutContent) {
                console.log('data-ui-layout-content 없다고???');
                return [];
            }

            const headings = uiLayoutContent.querySelectorAll('h2, h3, h4, h5, h6');

            // console.log('찾은 해딩 태그 :', headings.length);

            // 각 헤딩의 정보를 로그로 출력
            // headings.forEach((heading, index) => {
            //     console.log(`Heading ${index + 1}:`, {
            //         tagName: heading.tagName,
            //         text: heading.textContent.trim(),
            //         id: heading.id,
            //         className: heading.className,
            //     });
            // });

            return Array.from(headings);
        };

        // 페이지 로드 후 지연을 두고 헤딩을 찾기
        const timer = setTimeout(() => {
            const headingElements = findHeadings();

            // 현재 페이지 이름 추출 (예: /ui/button -> button)
            const pageName = pathname.split('/').pop() || 'page';

            const headingData = headingElements.map((element, index) => {
                const id = element.id || `heading-${pageName}-${index}`;
                if (!element.id) {
                    element.id = id;
                }
                console.log('id :', id);
                console.log('element :', element);
                return {
                    id,
                    text: element.textContent.trim(),
                    level: parseInt(element.tagName.charAt(1)),
                    element,
                };
            });

            // console.log('헤딩 데이터 :', headingData);
            setHeadings(headingData);

            // 보이는 헤딩 감지
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveHeading(entry.target.id);
                        }
                    });
                },
                {
                    rootMargin: '-10% 0px -80% 0px',
                    threshold: 0,
                }
            );

            headingElements.forEach((element) => observer.observe(element));

            return () => observer.disconnect();
        }, 300);

        return () => clearTimeout(timer);
    }, [pathname]); // pathname이 변경될 때마다 실행

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
