'use client';

import { Activity, Radio, Mic2 } from 'lucide-react';

export default function ExploreBySound() {
    const sounds = [
        { title: 'Bass Heavy', color: 'bg-red-500', icon: Activity },
        { title: 'Lo-Fi Chill', color: 'bg-indigo-500', icon: Radio },
        { title: 'Cinematic', color: 'bg-amber-500', icon: Mic2 },
        { title: 'Ambient', color: 'bg-emerald-500', icon: Activity },
    ];

    return (
        <div className="mb-16">
            <h2 className="text-xl font-bold text-white mb-6">Explore by Sound</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sounds.map((sound, idx) => (
                    <div key={idx} className="aspect-[4/3] relative rounded-2xl overflow-hidden group cursor-pointer">
                        <div className={`absolute inset-0 ${sound.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <div className={`p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform`}>
                                <sound.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-white text-lg">{sound.title}</h3>
                        </div>

                        {/* Animated Waveform Hint */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
