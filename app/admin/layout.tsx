'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Zap, LogOut, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const sidebarLinks = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'All Leads', href: '/admin/leads', icon: Users },
    { name: 'Assessment Leads', href: '/admin/leads/assessment', icon: Users },
    { name: 'Contact Leads', href: '/admin/leads/contact', icon: Users },
    { name: 'Projects', href: '/admin/projects', icon: Zap },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-black text-white font-sans selection:bg-amber-500/30">
            {/* SIDEBAR */}
            <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/10 bg-black flex flex-col z-50">
                <div className="p-8 border-b border-white/5">
                    <Link href="/">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-black transition-transform group-hover:scale-110">S</div>
                            <span className="text-sm font-black uppercase tracking-[0.4em] transition-colors group-hover:text-amber-500">Solane</span>
                        </div>
                    </Link>
                    <p className="mt-2 text-[10px] uppercase font-bold tracking-widest text-neutral-600">Admin Control</p>
                </div>

                <nav className="flex-1 p-6 space-y-2 pt-10">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.href;
                        const Icon = link.icon;

                        return (
                            <Link key={link.name} href={link.href}>
                                <div className={cn(
                                    "group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 cursor-pointer relative",
                                    isActive
                                        ? "bg-amber-500/10 text-amber-500"
                                        : "text-neutral-500 hover:text-white hover:bg-white/5"
                                )}>
                                    <div className="flex items-center gap-3">
                                        <Icon className={cn("w-4 h-4", isActive ? "text-amber-500" : "text-neutral-500 group-hover:text-white")} />
                                        <span className="text-xs font-bold uppercase tracking-wider">{link.name}</span>
                                    </div>
                                    {isActive && (
                                        <motion.div
                                            layoutId="sidebar-active"
                                            className="absolute left-0 w-1 h-6 bg-amber-500 rounded-r-full"
                                        />
                                    )}
                                    <ChevronRight className={cn("w-3 h-3 opacity-0 transition-all group-hover:opacity-100", isActive ? "opacity-100 translate-x-1" : "translate-x-0 group-hover:translate-x-1")} />
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-6 border-t border-white/5">
                    <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-neutral-500 hover:text-red-400 hover:bg-red-500/5 transition-all duration-300">
                        <LogOut className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Logout</span>
                    </button>
                </div>
            </aside>

            {/* CONTENT AREA */}
            <main className="flex-1 ml-64 p-12 pt-28 min-h-screen relative overflow-x-hidden">
                {/* Subtle Decorative Glows */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none -mr-40 -mt-40 z-0" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

                <div className="relative z-10 animate-in fade-in duration-700">
                    {children}
                </div>
            </main>
        </div>
    );
}
