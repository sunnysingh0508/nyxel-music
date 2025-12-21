'use client';

import { Play, Sparkles } from 'lucide-react';

export default function HiddenGems() {
    const gems = [
        { id: 1, title: 'Lost in the Echo', artist: 'Unknown Artist', views: '1.2k' },
        { id: 2, title: 'Cyber Dreams', artist: 'Neon Void', views: '850' },
        { id: 3, title: 'Night Walk', artist: 'City Lights', views: '2.4k' },
    ];

    return (
        <div className="bg-[#13192E]/30 rounded-3xl p-6 border border-white/5 mb-8">
            <div className="flex items-center gap-2 mb-6 text-cyan-400 font-bold uppercase tracking-wider text-xs">
                <Sparkles className="w-4 h-4" />
                Hidden Gems
            </div>

            <div className="space-y-4">
                {gems.map((gem) => (
                    <div key={gem.id} className="flex items-center gap-4 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-cyan-900/50 transition-colors">
                            <Play className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-white text-sm truncate group-hover:text-cyan-200 transition-colors">{gem.title}</h4>
                            <p className="text-xs text-gray-500 truncate">{gem.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
