'use client';

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import DiscoverHeader from "../components/discover/DiscoverHeader";
import MoodGrid from "../components/discover/MoodGrid";
import CuratedForYou from "../components/discover/CuratedForYou";
import ExploreBySound from "../components/discover/ExploreBySound";
import HiddenGems from "../components/discover/HiddenGems";
import TrendingNow from "../components/discover/TrendingNow";
import DiscoverFeed from "../components/discover/DiscoverFeed";
import SurpriseButton from "../components/discover/SurpriseButton";

export default function DiscoverPage() {
    return (
        <div className="flex min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-cyan-500/30 selection:text-white">
            <Sidebar />

            <main className="flex-1 ml-24 mr-0 xl:mr-80 p-6 min-h-screen overflow-x-hidden relative">
                <Header />

                {/* Ambient Background Gradient */}
                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-cyan-900/10 via-[#0B0F1A]/50 to-[#0B0F1A] pointer-events-none z-0"></div>

                <div className="px-2 mt-4 pb-20 max-w-[1600px] mx-auto relative z-10">
                    <DiscoverHeader />
                    <MoodGrid />
                    <CuratedForYou />

                    <div className="flex flex-col 2xl:flex-row gap-12">
                        <div className="flex-1 space-y-12">
                            <ExploreBySound />
                            <DiscoverFeed />
                        </div>

                        <div className="w-full 2xl:w-80 shrink-0 space-y-8">
                            <HiddenGems />
                            <TrendingNow />

                            <div className="p-6 rounded-3xl bg-gradient-to-br from-violet-900/50 to-indigo-900/50 border border-white/5 text-center">
                                <h4 className="font-bold text-white mb-2">Want more control?</h4>
                                <p className="text-sm text-gray-300 mb-4">Refine your discovery settings in your profile.</p>
                                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-semibold transition-colors">Settings</button>
                            </div>
                        </div>
                    </div>
                </div>

                <SurpriseButton />
            </main>

            <RightSidebar />
        </div>
    );
}
