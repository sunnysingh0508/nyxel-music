'use client';

import { Play, Pause } from 'lucide-react';

export default function ContinueListeningCarousel() {
    const items = [
        { title: 'The Daily', subtitle: 'Podcast • 15m left', progress: 70, color: 'bg-gradient-to-br from-orange-600 to-red-600' },
        { title: 'After Hours', subtitle: 'Album • Track 4', progress: 30, color: 'bg-gradient-to-br from-blue-700 to-cyan-600' },
        { title: 'Deep Focus', subtitle: 'Playlist • 2h left', progress: 50, color: 'bg-gradient-to-br from-indigo-600 to-purple-600' },
    ];

    return (
        <div className="mb-16">
            <h2 className="text-xl font-bold text-white mb-6">Jump Back In</h2>

            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {items.map((item, idx) => (
                    <div key={idx} className="min-w-[280px] md:min-w-[320px] p-5 rounded-3xl bg-[#13192E] border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 group cursor-pointer relative overflow-hidden">
                        <div className="flex items-center gap-4 mb-4 z-10 relative">
                            <div className={`w-14 h-14 rounded-xl ${item.color} shadow-lg shrink-0 flex items-center justify-center`}>
                                <Play className="w-6 h-6 text-white fill-current opacity-80" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-white text-lg truncate">{item.title}</h3>
                                <p className="text-sm text-gray-400 truncate">{item.subtitle}</p>
                            </div>
                        </div>

                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2 z-10 relative">
                            <div className="h-full bg-white rounded-full" style={{ width: `${item.progress}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
