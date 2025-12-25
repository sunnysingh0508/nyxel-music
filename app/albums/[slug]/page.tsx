'use client';

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import RightSidebar from "../../components/RightSidebar";
import AlbumHero from "../../components/album-detail/AlbumHero";
import AlbumTracklist from "../../components/album-detail/AlbumTracklist";

import { oldSongTracks, punjabiTracks } from "../../data/tracks";

import { use } from 'react';

export default function AlbumDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    // Determine which album data to show based on slug
    const isPunjabi = slug.includes('punjabi');

    // Default to Old Song
    let albumData = {
        title: 'Old Song',
        artist: 'The Weeknd',
        year: '2020',
        coverImage: '/images/old-song-cover.png',
        tracks: oldSongTracks,
        accentColor: 'red'
    };

    if (isPunjabi) {
        albumData = {
            title: 'Punjabi Songs',
            artist: 'Various Artists',
            year: '2025',
            coverImage: '/images/punjabi-songs.png',
            tracks: punjabiTracks,
            accentColor: 'orange' // Matches the card aesthetic
        };
    }

    return (
        <div className="flex min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-violet-500/30 selection:text-white">
            <Sidebar />

            <main className="flex-1 ml-24 mr-0 xl:mr-80 min-h-screen overflow-x-hidden relative">
                <Header />

                {/* Cinematic Backdrop */}
                <div className="absolute top-0 w-full h-[500px] pointer-events-none z-0">
                    <div className={`absolute inset-0 bg-gradient-to-b ${isPunjabi ? 'from-orange-900/20' : 'from-red-900/20'} via-[#0B0F1A]/80 to-[#0B0F1A]`}></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                </div>

                <div className="px-6 md:px-12 mt-8 pb-32 max-w-[1600px] mx-auto relative z-10">
                    {/* Breadcrumb (Optional) */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
                        <span className="hover:text-white cursor-pointer transition-colors">Albums</span>
                        <span>/</span>
                        <span className="text-white">{albumData.title}</span>
                    </div>

                    <AlbumHero
                        title={albumData.title}
                        artist={albumData.artist}
                        year={albumData.year}
                        coverImage={albumData.coverImage}
                        accentColor={albumData.accentColor}
                        tracks={albumData.tracks}
                    />

                    <div className="w-full">
                        <AlbumTracklist tracks={albumData.tracks} />
                    </div>
                </div>
            </main>

            <RightSidebar />
        </div>
    );
}
