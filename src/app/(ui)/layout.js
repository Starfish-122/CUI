'use client';

import '@/styles/pages/ui.scss';

export default function UiLayout({ children }) {
    return (
        <>
            <div className="ui">
                <article>{children}</article>
            </div>
        </>
    );
}
