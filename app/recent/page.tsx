'use client';

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import RecentlyPlayedHeader from "../components/recent/RecentlyPlayedHeader";
import ReplayInsights from "../components/recent/ReplayInsights";
import ContinueListeningCarousel from "../components/recent/ContinueListeningCarousel";
import TimelineSection from "../components/recent/TimelineSection";
import QuickActionsBar from "../components/recent/QuickActionsBar";

export default function RecentPage() {
    return (
        <div className="flex min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-indigo-500/30 selection:text-white">
            <Sidebar />

            <main className="flex-1 ml-24 mr-0 xl:mr-80 p-6 min-h-screen overflow-x-hidden relative">
                <Header />

                {/* Background Texture */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

                <div className="px-2 mt-4 pb-32 max-w-[1200px] mx-auto relative z-10">
                    <RecentlyPlayedHeader />
                    <ReplayInsights />
                    <ContinueListeningCarousel />
                    <TimelineSection />
                </div>

                <QuickActionsBar />
            </main>

            <RightSidebar />
        </div>
    );
}
