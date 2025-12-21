'use client';

import { Play, UserPlus, X, Music, Disc } from 'lucide-react';
import { useState } from 'react';

interface Artist {
    id: number;
    name: string;
    genre: string;
    followers: string;
    color: string;
}

const mainArtists: Artist[] = [
    { id: 1, name: 'Drake', genre: 'Hip-Hop', followers: '78M', color: 'from-blue-600 to-indigo-700' },
    { id: 2, name: 'Taylor Swift', genre: 'Pop', followers: '92M', color: 'from-rose-500 to-pink-600' },
    { id: 3, name: 'Travis Scott', genre: 'Hip-Hop', followers: '55M', color: 'from-amber-700 to-orange-800' },
    { id: 4, name: 'Billie Eilish', genre: 'Alt Pop', followers: '68M', color: 'from-lime-600 to-green-700' },
    { id: 5, name: 'Post Malone', genre: 'Hip-Hop', followers: '42M', color: 'from-yellow-600 to-orange-600' },
    { id: 6, name: 'Ariana Grande', genre: 'Pop', followers: '85M', color: 'from-purple-500 to-fuchsia-600' },
    { id: 7, name: 'J. Cole', genre: 'Hip-Hop', followers: '38M', color: 'from-sky-700 to-blue-800' },
    { id: 8, name: 'Rihanna', genre: 'R&B', followers: '102M', color: 'from-red-600 to-red-800' },
    { id: 9, name: 'SZA', genre: 'R&B', followers: '62M', color: 'from-blue-700 to-sky-800' },
    { id: 10, name: 'Bad Bunny', genre: 'Reggaeton', followers: '80M', color: 'from-orange-500 to-red-600' },
];

export default function ArtistsGrid() {
    const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

    return (
        <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Popular Artists</h2>
                <button className="text-sm text-gray-400 hover:text-white transition-colors">View All</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {mainArtists.map((artist) => (
                    <div
                        key={artist.id}
                        onClick={() => setSelectedArtist(artist)}
                        className="group flex flex-col items-center p-6 bg-white/5 rounded-3xl hover:bg-white/10 transition-all cursor-pointer border border-transparent hover:border-white/5"
                    >
                        <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${artist.color} mb-6 relative group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all`}>
                            <div className="absolute inset-0 bg-black/20 rounded-full group-hover:bg-transparent transition-colors"></div>

                            <button className="absolute bottom-0 right-0 p-3 rounded-full bg-violet-600 text-white shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-violet-500">
                                <Play className="w-5 h-5 fill-current ml-0.5" />
                            </button>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1 text-center group-hover:text-violet-300 transition-colors">{artist.name}</h3>
                        <span className="text-sm font-medium text-violet-400 mb-2">{artist.genre}</span>
                        <p className="text-xs text-gray-500 mb-4">{artist.followers} Followers</p>

                        <button className="px-6 py-2 rounded-full border border-white/10 text-sm font-semibold text-gray-300 hover:bg-white hover:text-black hover:border-transparent transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                            Follow
                        </button>
                    </div>
                ))}
            </div>

            {/* Artist Preview Modal */}
            {selectedArtist && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedArtist(null)}></div>

                    <div className="relative w-full max-w-4xl bg-[#1A1033] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setSelectedArtist(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-white/20 transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col md:flex-row h-full md:h-[500px]">
                            {/* Banner Section */}
                            <div className={`md:w-5/12 relative flex flex-col justify-end p-8 bg-gradient-to-br ${selectedArtist.color}`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 to-transparent"></div>

                                <div className="relative z-10">
                                    <h2 className="text-4xl font-bold text-white mb-2">{selectedArtist.name}</h2>
                                    <p className="text-white/80 text-lg mb-6">{selectedArtist.genre} • {selectedArtist.followers} Followers</p>

                                    <div className="flex gap-3">
                                        <button className="flex-1 bg-white text-black py-3 rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                            <Play className="w-4 h-4 fill-current" /> Play
                                        </button>
                                        <button className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors">
                                            <UserPlus className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 bg-[#1A1033] p-8 overflow-y-auto custom-scrollbar">
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-white mb-4">Popular Tracks</h3>
                                    <div className="space-y-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group cursor-pointer border border-transparent hover:border-white/5 transition-all">
                                                <div className="w-6 text-center text-gray-500 group-hover:text-violet-400 font-medium">{i}</div>
                                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                                    <Music className="w-4 h-4 text-gray-400" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-white font-medium text-sm group-hover:text-violet-200">{selectedArtist.name} Hit Song {i}</h4>
                                                    <p className="text-xs text-gray-500">24M Plays</p>
                                                </div>
                                                <span className="text-xs text-gray-600 font-mono">3:42</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white mb-4">Latest Release</h3>
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/5">
                                        <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                                            <Disc className="w-8 h-8 text-gray-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">New Album Title</h4>
                                            <p className="text-sm text-gray-400">2024 • Album</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
