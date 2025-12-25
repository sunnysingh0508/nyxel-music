'use client';

import { Play, Heart } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedPlaylistCard() {
    return (
        <Link href="/albums/punjabi-top-20" className="group relative block w-full max-w-sm aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-orange-500/20 cursor-pointer">

            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-neutral-900">
                {/* Gradients */}
                <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl from-purple-600 via-transparent to-transparent opacity-60 mix-blend-screen group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 w-[150%] h-[150%] bg-gradient-to-tr from-orange-500 via-red-500 to-transparent opacity-60 mix-blend-screen group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>

                {/* Grain Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                {/* Image Collage Effect (Abstract representation) */}
                <div className="absolute inset-0 opacity-50 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700">
                    <img
                        src="/images/punjabi-songs.png"
                        alt="Punjabi Hit Songs"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex items-start justify-between">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">
                        Editor's Pick
                    </span>

                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-white">
                        <Heart className="w-5 h-5" />
                    </div>
                </div>

                <div className="relative transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h2 className="text-4xl font-extrabold text-white leading-[0.9] tracking-tight mb-2 drop-shadow-lg">
                        Punjabi<br />Songs
                    </h2>
                    <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full mb-3"></div>
                    <p className="text-lg font-bold text-white/90 tracking-wide uppercase">
                        <span className="text-orange-400 font-black text-xl mr-1.5">TOP 20</span>
                        Hit Songs
                    </p>

                    <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                        <button className="flex-1 bg-white text-black font-bold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-white/10">
                            <Play className="w-5 h-5 fill-current" />
                            Play Now
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
