'use client';

import { Moon, Zap, CloudRain, Sparkles, Flame } from 'lucide-react';

export default function MoodGrid() {
    const moods = [
        { id: 1, name: 'Midnight Focus', icon: Moon, gradient: 'from-violet-900 via-indigo-900 to-blue-900', shadow: 'shadow-indigo-500/20' },
        { id: 2, name: 'Neon Drive', icon: Zap, gradient: 'from-fuchsia-900 via-purple-900 to-pink-900', shadow: 'shadow-fuchsia-500/20' },
        { id: 3, name: 'Rainy Thoughts', icon: CloudRain, gradient: 'from-slate-800 via-gray-800 to-zinc-900', shadow: 'shadow-gray-500/20' },
        { id: 4, name: 'Cosmic Chill', icon: Sparkles, gradient: 'from-cyan-900 via-teal-900 to-emerald-900', shadow: 'shadow-cyan-500/20' },
        { id: 5, name: 'Dark Energy', icon: Flame, gradient: 'from-red-900 via-orange-900 to-amber-900', shadow: 'shadow-red-500/20' },
    ];

    return (
        <div className="mb-16">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                Select Your Vibe
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {moods.map((mood) => (
                    <div
                        key={mood.id}
                        className={`relative h-40 rounded-3xl overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-2xl ${mood.shadow}`}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${mood.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>

                        {/* Texture overlay */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-transform">
                                <mood.icon className="w-5 h-5" />
                            </div>

                            <h3 className="text-lg font-bold text-white translate-y-1 group-hover:translate-y-0 transition-transform">{mood.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
