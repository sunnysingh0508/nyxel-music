'use client';

import { Play, Plus, Clock, Users, Mic2, Star } from 'lucide-react';

export default function FeaturedPodcast() {
    return (
        <div className="mb-16 relative w-full aspect-[2/1] md:aspect-[3/1] rounded-3xl overflow-hidden group shadow-2xl shadow-violet-900/10">
            {/* Background with stylized waveform or gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-950 via-[#1A1033] to-[#0B0F1A]">
                {/* Placeholder for noise/texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                {/* Abstract glow */}
                <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="absolute inset-0 flex flex-col md:flex-row items-center p-8 md:p-12 gap-8 md:gap-12 relative z-10">
                {/* Cover Art */}
                <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden shadow-2xl relative group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center">
                        <Mic2 className="w-20 h-20 text-white/50" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="px-3 py-1 rounded-full bg-violet-500/20 backdrop-blur-md border border-violet-500/20 text-xs font-bold text-violet-300 uppercase tracking-wider flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            Editor's Pick
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                        The Creative Mind
                    </h2>

                    <p className="text-gray-300 text-lg mb-8 max-w-2xl line-clamp-2 md:line-clamp-none animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Deep dives into the psychology of creativity, innovation, and the stories behind the world's most visionary artists and entrepreneurs.
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-6 mb-8 text-sm font-medium text-gray-400 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="text-white">125K Followers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mic2 className="w-4 h-4 text-gray-500" />
                            <span className="text-white">42 Episodes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-white">45m Avg.</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                        <button className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            <Play className="w-5 h-5 fill-current" />
                            Play Latest
                        </button>
                        <button className="flex items-center gap-2 px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105">
                            <Plus className="w-5 h-5" />
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
