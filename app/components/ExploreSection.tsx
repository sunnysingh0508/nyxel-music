'use client';

import { Play, MoreVertical } from 'lucide-react';
import { useState } from 'react';

export default function ExploreSection() {
    const tabs = ['Recently Played', 'Top Podcasts', 'New Releases', 'Editors Pick'];
    const [activeTab, setActiveTab] = useState('Recently Played');

    const items = [
        { id: 1, title: 'Neon Nights', creator: 'Cyber Dreams', duration: '45min', color: 'from-fuchsia-500 to-cyan-500' },
        { id: 2, title: 'Deep Focus', creator: 'Brain Waves', duration: '60min', color: 'from-violet-500 to-purple-500' },
        { id: 3, title: 'Tech Talk Daily', creator: 'Tech Insider', duration: '25min', color: 'from-blue-500 to-indigo-500' },
        { id: 4, title: 'Midnight Jazz', creator: 'Smooth Vibes', duration: '120min', color: 'from-amber-500 to-orange-500' },
    ];

    return (
        <div className="w-full">
            {/* Tabs */}
            <div className="flex items-center gap-6 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-sm font-semibold whitespace-nowrap transition-colors pb-2 border-b-2 ${activeTab === tab
                                ? 'text-white border-violet-500'
                                : 'text-gray-400 border-transparent hover:text-white'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {items.map((item) => (
                    <div key={item.id} className="group relative">
                        {/* Card Content */}
                        <div className="bg-[#1A1033] rounded-2xl p-3 hover:bg-[#251642] transition-colors border border-white/5">
                            {/* Artwork */}
                            <div className={`aspect-square w-full rounded-xl bg-gradient-to-br ${item.color} mb-3 relative overflow-hidden group-hover:shadow-lg group-hover:shadow-violet-500/10 transition-all`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
                                    <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                                        <Play className="w-5 h-5 fill-current ml-1" />
                                    </button>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-white text-sm truncate pr-2">{item.title}</h3>
                                    <p className="text-xs text-gray-400">{item.creator}</p>
                                </div>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <MoreVertical className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="mt-2 text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                                {item.duration}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
