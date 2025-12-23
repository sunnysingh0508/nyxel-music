'use client';

import { Search, Bell, Settings, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-5 w-full">
            {/* Search */}
            <div className="flex-1 max-w-xl">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-violet-400 transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-full leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 sm:text-sm transition-all duration-300 shadow-lg shadow-black/20"
                        placeholder="Search for artists, songs, or podcasts..."
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6 ml-6">
                <Link href="/notifications">
                    <button className="relative p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-2 block h-2 w-2 rounded-full ring-2 ring-[#0B0F1A] bg-pink-500"></span>
                    </button>
                </Link>

                <Link href="/settings">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
                        <Settings className="w-5 h-5" />
                    </button>
                </Link>

                <div className="flex items-center gap-3 pl-3 border-l border-white/10">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-semibold text-white">Alex Doe</p>
                        <p className="text-xs text-gray-400">Premium</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm ring-2 ring-white/10 hover:ring-violet-500/50 transition-all">
                        <User className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
}
