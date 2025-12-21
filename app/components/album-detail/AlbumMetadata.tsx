'use client';

import { Mic2, Disc, Globe, BarChart3, Sparkles } from 'lucide-react';

export default function AlbumMetadata() {
    return (
        <div className="space-y-6">
            {/* AI Insights Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-violet-900/20 border border-indigo-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles className="w-24 h-24" />
                </div>

                <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-widest">AI Insights</h3>
                </div>

                <div className="space-y-4">
                    <div>
                        <p className="text-xs text-indigo-200/60 mb-1">Items Tone</p>
                        <p className="text-white font-medium">Melancholic, Cinematic, Retro-Noir</p>
                    </div>
                    <div>
                        <p className="text-xs text-indigo-200/60 mb-1">Best Time to Listen</p>
                        <p className="text-white font-medium">Late Night (2 AM - 4 AM)</p>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-4">
                        <div className="h-full w-[80%] bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                    </div>
                    <p className="text-right text-[10px] text-gray-400 mt-1">80% Energy Match</p>
                </div>
            </div>

            {/* Basic Stats */}
            <div className="p-6 rounded-3xl bg-[#13192E] border border-white/5">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Details</h3>

                <ul className="space-y-4">
                    <li className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-3 text-gray-400"><Disc className="w-4 h-4" /> Genre</span>
                        <span className="text-white font-medium">R&B / Soul</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-3 text-gray-400"><BarChart3 className="w-4 h-4" /> Mood</span>
                        <span className="text-white font-medium">Chill, Emotional</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-3 text-gray-400"><Globe className="w-4 h-4" /> Language</span>
                        <span className="text-white font-medium">English</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-3 text-gray-400"><Mic2 className="w-4 h-4" /> Label</span>
                        <span className="text-white font-medium">XO / Republic</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
