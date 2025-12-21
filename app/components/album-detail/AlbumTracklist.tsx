'use client';

import { Play, Pause, Heart, Clock } from 'lucide-react';
import { usePlayer, Track } from '../../context/PlayerContext';

export default function AlbumTracklist() {
    const { currentTrack, isPlaying, playTrack } = usePlayer();

    // Real data mapped to user files with Covers
    const tracks = [
        {
            num: 1,
            title: 'Radhey Song',
            duration: '3:45',
            plays: '12K',
            fileUrl: '/songs/radheysong.mp3',
            artist: 'Unknown Artist',
            coverUrl: 'https://images.unsplash.com/photo-1621360841013-c768371e93cf?q=80&w=1000&auto=format&fit=crop'
        },
        {
            num: 2,
            title: 'Mere Mehboob Qayamat Hogi',
            duration: '4:20',
            plays: '50K',
            fileUrl: '/songs/mere-mehboob-qayamat-hogi-kishore-kumars-greatest-hits-old-songs-.mp3',
            popular: true,
            liked: true,
            artist: 'Kishore Kumar',
            coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop'
        },
        {
            num: 3,
            title: 'Likhe Jo Khat Tujhe',
            duration: '4:15',
            plays: '35K',
            fileUrl: '/songs/likhe-jo-khat-tujhe-song-mohammed-rafi-shashi-kapoor.mp3',
            artist: 'Mohammed Rafi',
            coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop'
        },
    ];

    const handleTrackClick = (trackData: any) => {
        const track: Track = {
            title: trackData.title,
            artist: trackData.artist,
            fileUrl: trackData.fileUrl,
            duration: trackData.duration,
            coverUrl: trackData.coverUrl
        };
        // Build queue
        const queue: Track[] = tracks.map(t => ({
            title: t.title,
            artist: t.artist,
            fileUrl: t.fileUrl,
            duration: t.duration,
            coverUrl: t.coverUrl
        }));
        playTrack(track, queue);
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
                {tracks.map((track) => {
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
                                    <span className={`font-medium truncate ${active ? 'text-red-400' : (track.popular ? 'text-white' : 'text-gray-200')} ${track.popular && !active ? 'text-red-300' : ''}`}>{track.title}</span>
                                </div>
                                <span className="text-xs text-gray-500 md:hidden block">{track.artist}</span>
                            </div>

                            <span className="text-sm text-gray-500 hidden md:block">{track.plays}</span>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={(e) => e.stopPropagation()}
                                    className={`opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 ${track.liked ? 'opacity-100 text-red-500' : 'text-gray-400 hover:text-white'}`}
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
