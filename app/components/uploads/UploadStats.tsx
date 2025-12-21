'use client';

import { Music2, PlayCircle, Users } from 'lucide-react';

export default function UploadStats() {
    return (
        <div className="flex gap-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {/* Stat 1 */}
            <div className="min-w-[240px] p-5 rounded-2xl bg-gradient-to-br from-violet-900/20 to-indigo-900/20 border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                    <Music2 className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total Uploads</p>
                    <div className="text-2xl font-bold text-white">24 Tracks</div>
                </div>
            </div>

            {/* Stat 2 */}
            <div className="min-w-[240px] p-5 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total Plays</p>
                    <div className="text-2xl font-bold text-white">128.5K</div>
                </div>
            </div>

            {/* Stat 3 */}
            <div className="min-w-[240px] p-5 rounded-2xl bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                    <Users className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Followers</p>
                    <div className="text-2xl font-bold text-white">1.2K</div>
                </div>
            </div>
        </div>
    );
}
