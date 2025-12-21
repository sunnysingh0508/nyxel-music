'use client';

import { Flame } from 'lucide-react';

export default function TrendingNow() {
    const trending = [
        { id: 1, title: 'Starboy', artist: 'The Weeknd' },
        { id: 2, title: 'Paint The Town Red', artist: 'Doja Cat' },
        { id: 3, title: 'vampire', artist: 'Olivia Rodrigo' },
    ];

    return (
        <div className="bg-[#13192E]/30 rounded-3xl p-6 border border-white/5">
            <div className="flex items-center gap-2 mb-6 text-orange-400 font-bold uppercase tracking-wider text-xs">
                <Flame className="w-4 h-4" />
                Rising Now
            </div>

            <div className="space-y-4">
                {trending.map((track, idx) => (
                    <div key={idx} className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                        <span className="text-orange-500 font-bold text-sm">#{idx + 1}</span>
                        <div className="flex-1">
                            <h4 className="font-bold text-white text-sm">{track.title}</h4>
                            <p className="text-xs text-gray-500">{track.artist}</p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
