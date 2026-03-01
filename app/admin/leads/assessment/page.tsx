'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
    Search, ChevronRight, Calendar, MapPin, Zap, Filter,
    MoreHorizontal, Mail, Phone, ExternalLink, TrendingUp,
    User, Sparkles, ArrowUpRight, PhoneCall, Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Lead {
    id: string;
    created_at: string;
    name: string | null;
    phone: string | null;
    email: string | null;
    property_type: string | null;
    city: string | null;
    state: string | null;
    location: string | null;
    monthly_bill: number | null;
    implementation_timeline: string | null;
    interested_system: string | null;
    lead_score: number;
    status: string;
}

const statusOptions = ['new', 'contacted', 'proposal_sent', 'closed'];
const propertyTypeOptions = ['Residential', 'Commercial'];
const timelineOptions = ['Immediately', 'Within 3 Months', 'Planning Phase'];

export default function AssessmentLeads() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('all');
    const [filterPropertyType, setFilterPropertyType] = useState<string>('all');
    const [filterTimeline, setFilterTimeline] = useState<string>('all');

    useEffect(() => {
        fetchLeads();
    }, [filterStatus, filterPropertyType, filterTimeline]);

    async function calculateAndSaveScore(lead: Lead) {
        if (lead.lead_score !== 0) return lead.lead_score;
        let score = 0;
        if ((lead.monthly_bill || 0) > 10000) score += 3;
        if (lead.implementation_timeline === 'Immediate') score += 2;
        if (lead.property_type?.toLowerCase() === 'commercial') score += 1;
        await supabase.from('leads').update({ lead_score: score }).eq('id', lead.id);
        return score;
    }

    async function fetchLeads() {
        setLoading(true);
        try {
            let query = supabase
                .from('leads')
                .select('*')
                .eq('source', 'free_assessment');

            if (filterStatus !== 'all') {
                query = query.eq('status', filterStatus);
            }

            if (filterPropertyType !== 'all') {
                query = query.eq('property_type', filterPropertyType.toLowerCase());
            }

            if (filterTimeline !== 'all') {
                query = query.eq('implementation_timeline', filterTimeline);
            }

            const { data, error } = await query.order('created_at', { ascending: false });

            if (error) throw error;
            const rawLeads = data || [];
            const leadsWithScores = await Promise.all(
                rawLeads.map(async (l) => ({
                    ...l,
                    lead_score: await calculateAndSaveScore(l as Lead),
                }))
            );
            setLeads(leadsWithScores);
        } catch (err) {
            console.error('Error fetching leads:', err);
        } finally {
            setLoading(false);
        }
    }

    async function updateStatus(id: string, newStatus: string) {
        try {
            const { error } = await supabase
                .from('leads')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;
            setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
        } catch (err) {
            console.error('Error updating status:', err);
        }
    }

    const filteredLeads = leads.filter(lead => {
        const matchesSearch =
            (lead.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (lead.city?.toLowerCase() || '').includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    const formatCurrency = (val: number | null | undefined) => {
        if (val === null || val === undefined || isNaN(Number(val))) return "—";
        return `₹${Number(val).toLocaleString("en-IN")}`;
    };

    const getScoreColor = (score: number) => {
        if (score >= 4) return 'bg-red-500/10 text-red-500 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]';
        if (score >= 2) return 'bg-amber-500/10 text-amber-500 border-amber-500/20 shadow-[0_0_15px_rgba(245,166,35,0.2)]';
        return 'bg-neutral-500/10 text-neutral-500 border-neutral-500/20';
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'new': return 'border-amber-500/20 text-amber-500';
            case 'contacted': return 'border-blue-500/20 text-blue-400';
            case 'proposal_sent': return 'border-purple-500/20 text-purple-400';
            case 'closed': return 'border-emerald-500/20 text-emerald-400';
            default: return 'border-white/10 text-neutral-400';
        }
    };

    const getInitials = (name: string | null) => {
        if (!name) return '??';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    };

    return (
        <div className="space-y-10 pb-20">
            <header className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white uppercase italic">
                        Assessment <span className="text-amber-500 font-black not-italic">Leads</span>
                    </h1>
                    <p className="text-neutral-500 font-medium text-sm tracking-widest uppercase">
                        Managing {leads.length} assessment-sourced signals.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => { setFilterStatus('all'); setFilterPropertyType('Commercial'); setFilterTimeline('all'); }}
                        className="px-6 py-2.5 bg-[#111] border border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-white transition-all hover:border-amber-500/30 active:scale-95"
                    >
                        Commercial Only
                    </button>
                    <button
                        onClick={() => { setFilterStatus('all'); setFilterPropertyType('all'); setFilterTimeline('all'); setLeads(leads.filter(l => l.lead_score >= 3)); }}
                        className="px-6 py-2.5 bg-[#111] border border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-white transition-all hover:border-amber-500/30 active:scale-95"
                    >
                        Hot Leads
                    </button>
                </div>
            </header>

            {/* LUXURY SEARCH & FILTERS */}
            <div className="space-y-6">
                <div className="relative group max-w-2xl">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600 transition-colors group-focus-within:text-amber-500" />
                    <input
                        type="text"
                        placeholder="Search by lead name, geography, or thermal signals..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#111] border border-white/5 rounded-2xl h-16 pl-16 pr-6 text-sm font-bold text-white transition-all focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/5 outline-none placeholder:text-neutral-700 shadow-2xl"
                    />
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex bg-[#111] p-1 rounded-full border border-white/5 shadow-inner">
                        {['all', ...statusOptions].map(opt => (
                            <button
                                key={opt}
                                onClick={() => setFilterStatus(opt)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all",
                                    filterStatus === opt ? "bg-amber-500 text-black shadow-lg" : "text-neutral-500 hover:text-white"
                                )}
                            >
                                {opt.replace('_', ' ')}
                            </button>
                        ))}
                    </div>

                    <div className="flex bg-[#111] p-1 rounded-full border border-white/5 shadow-inner">
                        {['all', ...propertyTypeOptions].map(opt => (
                            <button
                                key={opt}
                                onClick={() => setFilterPropertyType(opt)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all",
                                    filterPropertyType === opt ? "bg-amber-500 text-black shadow-lg" : "text-neutral-500 hover:text-white"
                                )}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>

                    <div className="flex bg-[#111] p-1 rounded-full border border-white/5 shadow-inner">
                        {['all', ...timelineOptions].map(opt => (
                            <button
                                key={opt}
                                onClick={() => setFilterTimeline(opt)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all",
                                    filterTimeline === opt ? "bg-amber-500 text-black shadow-lg" : "text-neutral-500 hover:text-white"
                                )}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* PREMIUM CARD-TABLE HYBRID */}
            <div className="relative">
                {/* Header Row (Sticky) */}
                <div className="sticky top-0 z-30 grid grid-cols-[1.2fr_1fr_0.8fr] gap-8 px-10 py-5 bg-black/80 backdrop-blur-xl border-y border-white/5 text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600 rounded-t-3xl">
                    <span>Identity / Acquisition</span>
                    <span>Asset Value / Horizon</span>
                    <span className="text-right">Intelligence / Flux</span>
                </div>

                <div className="space-y-4 pt-4">
                    <AnimatePresence mode="popLayout">
                        {loading ? (
                            <div className="py-40 flex flex-col items-center justify-center gap-4">
                                <div className="w-10 h-10 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700 animate-pulse">Syncing Mainframe...</span>
                            </div>
                        ) : filteredLeads.length === 0 ? (
                            <div className="py-40 bg-[#0a0a0a] border border-white/5 rounded-[40px] text-center border-dashed">
                                <p className="text-neutral-700 font-black uppercase tracking-[0.5em] text-xs">No Signal Detected</p>
                            </div>
                        ) : (
                            filteredLeads.map((lead, i) => (
                                <motion.div
                                    key={lead.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="group relative grid grid-cols-[1.2fr_1fr_0.8fr] gap-8 px-10 py-8 bg-gradient-to-r from-[#0a0a0a] to-[#111] border border-white/5 rounded-3xl hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,166,35,0.05)] transition-all duration-500"
                                >
                                    <Link href={`/admin/leads/${lead.id}`} className="absolute inset-0 z-10" />

                                    {/* LEFT: Identity */}
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-xs font-black text-amber-500 shadow-xl group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                                            {getInitials(lead.name)}
                                        </div>
                                        <div className="space-y-1.5 min-w-0">
                                            <h3 className="text-lg font-extrabold text-white truncate leading-none uppercase tracking-tight">{lead.name || 'Anonymous User'}</h3>
                                            <div className="flex flex-col gap-1">
                                                <a href={`tel:${lead.phone}`} className="relative z-20 flex items-center gap-2 text-[11px] font-bold text-neutral-400 hover:text-white transition-colors">
                                                    <PhoneCall size={10} className="text-amber-500/60" />
                                                    {lead.phone || '-'}
                                                </a>
                                                <p className="text-[10px] font-medium text-neutral-600 truncate">{lead.email || 'no-email@id'}</p>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-neutral-700 pt-1 flex items-center gap-1">
                                                    <MapPin size={8} className="text-amber-500/40" />
                                                    {lead.city || lead.location}, {lead.state || 'IN'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* MIDDLE: Opportunity */}
                                    <div className="flex flex-col justify-center gap-5">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/10 transition-transform group-hover:scale-110">
                                                <Zap size={14} className="text-amber-500" />
                                            </div>
                                            <div className="space-y-0.5">
                                                <p className="text-2xl font-black text-white tracking-tighter leading-none">{formatCurrency(lead.monthly_bill)}</p>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-neutral-600">Monthly Fiscal Draft</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[8px] font-black uppercase tracking-widest text-neutral-400">{lead.property_type}</span>
                                            <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[8px] font-black uppercase tracking-widest text-neutral-500 italic">{lead.implementation_timeline}</span>
                                            {lead.interested_system && <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/10 rounded-full text-[8px] font-black uppercase tracking-widest text-amber-500/80">{lead.interested_system}</span>}
                                        </div>
                                    </div>

                                    {/* RIGHT: Pipeline */}
                                    <div className="flex flex-col items-end justify-center gap-4 text-right">
                                        <div className="flex flex-col items-end gap-2">
                                            <span className={cn(
                                                "px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                                                getScoreColor(lead.lead_score)
                                            )}>
                                                Flux Score: {lead.lead_score}
                                            </span>
                                            <div className="relative z-20 group/status">
                                                <select
                                                    value={lead.status}
                                                    onChange={(e) => updateStatus(lead.id, e.target.value)}
                                                    className={cn(
                                                        "appearance-none bg-[#0a0a0a] border px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest cursor-pointer outline-none focus:ring-4 focus:ring-white/5 transition-all text-center",
                                                        getStatusStyle(lead.status)
                                                    )}
                                                >
                                                    {statusOptions.map(opt => <option key={opt} value={opt} className="bg-black text-white">{opt.replace('_', ' ').toUpperCase()}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-1 opacity-40">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-neutral-500 block">Acquisition Complete</p>
                                            <p className="text-[10px] font-bold text-neutral-400 flex items-center justify-end gap-2 uppercase">
                                                <Calendar size={10} />
                                                {new Date(lead.created_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <p className="text-[8px] font-mono text-neutral-800 uppercase tracking-widest pt-2 font-bold select-none">ID: {lead.id.substring(0, 6)}</p>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
