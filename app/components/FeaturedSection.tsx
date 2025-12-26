'use client';

import { Play, UserPlus, CheckCircle2 } from 'lucide-react';

export default function FeaturedSection() {
    return (
        <div className="w-full aspect-square md:aspect-[2.5/1] relative rounded-3xl overflow-hidden group">
            {/* Background Image / Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1033] via-[#2A1B54] to-[#0B0F1A]">
                {/* Abstract shapes or placeholder image would go here */}
                <div className="absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-violet-900/20 to-transparent"></div>
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
                <div className="absolute left-20 bottom-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent opacity-90"></div>

            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end items-start z-10">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] md:text-xs font-medium text-white uppercase tracking-wider">Featured Artist</span>
                    <div className="flex items-center gap-1 text-blue-400 text-[10px] md:text-xs font-semibold">
                        <CheckCircle2 className="w-3 h-3 fill-current" />
                        <span>Verified</span>
                    </div>
                </div>

                <h1 className="text-3xl md:text-6xl font-black text-white mb-2 tracking-tight group-hover:scale-105 transition-transform origin-bottom-left duration-500">
                    THE WEEKND
                </h1>
                <p className="text-sm md:text-xl text-gray-300 mb-6 md:mb-8 max-w-lg font-light">
                    Experience the new era of synthesized soul. Listen to the exclusive premiere of "After Life".
                </p>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-8 py-3.5 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <Play className="w-5 h-5 fill-current" />
                        Play Now
                    </button>
                    <button className="flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all hover:scale-105">
                        <UserPlus className="w-5 h-5" />
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
}
