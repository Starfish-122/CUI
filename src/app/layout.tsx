import ClientLayout from '@/components/templates/ClientLayout';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    display: 'swap',
});

const materialIconsCSS = `
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=optional');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional');
`;

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
                {/* dangerouslySetInnerHTML : React에서 HTML 문자열을 직접 삽입할 때 사용하는 prop
                Next.js App Router에서는 <link> 태그로 폰트를 로드하면 경고가 발생
                대신 CSS @import를 사용해서 폰트를 로드
                dangerouslySetInnerHTML로 CSS 문자열을 <style> 태그 안에 삽입
                 */}
                <style dangerouslySetInnerHTML={{ __html: materialIconsCSS }} />
            </head>
            <body className={notoSansKR.className} suppressHydrationWarning>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
