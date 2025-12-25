'use client';

import { Play, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedAlbums() {
    const featured = [
        { id: 1, title: 'Old Song', artist: 'The Weeknd', year: '2020', gradient: 'from-red-600 to-orange-600', image: '/images/old-song-cover.png' },
        { id: 2, title: 'Punjabi Songs', artist: 'Dua Lipa', year: '2020', gradient: 'from-pink-600 to-purple-600', image: '/images/punjabi-songs.png' },
        { id: 3, title: 'Dawn FM', artist: 'The Weeknd', year: '2022', gradient: 'from-blue-600 to-cyan-600' },
    ];

    return (
        <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 text-violet-400 font-semibold uppercase tracking-wider text-xs">
                <TrendingUp className="w-4 h-4" />
                Featured & Trending
            </div>

            <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x">
                {featured.map((album: any) => (
                    <Link href={`/albums/${album.title.toLowerCase().replace(/\s+/g, '-')}`} key={album.id} className="min-w-[300px] md:min-w-[400px] aspect-square relative rounded-[24px] overflow-hidden group cursor-pointer snap-start shrink-0 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-red-900/20">
                        {/* Background */}
                        {album.image ? (
                            <img
                                src={album.image}
                                alt={album.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className={`absolute inset-0 bg-gradient-to-br ${album.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        )}

                        {/* Specific Dark Fade for Old Song */}
                        {album.title === 'Old Song' && (
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 opacity-90"></div>
                        )}
                        {/* General Grain Overlay */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                        {/* Border Glow on Hover */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-[24px] transition-colors duration-300"></div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="absolute top-8 left-8">
                                <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white/90 uppercase tracking-widest shadow-lg">
                                    Editor's Pick
                                </span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-none tracking-tight group-hover:-translate-y-1 transition-transform">
                                {album.title}
                            </h3>
                            <p className="text-lg text-gray-300/80 font-medium mb-6 group-hover:text-white transition-colors">{album.artist} • {album.year}</p>

                            {album.title === 'Old Song' && (
                                <p className="text-sm text-red-200/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute bottom-24 italic">
                                    "A timeless vibe from the past"
                                </p>
                            )}

                            <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95">
                                <Play className="w-6 h-6 fill-current ml-1" />
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
