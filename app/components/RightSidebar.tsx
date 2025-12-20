'use client';

import { Play, SkipBack, SkipForward, Heart, Plus, Volume2, Mic2 } from 'lucide-react';
import Image from 'next/image';

export default function RightSidebar() {
    return (
        <aside className="fixed right-0 top-0 h-screen w-80 bg-[#0B0F1A] border-l border-white/5 flex flex-col p-6 hidden xl:flex z-50">
            <h3 className="text-lg font-bold text-white mb-6">Now Playing</h3>

            {/* Album Art Card */}
            <div className="relative aspect-square w-full rounded-full overflow-hidden mb-8 group shadow-[0_0_30px_rgba(139,92,246,0.3)] border-4 border-[#1A1033]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                {/* Placeholder for Album Art - Using a gradient for now if no image */}
                <div className="w-full h-full bg-gradient-to-br from-violet-600 to-indigo-900 flex items-center justify-center animate-[spin_10s_linear_infinite] group-hover:paused">
                    <Mic2 className="w-16 h-16 text-white/50" />
                </div>

                {/* Needle/Arm overlay could go here for record player vibe */}
            </div>

            <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-white truncate px-2 mb-1">Midnight City</h4>
                <p className="text-gray-400 text-sm truncate">M83 • Hurry Up, We're Dreaming</p>
            </div>

            {/* Progress */}
            <div className="mb-6 space-y-2">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer group">
                    <div className="h-full w-1/3 bg-white group-hover:bg-violet-400 rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-lg"></div>
                    </div>
                </div>
                <div className="flex justify-between text-xs font-medium text-gray-500">
                    <span>1:24</span>
                    <span>4:03</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mb-8">
                <button className="text-gray-400 hover:text-white transition-colors">
                    <SkipBack className="w-6 h-6" />
                </button>
                <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform hover:shadow-lg hover:shadow-white/20">
                    <Play className="w-6 h-6 fill-current ml-1" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                    <SkipForward className="w-6 h-6" />
                </button>
            </div>

            {/* Volume & Actions */}
            <div className="mt-auto bg-white/5 rounded-2xl p-4 space-y-4">
                <div className="flex items-center gap-3">
                    <Volume2 className="w-4 h-4 text-gray-400" />
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gray-400 rounded-full"></div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-300 transition-colors flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add to List
                    </button>
                </div>
            </div>
        </aside>
    );
}
