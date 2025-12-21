'use client';

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import ArtistsHeader from "../components/artists/ArtistsHeader";
import FeaturedArtist from "../components/artists/FeaturedArtist";
import ArtistsGrid from "../components/artists/ArtistsGrid";
import GenreArtistRow from "../components/artists/GenreArtistRow";
import TrendingArtists from "../components/artists/TrendingArtists";

export default function ArtistsPage() {
    return (
        <div className="flex min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-violet-500/30 selection:text-white">
            <Sidebar />

            <main className="flex-1 ml-24 mr-0 xl:mr-80 p-6 min-h-screen overflow-x-hidden">
                <Header />

                <div className="px-2 mt-4 pb-20 max-w-[1600px] mx-auto">
                    <ArtistsHeader />
                    <FeaturedArtist />

                    <div className="flex flex-col 2xl:flex-row gap-12">
                        <div className="flex-1">
                            <ArtistsGrid />

                            <div className="space-y-8">
                                <GenreArtistRow title="Rising Pop Stars" gradient="bg-gradient-to-br from-pink-500 to-rose-600" />
                                <GenreArtistRow title="Hip-Hop Heavyweights" gradient="bg-gradient-to-br from-amber-500 to-orange-600" />
                                <GenreArtistRow title="Electronic & Dance" gradient="bg-gradient-to-br from-blue-500 to-cyan-600" />
                            </div>
                        </div>

                        <div className="w-full 2xl:w-80 shrink-0">
                            <TrendingArtists />
                        </div>
                    </div>
                </div>
            </main>

            <RightSidebar />
        </div>
    );
}
