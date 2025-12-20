'use client';

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import { Play, Pause, Music } from "lucide-react";
import { useState, useRef } from "react";

export default function TestPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const songs = [
        { title: "Radhey Song", file: "/songs/radheysong.mp3", artist: "Unknown Artist" },
    ];

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="flex min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-violet-500/30 selection:text-white">
            <Sidebar />

            <main className="flex-1 ml-24 mr-0 xl:mr-80 p-6 min-h-screen overflow-x-hidden">
                <Header />

                <div className="px-2 mt-8 max-w-4xl">
                    <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <Music className="w-8 h-8 text-violet-500" />
                        Audio Test Lab
                    </h1>

                    <div className="grid gap-6">
                        {songs.map((song, index) => (
                            <div key={index} className="bg-white/5 border border-white/5 rounded-2xl p-6 flex items-center justify-between hover:bg-white/10 transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
                                        <Music className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{song.title}</h3>
                                        <p className="text-gray-400 text-sm">{song.artist}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={togglePlay}
                                        className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-white/20"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-5 h-5 fill-current" />
                                        ) : (
                                            <Play className="w-5 h-5 fill-current ml-1" />
                                        )}
                                    </button>
                                    <audio ref={audioRef} src={song.file} onEnded={() => setIsPlaying(false)} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 text-sm text-violet-200">
                        <p><strong>Note:</strong> Ensure <code>/public/songs/radheysong.mp3</code> exists for playback to work.</p>
                    </div>
                </div>
            </main>

            <RightSidebar />
        </div>
    );
}
