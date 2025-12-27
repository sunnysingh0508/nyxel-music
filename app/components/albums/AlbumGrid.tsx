'use client';

import { Play, Heart, Plus, X, Shuffle, Clock } from 'lucide-react';
import { useState } from 'react';

import { usePlayer } from '../../context/PlayerContext';

// Types (Mock)
// Types (Mock)
interface Album {
    id: number;
    title: string;
    artist: string;
    year: string;
    tracks: number;
    duration: string;
    coverColor: string;
    image?: string;
    fileUrl?: string;
    tracksList?: { title: string; duration: string; fileUrl?: string }[];
}

const albumsData: Album[] = [
    {
        id: 1,
        title: 'Sad Song',
        artist: 'Daft Punk',
        year: '2013',
        tracks: 13,
        duration: '74 min',
        coverColor: 'bg-gradient-to-br from-gray-800 to-black',
        image: '/images/sad-song-grid-cover-4.png',
        fileUrl: '/songs/Ye Tune Kya Kiya_spotdown.org.mp3',
        tracksList: [
            { title: 'Ye Tune Kya Kiya', duration: '5:15', fileUrl: '/songs/Ye Tune Kya Kiya_spotdown.org.mp3' },
            { title: 'Jo Tum Mere Ho', duration: '4:12', fileUrl: '/songs/Jo Tum Mere Ho_spotdown.org.mp3' },
            { title: 'Mann Mera', duration: '3:20', fileUrl: '/songs/Mann Mera - Original Version_spotdown.org.mp3' },
            { title: 'Lonely Night', duration: '3:45' },
            { title: 'Broken Heart', duration: '4:12' },
            { title: 'Memories Fade', duration: '3:30' },
        ]
    },
    { id: 2, title: 'Currents', artist: 'Tame Impala', year: '2015', tracks: 13, duration: '51 min', coverColor: 'bg-gradient-to-br from-purple-800 to-pink-900' },
    { id: 3, title: 'Melodrama', artist: 'Lorde', year: '2017', tracks: 11, duration: '41 min', coverColor: 'bg-gradient-to-br from-blue-900 to-indigo-900' },
    { id: 4, title: 'Blonde', artist: 'Frank Ocean', year: '2016', tracks: 17, duration: '60 min', coverColor: 'bg-gradient-to-br from-green-900 to-emerald-900' },
    { id: 5, title: 'IGOR', artist: 'Tyler, The Creator', year: '2019', tracks: 12, duration: '39 min', coverColor: 'bg-gradient-to-br from-pink-500 to-rose-600' },
    { id: 6, title: 'SOS', artist: 'SZA', year: '2022', tracks: 23, duration: '68 min', coverColor: 'bg-gradient-to-br from-blue-700 to-sky-800' },
    { id: 7, title: 'Renaissance', artist: 'Beyoncé', year: '2022', tracks: 16, duration: '62 min', coverColor: 'bg-gradient-to-br from-neutral-800 to-stone-900' },
    { id: 8, title: 'Punisher', artist: 'Phoebe Bridgers', year: '2020', tracks: 11, duration: '40 min', coverColor: 'bg-gradient-to-br from-red-900 to-orange-900' },
];

export default function AlbumGrid() {
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    const { playTrack, isPlaying, currentTrack, togglePlay } = usePlayer();

    const isAlbumPlaying = (album: Album) => {
        if (!isPlaying || !currentTrack) return false;

        // Exact match with album main file
        if (currentTrack.fileUrl === album.fileUrl) return true;

        // Check if any track in the list is playing
        if (album.tracksList) {
            return album.tracksList.some(t => t.fileUrl === currentTrack.fileUrl);
        }

        return false;
    };

    const handlePlay = (album: Album) => {
        if (album.fileUrl) {
            // Check if ANY track from this album is currently playing
            const playingCurrentAlbum = isAlbumPlaying(album);

            // If already playing (paused or active), we toggle play.
            // But we need to distinguish between "playing this album" vs "playing another album".
            // isAlbumPlaying checks if currentTrack belongs to album AND isPlaying is true.
            // We want to toggle if it belongs to album.

            const isCurrentTrackFromAlbum = (currentTrack?.fileUrl === album.fileUrl) ||
                (album.tracksList && album.tracksList.some(t => t.fileUrl === currentTrack?.fileUrl));

            if (isCurrentTrackFromAlbum) {
                togglePlay();
            } else {
                playTrack({
                    title: album.title,
                    artist: album.artist,
                    fileUrl: album.fileUrl,
                    coverUrl: album.image,
                    duration: album.duration
                });
            }
        }
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-20">
                {albumsData.map((album) => (
                    <div
                        key={album.id}
                        onClick={() => setSelectedAlbum(album)}
                        className="group relative bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer border border-white/5 hover:border-white/10 glass-card"
                    >
                        <div className={`aspect-square w-full rounded-xl ${album.coverColor} mb-4 relative overflow-hidden group-hover:shadow-lg transition-all`}>
                            {album.image && (
                                <img src={album.image} alt={album.title} className="absolute inset-0 w-full h-full object-cover" />
                            )}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePlay(album);
                                    }}
                                    className="w-12 h-12 rounded-full bg-violet-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform hover:bg-violet-400"
                                >
                                    {isAlbumPlaying(album) ? (
                                        // Pause Icon
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause w-5 h-5 ml-0"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>
                                    ) : (
                                        <Play className="w-5 h-5 fill-current ml-1" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <h3 className="font-bold text-white truncate mb-1 text-base">{album.title}</h3>
                        <p className="text-gray-400 text-sm truncate mb-2">{album.artist}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                            <span>{album.year}</span>
                            <span>{album.tracks} tracks</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedAlbum && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedAlbum(null)}></div>

                    <div className="relative w-full max-w-4xl bg-[#1A1033] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setSelectedAlbum(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-white/20 transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col md:flex-row">
                            <div className={`p-8 md:w-2/5 flex flex-col justify-end relative min-h-[300px] ${selectedAlbum.coverColor} overflow-hidden`}>
                                {selectedAlbum.image && (
                                    <img src={selectedAlbum.image} alt={selectedAlbum.title} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1033] to-transparent"></div>
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-bold text-white mb-2 leading-tight">{selectedAlbum.title}</h2>
                                    <p className="text-xl text-gray-200 mb-6">{selectedAlbum.artist}</p>

                                    <div className="flex items-center gap-4 mb-6 text-sm font-medium text-gray-300">
                                        <span>{selectedAlbum.year}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                                        <span>{selectedAlbum.tracks} Songs</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                                        <span>{selectedAlbum.duration}</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => handlePlay(selectedAlbum)}
                                            className="flex-1 bg-white text-black font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                                        >
                                            {isAlbumPlaying(selectedAlbum) ? (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause w-4 h-4 mr-0"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>
                                                    Pause
                                                </>
                                            ) : (
                                                <>
                                                    <Play className="w-4 h-4 fill-current" />
                                                    Play
                                                </>
                                            )}
                                        </button>
                                        <button className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                                            <Heart className="w-5 h-5" />
                                        </button>
                                        <button className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                                            <Plus className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 p-6 md:p-8 bg-[#1A1033] max-h-[60vh] overflow-y-auto custom-scrollbar">
                                <div className="flex justify-between items-center mb-6 text-gray-400 text-xs font-semibold uppercase tracking-wider border-b border-white/5 pb-2">
                                    <span># &nbsp; Title</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        <span>Time</span>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    {selectedAlbum.tracksList ? (
                                        selectedAlbum.tracksList.map((track, i) => (
                                            <div key={i}
                                                className={`flex items-center justify-between p-3 rounded-lg hover:bg-white/5 group transition-colors cursor-pointer text-sm ${currentTrack?.title === track.title && isPlaying ? 'bg-white/10' : ''}`}
                                                onClick={() => {
                                                    if (track.fileUrl) {
                                                        if (currentTrack?.fileUrl === track.fileUrl) togglePlay();
                                                        else playTrack({ ...track, artist: selectedAlbum.artist, coverUrl: selectedAlbum.image } as any);
                                                    }
                                                }}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span className={`w-4 text-center ${currentTrack?.title === track.title ? 'text-violet-400 font-bold' : 'text-gray-500 group-hover:text-violet-400'}`}>
                                                        {currentTrack?.title === track.title && isPlaying ? (
                                                            <div className="flex gap-0.5 h-3 items-end justify-center">
                                                                <div className="w-0.5 bg-violet-400 h-full animate-music-bar-1"></div>
                                                                <div className="w-0.5 bg-violet-400 h-2/3 animate-music-bar-2"></div>
                                                                <div className="w-0.5 bg-violet-400 h-full animate-music-bar-3"></div>
                                                            </div>
                                                        ) : (
                                                            i + 1
                                                        )}
                                                    </span>
                                                    <span className={`font-medium ${currentTrack?.title === track.title ? 'text-violet-300' : 'text-gray-300 group-hover:text-white'}`}>{track.title}</span>
                                                </div>
                                                <span className="text-gray-500 text-xs font-mono">{track.duration}</span>
                                            </div>
                                        ))
                                    ) : (
                                        Array.from({ length: selectedAlbum.tracks }).map((_, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 group transition-colors cursor-pointer text-sm">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gray-500 w-4 text-center group-hover:text-violet-400">{i + 1}</span>
                                                    <span className="text-gray-300 font-medium group-hover:text-white">Track Name {i + 1}</span>
                                                </div>
                                                <span className="text-gray-500 text-xs font-mono">3:42</span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
