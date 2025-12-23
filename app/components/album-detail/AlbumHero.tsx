'use client';

import { Play, Pause, Heart, Share2, MoreHorizontal } from 'lucide-react';
import { usePlayer, Track } from '../../context/PlayerContext';
import { oldSongTracks } from '../../data/tracks';

export default function AlbumHero() {
    const { playTrack, currentTrack, isPlaying, togglePlay } = usePlayer();

    // Check if any song from this album is currently playing
    const isAlbumPlaying = currentTrack && oldSongTracks.some(t => t.fileUrl === currentTrack.fileUrl);
    const showPause = isAlbumPlaying && isPlaying;

    const handlePlayAlbum = () => {
        if (isAlbumPlaying) {
            togglePlay();
        } else {
            // Play first song and set queue
            const firstTrack = oldSongTracks[0];
            const queue: Track[] = oldSongTracks.map(t => ({
                title: t.title,
                artist: t.artist,
                fileUrl: t.fileUrl,
                duration: t.duration,
                coverUrl: t.coverUrl
            }));

            const trackToPlay: Track = {
                title: firstTrack.title,
                artist: firstTrack.artist,
                fileUrl: firstTrack.fileUrl,
                duration: firstTrack.duration,
                coverUrl: firstTrack.coverUrl
            };

            playTrack(trackToPlay, queue);
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 items-end mb-12 animate-in fade-in duration-700">
            {/* Cover Art */}
            <div className="group relative w-full md:w-[300px] aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-red-900/20">
                <img
                    src="/images/old-song-cover.png"
                    alt="Old Song Album Cover"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                    <button onClick={handlePlayAlbum} className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                        {showPause ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="flex-1">
                <h4 className="text-red-400 font-bold uppercase tracking-widest text-xs mb-2">Editor's Pick</h4>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">Old Song</h1>

                <div className="flex items-center gap-2 text-gray-300 text-lg mb-8">
                    <span className="text-white font-bold">The Weeknd</span>
                    <span>•</span>
                    <span>2020</span>
                    <span>•</span>
                    <span className="text-gray-400 text-sm">{oldSongTracks.length} Tracks</span>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={handlePlayAlbum}
                        className="px-8 py-3.5 bg-red-600 text-white rounded-full font-bold hover:bg-red-500 hover:scale-105 transition-all shadow-lg shadow-red-900/30 flex items-center gap-2"
                    >
                        {showPause ? (
                            <>
                                <Pause className="w-5 h-5 fill-current" />
                                Pause Album
                            </>
                        ) : (
                            <>
                                <Play className="w-5 h-5 fill-current" />
                                Play Album
                            </>
                        )}
                    </button>

                    <button className="p-3.5 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors" title="Save to Favorites">
                        <Heart className="w-6 h-6" />
                    </button>
                    <button className="p-3.5 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors" title="Share">
                        <Share2 className="w-6 h-6" />
                    </button>
                    <button className="p-3.5 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors">
                        <MoreHorizontal className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
