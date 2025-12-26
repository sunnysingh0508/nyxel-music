'use client';

import Link from 'next/link';
import { Home, Compass, Library, Search, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
    const pathname = usePathname();

    const navItems = [
        { icon: Home, label: 'Home', href: '/' },
        { icon: Compass, label: 'Discover', href: '/discover' },
        { icon: Search, label: 'Search', href: '/search' },
        { icon: Library, label: 'Library', href: '/recent' },
        { icon: User, label: 'Profile', href: '/settings' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#0B0F1A]/80 backdrop-blur-xl border-t border-white/5 flex items-center justify-around px-2 z-50 md:hidden pb-safe">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${isActive ? 'text-violet-400' : 'text-gray-500'
                            }`}
                    >
                        <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''}`} />
                        <span className="text-[10px] font-medium uppercase tracking-tighter">
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
