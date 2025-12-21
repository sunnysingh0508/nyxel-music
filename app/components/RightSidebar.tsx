'use client';

import { Disc, SkipBack, Play, Pause, SkipForward, Heart, Volume2 } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';
import React from 'react';

export default function RightSidebar() {
    const { currentTrack, isPlaying, togglePlay, currentTime, duration, seek, nextTrack, prevTrack } = usePlayer();

    // Fallback data if nothing is playing
    const displayTrack = currentTrack || {
        title: 'Ready to Play',
        artist: 'Select a song',
        coverUrl: ''
    };

    // Format time (seconds -> mm:ss)
    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        seek(Number(e.target.value));
    };

    // Dynamic gradient based on state
    const bgGradient = currentTrack ? 'bg-gradient-to-br from-violet-600/20 to-indigo-600/20' : 'bg-[#13192E]';

    return (
        <aside className="fixed right-0 top-0 h-screen w-80 bg-[#0B0F1A] border-l border-white/5 p-6 hidden xl:flex flex-col z-50">

            {/* Profile / Top Section */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-white font-bold text-lg">Now Playing</h2>
            </div>

            {/* Album Art / Player Info */}
            <div className="flex-1 flex flex-col items-center justify-center mb-8">
                <div className={`w-64 h-64 rounded-full ${bgGradient} flex items-center justify-center mb-8 relative group shadow-2xl shadow-violet-900/10`}>
                    {/* Spinning Animation (Only when playing) */}
                    <div className={`absolute inset-0 rounded-full border border-white/10 ${isPlaying ? 'animate-spin-slow' : ''}`}></div>

                    {/* Cover Image or Icon */}
                    <div className={`w-48 h-48 rounded-full overflow-hidden shadow-2xl transition-all duration-700 ${isPlaying ? 'animate-spin-slow' : ''}`}>
                        {displayTrack.coverUrl ? (
                            <img src={displayTrack.coverUrl} alt={displayTrack.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-[#1A1F33] flex items-center justify-center text-violet-500 shadow-inner">
                                <Disc className="w-20 h-20" />
                            </div>
                        )}
                    </div>

                    {/* Glow Effect */}
                    {isPlaying && <div className="absolute inset-0 bg-violet-500/10 rounded-full blur-2xl animate-pulse pointer-events-none"></div>}
                </div>

                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{displayTrack.title}</h3>
                    <p className="text-gray-400 font-medium">{displayTrack.artist}</p>
                </div>

                {/* Progress Bar (Interactive) */}
                <div className="w-full mb-8">
                    <div className="group relative h-1.5 w-full bg-white/10 rounded-full">
                        {/* Seek Input (Hidden but clickable) */}
                        <input
                            type="range"
                            min="0"
                            max={duration || 100}
                            value={currentTime}
                            onChange={handleSeek}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        {/* Visual Progress */}
                        <div
                            className="h-full bg-white rounded-full relative"
                            style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"></div>
                        </div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-6 mb-8">
                    <button
                        onClick={prevTrack}
                        className="text-gray-400 hover:text-white transition-colors hover:scale-110 active:scale-95"
                    >
                        <SkipBack className="w-6 h-6" />
                    </button>

                    <button
                        onClick={togglePlay}
                        className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
                    >
                        {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                    </button>

                    <button
                        onClick={nextTrack}
                        className="text-gray-400 hover:text-white transition-colors hover:scale-110 active:scale-95"
                    >
                        <SkipForward className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex items-center justify-between w-full px-4 text-gray-400">
                    <button className="hover:text-red-500 transition-colors"><Heart className="w-5 h-5" /></button>
                    <button className="hover:text-white transition-colors"><Volume2 className="w-5 h-5" /></button>
                </div>
            </div>

            <style jsx>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
        }
      `}</style>
        </aside>
    );
}
