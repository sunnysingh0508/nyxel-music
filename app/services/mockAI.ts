import { SongAnalysis } from '../types/analysis';

export const mockAnalyzeSong = async (file: File): Promise<SongAnalysis> => {
    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return {
        title: file.name.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
        artist: "Unknown Artist", // Default assumption
        duration: "3:45",
        language: "Instrumental",
        releaseType: "Demo",
        genre: {
            primary: "Electronic",
            secondary: "Synthwave",
            style: "Cinematic",
            influences: ["Daft Punk", "M83"]
        },
        mood: {
            primary: "Energetic",
            secondary: "Futuristic",
            energy: "High",
            contexts: ["Late Night", "Drive"]
        },
        description: "A high-energy electronic track with pulsing synth basses and a driving beat. Perfect for late-night drives or coding sessions.",
        tags: {
            mood: ["Neon", "Night", "Cyberpunk"],
            genre: ["Synthwave", "Retrowave"],
            vibe: ["Cinematic", "Focus"]
        },
        artwork: {
            theme: "Cyberpunk Cityscape",
            colors: "#0f0c29, #302b63, #24243e",
            visualMood: "Dark, Neon, Glitchy"
        },
        placement: ["Discover", "Midnight Playlist", "Creator Uploads"],
        technical: {
            bpm: "128",
            playlistHint: "Neon Nights"
        }
    };
};
