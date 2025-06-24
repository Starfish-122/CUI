import '@/styles/pages/nav.scss';

export default function NavLayout({ children }) {
    return (
        <div className="nav-layout">
            <h2>네비게이션 헤더</h2>
            <article>{children}</article>
            <h3>네비게이션 푸터</h3>
        </div>
    );
}
