'use client';

import { Play, Heart, MoreHorizontal, Disc } from 'lucide-react';

interface FavoritesGridProps {
    activeMood: string;
    activeTab: string;
    vaultMode: boolean;
}

export default function FavoritesGrid({ activeMood, activeTab, vaultMode }: FavoritesGridProps) {
    // Mock items
    const items = [
        { title: 'Midnight City', artist: 'M83', type: 'Songs', mood: 'energetic', cover: 'bg-purple-500' },
        { title: 'After Hours', artist: 'The Weeknd', type: 'Albums', mood: 'dark', cover: 'bg-red-500' },
        { title: 'Take Care', artist: 'Drake', type: 'Albums', mood: 'calm', cover: 'bg-amber-500' },
        { title: 'Focus Flow', artist: 'Spotify', type: 'Podcasts', mood: 'focus', cover: 'bg-blue-500' },
        { title: 'Starboy', artist: 'The Weeknd', type: 'Songs', mood: 'energetic', cover: 'bg-fuchsia-500' },
        { title: 'Lover', artist: 'Taylor Swift', type: 'Albums', mood: 'calm', cover: 'bg-pink-500' },
    ];

    // Simple filter logic
    const filteredItems = items.filter(item => {
        const moodMatch = activeMood === 'all' || item.mood === activeMood;
        const tabMatch = activeTab === 'All' || item.type === activeTab;
        return moodMatch && tabMatch;
    });

    return (
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ${vaultMode ? 'opacity-80' : ''} transition-opacity duration-500`}>
            {filteredItems.map((item, idx) => (
                <div
                    key={idx}
                    className={`group relative rounded-3xl p-4 transition-all duration-300 ${vaultMode
                            ? 'bg-black/40 border border-white/5 hover:border-amber-500/30 blur-[1px] hover:blur-0'
                            : 'bg-[#13192E] border border-transparent hover:bg-white/5'
                        }`}
                >
                    <div className={`w-full aspect-square rounded-2xl ${item.cover} mb-4 relative shadow-lg group-hover:shadow-2xl transition-all overflow-hidden`}>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform">
                                <Play className="w-5 h-5 fill-current ml-0.5" />
                            </button>
                            <button className="p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                                <Heart className="w-5 h-5 fill-current text-rose-500" />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className={`font-bold text-white mb-1 truncate ${vaultMode ? 'text-gray-300 group-hover:text-amber-400' : ''}`}>{item.title}</h3>
                            <p className="text-xs text-gray-500">{item.artist}</p>
                        </div>

                        <button className="text-gray-500 hover:text-white transition-colors">
                            <MoreHorizontal className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
