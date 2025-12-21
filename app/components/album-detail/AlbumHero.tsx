'use client';

import { Play, Heart, Share2, MoreHorizontal } from 'lucide-react';

export default function AlbumHero() {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-end mb-12 animate-in fade-in duration-700">
            {/* Cover Art */}
            <div className="group relative w-full md:w-[300px] aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-red-900/20">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
                {/* Noise */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                    <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                </button>
            </div>

            {/* Info */}
            <div className="flex-1">
                <h4 className="text-red-400 font-bold uppercase tracking-widest text-xs mb-2">Editor's Pick</h4>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">Old Song</h1>

                <div className="flex items-center gap-2 text-gray-300 text-lg mb-8">
                    <span className="text-white font-bold">The Weeknd</span>
                    <span>•</span>
                    <span>2020</span>
                    <span>•</span>
                    <span className="text-gray-400 text-sm">14 Tracks, 56 min</span>
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-8 py-3.5 bg-red-600 text-white rounded-full font-bold hover:bg-red-500 hover:scale-105 transition-all shadow-lg shadow-red-900/30 flex items-center gap-2">
                        <Play className="w-5 h-5 fill-current" />
                        Play Album
                    </button>

                    <button className="p-3.5 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors" title="Save to Favorites">
                        <Heart className="w-6 h-6" />
                    </button>
                    <button className="p-3.5 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors" title="Share">
                        <Share2 className="w-6 h-6" />
                    </button>
                    <button className="p-3.5 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors">
                        <MoreHorizontal className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
