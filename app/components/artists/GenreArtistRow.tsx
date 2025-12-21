'use client';

import { Play, ChevronRight } from 'lucide-react';

interface GenreRowProps {
    title: string;
    gradient: string;
}

export default function GenreArtistRow({ title, gradient }: GenreRowProps) {
    const artists = [
        { id: 1, name: 'Art 1', color: 'bg-red-500' },
        { id: 2, name: 'Art 2', color: 'bg-orange-500' },
        { id: 3, name: 'Art 3', color: 'bg-yellow-500' },
        { id: 4, name: 'Art 4', color: 'bg-green-500' },
        { id: 5, name: 'Art 5', color: 'bg-blue-500' },
        { id: 6, name: 'Art 6', color: 'bg-indigo-500' },
    ];

    return (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer w-fit">
                <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">{title}</h3>
                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-violet-400 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300" />
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {artists.map((artist, idx) => (
                    <div key={idx} className="min-w-[140px] flex flex-col gap-3 group cursor-pointer">
                        <div className={`w-full aspect-square rounded-2xl ${gradient} opacity-80 group-hover:opacity-100 transition-opacity relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/40 backdrop-blur-[1px]">
                                <Play className="w-8 h-8 text-white fill-current" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white text-sm truncate hover:underline">Artist Name</h4>
                            <p className="text-xs text-gray-500">Genre Star</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
