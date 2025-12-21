'use client';

import { MoreVertical, Edit2, Trash2, BarChart2, X, Check } from 'lucide-react';
import { useState } from 'react';

export interface UploadItem {
    id: number | string;
    title: string;
    type: string;
    visibility: 'Public' | 'Private' | 'Scheduled';
    plays: string | number;
    cover: string; // Tailwind class or URL
    date: string;
}

interface UploadGridProps {
    items: UploadItem[];
}

export default function UploadGrid({ items }: UploadGridProps) {
    const [editingItem, setEditingItem] = useState<UploadItem | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div key={item.id} className="group bg-[#13192E] rounded-3xl p-4 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
                        <div className="flex gap-4">
                            <div className={`w-24 h-24 rounded-2xl ${item.cover.startsWith('bg-') ? item.cover : 'bg-gray-800'} shrink-0 overflow-hidden relative`}>
                                {!item.cover.startsWith('bg-') && (
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.cover})` }}></div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0 py-1">
                                <div className="flex justify-between items-start">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border mb-2 inline-block ${item.visibility === 'Public' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                                        {item.visibility}
                                    </span>
                                    <button onClick={() => setEditingItem(item)} className="text-gray-500 hover:text-white transition-colors">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </div>

                                <h3 className="font-bold text-white truncate mb-1">{item.title}</h3>
                                <p className="text-xs text-gray-500">{item.type} • {item.date}</p>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                <BarChart2 className="w-4 h-4 text-violet-400" />
                                {item.plays} Plays
                            </div>

                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors" title="Edit">
                                    <Edit2 className="w-4 h-4" />
                                </button>
                                <button className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-300 hover:text-red-400 transition-colors" title="Delete">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Modal (Mock functionality for now) */}
            {editingItem && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setEditingItem(null)}></div>

                    <div className="relative w-full max-w-lg bg-[#1A1033] border border-white/10 rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-white">Edit Upload</h2>
                            <button onClick={() => setEditingItem(null)} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-gray-400 mb-4">Editing details for <span className="text-white font-bold">{editingItem.title}</span></p>

                        <div className="pt-4 flex justify-end gap-3">
                            <button onClick={() => setEditingItem(null)} className="px-6 py-2.5 rounded-xl font-bold text-gray-400 hover:text-white transition-colors">Cancel</button>
                            <button onClick={() => setEditingItem(null)} className="px-6 py-2.5 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-500 transition-colors flex items-center gap-2 shadow-lg shadow-violet-500/20">
                                <Check className="w-4 h-4" /> Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
