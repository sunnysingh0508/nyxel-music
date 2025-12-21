'use client';

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import { Play, Pause, Music } from "lucide-react";
import { useState, useRef } from "react";

export default function TestPage() {
    const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const songs = [
        { title: "Radhey Song", file: "/songs/radheysong.mp3", artist: "Unknown Artist" },
        { title: "Mere Mehboob Qayamat Hogi", file: "/songs/mere-mehboob-qayamat-hogi-kishore-kumars-greatest-hits-old-songs-.mp3", artist: "Kishore Kumar" },
        { title: "Likhe Jo Khat Tujhe", file: "/songs/likhe-jo-khat-tujhe-song-mohammed-rafi-shashi-kapoor.mp3", artist: "Mohammed Rafi" },
    ];

    const handlePlay = (index: number) => {
        if (currentSongIndex === index) {
            // Toggle play/pause for same song
            if (isPlaying) {
                audioRef.current?.pause();
            } else {
                audioRef.current?.play();
            }
            setIsPlaying(!isPlaying);
        } else {
            // Change song
            if (audioRef.current) {
                audioRef.current.pause(); // Pause old
                setCurrentSongIndex(index);
                setIsPlaying(true);
                // Need to wait for render to update source, or force it.
                // Better approach: generic audio element uses currentSongIndex
            } else {
                setCurrentSongIndex(index);
                setIsPlaying(true);
            }
        }
    };

    // Effect to play when song changes
    // Simplified inline logic for this Test Page

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

                    {/* Hidden Global Audio Player */}
                    <audio
                        ref={audioRef}
                        src={currentSongIndex !== null ? songs[currentSongIndex].file : undefined}
                        onEnded={() => setIsPlaying(false)}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        autoPlay
                    />

                    <div className="grid gap-6">
                        {songs.map((song, index) => (
                            <div key={index} className={`bg-white/5 border rounded-2xl p-6 flex items-center justify-between hover:bg-white/10 transition-all group ${currentSongIndex === index ? 'border-violet-500/50 bg-white/10' : 'border-white/5'}`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
                                        <Music className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${currentSongIndex === index ? 'text-violet-400' : 'text-white'}`}>{song.title}</h3>
                                        <p className="text-gray-400 text-sm">{song.artist}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => handlePlay(index)}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg ${currentSongIndex === index && isPlaying ? 'bg-violet-500 text-white' : 'bg-white text-black'}`}
                                    >
                                        {currentSongIndex === index && isPlaying ? (
                                            <Pause className="w-5 h-5 fill-current" />
                                        ) : (
                                            <Play className="w-5 h-5 fill-current ml-1" />
                                        )}
                                    </button>
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
