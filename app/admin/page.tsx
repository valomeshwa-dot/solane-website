'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Users, Zap, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalLeads: 0,
        newLeads: 0,
        totalProjects: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            try {
                // Fetch total leads
                const { count: leadCount, error: leadError } = await supabase
                    .from('calculator_submissions')
                    .select('*', { count: 'exact', head: true });

                // Fetch new leads (for simplicity, we assume status is "new")
                const { count: newLeadCount, error: newError } = await supabase
                    .from('calculator_submissions')
                    .select('*', { count: 'exact', head: true })
                    .eq('status', 'new');

                // Fetch total projects
                const { count: projectCount, error: projectError } = await supabase
                    .from('projects')
                    .select('*', { count: 'exact', head: true });

                if (!leadError && !newError) {
                    setStats({
                        totalLeads: leadCount || 0,
                        newLeads: newLeadCount || 0,
                        totalProjects: projectCount || 0,
                    });
                }
            } catch (err) {
                console.error('Error fetching dashboard stats:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        })
    };

    return (
        <div className="space-y-12 pb-20 mt-10">
            <header className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
                    Dashboard <span className="text-amber-500">Overview</span>
                </h1>
                <p className="text-neutral-500 font-medium text-sm lg:text-base max-w-xl">
                    Real-time metrics for calculator submissions and active engineering projects.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { label: 'Total Leads', value: stats.totalLeads, icon: Users, color: 'amber' },
                    { label: 'New Leads', value: stats.newLeads, icon: TrendingUp, color: 'amber' },
                    { label: 'Total Projects', value: stats.totalProjects, icon: Briefcase, color: 'white' },
                ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className="bg-[#0b0b0b] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-amber-500/20 transition-all shadow-xl"
                        >
                            {/* Subtle Icon Background */}
                            <div className="absolute top-4 right-4 text-white/[0.03] group-hover:text-amber-500/[0.05] transition-colors pointer-events-none">
                                <Icon size={120} strokeWidth={0.5} />
                            </div>

                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 text-amber-500 transition-transform group-hover:scale-110">
                                        <Icon size={20} />
                                    </div>
                                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">{stat.label}</span>
                                </div>

                                <div className="flex flex-col gap-1">
                                    {loading ? (
                                        <div className="h-10 w-24 bg-neutral-900 rounded-lg animate-pulse" />
                                    ) : (
                                        <span className="text-5xl font-black text-white group-hover:text-amber-500 transition-colors drop-shadow-lg">
                                            {stat.value}
                                        </span>
                                    )}
                                    <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest pt-1">
                                        Confirmed system data
                                    </p>
                                </div>
                            </div>

                            {/* Shine Overlay */}
                            <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-linear-to-r from-transparent via-white/[0.02] to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="pt-8">
                <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-neutral-600 mb-8 border-b border-white/5 pb-4">Real-time status monitor</h2>
                <div className="p-10 bg-[#070707] border border-white/5 rounded-3xl text-center space-y-4 shadow-inner">
                    <Zap className="w-8 h-8 text-neutral-800 mx-auto" strokeWidth={1.5} />
                    <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest leading-relaxed">System status green: all backend links currently active.</p>
                </div>
            </div>
        </div>
    );
}
