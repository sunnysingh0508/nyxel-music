'use client';

import { Upload, Filter, Plus, Loader2 } from 'lucide-react';
import { useRef } from 'react';

interface MyUploadsHeaderProps {
    onUploadStart: (file: File) => void;
    isUploading: boolean;
}

export default function MyUploadsHeader({ onUploadStart, isUploading }: MyUploadsHeaderProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 20 * 1024 * 1024) { // 20MB limit
                alert("File too large. Max 20MB.");
                return;
            }
            const validTypes = ['audio/mpeg', 'audio/wav', 'audio/aac', 'audio/x-wav', 'audio/mp3'];
            // Basic validation, can be stricter
            if (!file.type.startsWith('audio/') && !file.name.endsWith('.mp3') && !file.name.endsWith('.wav')) {
                alert("Invalid file type. Please upload audio files.");
                return;
            }
            onUploadStart(file);
        }
        // Reset input
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight flex items-center gap-3">
                    My Uploads
                    <span className="p-2 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                        <Upload className="w-6 h-6" />
                    </span>
                </h1>
                <p className="text-gray-400 text-lg">Your sound, shared with the world.</p>
            </div>

            <div className="flex items-center gap-4">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".mp3,.wav,.aac,audio/*"
                    className="hidden"
                />
                <button
                    onClick={handleUploadClick}
                    disabled={isUploading}
                    className={`px-6 py-3 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-white/5 ${isUploading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                    {isUploading ? 'Uploading...' : 'Upload New'}
                </button>

                <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-gray-400 transition-colors">
                    <Filter className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
