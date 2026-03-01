'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap, Layers, Clock, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

// New Interactive Components
import { ElectricBorderCard } from '@/components/ui/ElectricBorderCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { motion, useScroll, useTransform } from "framer-motion";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -30]);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  return (
    <main className="bg-[#0a0a0a] text-neutral-100 relative bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(0,0,0,0))]">
      {/* 3% Light Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* SECTION 1 — HERO */}
      <Section
        className="relative min-h-screen flex items-center overflow-hidden pt-48 pb-32 lg:pt-56 lg:pb-32"
        style={{ backgroundImage: "url('/hero.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >

        {/* Improved Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#0a0a0a]" />

        {/* Hero Text Content */}
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div style={{ y }} className="max-w-3xl">
            <p className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase mb-6 drop-shadow-sm">
              ARCHITECTURAL SOLAR ENGINEERING
            </p>
            {/* Faint Radial Glow behind H1 */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: luxuryEase }}
              className="relative text-5xl md:text-[80px] font-bold leading-[1.1] tracking-tight max-w-4xl text-white drop-shadow-lg"
            >
              Own Your <span className="text-amber-500">Energy.</span><br />
              Eliminate Electricity Costs<br />
              With Precision Solar Design.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: luxuryEase }}
              className="mt-12 text-neutral-400 opacity-80 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
            >
              Solane designs architect-integrated solar systems that reduce up to 80% of grid dependency. Engineered for structural harmony and long-term financial performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: luxuryEase }}
              className="mt-16 flex flex-col sm:flex-row gap-6"
            >
              <MagneticButton>
                <Link href="/assessment">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-5 rounded-full border-none w-full shadow-lg shadow-amber-500/10 transition-all">
                    Get Your Free Solar Assessment
                  </Button>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/projects">
                  <Button variant="secondary" size="lg" className="border border-white/20 hover:bg-white/5 text-white px-10 py-5 rounded-full w-full backdrop-blur-sm transition-all">
                    View Real Projects
                  </Button>
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <div className="border-t border-white/5 mx-auto max-w-7xl relative z-10" />

      {/* SECTION 2 — TRUST STRIP */}
      <div className="py-32 relative z-10">
        <Container className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl px-10 py-12 border border-white/5 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.08)] hover:border-amber-500/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
              {[
                { label: '500+', sublabel: 'Successful Installations' },
                { label: '25-Year', sublabel: 'Performance Warranty' },
                { label: '50MW', sublabel: 'Total Capacity Delivered' },
                { label: 'Pan-India', sublabel: 'Engineering & Execution' },
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <div className="space-y-4 group">
                    <p className="text-5xl font-bold text-white tracking-tight group-hover:text-amber-500 transition-colors duration-500">{item.label}</p>
                    <p className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase font-bold group-hover:text-neutral-400 transition-colors duration-500">{item.sublabel}</p>
                  </div>
                  {i < 3 && <div className="hidden md:block w-px h-12 bg-white/10" />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      {/* SECTION 3 — WHY CHOOSE SOLANE */}
      <Section className="py-32 overflow-hidden relative border-t border-white/10 bg-black/20">
        <Container className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="text-center space-y-20 relative z-10"
          >
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">THE ADVANTAGE</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Why Property Owners Choose<br />
                <span className="text-amber-500">Solane</span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start gap-16 md:gap-32">
              {[
                {
                  text: "Reduce electricity costs by up to 80%",
                  icon: <Zap className="w-9 h-9 text-amber-500 stroke-[1.5px]" />
                },
                {
                  text: "Recover investment within 3 to 5 years",
                  icon: <Clock className="w-9 h-9 text-amber-500 stroke-[1.5px]" />
                },
                {
                  text: "Generate predictable power for 25+ years",
                  icon: <Shield className="w-9 h-9 text-amber-500 stroke-[1.5px]" />
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-8 text-center group cursor-default max-w-[300px] mx-auto">
                  <div className="p-6 rounded-full border border-amber-500/20 group-hover:border-amber-500/40 group-hover:scale-105 transition-all duration-500 text-amber-400">
                    {item.icon}
                  </div>
                  <span className="text-lg text-neutral-400 opacity-80 font-medium leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* SECTION 4 — ENGINEERED FOR PERFORMANCE */}
      <Section className="py-32 relative border-t border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-20 space-y-6"
          >
            <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">THE METHODOLOGY</span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mt-6">
              Engineered for <span className="text-amber-500">Performance.</span><br />
              Designed for <span className="text-amber-500">Permanence.</span>
            </h2>
            <p className="text-neutral-400 opacity-80 text-lg md:text-xl leading-relaxed max-w-2xl font-medium mt-10">
              Every Solane system is precision-engineered for your property’s structure, energy load, and long-term financial return.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Architectural Integration',
                description: 'Seamless rooftop systems that enhance your home’s visual identity while generating high-efficiency power.',
                icon: <Layers className="w-6 h-6 text-amber-500" />
              },
              {
                title: 'Tier-1 Components',
                description: 'We use globally certified monocrystalline panels and inverters built for decades of reliable performance.',
                icon: <ShieldCheck className="w-6 h-6 text-amber-500" />
              },
              {
                title: 'End-to-End Execution',
                description: 'From consultation and subsidy processing to installation and activation, we manage the complete journey.',
                icon: <Zap className="w-6 h-6 text-amber-500" />
              },
            ].map((card, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 group overflow-hidden hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
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
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-amber-400 transition-colors duration-300 tracking-tight">{card.title}</h3>
                  <p className="text-neutral-400 opacity-80 leading-relaxed font-medium text-sm lg:text-base transition-colors duration-300">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-24 flex justify-center"
          >
            <Link href="/about">
              <Button
                variant="outline"
                className="border-amber-500/40 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500/60 px-12 py-7 rounded-full text-lg -tracking-tight transition-all duration-500 bg-transparent"
              >
                Explore Our Design Philosophy
              </Button>
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* SECTION 5 — RESIDENTIAL & COMMERCIAL */}
      <Section className="border-t border-white/10 py-32 bg-black/40">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

            {/* Residential */}
            <Link href="/residential" className="block group">
              <div className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(245,158,11,0.2)] hover:border-amber-500/50">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src="/residential.jpeg"
                    alt="Residential Solar"
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                </div>
                {/* Improved Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-transparent pointer-events-none" />
                {/* Content */}
                <div className="relative z-10 p-10 flex flex-col justify-between h-full">
                  <div />
                  <div>
                    <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase mb-4 block drop-shadow-md">PORTFOLIO</span>
                    <h3 className="text-4xl font-bold mb-3 text-white tracking-tight drop-shadow-lg group-hover:text-amber-400 transition-colors duration-300">Residential</h3>
                    <p className="text-neutral-300 text-lg max-w-md mb-8 font-medium drop-shadow-md">
                      Premium rooftop systems tailored for luxury homes seeking long-term energy independence.
                    </p>
                    <button className="px-8 py-3.5 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition flex items-center gap-2 group-hover:border-amber-500 group-hover:text-amber-500 duration-300">
                      Explore <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Commercial */}
            <Link href="/commercial" className="block group">
              <div className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(245,158,11,0.2)] hover:border-amber-500/50">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src="/commercial.jpeg"
                    alt="Commercial Solar"
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                </div>
                {/* Improved Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-transparent pointer-events-none" />
                {/* Content */}
                <div className="relative z-10 p-10 flex flex-col justify-between h-full">
                  <div />
                  <div>
                    <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase mb-4 block drop-shadow-md">PORTFOLIO</span>
                    <h3 className="text-4xl font-bold mb-3 text-white tracking-tight drop-shadow-lg group-hover:text-amber-400 transition-colors duration-300">Commercial</h3>
                    <p className="text-neutral-300 text-lg max-w-md mb-8 font-medium drop-shadow-md">
                      Scalable solar infrastructure that protects business margins and reduces operational costs.
                    </p>
                    <button className="px-8 py-3.5 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition flex items-center gap-2 group-hover:border-amber-500 group-hover:text-amber-500 duration-300">
                      Explore <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </Container>
      </Section>

      {/* SECTION 6 — THE PATH TO ENERGY INDEPENDENCE */}
      <Section className="py-32 relative bg-transparent border-t border-white/5">
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-32 space-y-6"
          >
            <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">THE PROCESS</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
              The Path to <br /><span className="text-amber-500">Energy Independence</span>
            </h2>
            <p className="text-neutral-400 opacity-80 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mt-10">
              A structured three-stage process built around precision, performance, and long-term reliability.
            </p>
          </motion.div>

          <div className="space-y-72 lg:space-y-[24rem]">
            {[
              {
                step: '01',
                title: 'Consultation',
                text: 'We analyze your consumption patterns, rooftop structure, and financial goals to design a system aligned with your vision.',
                img: '/consultation.jpeg'
              },
              {
                step: '02',
                title: 'Engineering',
                text: 'Our engineers create a high-performance system using advanced modeling to maximize output and durability.',
                img: '/engineering.jpeg'
              },
              {
                step: '03',
                title: 'Installation',
                text: 'Certified specialists execute installation with structural precision and full compliance support.',
                img: '/installation.jpeg'
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
                      <span className="text-6xl lg:text-7xl font-bold text-white/[0.1] font-mono tracking-[0.2em] leading-none mb-6 block">
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
                  <div className="group relative h-[550px] lg:h-[850px] overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    {/* Image */}
                    <div className="absolute inset-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-105 group-hover:scale-105"
                      />
                    </div>
                    {/* Improved Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — FINAL CTA */}
      <Section className="py-32 relative overflow-hidden bg-black/40 border-t border-white/5">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/5 to-transparent shadow-2xl shadow-amber-500/20" />
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center space-y-12"
          >
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">THE NEXT STEP</span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Ready to Take Control of Your <br />
                <span className="text-amber-500">Energy</span> Costs?
              </h2>
            </div>
            <p className="text-neutral-400 opacity-80 text-lg lg:text-2xl max-w-2xl mx-auto font-medium leading-relaxed pt-6">
              Join property owners who have transitioned to predictable, self-generated power with Solane.
            </p>

            <div className="flex flex-col items-center justify-center pt-24 pb-20">
              <MagneticButton>
                <Link href="/assessment">
                  <Button
                    size="lg"
                    className="group relative h-[64px] px-14 lg:px-20 bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-[0.1em] rounded-full border-none text-lg lg:text-xl transition-all duration-300 shadow-[0_0_30px_rgba(234,179,8,0.25)] hover:shadow-[0_0_60px_rgba(234,179,8,0.45)] overflow-hidden"
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-[1.02] inline-block">Request Your Free Assessment</span>

                    {/* Subtle Shine Sweep Effect */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 -left-[100%] w-[40%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-30deg] group-hover:animate-shine-sweep" />
                    </div>
                  </Button>
                </Link>
              </MagneticButton>
            </div>
            <p className="text-neutral-600 text-xs tracking-[0.3em] uppercase font-bold text-center">25-Year Performance Warranty Included</p>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
