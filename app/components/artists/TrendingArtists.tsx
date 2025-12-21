'use client';

import { TrendingUp, UserPlus } from 'lucide-react';

export default function TrendingArtists() {
    const trending = [
        { id: 1, name: 'Central Cee', gain: '+12%', color: 'bg-orange-500' },
        { id: 2, name: 'Ice Spice', gain: '+8.5%', color: 'bg-pink-500' },
        { id: 3, name: 'Fred again..', gain: '+15%', color: 'bg-blue-500' },
        { id: 4, name: 'PinkPantheress', gain: '+6%', color: 'bg-fuchsia-500' },
        { id: 5, name: 'Olivia Rodrigo', gain: '+4%', color: 'bg-purple-500' },
    ];

    return (
        <div className="bg-[#140B2D]/50 rounded-3xl p-6 border border-white/5 h-fit sticky top-6">
            <div className="flex items-center gap-2 mb-6 text-violet-400 font-bold uppercase tracking-wider text-xs">
                <TrendingUp className="w-4 h-4" />
                Trending Now
            </div>

            <div className="space-y-6">
                {trending.map((artist, index) => (
                    <div key={artist.id} className="flex items-center gap-4 group cursor-pointer">
                        <span className={`text-lg font-bold w-4 text-center ${index < 3 ? 'text-white' : 'text-gray-600'}`}>
                            {index + 1}
                        </span>

                        <div className={`w-12 h-12 rounded-full ${artist.color} relative overflow-hidden`}>
                            {/* Img placeholder */}
                        </div>

                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-white text-sm truncate group-hover:text-violet-300 transition-colors">{artist.name}</h4>
                            <p className="text-xs text-green-400 font-medium flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                {artist.gain}
                            </p>
                        </div>

                        <button className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100">
                            <UserPlus className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
