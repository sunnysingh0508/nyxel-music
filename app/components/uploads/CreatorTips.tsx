'use client';

import { Lightbulb, Info } from 'lucide-react';

export default function CreatorTips() {
    return (
        <div className="bg-gradient-to-br from-[#13192E] to-[#0B0F1A] rounded-3xl p-6 border border-white/5 sticky top-6">
            <div className="flex items-center gap-2 mb-6 text-yellow-400 font-bold uppercase tracking-wider text-xs">
                <Lightbulb className="w-4 h-4" />
                Pro Tips
            </div>

            <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <h4 className="font-bold text-white text-sm mb-2">Best Release Time</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        For your genre (Electronic), uploads on <span className="text-white font-bold">Fridays at 12 PM EST</span> get 40% more engagement.
                    </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <h4 className="font-bold text-white text-sm mb-2">Audio Quality</h4>
                    <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Ensure your masters are <span className="text-white font-bold">-14 LUFS</span> for optimal streaming normalization.
                        </p>
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
                    <h4 className="font-bold text-violet-300 text-sm mb-2">New Feature</h4>
                    <p className="text-xs text-violet-200/70 leading-relaxed">
                        You can now schedule podcast releases up to 30 days in advance.
                    </p>
                </div>
            </div>
        </div>
    );
}
