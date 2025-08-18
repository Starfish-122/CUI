'use client';

import { Heading, Section, Box, FlexContainer, Table } from './UIStyles';

interface ContentSectionProps {
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}

export const H2 = Heading.H2;
export const H3 = Heading.H3;
export const H4 = Heading.H4;

export const ContentSection = ({ children, className, ...props }: ContentSectionProps) => {
    return <Section {...props}>{children}</Section>;
};

export const UISection = Section;

export const UIBox = Box;

export const UIFlex = FlexContainer;
export const UITable = Table;

const CoreComponents = {
    H2,
    H3,
    H4,
    ContentSection,
    UISection,
    UIBox,
    UIFlex,
    UITable,
};

export default CoreComponents;
