import '@/styles/main.scss';
import Header from '@/components/templates/Header';
import Footer from '@/components/templates/Footer';

export const metadata = {
    title: 'CUI',
    description: 'Next.js 웹 애플리케이션',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                <div className="">
                    <Header />
                    <main className="main-content">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
