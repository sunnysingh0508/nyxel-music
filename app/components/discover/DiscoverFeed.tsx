'use client';

import { MoreHorizontal, Play, Heart, Plus } from 'lucide-react';

export default function DiscoverFeed() {
    const items = [
        { type: 'TRACK', title: 'Midnight City', artist: 'M83', tag: 'Electronic', color: 'bg-purple-900/20' },
        { type: 'ALBUM', title: 'After Hours', artist: 'The Weeknd', tag: 'R&B', color: 'bg-red-900/20' },
        { type: 'ARTIST', title: 'Daft Punk', artist: 'Discovery', tag: 'Legend', color: 'bg-blue-900/20' },
        { type: 'TRACK', title: 'Nightcall', artist: 'Kavinsky', tag: 'Synthwave', color: 'bg-fuchsia-900/20' },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-2">Discovery Feed</h2>

            {items.map((item, idx) => (
                <div key={idx} className={`p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden ${item.color}`}>
                    <div className="absolute top-4 right-4">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex gap-6 items-center relative z-10">
                        <div className="w-24 h-24 rounded-2xl bg-black/40 shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                            {/* Placeholder Art */}
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <span className="text-xs font-bold text-white/50">{item.type[0]}</span>
                            </div>
                        </div>

                        <div className="flex-1">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">{item.type} • {item.tag}</span>
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">{item.title}</h3>
                            <p className="text-gray-300 font-medium mb-4">{item.artist}</p>

                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                <button className="px-4 py-2 bg-white text-black rounded-full text-xs font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                                    <Play className="w-3 h-3 fill-current" /> Play
                                </button>
                                <button className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                                    <Heart className="w-4 h-4" />
                                </button>
                                <button className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
