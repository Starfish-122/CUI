import ClientLayout from '@/components/templates/ClientLayout';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    display: 'swap',
});

export const metadata = {
    title: 'CUI',
    description: 'Next.js 웹 애플리케이션',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <head>
                {/* Material Icons */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </head>
            <body className={notoSansKR.className} suppressHydrationWarning>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
