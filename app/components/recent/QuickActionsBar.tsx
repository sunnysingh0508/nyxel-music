'use client';

import { Play, ListCheck } from 'lucide-react';

export default function QuickActionsBar() {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 bg-[#13192E]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl animate-in slide-in-from-bottom-10 duration-500">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
                <Play className="w-4 h-4 fill-current" />
                Play All Recent
            </button>
            <button className="p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors" title="Add to Queue">
                <ListCheck className="w-5 h-5" />
            </button>
        </div>
    );
}
