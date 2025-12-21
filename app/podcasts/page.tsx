'use client';

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import PodcastsHeader from "../components/podcasts/PodcastsHeader";
import FeaturedPodcast from "../components/podcasts/FeaturedPodcast";
import PodcastGrid from "../components/podcasts/PodcastGrid";
import PodcastCategories from "../components/podcasts/PodcastCategories";
import ContinueListening from "../components/podcasts/ContinueListening";
import TrendingPodcasts from "../components/podcasts/TrendingPodcasts";

export default function PodcastsPage() {
    return (
        <div className="flex min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-violet-500/30 selection:text-white">
            <Sidebar />

            <main className="flex-1 ml-24 mr-0 xl:mr-80 p-6 min-h-screen overflow-x-hidden">
                <Header />

                <div className="px-2 mt-4 pb-20 max-w-[1600px] mx-auto">
                    <PodcastsHeader />
                    <FeaturedPodcast />

                    <div className="flex flex-col 2xl:flex-row gap-12">
                        <div className="flex-1">
                            <ContinueListening />
                            <PodcastCategories />
                            <PodcastGrid />
                        </div>

                        <div className="w-full 2xl:w-80 shrink-0">
                            <TrendingPodcasts />
                        </div>
                    </div>
                </div>
            </main>

            <RightSidebar />
        </div>
    );
}
