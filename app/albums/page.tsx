'use client';

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import AlbumsHeader from "../components/albums/AlbumsHeader";
import FeaturedAlbums from "../components/albums/FeaturedAlbums";
import AlbumGrid from "../components/albums/AlbumGrid";

export default function AlbumsPage() {
    return (
        <div className="flex min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-violet-500/30 selection:text-white">
            <Sidebar />

            <main className="flex-1 ml-24 mr-0 xl:mr-80 p-6 min-h-screen overflow-x-hidden">
                <Header />

                <div className="px-2 mt-4 pb-20 max-w-[1600px] mx-auto">
                    {/* Albums Content */}
                    <AlbumsHeader />
                    <FeaturedAlbums />
                    <AlbumGrid />
                </div>
            </main>

            <RightSidebar />
        </div>
    );
}
