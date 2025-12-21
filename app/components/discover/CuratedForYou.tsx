'use client';

import { Play } from 'lucide-react';

export default function CuratedForYou() {
    return (
        <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Curated For You</h2>
                <span className="text-xs font-mono text-cyan-400 border border-cyan-500/30 px-2 py-1 rounded">AI GENERATED</span>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="min-w-[300px] md:min-w-[400px] bg-[#13192E] p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group cursor-pointer relative overflow-hidden">
                        <div className="relative z-10 flex gap-6 items-center">
                            <div className="relative h-32 w-32 shrink-0">
                                <div className="absolute top-0 left-0 w-28 h-28 bg-gray-700 rounded-xl rotate-[-6deg] z-0"></div>
                                <div className="absolute top-2 left-2 w-28 h-28 bg-gray-600 rounded-xl rotate-[-3deg] z-10"></div>
                                <div className="absolute top-4 left-4 w-28 h-28 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl z-20 shadow-xl flex items-center justify-center">
                                    <span className="font-bold text-4xl text-white/20">Mix</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-2">Based on "The Weeknd"</p>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Late Night <br />Synthwave</h3>
                                <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-violet-300 transition-colors mt-2">
                                    <Play className="w-4 h-4 fill-current" /> Play Mix
                                </button>
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-violet-600/20 blur-[80px] rounded-full group-hover:bg-violet-600/30 transition-colors"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
