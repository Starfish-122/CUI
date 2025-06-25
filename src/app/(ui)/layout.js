'use client';

import '@/styles/pages/ui.scss';
import Sidebar from '@/components/templates/Sidebar';

export default function UiLayout({ children }) {
    return (
        <>
            <Sidebar />
            <div className="ui">
                <article>{children}</article>
            </div>
        </>
    );
}
