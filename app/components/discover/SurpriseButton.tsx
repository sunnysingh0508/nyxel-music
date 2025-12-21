'use client';

import { Sparkles } from 'lucide-react';

export default function SurpriseButton() {
    return (
        <button className="fixed bottom-10 right-10 z-[100] group">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 group-hover:scale-125 transition-all duration-500"></div>
            <div className="relative px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform border border-white/20">
                <Sparkles className="w-5 h-5 fill-current animate-pulse" />
                <span className="hidden group-hover:inline-block animate-in fade-in slide-in-from-right-4 duration-300 whitespace-nowrap">Surprise Me</span>
            </div>
        </button>
    );
}
