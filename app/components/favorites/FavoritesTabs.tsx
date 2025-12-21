'use client';

interface FavoritesTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function FavoritesTabs({ activeTab, onTabChange }: FavoritesTabsProps) {
    const tabs = ['All', 'Songs', 'Albums', 'Artists', 'Podcasts'];

    return (
        <div className="flex items-center gap-8 mb-8 border-b border-white/5">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors relative ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                        }`}
                >
                    {tab}
                    {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-500 rounded-t-full"></div>
                    )}
                </button>
            ))}
        </div>
    );
}
