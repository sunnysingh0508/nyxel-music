'use client';

import { Search, Filter, ChevronDown, Sparkles } from 'lucide-react';

export default function ArtistsHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight flex items-center gap-3">
                    Artists
                    <span className="p-2 rounded-full bg-violet-600/20 text-violet-400">
                        <Sparkles className="w-6 h-6" />
                    </span>
                </h1>
                <p className="text-gray-400 text-lg">Meet the voices behind the sound</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                {/* Search */}
                <div className="relative w-full md:w-72 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-violet-400 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search artists..."
                        className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all placeholder:text-gray-500 text-gray-200"
                    />
                </div>

                {/* Filter Dropdown */}
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group whitespace-nowrap w-full sm:w-auto justify-center">
                    <Filter className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">Genre</span>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-300" />
                </button>
            </div>
        </div>
    );
}
