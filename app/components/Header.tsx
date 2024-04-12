'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const Header = () => {
    const pathname = usePathname()

    return (
        <header>
            <nav>
                <ul className="flex gap-8 p-4 text-lg">
                    <li>
                        <Link href="/">Property App</Link>
                    </li>
                    <li>
                        <Link className={`${pathname === '/listings' ? 'text-blue-700' : ''}`}
                              href="/listings">Sandbox</Link>
                    </li>
                    <li>
                        <Link className={`${pathname === '/local-listings' ? 'text-blue-700' : ''}`}
                              href="/local-listings">Local</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
