'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppRoutes } from '@/hooks/useAppRoutes';

export default function Header() {
    const currentPath = usePathname();
    const navLinks = useAppRoutes();

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <Link href="/" className="logo-link">
                        <h1 className="site-title">CUI</h1>
                    </Link>
                </div>
                <nav>
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`nav-link ${currentPath === link.href ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
