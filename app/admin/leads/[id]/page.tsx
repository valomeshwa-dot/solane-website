'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, Zap, MapPin, Calendar, Clock, User, Phone, Mail,
    TrendingUp, FileText, Save, CheckCircle2, AlertCircle, Sparkles,
    Layers, CreditCard, Home, ShieldCheck, Activity, UserCheck, XCircle
} from 'lucide-react';
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
    lead_score: number;
    status: string;
    internal_notes: string | null;
    roof_type: string | null;
    interested_system: string | null;
    estimated_system_size: number | null;
    estimated_cost: number | null;
    annual_savings: number | null;
    payback_years: number | null;
    lifetime_savings: number | null;
}

export default function LeadDetails() {
    const { id } = useParams();
    const router = useRouter();
    const [lead, setLead] = useState<Lead | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [notes, setNotes] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchLead();
    }, [id]);

    async function fetchLead() {
        try {
            const { data, error } = await supabase
                .from('leads')
                .select('*')
                .eq('id', id)
                .single();
            if (error) throw error;
            setLead(data);
            setNotes(data.internal_notes || '');
            setStatus(data.status || 'new');
        } catch (err) {
            console.error('Error fetching lead details:', err);
        } finally {
            setLoading(false);
        }
    }

    async function updateLeadField(updates: Partial<Lead>) {
        setSaving(true);
        try {
            const { error } = await supabase
                .from('leads')
                .update(updates)
                .eq('id', id);
            if (error) throw error;
            await fetchLead();
        } catch (err) {
            console.error('Error updating lead:', err);
        } finally {
            setSaving(false);
        }
    }

    const formatCurrency = (val: number | null | undefined) => {
        if (!val || isNaN(Number(val))) return "—";
        return `₹${Number(val).toLocaleString("en-IN")}`;
    };

    const statusOptions = ['new', 'contacted', 'proposal_sent', 'closed'];

    if (loading) return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <div className="w-10 h-10 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700 animate-pulse">Syncing DOSSIER...</span>
        </div>
    );

    if (!lead) return <div>Record not found.</div>;

    return (
        <div className="space-y-12 pb-24">
            {/* LUXURY HEADER */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                <div className="space-y-6">
                    <button
                        onClick={() => router.back()}
                        className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600 hover:text-amber-500 transition-all"
                    >
                        <ArrowLeft size={10} className="transition-transform group-hover:-translate-x-1" />
                        Control Center / Back
                    </button>

                    <div className="space-y-2">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter uppercase italic">
                            {lead.name || 'ANONYMOUS SIGNAL'}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-700">
                            <span className="flex items-center gap-2">UID: <span className="text-amber-500">{lead.id.substring(0, 6)}</span></span>
                            <span className="flex items-center gap-2">FLUX: <span className="text-amber-500">{new Date(lead.created_at).toLocaleDateString()}</span></span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                    <button
                        onClick={() => updateLeadField({ status: 'contacted' })}
                        disabled={saving}
                        className="flex items-center gap-2.5 bg-[#111] border border-white/5 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-blue-400 hover:border-blue-500/30 transition-all active:scale-95 disabled:opacity-50"
                    >
                        <UserCheck size={14} />
                        Mark as Contacted
                    </button>
                    <button
                        onClick={() => updateLeadField({ status: 'closed' })}
                        disabled={saving}
                        className="flex items-center gap-2.5 bg-[#111] border border-white/5 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-all active:scale-95 disabled:opacity-50"
                    >
                        <CheckCircle2 size={14} />
                        Mark as Closed
                    </button>

                    <div className="h-10 w-px bg-white/5 mx-2 hidden lg:block" />

                    <select
                        value={status}
                        onChange={(e) => updateLeadField({ status: e.target.value })}
                        className="appearance-none bg-amber-500 px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest text-black cursor-pointer shadow-[0_10px_30px_rgba(245,166,35,0.2)] hover:shadow-[0_15px_40px_rgba(245,166,35,0.3)] transition-all outline-none"
                    >
                        {statusOptions.map(opt => <option key={opt} value={opt} className="bg-black text-white">{opt.replace('_', ' ').toUpperCase()}</option>)}
                    </select>
                </div>
            </header>

            {/* TWO-COLUMN PREMIUM LAYOUT */}
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">

                {/* LEFT COLUMN: BASIC & PROPERTY INFO */}
                <div className="space-y-12">

                    {/* BASIC INFO SECTION */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#0a0a0a] border border-white/5 rounded-[40px] p-12 space-y-12 shadow-2xl relative overflow-hidden group"
                    >
                        <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-amber-500 flex items-center gap-3">
                            <User size={14} />
                            Basic Intelligence
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-12">
                            <InfoPoint label="Identity Name" value={lead.name} icon={<User size={12} />} />
                            <InfoPoint label="Secure Contact" value={lead.phone} icon={<Phone size={12} />} isLink href={`tel:${lead.phone}`} />
                            <InfoPoint label="Email Signal" value={lead.email} icon={<Mail size={12} />} />
                            <InfoPoint label="Acquisition Source" value="Solar ROI Terminal" icon={<ShieldCheck size={12} />} />
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full" />
                    </motion.section>

                    {/* PROPERTY INFO SECTION */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0a0a0a] border border-white/5 rounded-[40px] p-12 space-y-12 shadow-2xl relative overflow-hidden"
                    >
                        <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-amber-500 flex items-center gap-3">
                            <Home size={14} />
                            Property Analysis
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-12">
                            <InfoPoint label="Segment Type" value={lead.property_type} icon={<Layers size={12} />} />
                            <InfoPoint label="Deployment Area" value={`${lead.city || lead.location}, ${lead.state || 'IN'}`} icon={<MapPin size={12} />} />
                            <InfoPoint label="Structural Surface" value={lead.roof_type || 'Standard Flat'} icon={<FileText size={12} />} />
                            <InfoPoint label="Current Intensity" value={formatCurrency(lead.monthly_bill)} icon={<CreditCard size={12} />} highlight />
                        </div>
                    </motion.section>

                </div>

                {/* RIGHT COLUMN: SIGNAL, NOTES, ACTIVITY */}
                <div className="space-y-12">

                    {/* INTENT SIGNAL SECTION */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0f0f0f] border border-white/10 rounded-[40px] p-10 space-y-10 shadow-3xl"
                    >
                        <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-amber-500 flex items-center gap-3">
                            <Zap size={14} />
                            Solar Intent Signal
                        </h2>
                        <div className="space-y-8">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-6 bg-black border border-white/5 rounded-3xl space-y-3">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-neutral-600">Capacity Requirement</p>
                                    <p className="text-2xl font-black text-white italic">{lead.estimated_system_size || '0'} kW</p>
                                </div>
                                <div className="p-6 bg-black border border-white/5 rounded-3xl space-y-3">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-neutral-600">Flux Score</p>
                                    <p className="text-2xl font-black text-amber-500">{lead.lead_score} / 6</p>
                                </div>
                            </div>
                            <div className="p-8 bg-amber-500/5 border border-amber-500/10 rounded-3xl flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-amber-500">Predicted Payback</p>
                                    <p className="text-3xl font-black text-white">{lead.payback_years?.toFixed(1) || '0'} Years</p>
                                </div>
                                <CheckCircle2 size={32} className="text-amber-500/20" />
                            </div>
                            <InfoPoint label="Implementation Horizon" value={lead.implementation_timeline} icon={<Clock size={12} />} highlight />
                        </div>
                    </motion.section>

                    {/* INTERNAL NOTES SECTION */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#0a0a0a] border border-white/5 rounded-[40px] p-10 space-y-6 shadow-2xl relative"
                    >
                        <div className="flex justify-between items-center bg-black/50 p-4 rounded-3xl border border-white/5">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-amber-500 flex items-center gap-3">
                                <FileText size={14} />
                                Intelligence Brief
                            </h2>
                            <button
                                onClick={() => updateLeadField({ internal_notes: notes })}
                                className="p-3 bg-amber-500 text-black rounded-xl hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/10 group"
                            >
                                <Save size={14} strokeWidth={3} className="group-hover:scale-125 transition-transform" />
                            </button>
                        </div>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Enter internal dossier records, site visit observations, and structural requirements..."
                            className="w-full bg-black border border-white/10 rounded-3xl p-8 text-sm font-medium text-white transition-all focus:border-amber-500/40 outline-none placeholder:text-neutral-900 resize-none leading-relaxed min-h-[250px] shadow-inner"
                        />
                    </motion.section>

                    {/* ACTIVITY TRACKER (Future) */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-black/40 border border-white/5 border-dashed rounded-[40px] p-10 space-y-8"
                    >
                        <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-neutral-700 flex items-center gap-3">
                            <Activity size={14} />
                            Thermal Activity Logs
                        </h2>
                        <div className="flex flex-col items-center justify-center py-10 opacity-20">
                            <Activity size={32} className="text-neutral-700 mb-4 animate-pulse" />
                            <p className="text-[9px] font-black uppercase tracking-widest text-neutral-800 text-center leading-loose">
                                Real-time activity syncing<br />under development phase.
                            </p>
                        </div>
                    </motion.section>

                </div>
            </div>
        </div>
    );
}

function InfoPoint({ label, value, icon, highlight = false, isLink = false, href = "#" }: any) {
    const content = (
        <div className="space-y-4 group">
            <div className="flex items-center gap-2 text-neutral-600 transition-colors group-hover:text-amber-500">
                <div className="p-1.5 bg-neutral-900 rounded-lg border border-white/5 group-hover:border-amber-500/30 transition-all">
                    {icon}
                </div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em]">{label}</p>
            </div>
            <p className={cn(
                "text-lg font-bold tracking-tight uppercase truncate leading-none",
                highlight ? "text-amber-500" : "text-white group-hover:text-amber-500/80 transition-colors"
            )}>
                {value || '-'}
            </p>
        </div>
    );

    if (isLink) return <a href={href} className="block transition-transform hover:translate-x-1 duration-300">{content}</a>;
    return content;
}
