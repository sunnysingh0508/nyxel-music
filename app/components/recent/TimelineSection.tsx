'use client';

import { Play, Music, Mic, Disc } from 'lucide-react';

export default function TimelineSection() {
    const history = [
        {
            label: 'Today',
            items: [
                { time: '2:45 PM', title: 'Midnight City', artist: 'M83', type: 'Track', icon: Music },
                { time: '1:30 PM', title: 'The Daily', artist: 'NYT', type: 'Podcast', icon: Mic },
                { time: '11:00 AM', title: 'Dawn FM', artist: 'The Weeknd', type: 'Album', icon: Disc },
            ]
        },
        {
            label: 'Yesterday',
            items: [
                { time: '8:00 PM', title: 'Lo-Fi Beats', artist: 'Spotify Studios', type: 'Playlist', icon: Disc },
                { time: '6:15 PM', title: 'Blinding Lights', artist: 'The Weeknd', type: 'Track', icon: Music },
            ]
        }
    ];

    return (
        <div className="max-w-3xl mb-32">
            {history.map((day, dIdx) => (
                <div key={dIdx} className="mb-8 last:mb-0 relative">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 sticky top-[80px] bg-[#0B0F1A]/95 backdrop-blur-sm py-2 z-20 w-fit px-3 rounded-lg border border-white/5">{day.label}</h3>

                    <div className="space-y-0 relative border-l border-white/10 ml-4 md:ml-6 pb-6 last:pb-0">
                        {day.items.map((item, iIdx) => (
                            <div key={iIdx} className="relative pl-8 md:pl-12 py-4 group cursor-pointer hover:bg-white/[0.02] rounded-r-2xl transition-colors">
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-indigo-500 group-hover:scale-125 transition-all border border-[#0B0F1A] ring-4 ring-[#0B0F1A]"></div>

                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                            <item.icon className="w-5 h-5" />
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-white text-base group-hover:text-indigo-300 transition-colors">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.artist} • {item.type}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <span className="text-xs font-mono text-gray-600 group-hover:text-gray-400 transition-colors hidden sm:block">{item.time}</span>

                                        <button className="p-3 rounded-full bg-white/5 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black">
                                            <Play className="w-4 h-4 fill-current ml-0.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
