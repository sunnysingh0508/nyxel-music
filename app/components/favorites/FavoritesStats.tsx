'use client';

import { Heart, Trophy, Calendar } from 'lucide-react';

export default function FavoritesStats() {
    return (
        <div className="flex gap-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {/* Stat 1 */}
            <div className="min-w-[200px] p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400">
                    <Heart className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Saved</p>
                    <div className="text-2xl font-bold text-white">428</div>
                </div>
            </div>

            {/* Stat 2 */}
            <div className="min-w-[200px] p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <Trophy className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Top Artist</p>
                    <div className="text-lg font-bold text-white">The Weeknd</div>
                </div>
            </div>

            {/* Stat 3 */}
            <div className="min-w-[200px] p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Calendar className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Saved Streak</p>
                    <div className="text-2xl font-bold text-white">12 Days</div>
                </div>
            </div>
        </div>
    );
}
