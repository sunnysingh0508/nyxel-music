'use client';

import { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, ChevronUp, Star, CreditCard, Heart, Upload } from 'lucide-react';
import Link from 'next/link';

export default function UserMiniProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative px-4 pb-6 mt-auto w-full" ref={dropdownRef}>
            {/* Dropdown Menu */}
            <div
                className={`
          absolute bottom-full left-4 right-4 mb-2 
          bg-[#1A1033]/90 backdrop-blur-xl border border-white/10 
          rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10
          transition-all duration-300 origin-bottom transform z-50
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}
        `}
            >
                <div className="p-2 space-y-1">
                    <Link href="/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors group">
                        <User className="w-4 h-4 group-hover:text-violet-400 transition-colors" />
                        <span className="text-sm font-medium">View Profile</span>
                    </Link>
                    <Link href="/uploads" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors group">
                        <Upload className="w-4 h-4 group-hover:text-violet-400 transition-colors" />
                        <span className="text-sm font-medium">My Uploads</span>
                    </Link>
                    <Link href="/favorites" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors group">
                        <Heart className="w-4 h-4 group-hover:text-pink-400 transition-colors" />
                        <span className="text-sm font-medium">Favorites</span>
                    </Link>
                    <div className="h-px bg-white/5 my-1" />
                    <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors group">
                        <Settings className="w-4 h-4 group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium">Settings</span>
                    </Link>
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-500/10 text-gray-300 hover:text-red-400 transition-colors group">
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm font-medium">Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-3 p-2 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300 group min-w-max"
            >
                {/* Avatar */}
                <div className="relative shrink-0">
                    <div className={`
                w-10 h-10 rounded-full 
                bg-gradient-to-br from-violet-600 to-indigo-600 
                flex items-center justify-center 
                shadow-lg shadow-violet-500/20 
                group-hover:scale-105 group-hover:shadow-violet-500/40 
                transition-all duration-300
                ${isOpen ? 'ring-2 ring-violet-500/50' : ''}
            `}>
                        <User className="w-5 h-5 text-white/90" />
                    </div>
                    {/* Online Status Dot */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#0B0F1A] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Text Info */}
                <div className="flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 overflow-hidden">
                    <span className="text-sm font-semibold text-white tracking-wide truncate max-w-[100px] group-hover:text-white/90 transition-colors">
                        Sunny singh
                    </span>

                    <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="h-4 px-2 rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center gap-1">
                            <Star className="w-2 h-2 text-violet-400 fill-current" />
                            <span className="text-[9px] font-bold text-violet-200 uppercase tracking-widest leading-none pt-0.5">Premium</span>
                        </div>
                    </div>
                </div>

                {/* Chevron */}
                {/* <ChevronUp className={`w-4 h-4 text-gray-500 ml-auto transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} opacity-0 group-hover:opacity-100`} /> */}
            </button>
        </div>
    );
}
