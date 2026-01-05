'use client';

import React, { useState, useEffect } from 'react';
import {
    User, Settings, Music, Upload, Cpu, HardDrive,
    Shield, Bell, Palette, Sliders, LogOut, Save
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function SettingsContent() {
    const searchParams = useSearchParams();
    const initialSection = searchParams.get('section') || 'profile';
    const [activeSection, setActiveSection] = useState(initialSection);

    // Update active section if URL changes (optional, but good for back/forward nav)
    useEffect(() => {
        const section = searchParams.get('section');
        if (section) {
            setActiveSection(section);
        }
    }, [searchParams]);

    const navigation = [
        { id: 'account', label: 'Account', icon: User },
        { id: 'profile', label: 'Profile', icon: Settings },
        { id: 'playback', label: 'Playback', icon: Music },
        { id: 'uploads', label: 'Uploads', icon: Upload },
        { id: 'ai', label: 'AI Preferences', icon: Cpu },
        { id: 'storage', label: 'Storage', icon: HardDrive },
        { id: 'privacy', label: 'Privacy', icon: Shield },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'appearance', label: 'Appearance', icon: Palette },
        { id: 'advanced', label: 'Advanced', icon: Sliders },
    ];

    const renderSection = () => {
        switch (activeSection) {
            case 'account': return <AccountSettings />;
            case 'profile': return <ProfileSettings />;
            // Add other cases as we build components
            default: return <div className="text-gray-500">Section under construction</div>;
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white p-8 pb-32">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 sticky top-0 bg-[#0A0A0A]/80 backdrop-blur-xl z-20 py-4 border-b border-white/5">
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Settings</h1>
                    <p className="text-gray-400">Manage your NYXEL experience. Your sound. Your rules.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
                    {/* Sidebar */}
                    <div className="space-y-1">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${isActive ? 'bg-indigo-500/10 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.1)] border border-indigo-500/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : 'text-gray-500 group-hover:text-white'}`} />
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area */}
                    <div className="min-h-[500px] animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Placeholder for now to test layout */}
                        {activeSection === 'profile' && <ProfileSettings />}
                        {activeSection === 'account' && <AccountSettings />}
                        {['playback', 'uploads', 'ai', 'storage', 'privacy', 'notifications', 'appearance', 'advanced'].includes(activeSection) && (
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-center justify-center min-h-[400px] text-gray-500">
                                <Sliders className="w-12 h-12 mb-4 opacity-20" />
                                <p>Configuring {navigation.find(n => n.id === activeSection)?.label}...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SettingsPage() {
    return (
        <React.Suspense fallback={<div className="min-h-screen bg-[#0A0A0A] text-white p-8">Loading...</div>}>
            <SettingsContent />
        </React.Suspense>
    );
}

// --- REUSABLE COMPONENTS (Move to separate files later if needed) ---

const Section = ({ title, children, description }: { title: string, description?: string, children: React.ReactNode }) => (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm mb-6 animate-in fade-in duration-500">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
            {description && <p className="text-gray-400 text-sm">{description}</p>}
        </div>
        {children}
    </div>
);

const InputGroup = ({ label, value, readOnly = false, type = "text" }: { label: string, value: string, readOnly?: boolean, type?: string }) => (
    <div className="group">
        <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2 group-focus-within:text-indigo-400 transition-colors">{label}</label>
        <input
            type={type}
            defaultValue={value}
            readOnly={readOnly}
            className={`w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all ${readOnly ? 'opacity-50 cursor-not-allowed' : ''}`}
        />
    </div>
);

const Toggle = ({ label, enabled, onChange }: { label: string, enabled: boolean, onChange?: () => void }) => (
    <div className="flex items-center justify-between py-2 cursor-pointer group" onClick={onChange}>
        <span className="text-gray-300 group-hover:text-white transition-colors">{label}</span>
        <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${enabled ? 'bg-indigo-500' : 'bg-white/10'}`}>
            <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${enabled ? 'translate-x-6' : 'translate-x-0'}`} />
        </div>
    </div>
);

// --- SECTIONS ---

const AccountSettings = () => (
    <div className="space-y-6">
        <Section title="Identity & Login" description="Manage your personal account information and security.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <InputGroup label="Email Address" value="nyxel.user@example.com" readOnly />
                <InputGroup label="Username" value="@nyxel_fan" />
            </div>
            <div className="border-t border-white/5 pt-6">
                <h3 className="text-sm font-semibold text-white mb-4">Password</h3>
                <button className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-sm transition-colors text-gray-300">
                    Change Password
                </button>
            </div>
        </Section>

        <Section title="Connected Accounts">
            <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs">G</div>
                        <div>
                            <div className="text-sm font-medium">Google</div>
                            <div className="text-xs text-gray-500">Connected as sunny...</div>
                        </div>
                    </div>
                    <button className="text-xs text-red-400 hover:text-red-300">Disconnect</button>
                </div>
            </div>
        </Section>

        <div className="flex justify-end pt-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all text-sm font-bold border border-red-500/20">
                <LogOut className="w-4 h-4" />
                Sign Out Everywhere
            </button>
        </div>
    </div>
);

const ProfileSettings = () => {
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-6">
            <Section title="Public Profile" description="This is how you appear to others on NYXEL.">
                <div className="flex items-start gap-8 mb-8">
                    <div className="shrink-0 text-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] mb-3 shadow-2xl shadow-indigo-900/20">
                            <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center overflow-hidden relative">
                                {image ? (
                                    <img src={image} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-3xl font-bold text-white">NX</span>
                                )}
                            </div>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            className="hidden"
                            accept="image/*"
                        />
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
                        >
                            Change Photo
                        </button>
                    </div>

                    <div className="flex-1 space-y-6">
                        <InputGroup label="Display Name" value="Sunny Singh" />
                        <div>
                            <label className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Short Bio</label>
                            <textarea
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 min-h-[100px] resize-none transition-all"
                                defaultValue="Music enthusiast & curator. Living for the vibes."
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-6 space-y-4">
                    <Toggle label="Artist Account Mode" enabled={false} />
                    <p className="text-xs text-gray-500 pl-0">Enabling artist mode allows you to upload tracks and view analytics.</p>
                </div>
            </Section>

            <div className="flex items-center justify-end gap-4 pt-4">
                <button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 text-sm font-medium transition-colors">
                    Preview Profile
                </button>
                <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/20 transition-all hover:scale-105 active:scale-95 font-bold text-sm">
                    <Save className="w-4 h-4" />
                    Save Changes
                </button>
            </div>
        </div>
    );
};
