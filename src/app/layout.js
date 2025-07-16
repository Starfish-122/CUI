import ClientLayout from '@/components/templates/ClientLayout';

export const metadata = {
    title: 'CUI',
    description: 'Next.js 웹 애플리케이션',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap',
        },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
