import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <a
                className="footer-link"
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
                Learn
            </a>
            <a
                className="footer-link"
                href="https://vercel.com/templates?framework=next.js"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
                Examples
            </a>
            <a
                className="footer-link"
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
                Go to nextjs.org →
            </a>
        </footer>
    );
}
