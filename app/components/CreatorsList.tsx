'use client';

import { UserPlus, MoreHorizontal } from 'lucide-react';

export default function CreatorsList() {
    const creators = [
        { id: 1, name: 'Midnight Tales', category: 'Podcast', followers: '2.4M', color: 'from-purple-500 to-indigo-500' },
        { id: 2, name: 'Lofi Girl', category: 'Music', followers: '1.8M', color: 'from-pink-500 to-rose-500' },
        { id: 3, name: 'The Daily', category: 'News', followers: '1.2M', color: 'from-blue-500 to-cyan-500' },
        { id: 4, name: 'Tech Talk', category: 'Technology', followers: '900K', color: 'from-emerald-500 to-teal-500' },
        { id: 5, name: 'Mindset', category: 'Education', followers: '850K', color: 'from-orange-500 to-amber-500' },
    ];

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Top Creators</h2>
                <button className="text-sm text-gray-400 hover:text-white transition-colors">View All</button>
            </div>

            <div className="space-y-4">
                {creators.map((creator, index) => (
                    <div key={creator.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer border border-transparent hover:border-white/5">
                        <span className="text-lg font-bold text-gray-600 w-4 text-center group-hover:text-violet-400 transition-colors">
                            {index + 1}
                        </span>

                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${creator.color} p-0.5`}>
                            <div className="w-full h-full bg-[#0B0F1A] rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-white/20 transition-all">
                                <span className="text-xs font-bold text-white">{creator.name.substring(0, 1)}</span>
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3 className="font-semibold text-white group-hover:text-violet-300 transition-colors">{creator.name}</h3>
                            <p className="text-xs text-gray-500">{creator.category} • {creator.followers}</p>
                        </div>

                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                            <UserPlus className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
