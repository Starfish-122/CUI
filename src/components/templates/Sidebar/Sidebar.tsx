'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { sidebarCategories } from '@/routes/config';
import {
    SidebarContainer,
    SidebarContent,
    CategoryList,
    CategoryItem,
    CategoryHeader,
    CategoryIcon,
    ItemsList,
    Item,
    ItemLink,
    SidebarOverlay,
} from './styles';

export interface SidebarProps {
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
}

interface Category {
    id: string;
    name: string;
    items: Array<{
        name: string;
        path: string;
    }>;
}

interface ExpandedCategories {
    [key: string]: boolean;
}

const TABLET_BREAKPOINT = 1024;
const SIDEBAR_WIDTH = 240;
const SIDEBAR_OFFSET = 280;

const isUIComponentPage = (pathname: string): boolean => {
    // (ui) 폴더의 하위 경로인지 확인
    // /guide는 제외하고, 루트 경로가 아닌 모든 경로를 (ui) 폴더로 간주
    return pathname !== '/' && pathname !== '/guide' && pathname.split('/').length === 2;
};

const checkIsTablet = (): boolean => {
    return window.innerWidth < TABLET_BREAKPOINT;
};

interface CategoryComponentProps {
    category: Category;
    isExpanded: boolean;
    onToggle: (categoryId: string) => void;
    pathname: string;
}

const CategoryComponent = ({
    category,
    isExpanded,
    onToggle,
    pathname,
}: CategoryComponentProps) => {
    const handleToggle = useCallback(() => {
        onToggle(category.id);
    }, [category.id, onToggle]);

    return (
        <CategoryItem key={category.id}>
            <CategoryHeader $expanded={isExpanded} onClick={handleToggle}>
                <span>{category.name}</span>
                <CategoryIcon>{isExpanded ? '▼' : '▶'}</CategoryIcon>
            </CategoryHeader>

            {isExpanded && (
                <ItemsList>
                    {category.items.map((item) => (
                        <Item key={item.path}>
                            <ItemLink href={item.path} $isActive={pathname === item.path}>
                                {item.name}
                            </ItemLink>
                        </Item>
                    ))}
                </ItemsList>
            )}
        </CategoryItem>
    );
};

export default function Sidebar() {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isTablet, setIsTablet] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const [expandedCategories, setExpandedCategories] = useState<ExpandedCategories>({
        completed: true,
        'in-progress': false,
        planned: false,
    });

    useEffect(() => {
        const handleResize = () => {
            const tablet = checkIsTablet();
            setIsTablet(tablet);
            setIsSidebarOpen(!tablet);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleCategory = useCallback((categoryId: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }));
    }, []);

    const toggleSidebar = useCallback(() => {
        setIsSidebarOpen((prev) => {
            const newState = !prev;

            const event = new CustomEvent('sidebar-state-changed', {
                detail: { isOpen: newState },
            });
            window.dispatchEvent(event);
            return newState;
        });
    }, []);

    const closeSidebar = useCallback(() => {
        if (isTablet) {
            setIsSidebarOpen(false);

            const event = new CustomEvent('sidebar-state-changed', { detail: { isOpen: false } });
            window.dispatchEvent(event);
        }
    }, [isTablet]);

    useEffect(() => {
        const handleToggleEvent = () => {
            toggleSidebar();
        };

        window.addEventListener('toggle-sidebar', handleToggleEvent);

        return () => {
            window.removeEventListener('toggle-sidebar', handleToggleEvent);
        };
    }, [toggleSidebar]);

    useEffect(() => {
        if (isTablet) {
            closeSidebar();
        }
    }, [pathname, isTablet, closeSidebar]);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const hamburger = document.querySelector('.header__hamburger');
            const target = event.target as Node;

            if (
                isTablet &&
                isSidebarOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(target) &&
                hamburger &&
                !hamburger.contains(target)
            ) {
                closeSidebar();
            }
        };

        if (isSidebarOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isSidebarOpen, isTablet, closeSidebar]);

    if (!isUIComponentPage(pathname)) {
        return null;
    }

    return (
        <>
            {isTablet && <SidebarOverlay $visible={isSidebarOpen} onClick={closeSidebar} />}

            <SidebarContainer
                ref={sidebarRef}
                $isOpen={isSidebarOpen}
                data-sidebar={isSidebarOpen ? 'open' : 'closed'}
            >
                {/* <SidebarHeaderComponent isTablet={isTablet} onClose={closeSidebar} /> */}

                <SidebarContent>
                    <CategoryList>
                        {sidebarCategories.map((category) => (
                            <CategoryComponent
                                key={category.id}
                                category={category}
                                isExpanded={expandedCategories[category.id]}
                                onToggle={toggleCategory}
                                pathname={pathname}
                            />
                        ))}
                    </CategoryList>
                </SidebarContent>
            </SidebarContainer>
        </>
    );
}
