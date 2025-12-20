import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import FeaturedSection from "./components/FeaturedSection";
import ExploreSection from "./components/ExploreSection";
import CreatorsList from "./components/CreatorsList";
import ActivityFeed from "./components/ActivityFeed";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-violet-500/30 selection:text-white">
      <Sidebar />

      <main className="flex-1 ml-24 mr-0 xl:mr-80 p-6 min-h-screen overflow-x-hidden">
        <Header />

        <div className="px-2 mt-4 space-y-12 pb-20">
          {/* Hero Section */}
          <FeaturedSection />

          {/* Split Section: Explore & Stats/Feed */}
          <div className="flex flex-col 2xl:flex-row gap-8">
            <div className="flex-1 space-y-12">
              <ExploreSection />

              <div className="w-full">
                <ActivityFeed />
              </div>
            </div>

            <div className="w-full 2xl:w-96 shrink-0 space-y-12">
              <CreatorsList />
            </div>
          </div>
        </div>
      </main>

      <RightSidebar />
    </div>
  );
}
