'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Users, Zap, Briefcase, TrendingUp, AlertCircle, Clock, PieChart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DashboardStats {
    totalLeads: number;
    newLeads7Days: number;
    residentialCount: number;
    commercialCount: number;
    hotLeads: number;
    awaitingFollowUp: number;
    avgMonthlyBill: number;
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<DashboardStats>({
        totalLeads: 0,
        newLeads7Days: 0,
        residentialCount: 0,
        commercialCount: 0,
        hotLeads: 0,
        awaitingFollowUp: 0,
        avgMonthlyBill: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCRMStats() {
            try {
                const sevenDaysAgo = new Date();
                sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

                const [
                    { count: total },
                    { count: recent },
                    { count: res },
                    { count: comm },
                    { count: hot },
                    { count: awaiting },
                    { data: bills }
                ] = await Promise.all([
                    supabase.from('leads').select('*', { count: 'exact', head: true }),
                    supabase.from('leads').select('*', { count: 'exact', head: true }).gte('created_at', sevenDaysAgo.toISOString()),
                    supabase.from('leads').select('*', { count: 'exact', head: true }).eq('property_type', 'Residential'),
                    supabase.from('leads').select('*', { count: 'exact', head: true }).eq('property_type', 'Commercial'),
                    supabase.from('leads').select('*', { count: 'exact', head: true }).gte('lead_score', 3),
                    supabase.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'new'),
                    supabase.from('leads').select('monthly_bill')
                ]);

                const totalBill = bills?.reduce((acc, curr) => acc + (curr.monthly_bill || 0), 0) || 0;
                const avgBill = bills && bills.length > 0 ? totalBill / bills.length : 0;

                setStats({
                    totalLeads: total || 0,
                    newLeads7Days: recent || 0,
                    residentialCount: res || 0,
                    commercialCount: comm || 0,
                    hotLeads: hot || 0,
                    awaitingFollowUp: awaiting || 0,
                    avgMonthlyBill: avgBill
                });
            } catch (err) {
                console.error('Error fetching CRM stats:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchCRMStats();
    }, []);

    const formatCurrency = (val: number) => {
        return `₹${val.toLocaleString("en-IN")}`;
    };

    const statCards = [
        { label: 'Total Leads', value: stats.totalLeads, icon: Users, sub: 'Lifetime CRM entries', color: 'amber' },
        { label: 'New (7 Days)', value: stats.newLeads7Days, icon: TrendingUp, sub: 'Recent acquisition velocity', color: 'amber' },
        { label: 'Hot Leads', value: stats.hotLeads, icon: Sparkles, sub: 'Score threshold >= 3', color: 'amber' },
        { label: 'Awaiting Follow-up', value: stats.awaitingFollowUp, icon: AlertCircle, sub: 'Status: New', color: 'amber' },
        { label: 'Avg Monthly Bill', value: formatCurrency(stats.avgMonthlyBill), icon: Zap, sub: 'Lead quality metric', color: 'white' },
        { label: 'Res vs Comm', value: `${stats.residentialCount} : ${stats.commercialCount}`, icon: PieChart, sub: 'Segment distribution', color: 'white' },
    ];

    return (
        <div className="space-y-12 pb-20">
            <header className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight text-white">
                    CRM <span className="text-amber-500">Intelligence</span>
                </h1>
                <p className="text-neutral-500 font-medium text-sm lg:text-base max-w-xl">
                    Consolidated signals from unified outreach and automatic lead scoring.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {statCards.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className="bg-[#0b0b0b] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-amber-500/20 transition-all shadow-xl"
                        >
                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                                        <Icon size={18} />
                                    </div>
                                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">{stat.label}</span>
                                </div>

                                <div className="flex flex-col gap-1">
                                    {loading ? (
                                        <div className="h-10 w-24 bg-neutral-900 rounded-lg animate-pulse" />
                                    ) : (
                                        <span className="text-4xl font-black text-white group-hover:text-amber-500 transition-colors">
                                            {stat.value}
                                        </span>
                                    )}
                                    <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest pt-1">
                                        {stat.sub}
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
        </div>
    );
}
