'use client';

import { Play, Headset, Podcast, CheckCircle } from 'lucide-react';

export default function ActivityFeed() {
    const activities = [
        { id: 1, type: 'played', title: 'Starboy', artist: 'The Weeknd', time: '2m ago', image: 'from-blue-600 to-violet-600' },
        { id: 2, type: 'uploaded', title: 'Tech Trends 2024', artist: 'Marques Brownlee', time: '2h ago', image: 'from-emerald-500 to-teal-500' },
        { id: 3, type: 'liked', title: 'Nightcall', artist: 'Kavinsky', time: '5h ago', image: 'from-pink-600 to-rose-600' },
        { id: 4, type: 'followed', title: 'Lex Fridman', artist: 'Podcast Host', time: '1d ago', image: 'from-stone-700 to-stone-900' },
    ];

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Activity</h2>
            </div>

            <div className="relative space-y-6">
                {/* Timeline Line */}
                <div className="absolute left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-white/10 to-transparent"></div>

                {activities.map((item, index) => (
                    <div key={item.id} className="relative flex items-center gap-4 group">
                        {/* Timeline Dot */}
                        <div className="absolute left-[23px] w-2 h-2 rounded-full bg-violet-500 ring-4 ring-[#0B0F1A] pb-1 z-10"></div>

                        {/* Card */}
                        <div className="ml-12 flex-1 flex items-center gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-white/10 glass-card">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.image} flex items-center justify-center shrink-0`}>
                                {item.type === 'played' && <Headset className="w-5 h-5 text-white" />}
                                {item.type === 'uploaded' && <Podcast className="w-5 h-5 text-white" />}
                                {item.type === 'liked' && <CheckCircle className="w-5 h-5 text-white" />}
                                {item.type === 'followed' && <CheckCircle className="w-5 h-5 text-white" />}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-sm font-bold text-white truncate pr-2">{item.title}</h4>
                                    <span className="text-[10px] text-gray-500 whitespace-nowrap">{item.time}</span>
                                </div>
                                <p className="text-xs text-gray-400 truncate">{item.artist}</p>
                            </div>

                            <button className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Play className="w-3 h-3 fill-current ml-0.5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
