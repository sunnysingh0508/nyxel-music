export interface SongAnalysis {
    title: string;
    artist: string;
    duration: string;
    language: string;
    releaseType: 'Single' | 'Album Track' | 'Demo' | string;

    genre: {
        primary: string;
        secondary: string;
        style: string;
        influences?: string[];
    };

    mood: {
        primary: string;
        secondary: string;
        energy: 'Low' | 'Medium' | 'High';
        contexts: string[]; // e.g., 'Late Night', 'Focus'
    };

    description: string;

    tags: {
        mood: string[];
        genre: string[];
        vibe: string[];
    };

    artwork: {
        theme: string;
        colors: string;
        visualMood: string;
    };

    placement: string[]; // e.g., 'Discover', 'Midnight Playlist'

    technical: {
        bpm: string;
        playlistHint: string;
    };
}
