'use client';

import { ShieldCheck } from 'lucide-react';

interface VaultToggleProps {
    enabled: boolean;
    onToggle: () => void;
}

export default function VaultModeToggle({ enabled, onToggle }: VaultToggleProps) {
    return (
        <div className="flex items-center gap-3 mb-8 p-4 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-white/10 w-fit">
            <div className={`p-2 rounded-lg transition-colors ${enabled ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-gray-500'}`}>
                <ShieldCheck className="w-5 h-5" />
            </div>

            <div>
                <h3 className={`font-bold text-sm ${enabled ? 'text-amber-400' : 'text-gray-300'}`}>Vault Mode</h3>
                <p className="text-xs text-gray-500 hidden sm:block">Focused private browsing</p>
            </div>

            <button
                onClick={onToggle}
                className={`w-12 h-7 rounded-full transition-colors relative ml-4 ${enabled ? 'bg-amber-500' : 'bg-white/20'}`}
            >
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${enabled ? 'translate-x-5' : 'translate-x-0'}`}></div>
            </button>
        </div>
    );
}
