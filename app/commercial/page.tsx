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
    <main className="bg-[#0a0a0a] text-neutral-100 relative bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(0,0,0,0))]">
      {/* 3% Light Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 1️⃣ HERO SECTION (Authority Driven) */}
      <Section className="relative pt-48 pb-32 lg:pt-56 lg:pb-32 overflow-hidden border-b border-white/5">
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-16 lg:gap-20 items-center">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-12"
            >
              <motion.div variants={fadeUpVariant(20, 0.6)}>
                <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase drop-shadow-sm">
                  COMMERCIAL SOLAR INFRASTRUCTURE
                </span>
              </motion.div>

              {/* Faint Radial Glow behind H1 */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />
              <motion.h1
                className="relative text-5xl md:text-[80px] font-bold tracking-tight leading-[1.1] text-white max-w-[1.2em] sm:max-w-none drop-shadow-lg"
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
                className="text-neutral-400 opacity-80 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
              >
                Rising electricity tariffs directly impact your margins. Solane designs high-capacity solar systems that reduce operational energy costs by up to 80% and deliver ROI within 3 to 5 years.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-6 pt-6"
              >
                <MagneticButton>
                  <Link href="/assessment">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-5 rounded-full border-none w-full shadow-lg shadow-amber-500/10 transition-all">
                      REQUEST COMMERCIAL AUDIT
                    </Button>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/projects">
                    <Button variant="secondary" size="lg" className="border border-white/20 hover:bg-white/5 text-white px-10 py-5 rounded-full w-full backdrop-blur-sm transition-all uppercase">
                      VIEW CASE STUDIES
                    </Button>
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors duration-700 z-10 pointer-events-none" />
              <Image
                src="/commercial-hero.jpeg"
                alt="Commercial Solar Infrastructure"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 2️⃣ PERFORMANCE METRICS STRIP (Scale Emphasis) */}
      <Section className="py-32 border-y border-white/5 bg-black/40 relative z-10">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center lg:text-left items-center">
            {[
              { val: '3–5 Yrs', label: 'Average ROI Period' },
              { val: 'Upto 80%', label: 'Energy Cost Reduction' },
              { val: '25+ Yrs', label: 'System Lifespan' },
              { val: '50MW+', label: 'Capacity Delivered' },
            ].map((metric, i) => (
              <motion.div
                key={metric.val}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                className="space-y-4 group lg:border-l lg:border-white/10 lg:pl-10 lg:first:border-l-0 lg:first:pl-0"
              >
                <p className="text-5xl lg:text-7xl font-bold text-white tracking-tighter group-hover:text-amber-400 transition-colors">
                  {metric.val}
                </p>
                <p className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase font-bold">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3️⃣ ENERGY COSTS SECTION */}
      <Section className="py-32 border-t border-white/5">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-10 lg:sticky lg:top-32"
            >
              <motion.div variants={fadeUpVariant(20, 0.6)}>
                <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block drop-shadow-sm mb-6">INFRASTRUCTURE SECURITY</span>
              </motion.div>
              <motion.h2
                variants={fadeUpVariant(20, 0.6)}
                className="text-4xl lg:text-5xl font-bold leading-[1.1] text-white tracking-tight"
              >
                Energy Costs Should Not <br />
                Control Your <span className="text-amber-500">Growth</span>
              </motion.h2>
              <motion.p
                variants={fadeUpVariant(20, 0.6)}
                className="text-neutral-400 opacity-80 font-medium text-lg lg:text-xl leading-relaxed max-w-xl"
              >
                For manufacturing plants, tech parks, hospitality chains, and logistics hubs, rising power costs directly reduce profitability. Solane builds infrastructure that turns energy into a predictable asset.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8">
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
                  className="relative rounded-2xl bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 p-10 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 group overflow-hidden hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 transform group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="text-white font-bold tracking-tight text-xl transition-colors group-hover:text-amber-400">{point.title}</h4>
                  </div>
                  <p className="text-neutral-400 opacity-80 leading-relaxed font-medium text-sm lg:text-base">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4️⃣ ENTERPRISE-GRADE SOLUTIONS */}
      <Section className="py-32 border-t border-white/5 bg-transparent relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-20 space-y-6 text-center max-w-4xl mx-auto"
          >
            <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">THE HARDWARE</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">Enterprise-Grade <span className="text-amber-500">Solutions</span></h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-[500px] lg:h-[700px] bg-neutral-900 mb-20 lg:mb-32 group overflow-hidden rounded-2xl border border-white/5 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors duration-700 z-10 pointer-events-none" />
            <Image
              src="/commercial-solutions.jpeg"
              alt="Enterprise Solar Farm"
              fill
              className="object-cover w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10 w-full">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                className="relative rounded-2xl bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 p-10 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 group overflow-hidden hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute inset-0 border border-amber-500/20 rounded-2xl" />
                  <div
                    className="absolute inset-[-100%] animate-[spin_15s_linear_infinite]"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(255, 180, 0, 0.08) 10%, transparent 20%, transparent 50%, rgba(255, 180, 0, 0.08) 60%, transparent 70%)'
                    }}
                  />
                </div>
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500 text-amber-500 relative z-10">
                  {card.icon}
                </div>
                <div className="space-y-4 relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white tracking-tight transition-colors group-hover:text-amber-400">{card.title}</h3>
                  <p className="text-neutral-400 opacity-80 leading-relaxed font-medium text-sm lg:text-base">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5️⃣ FROM AUDIT TO ACTIVATION (Process) */}
      <Section className="py-32 relative bg-transparent border-t border-white/5">
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-32 space-y-6 text-center mx-auto"
          >
            <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">THE PROCESS</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              From Audit to <span className="text-amber-500">Activation</span>
            </h2>
          </motion.div>

          <div className="space-y-32 lg:space-y-48 relative z-10">
            {[
              {
                step: '01',
                title: 'Energy Audit',
                text: 'Global standards for energy load analysis and financial modeling to ensure ROI clarity from day one.',
                img: '/commercial-audit.jpeg'
              },
              {
                step: '02',
                title: 'Engineering & Compliance',
                text: 'Precision engineering integrated with local DISCOM regulations and structural compliance audits.',
                img: '/commercial-engineering.jpeg'
              },
              {
                step: '03',
                title: 'Installation & Commissioning',
                text: 'Seamless execution by certified specialists, ensuring zero operational downtime during activation.',
                img: '/commercial-installation.jpeg'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: luxuryEase }}
                className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center group relative"
              >
                <div className={cn("space-y-10 relative z-10", i % 2 === 1 ? "lg:order-2" : "lg:order-1")}>
                  <div className="relative">
                    <div className="relative z-10 space-y-4">
                      <span className="text-6xl lg:text-7xl font-bold text-white/[0.1] font-mono tracking-[0.2em] leading-none mb-6 block drop-shadow-sm">
                        {item.step}
                      </span>
                      <h3 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-8">{item.title}</h3>
                      <p className="text-neutral-400 opacity-80 text-lg lg:text-xl font-medium leading-relaxed max-w-lg">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cn("relative", i % 2 === 1 ? "lg:order-1" : "lg:order-2")}>
                  <div className="group relative h-[450px] lg:h-[600px] overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div className="absolute inset-0">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-105 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6️⃣ PROVEN PERFORMANCE (Case Study) */}
      <Section className="py-32 border-t border-white/5 bg-transparent">
        <Container className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left max-w-3xl mb-20 space-y-6"
          >
            <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">CASE HIGHLIGHT</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Proven Performance Across <span className="text-amber-500">Industries</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative rounded-2xl bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 p-12 lg:p-20 grid lg:grid-cols-[1.1fr,0.9fr] gap-16 lg:gap-24 items-center group overflow-hidden"
          >
            <div className="space-y-12 relative z-10 mt-8 lg:mt-0">
              <p className="text-2xl lg:text-4xl font-semibold text-neutral-200 leading-tight tracking-tight">
                Textile manufacturing unit reduced annual energy costs by <span className="text-amber-500 font-black uppercase tracking-tight text-3xl lg:text-5xl">40%</span> in the first year.
              </p>
              <div className="pt-4">
                <Link href="/projects">
                  <Button variant="secondary" className="border-white/20 hover:border-white/40 text-white bg-transparent hover:bg-white/5 rounded-full py-6 px-10 flex items-center gap-3 transition-all duration-300 text-base uppercase">
                    View All Commercial Projects <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-shadow duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-colors duration-700 z-10 pointer-events-none" />
              <Image
                src="/commercial-case-study.jpeg"
                alt="Commercial Solar Case Study"
                fill
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
              />
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 7️⃣ FINAL CTA SECTION */}
      <Section className="py-32 relative overflow-hidden bg-black/40 border-t border-white/5">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/5 to-transparent shadow-2xl shadow-amber-500/20" />
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">THE NEXT STEP</span>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]"
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
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-neutral-400 opacity-80 text-lg lg:text-2xl max-w-2xl mx-auto font-medium leading-relaxed pt-6"
            >
              Schedule a commercial audit and receive a detailed savings and ROI projection for your facility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex justify-center pt-16 pb-8"
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
