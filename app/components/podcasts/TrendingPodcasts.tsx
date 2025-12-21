'use client';

import { TrendingUp, Plus } from 'lucide-react';

export default function TrendingPodcasts() {
    const trending = [
        { id: 1, name: 'Lex Fridman Podcast', host: 'Lex Fridman', growth: '+18%' },
        { id: 2, name: 'Modern Wisdom', host: 'Chris Williamson', growth: '+12%' },
        { id: 3, name: 'Diary of a CEO', host: 'Steven Bartlett', growth: '+9%' },
        { id: 4, name: 'Flagrant', host: 'Andrew Schulz', growth: '+7%' },
        { id: 5, name: 'The Daily', host: 'New York Times', growth: '+5%' },
    ];

    return (
        <div className="bg-[#13192E]/50 rounded-3xl p-6 border border-white/5 h-fit sticky top-6">
            <div className="flex items-center gap-2 mb-6 text-violet-400 font-bold uppercase tracking-wider text-xs">
                <TrendingUp className="w-4 h-4" />
                Trending Shows
            </div>

            <div className="space-y-6">
                {trending.map((show, index) => (
                    <div key={show.id} className="flex items-center gap-4 group cursor-pointer">
                        <span className={`text-lg font-bold w-4 text-center ${index < 3 ? 'text-white' : 'text-gray-600'}`}>
                            {index + 1}
                        </span>

                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 shrink-0">
                            {/* Img placeholder */}
                        </div>

                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-white text-sm truncate group-hover:text-violet-300 transition-colors">{show.name}</h4>
                            <p className="text-xs text-gray-500 truncate">{show.host}</p>
                        </div>

                        <div className="text-xs text-green-400 font-mono">
                            {show.growth}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
