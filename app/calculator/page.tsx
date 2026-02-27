'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MapPin, Zap, Home, Layout, Share2, Calendar, TrendingUp, Trees, Wind } from 'lucide-react';

export default function SolarCalculator() {
  return (
    <main className="bg-[#0f0f10] text-neutral-100 min-h-screen">
      {/* 1️⃣ HERO HEADER */}
      <Section className="pt-32 pb-12 lg:pt-48">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl space-y-6">
            <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase">
              ROI CALCULATOR
            </span>
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
              Calculate Your Solar <br /> <span className="text-amber-500">ROI</span> In Minutes
            </h1>
            <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed">
              Discover the financial impact of switching to Solane’s premium solar systems. Enter your details to estimate savings, payback period, and long-term returns.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2️⃣ MAIN TWO-COLUMN LAYOUT */}
      <Section className="py-12 lg:py-20">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT COLUMN — INPUT FORM CARD */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-10 shadow-xl">
              {/* Toggle Tabs */}
              <div className="p-1 bg-black border border-neutral-800 rounded-full w-fit flex items-center">
                <button className="bg-amber-500 text-black font-medium rounded-full px-8 py-2.5 text-sm flex items-center gap-2">
                  <Home className="w-4 h-4" /> Residential
                </button>
                <button className="text-neutral-400 hover:text-white rounded-full px-8 py-2.5 text-sm transition-colors flex items-center gap-2">
                  <Layout className="w-4 h-4" /> Commercial
                </button>
              </div>

              {/* Input Fields */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Avg. Monthly Bill (₹)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold">₹</span>
                      <input
                        type="text"
                        placeholder="15,000"
                        className="bg-black border border-neutral-800 rounded-lg pl-8 pr-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Mumbai, MH"
                        className="bg-black border border-neutral-800 rounded-lg pl-10 pr-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">ROOF TYPE</label>
                  <select
                    className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors appearance-none cursor-pointer"
                    defaultValue="RCC Flat Roof"
                  >
                    <option value="RCC Flat Roof">RCC Flat Roof</option>
                    <option value="Metal Sheet Roof">Metal Sheet Roof</option>
                    <option value="Tiled Roof">Tiled Roof</option>
                    <option value="Industrial Shed">Industrial Shed</option>
                    <option value="Terrace with Obstructions">Terrace with Obstructions</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
              </div>

              {/* Primary Button */}
              <div className="space-y-4">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-5 rounded-xl border-none text-base tracking-tight flex items-center justify-center gap-2">
                  CALCULATE SAVINGS <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-[10px] text-neutral-600 font-medium leading-relaxed italic text-center">
                  *Estimates based on average solar irradiance data in India. Actual savings may vary.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE — PROJECTED IMPACT PANEL */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 lg:p-10 space-y-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-amber-500/20" />

              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold text-white">Projected Impact</h2>
                  <p className="text-neutral-500 text-sm font-medium">Based on current tariff rates</p>
                </div>
                <button className="p-2 border border-neutral-800 rounded-full hover:bg-neutral-800 transition-colors">
                  <Share2 className="w-4 h-4 text-neutral-400" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Annual Savings Card */}
                <div className="bg-black border border-neutral-800 rounded-xl p-8 space-y-6 relative overflow-hidden h-full">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">ANNUAL SAVINGS</p>
                    <p className="text-4xl font-semibold text-white">₹1.45 L</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                    <TrendingUp className="w-3 h-3 text-amber-500" />
                    <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">+12% vs grid</span>
                  </div>
                </div>

                {/* Payback Card */}
                <div className="bg-black border border-neutral-800 rounded-xl p-8 space-y-6 relative overflow-hidden h-full">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">PAYBACK PERIOD</p>
                    <p className="text-4xl font-semibold text-white">3.2 <span className="text-xl text-neutral-500">Years</span></p>
                  </div>
                  <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-wider">ROI Starts June 2027</p>
                </div>
              </div>

              {/* 25-Year Projection Card */}
              <div className="bg-black border border-neutral-800 rounded-xl p-10 space-y-8 relative overflow-hidden">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">25-YEAR TOTAL BENEFIT</p>
                    <p className="text-4xl lg:text-5xl font-semibold text-white">₹52.4 Lakhs</p>
                  </div>
                  <div className="hidden md:block text-right">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-700 font-bold">LIFETIME SAVINGS</p>
                  </div>
                </div>

                {/* Visual Chart Placeholder */}
                <div className="h-[160px] flex items-end gap-3 pt-4">
                  {[35, 45, 60, 55, 75, 90, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className={`flex-1 rounded-t-xs transition-colors duration-500 ${i === 6 ? 'bg-amber-500' :
                        i > 3 ? 'bg-amber-500/60' :
                          i > 1 ? 'bg-neutral-800' : 'bg-neutral-900'
                        }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-neutral-500 font-bold font-mono">
                  <span>Today</span>
                  <span>2049</span>
                </div>
              </div>

              {/* Environmental Impact Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black border border-neutral-800 rounded-xl p-6 flex items-center gap-6 group/item hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                    <Trees className="w-6 h-6 text-neutral-400 group-hover/item:text-amber-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">124</p>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Trees Saved</p>
                  </div>
                </div>
                <div className="bg-black border border-neutral-800 rounded-xl p-6 flex items-center gap-6 group/item hover:border-neutral-700 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                    <Wind className="w-6 h-6 text-neutral-400 group-hover/item:text-amber-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">8.5 T</p>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">CO₂ Avoided</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
