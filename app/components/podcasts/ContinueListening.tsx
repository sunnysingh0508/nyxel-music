'use client';

import { Play, Pause } from 'lucide-react';

export default function ContinueListening() {
    const recent = [
        { id: 1, show: 'The Daily', ep: 'The Future of AI', progress: 'w-2/3', time: '12m left' },
        { id: 2, show: 'Huberman Lab', ep: 'Focus & Productivity', progress: 'w-1/3', time: '45m left' },
    ];

    return (
        <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Continue Listening</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recent.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center shrink-0">
                            {/* Placeholder cover */}
                        </div>

                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-white text-sm truncate">{item.ep}</h4>
                            <p className="text-gray-400 text-xs mb-3">{item.show}</p>

                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.progress} bg-violet-500 rounded-full`}></div>
                                </div>
                                <span className="text-[10px] text-gray-400 font-mono whitespace-nowrap">{item.time}</span>
                            </div>
                        </div>

                        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
