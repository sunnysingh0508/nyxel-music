'use client';

import { Search, Bell, Settings, User, X, Music, Play, Star } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePlayer, Track } from '@/app/context/PlayerContext';
import { oldSongTracks, punjabiTracks, romanticTracks } from '@/app/data/tracks';

const ALL_TRACKS: Track[] = [...oldSongTracks, ...punjabiTracks, ...romanticTracks];

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Track[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { playTrack } = usePlayer();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (searchQuery.trim().length > 0) {
            const filtered = ALL_TRACKS.filter(track =>
                track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                track.artist.toLowerCase().includes(searchQuery.toLowerCase())
            ).slice(0, 5); // Limit to top 5 results
            setSearchResults(filtered);
            setIsDropdownOpen(true);
        } else {
            setSearchResults([]);
            setIsDropdownOpen(false);
        }
    }, [searchQuery]);

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleResultClick = (track: Track) => {
        playTrack(track, ALL_TRACKS);
        setIsDropdownOpen(false);
        setSearchQuery('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && searchResults.length > 0) {
            handleResultClick(searchResults[0]);
        } else if (e.key === 'Escape') {
            setIsDropdownOpen(false);
        }
    };

    return (
        <header className="flex items-center justify-between px-8 py-5 w-full relative z-50">
            {/* Search */}
            <div className="flex-1 max-w-xl relative" ref={dropdownRef}>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-violet-400 transition-colors" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="block w-full pl-11 pr-11 py-3 bg-white/5 border border-white/10 rounded-full leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 sm:text-sm transition-all duration-300 shadow-lg shadow-black/20"
                        placeholder="Search for artists, songs, or podcasts..."
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>

                {/* Search Results Dropdown */}
                {isDropdownOpen && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 py-2 bg-[#121624] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl z-[100] overflow-hidden">
                        <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Best Matches
                        </div>
                        {searchResults.map((track, index) => (
                            <button
                                key={index}
                                onClick={() => handleResultClick(track)}
                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                            >
                                <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
                                    {track.coverUrl ? (
                                        <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Music className="w-5 h-5 text-gray-600" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                        <Play className="w-4 h-4 text-white fill-white" />
                                    </div>
                                </div>
                                <div className="flex-1 text-left truncate">
                                    <h4 className="text-sm font-medium text-white truncate group-hover:text-violet-400 transition-colors">
                                        {track.title}
                                    </h4>
                                    <p className="text-xs text-gray-400 truncate">
                                        {track.artist}
                                    </p>
                                </div>
                                <div className="text-xs text-gray-500">
                                    {track.duration}
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {isDropdownOpen && searchResults.length === 0 && searchQuery.trim() !== '' && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-8 bg-[#121624] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl z-[100] text-center">
                        <Search className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                        <p className="text-sm text-gray-400">No results found for "{searchQuery}"</p>
                    </div>
                )}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6 ml-6">
                <Link href="/notifications">
                    <button className="relative p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-2 block h-2 w-2 rounded-full ring-2 ring-[#0B0F1A] bg-pink-500"></span>
                    </button>
                </Link>

                <Link href="/settings">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
                        <Settings className="w-5 h-5" />
                    </button>
                </Link>

                <div className="flex items-center gap-3 pl-3 border-l border-white/10">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white ring-2 ring-white/10">
                            <User className="w-5 h-5" />
                        </div>
                        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-[#0B0F1A] bg-green-500"></span>
                    </div>
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-white leading-none mb-1">Sunny Singh</p>
                        <div className="flex items-center gap-1 bg-violet-500/20 px-2 py-0.5 rounded-full w-fit">
                            <Star className="w-3 h-3 text-violet-300 fill-violet-300" />
                            <span className="text-[10px] font-bold text-violet-300 uppercase tracking-wide">Premium</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
