'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  Plus,
  Clock,
  Shield,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MagneticButton } from '@/components/ui/MagneticButton';

const luxuryEase = [0.22, 1, 0.36, 1] as const;

// 🎬 Unified Animation System Variants
const containerVariants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariant = (y = 20, duration = 0.6, delay = 0) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration, ease: "easeOut", delay },
});

export default function CommercialSolar() {
  return (
    <main className="bg-[#0f0f10] text-neutral-100 selection:bg-amber-500/30">

      {/* 1️⃣ HERO SECTION (Authority Driven) */}
      <Section className="relative pt-48 pb-56 overflow-hidden border-b border-white/5">
        <Container className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-12"
            >
              <motion.span
                variants={fadeUpVariant(20, 0.6)}
                className="text-amber-500 font-bold tracking-[0.3em] text-[10px] uppercase block"
              >
                COMMERCIAL SOLAR INFRASTRUCTURE
              </motion.span>

              <motion.h1
                className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white max-w-[1.2em] sm:max-w-none"
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                  className="block"
                >
                  Scalable Solar Infrastructure
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                  className="inline-block"
                >
                  Built for
                </motion.span>
                {" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                  className="text-amber-500 inline-block"
                >
                  Business Performance
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-[520px]"
              >
                Rising electricity tariffs directly impact your margins. Solane designs high-capacity solar systems that reduce operational energy costs by up to 80% and deliver ROI within 3 to 5 years.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-8 pt-14"
              >
                <MagneticButton>
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-12 py-7 rounded-full border-none text-base shadow-xl shadow-amber-500/10 transition-all hover:-translate-y-[4px] duration-300">
                    Request Commercial Audit
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="secondary" size="lg" className="border border-white/20 hover:border-white/40 text-white px-12 py-7 rounded-full text-base transition-all hover:bg-white/5">
                    View Case Studies
                  </Button>
                </MagneticButton>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-h-[520px] aspect-[4/3] rounded-[16px] border border-white/5 bg-neutral-900 shadow-2xl overflow-hidden group"
            >
              <Image
                src="https://picsum.photos/seed/comhero/1200/1500"
                alt="Modern Commercial Solar"
                fill
                className="object-cover opacity-80 transition-transform duration-[800ms] ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/8 pointer-events-none" />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 2️⃣ PERFORMANCE METRICS STRIP (Scale Emphasis) */}
      <Section className="py-40 border-y border-white/5 bg-white/[0.01]">
        <Container className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center">
            {[
              { val: '3–5 Years', label: 'Average ROI Period' },
              { val: 'Up to 80%', label: 'Energy Cost Reduction' },
              { val: '25+ Years', label: 'System Lifespan' },
              { val: '50MW+', label: 'Capacity Delivered' },
            ].map((metric, i) => (
              <motion.div
                key={metric.val}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                className="space-y-4 group"
              >
                <p className="text-5xl lg:text-7xl font-bold text-white tracking-tighter group-hover:text-white transition-colors">
                  {metric.val}
                </p>
                <p className="text-[10px] tracking-[0.25em] text-neutral-600/40 uppercase font-bold">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3️⃣ ENERGY COSTS SECTION */}
      <Section className="py-44 border-t border-white/5">
        <Container className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-10"
            >
              <motion.h2
                variants={fadeUpVariant(20, 0.6)}
                className="text-4xl lg:text-6xl font-semibold leading-tight text-white -tracking-tight"
              >
                Energy Costs Should Not <br />
                Control Your <span className="text-amber-500">Growth</span>
              </motion.h2>
              <motion.p
                variants={fadeUpVariant(20, 0.6)}
                className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-xl"
              >
                For manufacturing plants, tech parks, hospitality chains, and logistics hubs, rising power costs directly reduce profitability. Solane builds infrastructure that turns energy into a predictable asset.
              </motion.p>
              <motion.div
                variants={fadeUpVariant(20, 0.6)}
                className="flex items-center gap-4"
              >
                <div className="w-[2px] h-10 bg-amber-500" />
                <p className="text-amber-500 text-xs font-bold tracking-widest uppercase italic">Infrastructure Security</p>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8">
              {[
                { title: "Protect Margins", desc: "Lock in electricity rates for decades." },
                { title: "Grid Stability", desc: "Shield operations from sudden load shedding." },
                { title: "ESG Profile", desc: "Commit to verifiable sustainability targets." },
                { title: "Regulatory Ease", desc: "Full handling of DISCOM net-metering setup." }
              ].map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="electric-border p-14 group shadow-lg transition-all duration-300 hover:shadow-black/60 border-white/5"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <h4 className="text-white font-bold uppercase tracking-tight text-base">{point.title}</h4>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4️⃣ ENTERPRISE-GRADE SOLUTIONS */}
      <Section className="py-44 border-t border-white/5 bg-white/[0.01]">
        <Container className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-24"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold text-white -tracking-tight">Enterprise-Grade Solar Solutions</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-[300px] lg:h-[480px] bg-neutral-900 rounded-[16px] mb-44 overflow-hidden border border-white/5 shadow-2xl relative group"
          >
            <Image
              src="https://picsum.photos/seed/cominfra/1920/1080"
              alt="Industrial Solar Infrastructure"
              fill
              className="object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Rooftop Solar Infrastructure',
                description: 'Large-scale systems engineered for factories, offices, and commercial facilities.',
                icon: <Layers className="w-6 h-6 text-amber-500" />
              },
              {
                title: 'Ground-Mounted Systems',
                description: 'High-capacity solar arrays for industrial land and campuses.',
                icon: <Zap className="w-6 h-6 text-amber-500" />
              },
              {
                title: 'Solar Carports',
                description: 'Convert parking infrastructure into revenue-generating energy assets.',
                icon: <ShieldCheck className="w-6 h-6 text-amber-500" />
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="electric-border p-16 flex flex-col items-start gap-10 group h-full shadow-lg transition-shadow duration-300 hover:shadow-black/60 border-white/5"
              >
                <div className="p-4 rounded-full bg-amber-500/5 group-hover:scale-[1.05] transition-transform duration-300">{card.icon}</div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-amber-500 transition-colors uppercase tracking-tight">{card.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-base">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5️⃣ FROM AUDIT TO ACTIVATION (Process) */}
      <Section className="py-44 border-t border-white/5">
        <Container className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-32"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold text-white -tracking-tight uppercase tracking-[0.25em]">From Audit to Activation</h2>
            <div className="w-20 h-px bg-amber-500 mt-10" />
          </motion.div>

          <div className="space-y-80">
            {[
              {
                step: '01',
                title: 'Energy Audit',
                text: 'Global standards for energy load analysis and financial modeling to ensure ROI clarity from day one.'
              },
              {
                step: '02',
                title: 'Engineering & Compliance',
                text: 'Precision engineering integrated with local DISCOM regulations and structural compliance audits.'
              },
              {
                step: '03',
                title: 'Installation & Commissioning',
                text: 'Seamless execution by certified specialists, ensuring zero operational downtime during activation.'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-24 items-center relative group"
              >
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={cn("space-y-10 relative z-10", i % 2 === 1 ? "lg:order-2" : "lg:order-1")}
                >
                  <div className="relative">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.06 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="text-7xl lg:text-9xl font-bold text-white font-mono tracking-widest leading-none mb-8 block select-none"
                    >
                      {item.step}
                    </motion.span>
                    <h3 className="text-3xl lg:text-5xl font-semibold uppercase tracking-tight text-white mb-8 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                    <p className="text-neutral-500 text-lg lg:text-xl leading-1.6 max-w-xl">
                      {item.text}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={cn("relative aspect-[16/10] bg-neutral-900 rounded-[16px] overflow-hidden shadow-2xl border border-white/5", i % 2 === 1 ? "lg:order-1" : "lg:order-2")}
                >
                  <Image
                    src={`https://picsum.photos/seed/comproc-${i}/1200/800`}
                    alt={item.title}
                    fill
                    className="object-cover opacity-70 grayscale contrast-[0.9] transition-all duration-[800ms] ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/8 pointer-events-none" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6️⃣ PROVEN PERFORMANCE (Case Study) */}
      <Section className="py-44 border-t border-white/5 bg-white/[0.01]">
        <Container className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl lg:text-5xl font-semibold mb-24 text-left -tracking-tight text-white"
          >
            Proven Performance Across Industries
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="border border-white/5 rounded-[16px] overflow-hidden bg-white/[0.02] p-20 lg:p-24 grid lg:grid-cols-2 gap-16 items-center shadow-2xl group transition-all duration-300"
          >
            <div className="space-y-12 group-hover:translate-x-3 transition-transform duration-700">
              <p className="text-2xl lg:text-4xl font-semibold text-neutral-200 leading-tight -tracking-tight">
                Textile manufacturing unit reduced annual energy costs by <span className="text-amber-500 font-black uppercase tracking-tight text-3xl lg:text-5xl">40%</span> in the first year.
              </p>
              <Button variant="secondary" className="border-white/10 hover:border-amber-500/50 hover:text-amber-500 hover:bg-white/5 rounded-full py-8 px-10 group flex items-center gap-2 transition-all duration-500 text-lg">
                View All Commercial Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative aspect-[16/10] lg:aspect-square bg-neutral-900 rounded-[16px] overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="https://picsum.photos/seed/comcase/1000/1000"
                alt="Commercial Case Study"
                fill
                className="object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 7️⃣ FINAL CTA SECTION */}
      <Section className="py-56 border-t border-white/5 relative overflow-hidden">
        <Container className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <motion.h2
              className="text-4xl lg:text-[5rem] font-semibold tracking-tight text-white leading-[1.05]"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Future-Proof Your{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-amber-500"
              >
                Business
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                Energy Strategy
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="text-neutral-500 text-lg lg:text-xl max-w-xl mx-auto leading-relaxed"
            >
              Schedule a commercial audit and receive a detailed savings and ROI projection for your facility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex justify-center pt-14"
            >
              <MagneticButton>
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-16 py-8 rounded-full border-none text-xl transition-all shadow-xl shadow-amber-500/20 hover:-translate-y-[4px] duration-300">
                  Request Commercial Energy Audit
                </Button>
              </MagneticButton>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-bold text-center"
            >
              Backed by 25-Year System Warranty
            </motion.p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
