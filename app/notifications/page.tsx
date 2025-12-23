'use client';

import React, { useState } from 'react';
import {
    Bell, Check, Settings, Upload, Cpu, User,
    AlertCircle, MessageSquare, Music, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

// --- TYPES ---
type NotificationType = 'upload' | 'ai' | 'social' | 'system';

interface Notification {
    id: string;
    type: NotificationType;
    title: string;
    message: string;
    read: boolean;
    timestamp: string;
}

// --- MOCK DATA ---
const INITIAL_NOTIFICATIONS: Notification[] = [
    {
        id: '1',
        type: 'upload',
        title: 'Upload Successful',
        message: 'Your song "Midnight Echo" has been successfully processed and is now live.',
        read: false,
        timestamp: '5m ago'
    },
    {
        id: '2',
        type: 'ai',
        title: 'AI Analysis Complete',
        message: 'AI has finished structuring "Neon Drive". 3 new tags suggested.',
        read: false,
        timestamp: '2h ago'
    },
    {
        id: '3',
        type: 'social',
        title: 'New Follower',
        message: 'Alex Doe started following you.',
        read: true,
        timestamp: '5h ago'
    },
    {
        id: '4',
        type: 'system',
        title: 'Storage Warning',
        message: 'You have used 85% of your available storage space.',
        read: false,
        timestamp: '1d ago'
    },
    {
        id: '5',
        type: 'ai',
        title: 'Metadata Generated',
        message: 'Description and mood tags auto-generated for your latest draft.',
        read: true,
        timestamp: '1d ago'
    },
    {
        id: '6',
        type: 'social',
        title: 'Playlist Addition',
        message: 'Your track "Old Song" was added to "Chill Vibes 2024".',
        read: true,
        timestamp: '2d ago'
    }
];

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);
    const [activeTab, setActiveTab] = useState<'all' | NotificationType>('all');

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    const markRead = (id: string) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const filteredNotifications = activeTab === 'all'
        ? notifications
        : notifications.filter(n => n.type === activeTab);

    // --- ICON HELPER ---
    const getIcon = (type: NotificationType) => {
        switch (type) {
            case 'upload': return <Upload className="w-5 h-5 text-green-400" />;
            case 'ai': return <Cpu className="w-5 h-5 text-indigo-400" />;
            case 'social': return <User className="w-5 h-5 text-pink-400" />;
            case 'system': return <Settings className="w-5 h-5 text-gray-400" />;
            default: return <Bell className="w-5 h-5 text-white" />;
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white p-6 md:p-8 pb-32">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sticky top-0 bg-[#0A0A0A]/90 backdrop-blur-xl z-20 py-4 border-b border-white/5">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-1 flex items-center gap-3">
                            Notifications
                            {unreadCount > 0 && (
                                <span className="inline-flex items-center justify-center bg-indigo-500 text-white text-xs font-bold px-2 py-0.5 rounded-full h-6 min-w-[24px]">
                                    {unreadCount}
                                </span>
                            )}
                        </h1>
                        <p className="text-gray-400 text-sm">Stay updated, not distracted.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={markAllRead}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            <CheckCircle2 className="w-4 h-4" />
                            Mark all as read
                        </button>
                        <Link href="/settings?section=notifications">
                            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 hover:text-white transition-colors">
                                <Settings className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-2 scrollbar-hide">
                    {[
                        { id: 'all', label: 'All' },
                        { id: 'upload', label: 'Uploads' },
                        { id: 'ai', label: 'AI' },
                        { id: 'social', label: 'Social' },
                        { id: 'system', label: 'System' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab.id
                                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Feed */}
                <div className="space-y-4 min-h-[400px]">
                    {filteredNotifications.length > 0 ? (
                        filteredNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                onClick={() => markRead(notification.id)}
                                className={`group relative flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${notification.read
                                    ? 'bg-transparent border-transparent hover:bg-white/5'
                                    : 'bg-white/5 border-white/5 hover:border-white/10 hover:shadow-lg hover:shadow-indigo-500/5'
                                    }`}
                            >
                                {/* Unread Indicator */}
                                {!notification.read && (
                                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                                )}

                                {/* Icon Box */}
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/5 ${notification.read ? 'bg-white/5 grayscale opacity-50' : 'bg-[#151520]'
                                    }`}>
                                    {getIcon(notification.type)}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0 pr-6">
                                    <h3 className={`text-sm font-bold mb-1 ${notification.read ? 'text-gray-400' : 'text-white'}`}>
                                        {notification.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${notification.read ? 'text-gray-600' : 'text-gray-400'}`}>
                                        {notification.message}
                                    </p>

                                    <div className="flex items-center gap-4 mt-3">
                                        <span className="text-xs text-gray-500 font-mono">{notification.timestamp}</span>
                                        {/* Inline Actions based on type could go here */}
                                        {!notification.read && <span className="text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity font-medium">Mark as read</span>}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Empty State
                        <div className="flex flex-col items-center justify-center py-24 text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                <Check className="w-8 h-8 text-gray-600" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">You're all caught up</h3>
                            <p className="text-gray-500 max-w-xs mx-auto">No new notifications in this category. Enjoy the silence.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
