'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Magnetic from "../../components/ui/Magnetic";
import { CheckCircle2, ShieldCheck, Zap, Globe, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AssessmentPage() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        property_type: 'residential',
        roof_type: 'rcc',
        city_state: '',
        monthly_bill: '',
        power_backup: 'No',
        interested_system: 'grid',
        implementation_timeline: 'Immediately',
        full_name: '',
        email: '',
        phone: '',
        project_description: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('leads')
                .insert([{
                    full_name: formData.full_name,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.city_state.split(',')[0]?.trim() || null,
                    state: formData.city_state.split(',')[1]?.trim() || null,
                    property_type: formData.property_type,
                    roof_type: formData.roof_type,
                    monthly_bill: Number(formData.monthly_bill.replace(/,/g, '')) || 0,
                    power_backup: formData.power_backup,
                    interested_system: formData.interested_system,
                    implementation_timeline: formData.implementation_timeline,
                    project_description: formData.project_description,
                    source: 'free_assessment'
                }]);

            if (error) throw error;

            console.log('Assessment submission successful');
            setSubmitted(true);
            setFormData({
                property_type: 'residential',
                roof_type: 'rcc',
                city_state: '',
                monthly_bill: '',
                power_backup: 'No',
                interested_system: 'grid',
                implementation_timeline: 'Immediately',
                full_name: '',
                email: '',
                phone: '',
                project_description: ''
            });
        } catch (err: any) {
            console.error("Supabase insert error:", err.message);
            console.error("Full error object:", err);
            alert(`Error: ${err.message || 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-[#0f0f10] text-neutral-100 min-h-screen relative overflow-x-hidden">
            <motion.div
                className="absolute inset-0 bg-yellow-500/5 blur-3xl pointer-events-none z-0"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
            >
                {/* 1️⃣ HERO SECTION */}
                <Section className="pt-32 pb-16 lg:pt-48 lg:pb-24 text-center">
                    <Container className="max-w-5xl mx-auto px-6">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.15 } }
                            }}
                            className="max-w-2xl mx-auto space-y-8"
                        >
                            <motion.span
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase block"
                            >
                                FREE SOLAR ASSESSMENT
                            </motion.span>
                            <motion.h1
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]"
                            >
                                Receive a Tailored Solar & <br className="hidden md:block" /> Savings Projection
                            </motion.h1>
                            <motion.p
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="text-neutral-400 text-lg lg:text-xl leading-relaxed"
                            >
                                Complete the assessment below and our engineering team will prepare a customized system recommendation, projected savings breakdown, and ROI timeline for your property.
                            </motion.p>
                        </motion.div>
                    </Container>
                </Section>

                {/* 2️⃣ STEP INDICATOR (Visual Only) */}
                <div className="pb-12">
                    <Container className="max-w-5xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                            {[
                                { step: 1, label: 'Property Details' },
                                { step: 2, label: 'Energy Usage' },
                                { step: 3, label: 'Contact Information' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${i === 0 ? 'bg-amber-500 border-amber-500 text-black' : 'border-neutral-800 text-neutral-500'}`}>
                                        {item.step}
                                    </div>
                                    <span className={`text-xs font-bold uppercase tracking-widest ${i === 0 ? 'text-white' : 'text-neutral-600'}`}>
                                        {item.label}
                                    </span>
                                    {i < 2 && <div className="hidden md:block w-8 h-[1px] bg-neutral-800 ml-4" />}
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>

                {/* 3️⃣ MAIN ASSESSMENT FORM */}
                <Section className="pb-28">
                    <Container className="max-w-5xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 lg:p-12 space-y-12 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="py-20 text-center space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto border border-amber-500/20">
                                            <CheckCircle2 className="w-10 h-10 text-amber-500" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white">Assessment Received</h2>
                                        <p className="text-neutral-400 max-w-md mx-auto">
                                            Thank you for your interest. Our engineering team has received your details and will prepare your custom solar projection shortly.
                                        </p>
                                        <Button
                                            onClick={() => setSubmitted(false)}
                                            className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8"
                                        >
                                            Submit Another Assessment
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-12">
                                        {/* SECTION 1: PROPERTY DETAILS */}
                                        <div className="space-y-8">
                                            <div className="flex items-center gap-3">
                                                <span className="w-1 h-6 bg-amber-500 rounded-full" />
                                                <h2 className="text-xl font-semibold uppercase tracking-tight text-white">Section 1: Property Details</h2>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Property Type</label>
                                                    <select
                                                        required
                                                        value={formData.property_type}
                                                        onChange={(e) => setFormData({ ...formData, property_type: e.target.value })}
                                                        className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors appearance-none cursor-pointer"
                                                    >
                                                        <option value="residential">Residential</option>
                                                        <option value="commercial">Commercial</option>
                                                        <option value="industrial">Industrial</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Roof Type</label>
                                                    <select
                                                        required
                                                        value={formData.roof_type}
                                                        onChange={(e) => setFormData({ ...formData, roof_type: e.target.value })}
                                                        className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors appearance-none cursor-pointer"
                                                    >
                                                        <option value="rcc">RCC Flat Roof</option>
                                                        <option value="metal">Metal Sheet</option>
                                                        <option value="industrial">Industrial Shed</option>
                                                        <option value="tiled">Tiled Roof</option>
                                                        <option value="other">Not Sure</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">City / State</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="e.g. Mumbai, MH"
                                                        value={formData.city_state}
                                                        onChange={(e) => setFormData({ ...formData, city_state: e.target.value })}
                                                        className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors"
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Approx. Monthly Bill (₹)</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="e.g. 15,000"
                                                        value={formData.monthly_bill}
                                                        onChange={(e) => setFormData({ ...formData, monthly_bill: e.target.value })}
                                                        className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="h-[1px] bg-neutral-800 w-full" />

                                        {/* SECTION 2: ENERGY USAGE */}
                                        <div className="space-y-8">
                                            <div className="flex items-center gap-3">
                                                <span className="w-1 h-6 bg-amber-500 rounded-full" />
                                                <h2 className="text-xl font-semibold uppercase tracking-tight text-white">Section 2: Energy Usage</h2>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Power Backup Available?</label>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <button
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, power_backup: 'Yes' })}
                                                            className={`rounded-lg py-3 text-sm font-medium transition-colors border ${formData.power_backup === 'Yes' ? 'bg-amber-500 text-black border-amber-500' : 'bg-black border-neutral-800 text-white hover:border-amber-500/50'}`}
                                                        >
                                                            Yes
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, power_backup: 'No' })}
                                                            className={`rounded-lg py-3 text-sm font-medium transition-colors border ${formData.power_backup === 'No' ? 'bg-amber-500 text-black border-amber-500' : 'bg-black border-neutral-800 text-white hover:border-amber-500/50'}`}
                                                        >
                                                            No
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Interested In</label>
                                                    <select
                                                        required
                                                        value={formData.interested_system}
                                                        onChange={(e) => setFormData({ ...formData, interested_system: e.target.value })}
                                                        className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors appearance-none cursor-pointer"
                                                    >
                                                        <option value="grid">Grid-Tied System</option>
                                                        <option value="hybrid">Hybrid System</option>
                                                        <option value="battery">Battery Storage</option>
                                                        <option value="unsure">Not Sure</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-3 md:col-span-2">
                                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Planned Implementation Timeline</label>
                                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                                        {['Immediately', 'Within 3 Months', '3–6 Months', 'Just Exploring'].map((time) => (
                                                            <button
                                                                type="button"
                                                                key={time}
                                                                onClick={() => setFormData({ ...formData, implementation_timeline: time })}
                                                                className={`rounded-lg py-3 text-xs font-medium transition-colors border ${formData.implementation_timeline === time ? 'bg-amber-500 text-black border-amber-500' : 'bg-black border-neutral-800 text-white hover:border-amber-500/50'}`}
                                                            >
                                                                {time}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="h-[1px] bg-neutral-800 w-full" />

                                        {/* SECTION 3: CONTACT INFORMATION */}
                                        <div className="space-y-8">
                                            <div className="flex items-center gap-3">
                                                <span className="w-1 h-6 bg-amber-500 rounded-full" />
                                                <h2 className="text-xl font-semibold uppercase tracking-tight text-white">Section 3: Contact Information</h2>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3 md:col-span-2">
                                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Full Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="John Doe"
                                                        value={formData.full_name}
                                                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                                                        className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors"
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Email Address</label>
                                                    <input
                                                        required
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors"
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Phone Number</label>
                                                    <input
                                                        required
                                                        type="tel"
                                                        placeholder="+91 98765 43210"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors"
                                                    />
                                                </div>
                                                <div className="space-y-3 md:col-span-2">
                                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Briefly describe your property or energy goals</label>
                                                    <textarea
                                                        required
                                                        value={formData.project_description}
                                                        onChange={(e) => setFormData({ ...formData, project_description: e.target.value })}
                                                        placeholder="e.g. Roof orientation, shading issues, specific energy targets..."
                                                        className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors min-h-[140px] resize-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-8 space-y-6 text-center">
                                            <Magnetic amount={0.04}>
                                                <motion.button
                                                    disabled={loading}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        boxShadow: "0px 0px 40px rgba(255,170,0,0.4)"
                                                    }}
                                                    whileTap={{ scale: 0.96 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="
                                                        inline-flex items-center justify-center gap-2
                                                        px-10 py-5
                                                        text-sm font-bold tracking-[0.2em] uppercase
                                                        rounded-lg
                                                        bg-gradient-to-r from-yellow-500 to-orange-500
                                                        text-black
                                                        w-full md:w-auto
                                                        disabled:opacity-70 disabled:grayscale
                                                    "
                                                >
                                                    {loading ? (
                                                        <>Processing Intelligence <Loader2 className="w-5 h-5 animate-spin" /></>
                                                    ) : (
                                                        <>REQUEST MY FREE SOLAR ASSESSMENT <ArrowRight className="w-5 h-5" /></>
                                                    )}
                                                </motion.button>
                                            </Magnetic>
                                            <div className="bg-neutral-950/50 p-6 border border-neutral-800/50 rounded-xl text-center">
                                                <p className="text-neutral-500 text-xs font-medium leading-relaxed uppercase tracking-widest">
                                                    Our engineering team responds within <span className="text-amber-500/80">24–48 hours</span> with a detailed, data-driven system projection.
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* 4️⃣ TRUST STRIP BELOW FORM */}
                        <div className="mt-12 py-8 border-y border-neutral-800/50">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                {[
                                    { icon: <CheckCircle2 className="w-4 h-4 text-amber-500 md:mx-auto" />, label: '500+ Installations' },
                                    { icon: <ShieldCheck className="w-4 h-4 text-amber-500 md:mx-auto" />, label: '25-Year Warranty' },
                                    { icon: <Globe className="w-4 h-4 text-amber-500 md:mx-auto" />, label: 'Pan-India Execution' }
                                ].map((trust, i) => (
                                    <div key={i} className="flex md:flex-col items-center gap-4 space-y-2">
                                        {trust.icon}
                                        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">{trust.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Section>
            </motion.div>
        </main>
    );
}
