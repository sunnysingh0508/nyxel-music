'use client';

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import RightSidebar from "../../components/RightSidebar";
import AlbumHero from "../../components/album-detail/AlbumHero";
import AlbumTracklist from "../../components/album-detail/AlbumTracklist";


export default function AlbumDetailPage({ params }: { params: { slug: string } }) {
    // In a real app, use params.slug to fetch data.
    // For now, we mock static data for "Old Song" layout.

    return (
        <div className="flex min-h-screen bg-[#050505] text-white font-sans selection:bg-red-500/30 selection:text-white">
            <Sidebar />

            <main className="flex-1 ml-24 mr-0 xl:mr-80 min-h-screen overflow-x-hidden relative">
                <Header />

                {/* Cinematic Backdrop */}
                <div className="absolute top-0 w-full h-[500px] pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-[#050505]/80 to-[#050505]"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                </div>

                <div className="px-6 md:px-12 mt-8 pb-32 max-w-[1600px] mx-auto relative z-10">
                    {/* Breadcrumb (Optional) */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
                        <span className="hover:text-white cursor-pointer transition-colors">Albums</span>
                        <span>/</span>
                        <span className="text-white">Old Song</span>
                    </div>

                    <AlbumHero />

                    <div className="w-full">
                        <AlbumTracklist />
                    </div>
                </div>
            </main>

            <RightSidebar />
        </div>
    );
}
