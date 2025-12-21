'use client';

import { Heart, Search, Filter } from 'lucide-react';

export default function FavoritesHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight flex items-center gap-3">
                    Favorites
                    <span className="p-2 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        <Heart className="w-6 h-6 fill-current" />
                    </span>
                </h1>
                <p className="text-gray-400 text-lg">Saved with intention.</p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-64 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-rose-400 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search collection..."
                        className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-rose-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600 text-gray-200"
                    />
                </div>

                <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:text-white text-gray-400 transition-colors">
                    <Filter className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
