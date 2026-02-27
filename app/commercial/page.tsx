'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function CommercialSolar() {
  return (
    <main className="bg-[#0f0f10] text-neutral-100">
      {/* 1️⃣ HERO SECTION */}
      <Section className="relative pt-32 pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase">
                COMMERCIAL & INDUSTRIAL SOLAR
              </span>
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                Scalable Solar Infrastructure Built for Business Performance
              </h1>
              <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-xl">
                Rising electricity tariffs directly impact your margins. Solane designs high-capacity solar systems that reduce operational energy costs by up to 80% and deliver ROI within 3 to 5 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-10 py-5 rounded-full border-none text-base">
                  Request Commercial Audit
                </Button>
                <Button variant="secondary" size="lg" className="border border-neutral-800 hover:bg-neutral-800 text-white px-10 py-5 rounded-full text-base">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="w-full h-[300px] lg:h-[600px] bg-neutral-800 rounded-2xl shadow-2xl relative">
              {/* Image Placeholder */}
            </div>
          </div>
        </Container>
      </Section>

      {/* 2️⃣ PERFORMANCE METRICS STRIP */}
      <div className="border-y border-neutral-800 py-16 bg-neutral-950/20">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '3–5 Years', label: 'Average ROI Period' },
              { val: 'Up to 80%', label: 'Energy Cost Reduction' },
              { val: '25+ Years', label: 'System Lifespan' },
              { val: '50MW+', label: 'Capacity Delivered' },
            ].map((metric, i) => (
              <div
                key={i}
                className={`space-y-2 ${i !== 3 ? 'md:border-r border-neutral-800' : ''}`}
              >
                <p className="text-3xl lg:text-5xl font-semibold text-white">{metric.val}</p>
                <p className="text-xs tracking-widest text-neutral-500 uppercase font-bold">{metric.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3️⃣ BUSINESS PROBLEM SECTION */}
      <Section className="py-24">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 mb-12 lg:mb-0">
              <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-white">Energy Costs Should Not Control Your Growth</h2>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
                For manufacturing plants, tech parks, hospitality chains, and logistics hubs, rising power costs directly reduce profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Protect operating margins",
                "Stabilize long-term energy expenses",
                "Improve ESG & sustainability profile",
                "Reduce dependency on unstable grid supply"
              ].map((point, i) => (
                <div key={i} className="p-8 border border-neutral-800 rounded-xl bg-neutral-900/30 flex items-center gap-4 hover:border-amber-500 transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-neutral-200 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4️⃣ WHAT WE DELIVER */}
      <Section className="py-24 bg-neutral-950/50">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-white text-left">Enterprise-Grade Solar Solutions</h2>
          </div>

          <div className="w-full h-[300px] lg:h-[520px] bg-neutral-800 rounded-2xl mb-12 shadow-2xl" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rooftop Solar Infrastructure',
                description: 'Large-scale systems engineered for factories, offices, and commercial facilities.'
              },
              {
                title: 'Ground-Mounted Systems',
                description: 'High-capacity solar arrays for industrial land and campuses.'
              },
              {
                title: 'Solar Carports',
                description: 'Convert parking infrastructure into revenue-generating energy assets.'
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-8 border border-neutral-800 rounded-2xl bg-neutral-900/40 hover:border-amber-500/30 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{card.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm md:text-base">{card.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5️⃣ IMPLEMENTATION PROCESS */}
      <Section className="py-24">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">From Audit to Activation</h2>
          </div>

          <div className="space-y-28">
            {[
              {
                step: '01',
                title: 'Energy Audit',
                text: 'Load analysis and financial modeling for ROI clarity.'
              },
              {
                step: '02',
                title: 'Engineering & Compliance',
                text: 'System design, DISCOM approvals, subsidy handling.'
              },
              {
                step: '03',
                title: 'Installation & Commissioning',
                text: 'Certified installation and full operational handover.'
              },
            ].map((item, i) => (
              <div
                key={i}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="space-y-6">
                    <span className="text-6xl font-bold text-neutral-900 font-mono tracking-tighter leading-none">{item.step}</span>
                    <h3 className="text-2xl lg:text-3xl font-semibold uppercase tracking-tight">{item.title}</h3>
                    <p className="text-neutral-400 text-base lg:text-lg leading-relaxed max-w-2xl">
                      {item.text}
                    </p>
                  </div>
                </div>
                <div className={`w-full h-[300px] lg:h-[360px] bg-neutral-800 rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? 'lg:order-1' : ''}`} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6️⃣ CASE STUDY PREVIEW */}
      <Section className="py-24 bg-neutral-950/20">
        <Container className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-16 text-left">Proven Performance Across Industries</h2>

          <div className="border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/40 p-12 lg:p-14 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-2xl lg:text-3xl font-semibold text-neutral-200 leading-tight">
                Textile manufacturing unit reduced annual energy costs by <span className="text-amber-500 font-semibold">40%</span> in first year.
              </p>
              <Button variant="secondary" className="border-neutral-700 hover:border-amber-500 hover:text-amber-500 group flex items-center gap-2">
                View All Commercial Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="w-full h-[300px] lg:h-[420px] bg-neutral-800 rounded-2xl" />
          </div>
        </Container>
      </Section>

      {/* 7️⃣ FINAL CTA */}
      <Section className="py-28">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight">Future-Proof Your Business Energy Strategy</h2>
            <p className="text-neutral-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Schedule a commercial audit and receive a detailed savings and ROI projection for your facility.
            </p>

            <div className="space-y-6">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-10 py-5 rounded-full border-none text-lg">
                Request Commercial Energy Audit
              </Button>
              <p className="text-xs text-neutral-500 tracking-[0.2em] uppercase font-bold">Backed by 25-Year System Warranty</p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
