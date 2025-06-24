import { Noto_Sans_KR, Geist_Mono } from 'next/font/google';
import '@/styles/main.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const notoSansKR = Noto_Sans_KR({
    variable: '--font-noto-sans-kr',
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata = {
    title: 'React Breakers',
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
            <body className={`${notoSansKR.variable} ${geistMono.variable}`}>
                <div className="container">
                    <Header />
                    <main className="main-content">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
