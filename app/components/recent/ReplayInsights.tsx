'use client';

import { Clock, Repeat, BarChart3, ChevronRight } from 'lucide-react';

export default function ReplayInsights() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Insight 1: Most Replayed */}
            <div className="p-6 rounded-3xl bg-indigo-900/10 border border-indigo-500/20 backdrop-blur-sm hover:bg-indigo-900/20 transition-colors group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Repeat className="w-16 h-16 text-indigo-400" />
                </div>

                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">On Repeat</p>
                <h3 className="text-xl font-bold text-white mb-1">Starboy</h3>
                <p className="text-sm text-gray-400 mb-4">The Weeknd • Played 12x</p>

                <button className="flex items-center gap-1 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                    Play Now <ChevronRight className="w-3 h-3" />
                </button>
            </div>

            {/* Insight 2: Focus Time */}
            <div className="p-6 rounded-3xl bg-violet-900/10 border border-violet-500/20 backdrop-blur-sm hover:bg-violet-900/20 transition-colors group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Clock className="w-16 h-16 text-violet-400" />
                </div>

                <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-1">Top Vibe</p>
                <h3 className="text-xl font-bold text-white mb-1">Late Night</h3>
                <p className="text-sm text-gray-400 mb-4">4h 23m this week</p>
            </div>

            {/* Insight 3: Session Stat */}
            <div className="p-6 rounded-3xl bg-cyan-900/10 border border-cyan-500/20 backdrop-blur-sm hover:bg-cyan-900/20 transition-colors group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <BarChart3 className="w-16 h-16 text-cyan-400" />
                </div>

                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">Discovery</p>
                <h3 className="text-xl font-bold text-white mb-1">14 New Artists</h3>
                <p className="text-sm text-gray-400 mb-4">Explored this month</p>
            </div>
        </div>
    );
}
