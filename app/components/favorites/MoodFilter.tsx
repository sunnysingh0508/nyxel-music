'use client';

import { Moon, Zap, Cloud, Coffee } from 'lucide-react';

interface MoodFilterProps {
    activeMood: string;
    onMoodChange: (mood: string) => void;
}

export default function MoodFilter({ activeMood, onMoodChange }: MoodFilterProps) {
    const moods = [
        { id: 'all', name: 'All Vibes', icon: null },
        { id: 'calm', name: 'Calm', icon: Coffee },
        { id: 'focus', name: 'Focus', icon: Moon },
        { id: 'energetic', name: 'Energetic', icon: Zap },
        { id: 'dark', name: 'Dark', icon: Cloud },
    ];

    return (
        <div className="flex flex-wrap gap-2 mb-8">
            {moods.map((mood) => (
                <button
                    key={mood.id}
                    onClick={() => onMoodChange(mood.id)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all flex items-center gap-2 ${activeMood === mood.id
                            ? 'bg-white text-black border-white'
                            : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                >
                    {mood.icon && <mood.icon className="w-3 h-3" />}
                    {mood.name}
                </button>
            ))}
        </div>
    );
}
