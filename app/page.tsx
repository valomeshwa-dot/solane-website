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
    <main className="bg-[#0f0f10] text-neutral-100 relative">

      {/* SECTION 1 — HERO */}
      <Section
        className="relative min-h-screen flex items-center overflow-hidden pt-36 pb-28"
        style={{ backgroundImage: "url('/hero.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >

        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />

        {/* Hero Text Content */}
        <Container className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div style={{ y }} className="max-w-3xl">
            <p className="text-xs tracking-[0.35em] text-amber-400 font-medium uppercase">
              ARCHITECTURAL SOLAR ENGINEERING
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: luxuryEase }}
              className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] -tracking-tight max-w-4xl"
            >
              Own Your <span className="text-amber-400">Energy.</span><br />
              Eliminate Electricity Costs<br />
              With Precision Solar Design.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: luxuryEase }}
              className="mt-10 text-neutral-300 text-lg md:text-xl leading-relaxed max-w-lg"
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

      <div className="border-t border-white/5 mx-auto max-w-6xl" />

      {/* SECTION 2 — TRUST STRIP */}
      <div className="py-24">
        <Container className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] rounded-2xl px-10 py-12 border border-white/5"
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
                    <p className="text-5xl font-semibold text-white -tracking-tight group-hover:text-amber-500 transition-colors duration-500">{item.label}</p>
                    <p className="text-xs tracking-[0.25em] text-neutral-600 uppercase font-bold group-hover:text-neutral-400 transition-colors duration-500">{item.sublabel}</p>
                  </div>
                  {i < 3 && <div className="hidden md:block w-px h-12 bg-white/10" />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      {/* SECTION 3 — WHY CHOOSE SOLANE */}
      <Section className="py-40 overflow-hidden relative border-t border-white/5">
        <Container className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="text-center space-y-24"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white -tracking-tight leading-[1.1]">
              Why Property Owners Choose<br />
              <span className="text-amber-400">Solane</span>
            </h2>
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
                  <span className="text-lg text-neutral-500 leading-1.6 group-hover:text-neutral-200 transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* SECTION 4 — ENGINEERED FOR PERFORMANCE */}
      <Section className="py-32 bg-black/20">
        <Container className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-24"
          >
            <h2 className="text-3xl md:text-[3.8rem] font-semibold leading-[1.1] -tracking-tighter mb-14 text-white">
              Engineered for <span className="text-amber-400">Performance.</span><br />
              Designed for <span className="text-amber-400">Permanence.</span>
            </h2>
            <p className="text-neutral-500 text-lg md:text-xl leading-1.6 max-w-2xl font-medium">
              Every Solae system is precision-engineered for your property’s structure, energy load, and long-term financial return.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                className="relative rounded-2xl bg-white/[0.025] backdrop-blur-md border border-white/5 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/20 group overflow-hidden hover:shadow-2xl hover:shadow-amber-500/5"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute inset-0 border border-amber-500/10 rounded-2xl" />
                  <div
                    className="absolute inset-[-100%] animate-[spin_15s_linear_infinite]"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(255, 180, 0, 0.05) 10%, transparent 20%, transparent 50%, rgba(255, 180, 0, 0.05) 60%, transparent 70%)'
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-amber-400 transition-colors duration-300 tracking-tight">{card.title}</h3>
                  <p className="text-neutral-600 leading-1.6 text-sm lg:text-base group-hover:text-neutral-400 transition-colors duration-300">{card.description}</p>
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
      <Section className="border-t border-white/5 py-32">
        <Container className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Residential */}
            <Link href="/residential" className="block group">
              <div className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src="/residential.jpeg"
                    alt="Residential Solar"
                    className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-[2] group-hover:scale-105"
                  />
                </div>
                {/* Strong Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40" />
                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                  <div />
                  <div>
                    <h3 className="text-3xl font-semibold mb-3 text-white uppercase -tracking-tight group-hover:text-amber-500 transition-colors duration-300">Residential</h3>
                    <p className="text-white/80 text-lg max-w-md mb-6">
                      Premium rooftop systems tailored for luxury homes seeking long-term energy independence.
                    </p>
                    <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition flex items-center gap-2 group-hover:border-amber-500 group-hover:text-amber-500 duration-300">
                      Explore <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Commercial */}
            <Link href="/commercial" className="block group">
              <div className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src="/commercial.jpeg"
                    alt="Commercial Solar"
                    className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-[2] group-hover:scale-105"
                  />
                </div>
                {/* Strong Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40" />
                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                  <div />
                  <div>
                    <h3 className="text-3xl font-semibold mb-3 text-white uppercase -tracking-tight group-hover:text-amber-500 transition-colors duration-300">Commercial</h3>
                    <p className="text-white/80 text-lg max-w-md mb-6">
                      Scalable solar infrastructure that protects business margins and reduces operational costs.
                    </p>
                    <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition flex items-center gap-2 group-hover:border-amber-500 group-hover:text-amber-500 duration-300">
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
      <Section className="py-40 bg-black/30">
        <Container className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-48"
          >
            <h2 className="text-3xl lg:text-[4.5rem] font-semibold mb-10 text-white -tracking-tight leading-[1.1]">
              The Path to <br /><span className="text-amber-400">Energy Independence</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-amber-400 to-transparent mb-12" />
            <p className="text-neutral-500 text-xl md:text-2xl leading-1.6">
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
                      <h3 className="text-4xl lg:text-5xl font-semibold uppercase -tracking-tight mb-8">{item.title}</h3>
                      <p className="text-neutral-500 text-lg lg:text-xl leading-1.6 max-w-lg">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cn("relative", i % 2 === 1 ? "lg:order-1" : "lg:order-2")}>
                  <div className="group relative h-[550px] lg:h-[850px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
                    {/* Image */}
                    <div className="absolute inset-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-[2] group-hover:scale-105"
                      />
                    </div>
                    {/* Strong Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — FINAL CTA */}
      <Section className="py-40 relative overflow-hidden bg-black/40">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/5 to-transparent shadow-2xl shadow-amber-500/20" />
        <Container className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center space-y-16"
          >
            <h2 className="text-3xl lg:text-[4.8rem] font-semibold -tracking-tight text-white leading-[1.05]">
              Ready to Take Control of Your <br />
              <span className="text-amber-400">Energy</span> Costs?
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-amber-400 to-transparent mx-auto mt-6" />
            <p className="text-neutral-500 text-lg lg:text-2xl max-w-2xl mx-auto leading-1.6 pt-10">
              Join property owners who have transitioned to predictable, self-generated power with Solae.
            </p>

            <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
              <input
                type="text"
                placeholder="Name"
                className="bg-neutral-900 border border-white/5 rounded-xl px-7 py-5 focus:border-amber-500/50 outline-none text-neutral-200 transition-all hover:bg-neutral-800/50"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-neutral-900 border border-white/5 rounded-xl px-7 py-5 focus:border-amber-500/50 outline-none text-neutral-200 transition-all hover:bg-neutral-800/50"
                required
              />
              <input
                type="text"
                placeholder="Location"
                className="bg-neutral-900 border border-white/5 rounded-xl px-7 py-5 focus:border-amber-500/50 outline-none text-neutral-200 transition-all hover:bg-neutral-800/50"
                required
              />
              <div className="md:col-span-3 pt-10">
                <MagneticButton className="w-full">
                  <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 hover:-translate-y-1 text-black font-bold py-8 rounded-xl border-none text-xl transition-all shadow-xl shadow-amber-500/20">
                    Request Your Free Assessment
                  </Button>
                </MagneticButton>
              </div>
            </form>
            <p className="text-neutral-600 text-xs tracking-[0.3em] uppercase font-bold text-center">25-Year Performance Warranty Included</p>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
