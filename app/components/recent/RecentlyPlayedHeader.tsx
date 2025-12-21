'use client';

import { History, ListFilter, Trash2 } from 'lucide-react';

export default function RecentlyPlayedHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight flex items-center gap-3">
                    Recently Played
                    <span className="p-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <History className="w-6 h-6" />
                    </span>
                </h1>
                <p className="text-gray-400 text-lg">Continue where the sound paused.</p>
            </div>

            <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium text-gray-300">
                    <ListFilter className="w-4 h-4" />
                    Sort
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-colors text-sm font-medium text-red-400">
                    <Trash2 className="w-4 h-4" />
                    Clear
                </button>
            </div>
        </div>
    );
}
