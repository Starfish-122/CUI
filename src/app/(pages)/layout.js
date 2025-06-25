import '@/styles/pages/pages.scss';

export default function PagesLayout({ children }) {
    return (
        <div className="pages-layout">
            <article>{children}</article>
        </div>
    );
}
