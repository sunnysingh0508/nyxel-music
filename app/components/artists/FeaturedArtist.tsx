'use client';

import { Play, UserPlus, Music2, Users, Radio, CheckCircle2 } from 'lucide-react';

export default function FeaturedArtist() {
    return (
        <div className="mb-16 relative w-full aspect-[2/1] md:aspect-[3/1] rounded-3xl overflow-hidden group">
            {/* Background Image / Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-indigo-900 to-[#0B0F1A]">
                {/* Placeholder for Artist Image */}
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-pink-500/20 to-transparent opacity-50"></div>
                {/* Noise Texture Overlay could go here */}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/50 to-transparent"></div>

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start z-10">
                <div className="flex items-center gap-2 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="px-3 py-1 rounded-full bg-violet-500/20 backdrop-blur-md border border-violet-500/20 text-xs font-bold text-violet-300 uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Artist
                    </span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                    Kendrick Lamar
                </h2>

                <p className="text-gray-300 max-w-xl text-lg mb-8 line-clamp-2 md:line-clamp-none animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    The voice of a generation. Explore the discography of one of the most influential lyricists in modern hip-hop history.
                </p>

                <div className="flex items-center gap-8 mb-8 text-sm font-medium text-gray-400 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-white font-bold">45M</span> Followers
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio className="w-4 h-4 text-gray-500" />
                        <span className="text-white font-bold">62M</span> Monthly Listeners
                    </div>
                    <div className="flex items-center gap-2">
                        <Music2 className="w-4 h-4 text-gray-500" />
                        <span className="text-white font-bold">5</span> Albums
                    </div>
                </div>

                <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                    <button className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        <Play className="w-5 h-5 fill-current" />
                        Play Top Tracks
                    </button>
                    <button className="flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105">
                        <UserPlus className="w-5 h-5" />
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
}
