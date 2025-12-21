'use client';

import { Filter, ChevronDown, ArrowUpDown } from 'lucide-react';

export default function AlbumsHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Albums</h1>
                <p className="text-gray-400 text-lg">Dive into curated sound collections</p>
            </div>

            <div className="flex items-center gap-4">
                {/* Filter Dropdown */}
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group">
                    <Filter className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">Genre</span>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-300" />
                </button>

                {/* Sort Dropdown */}
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group">
                    <ArrowUpDown className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">Trending</span>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-300" />
                </button>
            </div>
        </div>
    );
}
