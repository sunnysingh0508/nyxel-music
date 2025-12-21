'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

export interface Track {
    title: string;
    artist: string;
    fileUrl: string;
    coverUrl?: string;
    duration?: string;
}

interface PlayerContextType {
    currentTrack: Track | null;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    playTrack: (track: Track, queue?: Track[]) => void;
    togglePlay: () => void;
    seek: (time: number) => void;
    nextTrack: () => void;
    prevTrack: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [queue, setQueue] = useState<Track[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize audio element on mount
    useEffect(() => {
        audioRef.current = new Audio();

        // Auto-play next track when ended
        audioRef.current.onended = () => {
            nextTrack();
        };

        // Time Update Listener
        audioRef.current.ontimeupdate = () => {
            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
            }
        };

        // Metadata Listener
        audioRef.current.onloadedmetadata = () => {
            if (audioRef.current) {
                setDuration(audioRef.current.duration);
            }
        };
    }, []);

    // Helper to find next track index
    const getNextTrack = () => {
        if (!currentTrack || queue.length === 0) return null;
        const currentIndex = queue.findIndex(t => t.fileUrl === currentTrack.fileUrl);
        if (currentIndex !== -1 && currentIndex < queue.length - 1) {
            return queue[currentIndex + 1];
        }
        return null; // End of playlist
    };

    const getPrevTrack = () => {
        if (!currentTrack || queue.length === 0) return null;
        const currentIndex = queue.findIndex(t => t.fileUrl === currentTrack.fileUrl);
        if (currentIndex > 0) {
            return queue[currentIndex - 1];
        }
        return null;
    };

    // Handle track changes
    useEffect(() => {
        if (currentTrack && audioRef.current) {
            // Only change src if it's different to avoid reloading same song
            if (audioRef.current.src !== new URL(currentTrack.fileUrl, window.location.href).href) {
                audioRef.current.src = currentTrack.fileUrl;
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(err => console.error("Playback failed:", err));
            } else {
                // If it's the same song, ensure it's playing
                if (!isPlaying) {
                    audioRef.current.play()
                        .then(() => setIsPlaying(true))
                        .catch(err => console.error("Playback failed:", err));
                }
            }
        }
    }, [currentTrack]);

    // Handle play/pause toggles
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(err => console.error("Playback failed:", err));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const playTrack = (track: Track, newQueue?: Track[]) => {
        if (currentTrack?.fileUrl === track.fileUrl) {
            togglePlay();
        } else {
            setCurrentTrack(track);
            if (newQueue) {
                setQueue(newQueue);
            }
        }
    };

    const togglePlay = () => {
        setIsPlaying(prev => !prev);
    };

    const seek = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const nextTrack = () => {
        // Since we can't access updated state in the event listener closure easily without refs or cleaner logic, 
        // we heavily rely on the queue state being up to date.
        // We use a functional update or just read current state if accessible.

        // Note: In strict mode / closures, this might be stale. 
        // A robust way is to use a ref for the queue or just read `queue` from state if this function is recreated.
        // Since we are inside the component, `queue` should be fresh on re-renders, but `onended` is bound once.
        // Actually, `onended` defined in useEffect [] captures initial state.
        // FIX: Move onended to a useEffect dependent on queue/currentTrack OR use refs.
    };

    // Ref-based queue for stable access in event listeners
    const queueRef = useRef<Track[]>([]);
    const currentTrackRef = useRef<Track | null>(null);

    useEffect(() => {
        queueRef.current = queue;
    }, [queue]);

    useEffect(() => {
        currentTrackRef.current = currentTrack;
    }, [currentTrack]);

    // Re-bind onended to ensure it has access to latest refs
    useEffect(() => {
        if (!audioRef.current) return;

        const handleEnded = () => {
            const q = queueRef.current;
            const c = currentTrackRef.current;
            if (!c || q.length === 0) return;

            const idx = q.findIndex(t => t.fileUrl === c.fileUrl);
            if (idx !== -1 && idx < q.length - 1) {
                setCurrentTrack(q[idx + 1]);
            }
        };

        audioRef.current.onended = handleEnded;
    }, []);

    // Exposed next/prev functions
    const nextTrackAction = () => {
        const q = queueRef.current;
        const c = currentTrackRef.current;
        if (!c || q.length === 0) return;

        const idx = q.findIndex(t => t.fileUrl === c.fileUrl);
        if (idx !== -1 && idx < q.length - 1) {
            setCurrentTrack(q[idx + 1]);
        }
    };

    const prevTrackAction = () => {
        const q = queueRef.current;
        const c = currentTrackRef.current;
        if (!c || q.length === 0) return;

        if (audioRef.current && audioRef.current.currentTime > 3) {
            audioRef.current.currentTime = 0;
            return;
        }

        const idx = q.findIndex(t => t.fileUrl === c.fileUrl);
        if (idx > 0) {
            setCurrentTrack(q[idx - 1]);
        }
    };

    return (
        <PlayerContext.Provider value={{
            currentTrack,
            isPlaying,
            currentTime,
            duration,
            playTrack,
            togglePlay,
            seek,
            nextTrack: nextTrackAction,
            prevTrack: prevTrackAction
        }}>
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    const context = useContext(PlayerContext);
    if (context === undefined) {
        throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
}
