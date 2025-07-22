'use client';

import { Heading, Section, Box, FlexContainer } from './UIStyles';

// 헤딩 컴포넌트들 내보내기
export const H2 = Heading.H2;
export const H3 = Heading.H3;
export const H4 = Heading.H4;

// 섹션 컴포넌트 내보내기
export const ContentSection = ({ children, className, ...props }) => {
    return <Section {...props}>{children}</Section>;
};

// 기본 섹션 내보내기
export const UISection = Section;

// 박스 컴포넌트 내보내기
export const UIBox = Box;

// 플렉스 컨테이너 내보내기
export const UIFlex = FlexContainer;

// 모든 컴포넌트를 기본 내보내기
const CoreComponents = {
    H2,
    H3,
    H4,
    ContentSection,
    UISection,
    UIBox,
    UIFlex,
};

export default CoreComponents;
