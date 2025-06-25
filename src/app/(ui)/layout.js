'use client';

import '@/styles/pages/ui.scss';
import Sidebar from '@/components/templates/Sidebar';
import { useState } from 'react';

export default function UiLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);

        const event = new CustomEvent('toggle-sidebar');
        window.dispatchEvent(event);
    };

    return (
        <>
            <div className="ui">
                <div className="ui__header">
                    <button
                        className="ui__hamburger"
                        onClick={toggleSidebar}
                        aria-label="메뉴 토글"
                    >
                        <span className="ui__hamburger-line"></span>
                        <span className="ui__hamburger-line"></span>
                        <span className="ui__hamburger-line"></span>
                    </button>
                </div>

                <article>{children}</article>
            <Sidebar />
            </div>
        </>
    );
}
