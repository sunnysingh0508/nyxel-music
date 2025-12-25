'use client';

import Link from 'next/link';
import { Home, Disc, Mic2, Compass, Clock, Heart, Upload, Library, Radio, FlaskConical, Settings, Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';
import UserMiniProfile from './UserMiniProfile';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Disc, label: 'Albums', href: '/albums' },
    { icon: Mic2, label: 'Artists', href: '/artists' },
    { icon: Bell, label: 'Notifications', href: '/notifications' },
    { icon: Radio, label: 'Podcasts', href: '/podcasts' },
    { icon: Compass, label: 'Discover', href: '/discover' },
    { icon: Settings, label: 'Settings', href: '/settings' },
    { icon: FlaskConical, label: 'Test', href: '/test' },
  ];

  const libraryItems = [
    { icon: Clock, label: 'Recently Played', href: '/recent' },
    { icon: Heart, label: 'Favorites', href: '/favorites' },
    { icon: Library, label: 'My Uploads', href: '/uploads' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-24 hover:w-72 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] bg-gradient-to-b from-[#1A1033] to-[#0B0F1A] border-r border-white/5 flex flex-col z-50 group overflow-hidden">
      {/* Logo */}
      <div className="p-8 pb-4 flex items-center gap-4 min-w-max">
        <img src="/images/nyxel-logo-circle.png" alt="Nyxel Logo" className="w-8 h-8 rounded-full shadow-lg shadow-violet-500/20 shrink-0 object-cover" />
        <span className="text-xl font-bold tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">NYXEL</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto custom-scrollbar overflow-x-hidden">
        <div className="space-y-2">
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Menu</p>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 min-w-max
                  ${isActive
                    ? 'bg-gradient-to-r from-violet-600/20 to-indigo-600/20 text-white border-l-2 border-violet-500'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <Icon className={`w-6 h-6 shrink-0 ${isActive ? 'text-violet-400' : 'group-hover/item:text-violet-400 transition-colors'}`} />
                <span className="font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="space-y-2">
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Library</p>
          {libraryItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 min-w-max group/item"
              >
                <Icon className="w-6 h-6 shrink-0 group-hover/item:text-pink-400 transition-colors" />
                <span className="font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <UserMiniProfile />
    </aside>
  );
}
