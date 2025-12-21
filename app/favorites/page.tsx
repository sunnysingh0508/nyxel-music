'use client';

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import FavoritesHeader from "../components/favorites/FavoritesHeader";
import FavoritesStats from "../components/favorites/FavoritesStats";
import VaultModeToggle from "../components/favorites/VaultModeToggle";
import MoodFilter from "../components/favorites/MoodFilter";
import FavoritesTabs from "../components/favorites/FavoritesTabs";
import FavoritesGrid from "../components/favorites/FavoritesGrid";
import { useState } from "react";

export default function FavoritesPage() {
    const [vaultMode, setVaultMode] = useState(false);
    const [activeMood, setActiveMood] = useState('all');
    const [activeTab, setActiveTab] = useState('All');

    return (
        <div className={`flex min-h-screen font-sans selection:bg-rose-500/30 selection:text-white transition-colors duration-700 ${vaultMode ? 'bg-[#050505]' : 'bg-[#0B0F1A]'}`}>
            <Sidebar />

            <main className="flex-1 ml-24 mr-0 xl:mr-80 p-6 min-h-screen overflow-x-hidden relative">
                <Header />

                {/* Background Texture */}
                <div className={`absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0 transition-opacity duration-700 ${vaultMode ? 'opacity-20' : 'opacity-100'}`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-rose-900/10 via-[#0B0F1A]/50 to-transparent"></div>
                </div>

                <div className="px-2 mt-4 pb-32 max-w-[1600px] mx-auto relative z-10 text-white">
                    <div className="flex flex-col xl:flex-row justify-between xl:items-end gap-6 mb-8">
                        <FavoritesHeader />
                        <VaultModeToggle enabled={vaultMode} onToggle={() => setVaultMode(!vaultMode)} />
                    </div>

                    <FavoritesStats />

                    <FavoritesTabs activeTab={activeTab} onTabChange={setActiveTab} />
                    <MoodFilter activeMood={activeMood} onMoodChange={setActiveMood} />

                    <FavoritesGrid activeMood={activeMood} activeTab={activeTab} vaultMode={vaultMode} />
                </div>
            </main>

            <RightSidebar />
        </div>
    );
}
