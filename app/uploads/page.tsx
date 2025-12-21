'use client';

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import MyUploadsHeader from "../components/uploads/MyUploadsHeader";
import UploadStats from "../components/uploads/UploadStats";
import UploadProgressList, { ActiveUpload } from "../components/uploads/UploadProgressList";
import UploadGrid, { UploadItem } from "../components/uploads/UploadGrid";
import CreatorTips from "../components/uploads/CreatorTips";
import { useState } from 'react';
import { mockAnalyzeSong } from "../services/mockAI";

export default function UploadsPage() {
    const [activeUploads, setActiveUploads] = useState<ActiveUpload[]>([]);
    const [completedUploads, setCompletedUploads] = useState<UploadItem[]>([
        { id: 1, title: 'Summer Nights', type: 'Single', visibility: 'Public', plays: '45.2K', cover: 'bg-orange-500', date: 'Oct 24, 2024' },
        { id: 2, title: 'Deep Thoughts Ep. 4', type: 'Podcast', visibility: 'Public', plays: '12.8K', cover: 'bg-purple-500', date: 'Oct 12, 2024' },
        { id: 4, title: 'Neon City OST', type: 'Album', visibility: 'Public', plays: '110K', cover: 'bg-cyan-500', date: 'Sep 15, 2024' },
    ]);

    const handleUploadStart = async (file: File) => {
        const newUpload: ActiveUpload = {
            id: Date.now().toString(),
            file,
            progress: 0,
            status: 'Uploading'
        };

        setActiveUploads(prev => [newUpload, ...prev]);

        // Simulate progress
        const interval = setInterval(() => {
            setActiveUploads(prev => prev.map(u => {
                if (u.id === newUpload.id) {
                    const nextProgress = u.progress + 10;
                    if (nextProgress >= 100) {
                        clearInterval(interval);
                        return { ...u, progress: 100, status: 'Processing' };
                    }
                    return { ...u, progress: nextProgress };
                }
                return u;
            }));
        }, 200);

        // Trigger AI Analysis when progress is done (simulated here for flow)
        setTimeout(async () => {
            try {
                const analysis = await mockAnalyzeSong(file);

                // Remove from active
                setActiveUploads(prev => prev.filter(u => u.id !== newUpload.id));

                // Add to completed
                const newItem: UploadItem = {
                    id: Date.now(),
                    title: analysis.title || file.name,
                    type: analysis.releaseType || 'Single',
                    visibility: 'Private', // Default to private untill published
                    plays: '0',
                    cover: 'bg-indigo-600', // Default mock cover
                    date: 'Just now'
                };
                setCompletedUploads(prev => [newItem, ...prev]);

            } catch (error) {
                console.error("AI Analysis failed", error);
                setActiveUploads(prev => prev.map(u => u.id === newUpload.id ? { ...u, status: 'Error' } : u));
            }
        }, 2500); // Wait for upload simulation + processing time
    };

    return (
        <div className="flex min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-violet-500/30 selection:text-white">
            <Sidebar />

            <main className="flex-1 ml-24 mr-0 xl:mr-80 p-6 min-h-screen overflow-x-hidden relative">
                <Header />

                {/* Background Texture */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-900/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

                <div className="px-2 mt-4 pb-32 max-w-[1600px] mx-auto relative z-10">
                    <MyUploadsHeader onUploadStart={handleUploadStart} isUploading={activeUploads.length > 0} />
                    <UploadStats />

                    <div className="flex flex-col 2xl:flex-row gap-12">
                        <div className="flex-1">
                            <UploadProgressList uploads={activeUploads} />

                            <div className="mb-6 flex justify-between items-end">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Published Content</h3>
                                <p className="text-xs text-gray-500">Sorted by Newest</p>
                            </div>

                            <UploadGrid items={completedUploads} />
                        </div>

                        <div className="w-full 2xl:w-80 shrink-0">
                            <CreatorTips />
                        </div>
                    </div>
                </div>
            </main>

            <RightSidebar />
        </div>
    );
}
