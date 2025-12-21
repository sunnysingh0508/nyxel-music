'use client';

import { Play, Plus, X, Share2, Clock } from 'lucide-react';
import { useState } from 'react';

// Mock Data
interface Podcast {
    id: number;
    title: string;
    host: string;
    category: string;
    episodes: number;
    color: string;
}

const podcasts: Podcast[] = [
    { id: 1, title: 'Tech Talk Daily', host: 'Tech Insider', category: 'Technology', episodes: 450, color: 'from-blue-600 to-cyan-700' },
    { id: 2, title: 'Mindset', host: 'Education Hub', category: 'Self-Growth', episodes: 120, color: 'from-violet-600 to-purple-700' },
    { id: 3, title: 'Startup Stories', host: 'Founder Club', category: 'Business', episodes: 85, color: 'from-green-600 to-emerald-700' },
    { id: 4, title: 'Late Night Laughs', host: 'Comedy Central', category: 'Comedy', episodes: 300, color: 'from-pink-600 to-rose-700' },
    { id: 5, title: 'True Crime Files', host: 'Mystery Network', category: 'True Crime', episodes: 60, color: 'from-red-700 to-orange-800' },
    { id: 6, title: 'Global News', host: 'World Service', category: 'News', episodes: 1200, color: 'from-indigo-600 to-blue-800' },
];

export default function PodcastGrid() {
    const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
                {podcasts.map((pod) => (
                    <div
                        key={pod.id}
                        onClick={() => setSelectedPodcast(pod)}
                        className="group relative bg-[#13192E] p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-white/5 hover:border-white/10"
                    >
                        <div className={`aspect-square w-full rounded-xl bg-gradient-to-br ${pod.color} mb-4 relative overflow-hidden group-hover:shadow-lg transition-all`}>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                                <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                                    <Play className="w-5 h-5 fill-current ml-1" />
                                </button>
                            </div>
                        </div>

                        <span className="text-[10px] uppercase font-bold text-violet-400 mb-1 block tracking-wider">{pod.category}</span>
                        <h3 className="font-bold text-white truncate mb-1 text-base group-hover:text-violet-200 transition-colors">{pod.title}</h3>
                        <p className="text-gray-400 text-sm truncate mb-2">{pod.host}</p>
                        <p className="text-xs text-gray-600">{pod.episodes} Episodes</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedPodcast && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedPodcast(null)}></div>

                    <div className="relative w-full max-w-4xl bg-[#0B0F1A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row h-[80vh] md:h-auto md:max-h-[800px]">
                        <button
                            onClick={() => setSelectedPodcast(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-white/20 transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Sidebar Info */}
                        <div className="md:w-[320px] p-8 bg-[#13192E] flex flex-col shrink-0">
                            <div className={`aspect-square w-full rounded-2xl bg-gradient-to-br ${selectedPodcast.color} mb-6 shadow-2xl`}></div>

                            <h2 className="text-2xl font-bold text-white mb-2">{selectedPodcast.title}</h2>
                            <p className="text-violet-400 font-medium mb-4">{selectedPodcast.host}</p>

                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                A captivating podcast about {selectedPodcast.category.toLowerCase()}. Dive deep into stories, interviews, and ideas that shape our world.
                            </p>

                            <div className="flex gap-3 mb-6">
                                <button className="flex-1 bg-white text-black py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 text-sm">
                                    <Plus className="w-4 h-4" /> Follow
                                </button>
                                <button className="p-3 bg-white/5 text-white rounded-xl hover:bg-white/10 transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="mt-auto pt-6 border-t border-white/5">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Episodes</span>
                                    <span className="text-white font-mono">{selectedPodcast.episodes}</span>
                                </div>
                            </div>
                        </div>

                        {/* Episode List */}
                        <div className="flex-1 p-8 bg-[#0B0F1A] overflow-y-auto custom-scrollbar">
                            <h3 className="text-xl font-bold text-white mb-6 sticky top-0 bg-[#0B0F1A] py-2 z-10">Latest Episodes</h3>

                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-white text-base group-hover:text-violet-300 transition-colors">Episode Title #{i}: deep Dive</h4>
                                            <span className="text-xs text-gray-500 font-mono">2 days ago</span>
                                        </div>

                                        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                            In this episode, we discuss the impact of emerging technologies on society and how we can adapt to the changing landscape...
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <button className="flex items-center gap-2 text-xs font-bold text-white hover:text-violet-400 transition-colors bg-white/5 px-3 py-1.5 rounded-lg group-hover:bg-white/10">
                                                <Play className="w-3 h-3 fill-current" /> Play Episode
                                            </button>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <Clock className="w-3 h-3" />
                                                <span>45 min</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
