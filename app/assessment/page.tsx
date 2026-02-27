'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

export default function AssessmentPage() {
    return (
        <main className="bg-[#0f0f10] text-neutral-100 min-h-screen">
            {/* 1️⃣ HERO SECTION */}
            <Section className="pt-32 pb-16 lg:pt-48 lg:pb-24 text-center">
                <Container className="max-w-5xl mx-auto px-6">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase block">
                            FREE SOLAR ASSESSMENT
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                            Receive a Tailored Solar & <br className="hidden md:block" /> Savings Projection
                        </h1>
                        <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed">
                            Complete the assessment below and our engineering team will prepare a customized system recommendation, projected savings breakdown, and ROI timeline for your property.
                        </p>
                    </div>
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
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 lg:p-12 space-y-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

                        {/* SECTION 1: PROPERTY DETAILS */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <span className="w-1 h-6 bg-amber-500 rounded-full" />
                                <h2 className="text-xl font-semibold uppercase tracking-tight text-white">Section 1: Property Details</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Property Type</label>
                                    <select className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors appearance-none cursor-pointer">
                                        <option value="residential">Residential</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="industrial">Industrial</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Roof Type</label>
                                    <select className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors appearance-none cursor-pointer">
                                        <option value="rcc">RCC Flat Roof</option>
                                        <option value="metal">Metal Sheet</option>
                                        <option value="industrial">Industrial Shed</option>
                                        <option value="tiled">Tiled Roof</option>
                                        <option value="other">Not Sure</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">City / State</label>
                                    <input type="text" placeholder="e.g. Mumbai, MH" className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Approx. Monthly Bill (₹)</label>
                                    <input type="text" placeholder="e.g. 15,000" className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors" />
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
                                        <button className="bg-black border border-neutral-800 rounded-lg py-3 text-sm font-medium hover:border-amber-500 transition-colors">Yes</button>
                                        <button className="bg-black border border-neutral-800 rounded-lg py-3 text-sm font-medium hover:border-amber-500 transition-colors">No</button>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Interested In</label>
                                    <select className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors appearance-none cursor-pointer">
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
                                            <button key={time} className="bg-black border border-neutral-800 rounded-lg py-3 text-xs font-medium hover:border-amber-500 transition-colors">
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
                                    <input type="text" placeholder="John Doe" className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Phone Number</label>
                                    <input type="tel" placeholder="+91 98765 43210" className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors" />
                                </div>
                                <div className="space-y-3 md:col-span-2">
                                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Briefly describe your property or energy goals</label>
                                    <textarea placeholder="e.g. Roof orientation, shading issues, specific energy targets..." className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors min-h-[140px] resize-none" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 space-y-6">
                            <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-5 rounded-xl border-none text-base transition-all flex items-center justify-center gap-3">
                                REQUEST MY FREE SOLAR ASSESSMENT <ArrowRight className="w-5 h-5" />
                            </Button>
                            <div className="bg-neutral-950/50 p-6 border border-neutral-800/50 rounded-xl text-center">
                                <p className="text-neutral-500 text-xs font-medium leading-relaxed">
                                    Our engineering team responds within <span className="text-amber-500/80">24–48 hours</span> with a detailed, data-driven system projection for your facility.
                                </p>
                            </div>
                        </div>
                    </div>

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
        </main>
    );
}
