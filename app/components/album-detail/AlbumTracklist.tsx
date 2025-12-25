'use client';

import { Play, Pause, Heart, Clock } from 'lucide-react';
import React from 'react';
import { usePlayer, Track } from '../../context/PlayerContext';
import { oldSongTracks } from '../../data/tracks';

export default function AlbumTracklist({ tracks = oldSongTracks }: { tracks?: any[] }) {
    const { currentTrack, isPlaying, playTrack } = usePlayer();
    const [localTracks, setLocalTracks] = React.useState(tracks.map(t => ({ ...t, liked: false })));

    // Update local tracks when props change
    React.useEffect(() => {
        setLocalTracks(tracks.map(t => ({ ...t, liked: false })));
    }, [tracks]);

    const handleTrackClick = (trackData: any) => {
        // Increment play count locally
        setLocalTracks(prev => prev.map(t => {
            if (t.num === trackData.num) {
                // Parse current plays (remove 'K' or ',' if present, though we reset to '0')
                const currentPlays = parseInt(t.plays.replace(/[^0-9]/g, '')) || 0;
                return { ...t, plays: (currentPlays + 1).toString() };
            }
            return t;
        }));

        const track: Track = {
            title: trackData.title,
            artist: trackData.artist,
            fileUrl: trackData.fileUrl,
            duration: trackData.duration,
            coverUrl: trackData.coverUrl
        };
        // Build queue
        const queue: Track[] = localTracks.map(t => ({
            title: t.title,
            artist: t.artist,
            fileUrl: t.fileUrl,
            duration: t.duration,
            coverUrl: t.coverUrl
        }));
        playTrack(track, queue);
    };

    const toggleLike = (num: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setLocalTracks(prev => prev.map(track =>
            track.num === num ? { ...track, liked: !track.liked } : track
        ));
    };

    const isCurrentTrack = (trackFile: string) => currentTrack?.fileUrl === trackFile;

    return (
        <div className="bg-[#13192E]/50 border border-white/5 rounded-3xl p-6 backdrop-blur-sm">

            {/* Header */}
            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest px-4 pb-4 border-b border-white/5 mb-2">
                <span className="w-6 font-mono">#</span>
                <span>Title</span>
                <span>Plays</span>
                <span className="mr-8"><Clock className="w-4 h-4" /></span>
            </div>

            {/* List */}
            <div>
                {localTracks.map((track) => {
                    const active = isCurrentTrack(track.fileUrl);
                    const activeAndPlaying = active && isPlaying;

                    return (
                        <div
                            key={track.num}
                            onClick={() => handleTrackClick(track)}
                            className={`group grid grid-cols-[auto_1fr_auto_auto] gap-4 items-center px-4 py-3 rounded-xl transition-all cursor-pointer ${active ? 'bg-white/10 border border-white/5' : 'hover:bg-white/5 border border-transparent'}`}
                        >
                            <div className="w-6 flex justify-center text-gray-500">
                                {activeAndPlaying ? (
                                    <div className="flex gap-[2px] h-3 items-end">
                                        <span className="w-0.5 bg-red-500 h-full animate-[music-bar_0.5s_ease-in-out_infinite]"></span>
                                        <span className="w-0.5 bg-red-500 h-2/3 animate-[music-bar_0.4s_ease-in-out_infinite_0.1s]"></span>
                                        <span className="w-0.5 bg-red-500 h-1/2 animate-[music-bar_0.6s_ease-in-out_infinite_0.2s]"></span>
                                    </div>
                                ) : (
                                    <span className="group-hover:hidden font-mono">{track.num}</span>
                                )}
                                <span className={`hidden ${activeAndPlaying ? '' : 'group-hover:block'} text-white`}>
                                    {activeAndPlaying ? <Pause className="w-4 h-4 fill-current text-red-500" /> : <Play className="w-4 h-4 fill-current" />}
                                </span>
                            </div>

                            <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className={`font-medium truncate ${active ? 'text-red-400' : 'text-gray-200'} ${track.liked ? 'text-red-400' : ''}`}>{track.title}</span>
                                </div>
                                <span className="text-xs text-gray-500 md:hidden block">{track.artist}</span>
                            </div>

                            <span className="text-sm text-gray-500 hidden md:block">{track.plays}</span>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={(e) => toggleLike(track.num, e)}
                                    className={`group-hover:opacity-100 transition-all hover:scale-110 ${track.liked ? 'opacity-100 text-red-500' : 'opacity-0 text-gray-400 hover:text-white'}`}
                                >
                                    <Heart className={`w-4 h-4 ${track.liked ? 'fill-current' : ''}`} />
                                </button>
                                <span className="text-sm text-gray-400 w-10 text-right font-mono">{track.duration}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Custom Animation for bars */}
            <style jsx global>{`
           @keyframes music-bar {
             0%, 100% { height: 40%; }
             50% { height: 100%; }
           }
        `}</style>
        </div>
    );
}
