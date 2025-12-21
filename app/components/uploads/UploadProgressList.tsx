'use client';

import { Loader2, XCircle, CheckCircle2 } from 'lucide-react';

export interface ActiveUpload {
    id: string;
    file: File;
    progress: number;
    status: 'Uploading' | 'Processing' | 'Ready' | 'Error';
}

interface UploadProgressListProps {
    uploads: ActiveUpload[];
}

export default function UploadProgressList({ uploads }: UploadProgressListProps) {
    if (uploads.length === 0) return null;

    return (
        <div className="mb-12 animate-in slide-in-from-top-4 duration-500">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">In Progress</h3>

            <div className="space-y-4">
                {uploads.map((upload) => (
                    <div key={upload.id} className="bg-[#13192E] border border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:border-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                            {upload.status === 'Ready' ? (
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                            ) : (
                                <Loader2 className="w-6 h-6 text-violet-400 animate-spin" />
                            )}
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between mb-2">
                                <h4 className="text-sm font-bold text-white truncate">{upload.file.name}</h4>
                                <span className="text-xs text-gray-400">{upload.status} • {upload.progress}%</span>
                            </div>

                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden w-full">
                                <div
                                    className={`h-full rounded-full transition-all duration-300 ${upload.status === 'Ready' ? 'bg-green-500' : 'bg-violet-500'}`}
                                    style={{ width: `${upload.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        <button className="text-gray-500 hover:text-red-400 transition-colors">
                            <XCircle className="w-5 h-5" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
