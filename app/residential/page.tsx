'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  Plus,
  Star,
  Clock,
  Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MagneticButton } from '@/components/ui/MagneticButton';
import Image from 'next/image';

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

const fadeOnlyVariant = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function ResidentialSolar() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#0a0a0a] text-neutral-100 relative bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(0,0,0,0))]">
      {/* 3% Light Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 1️⃣ HERO SECTION */}
      <Section
        className="relative min-h-screen flex items-center overflow-hidden pt-48 pb-32 lg:pt-56 lg:pb-32"
        style={{
          backgroundImage: "url('/residential-lifestyle.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Improved Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#0a0a0a]" />

        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.p
                variants={fadeUpVariant(20, 0.6)}
                className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase mb-6 drop-shadow-sm"
              >
                LUXURY RESIDENTIAL SOLAR
              </motion.p>

              {/* Faint Radial Glow behind H1 */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />
              <motion.h1
                className="relative text-5xl md:text-[80px] font-bold leading-[1.1] tracking-tight max-w-4xl text-white drop-shadow-lg"
              >
                Solar Systems Designed for <br />
                <span className="text-amber-500">Modern Homes.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="mt-12 text-neutral-400 opacity-80 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
              >
                Engineered rooftop solar solutions tailored for homeowners seeking long-term energy independence, architectural harmony, and financial clarity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                className="mt-16 flex flex-col sm:flex-row gap-6"
              >
                <MagneticButton>
                  <Link href="/assessment">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-5 rounded-full border-none w-full shadow-lg shadow-amber-500/10 transition-all">
                      REQUEST ASSESSMENT
                    </Button>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/projects">
                    <Button variant="secondary" size="lg" className="border border-white/20 hover:bg-white/5 text-white px-10 py-5 rounded-full w-full backdrop-blur-sm transition-all uppercase">
                      VIEW PROJECTS
                    </Button>
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <div className="border-t border-white/5 mx-auto max-w-7xl relative z-10" />

      {/* 2️⃣ WHY PROPERTY OWNERS ARE CHOOSING ENERGY INDEPENDENCE */}
      <Section className="py-32 relative z-10">
        <Container className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-20 space-y-6 text-center max-w-4xl mx-auto"
          >
            <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">THE ADVANTAGE</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white">
              Why Property Owners Are <br />
              Choosing <span className="text-amber-500">Energy Independence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                value: '80%',
                label: 'Monthly Savings',
                desc: 'Reduce electricity bills by up to 80% with precision design.',
                icon: <Zap className="w-6 h-6 text-amber-500" />
              },
              {
                value: '25+ Years',
                label: 'Performance Asset',
                desc: 'Predictable power generation with Tier-1 components.',
                icon: <ShieldCheck className="w-6 h-6 text-amber-500" />
              },
              {
                value: 'Subsidies',
                label: 'Incentives Available',
                desc: 'Recover investment in 3-5 years through government support.',
                icon: <Clock className="w-6 h-6 text-amber-500" />
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className="relative rounded-2xl bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 p-10 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 group overflow-hidden hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
              >
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500 text-amber-500">
                  {stat.icon}
                </div>
                <div className="space-y-4 relative z-10 flex flex-col h-full">
                  <h3 className="text-5xl font-bold text-white tracking-tight transition-colors group-hover:text-amber-400">{stat.value}</h3>
                  <p className="text-[10px] tracking-[0.3em] font-bold text-neutral-500 uppercase pt-2">{stat.label}</p>
                  <p className="text-neutral-400 opacity-80 leading-relaxed font-medium text-sm pt-4">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3️⃣ PACING IMAGE BLOCK */}
      <Section className="py-32 border-t border-white/5 relative z-10 bg-black/20">
        <Container className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 w-full group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors duration-700 z-10 pointer-events-none" />
            <Image
              src="/residential-lifestyle.jpeg"
              alt="Cinematic Residential View"
              width={1200}
              height={800}
              className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80"
            />
          </div>
        </Container>
      </Section>

      {/* 4️⃣ BUILT FOR ENERGY INDEPENDENCE SECTION */}
      <Section className="py-32 border-t border-white/5 bg-transparent relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div className="max-w-4xl mb-20 space-y-6">
            <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">THE METHODOLOGY</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              {["Built for Energy Independence.", "Designed for Modern Living."].map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                  className="block"
                >
                  {i === 0 ? (
                    <>
                      Built for <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.15 + 0.1 }}
                        className="text-amber-500"
                      >Energy Independence.</motion.span>
                    </>
                  ) : line}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10 w-full">
            {[
              {
                title: 'Architectural Integration',
                description: 'Seamless rooftop systems designed to complement modern residential architecture.',
                icon: <Layers className="w-6 h-6 text-amber-500" />
              },
              {
                title: 'Precision Engineering',
                description: 'Advanced load analysis and modeling ensure optimal output and structural safety.',
                icon: <Zap className="w-6 h-6 text-amber-500" />
              },
              {
                title: 'Premium Components',
                description: 'Global Tier-1 monocrystalline panels and inverters built for decades of usage.',
                icon: <ShieldCheck className="w-6 h-6 text-amber-500" />
              },
            ].map((card, i) => (
              <motion.div
                key={i}
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

      {/* 5️⃣ WHAT YOU GAIN SECTION */}
      <Section className="py-32 border-t border-white/5 bg-black/40">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr,3fr] gap-20 items-start">

            {/* Left: Editorial Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-12"
            >
              <h2 className="text-6xl lg:text-8xl font-bold text-white/[0.25] font-mono leading-[0.85] select-none tracking-tighter">
                What <br /> You <br /> Gain
              </h2>
              <div className="w-20 h-[2px] bg-amber-500" />
            </motion.div>

            {/* Right: Structured Benefits */}
            <div className="space-y-0 pt-16 lg:pt-0">
              {[
                {
                  title: 'Energy Independence',
                  description: 'Shield your home from grid outages and rising municipal electricity tariffs with self-generated power.',
                  icon: <Zap className="w-4 h-4 text-amber-500" />
                },
                {
                  title: 'Long-Term Savings',
                  description: 'Redirect your monthly expenditure toward long-term savings with a system that pays for itself.',
                  icon: <Clock className="w-4 h-4 text-amber-500" />
                },
                {
                  title: 'Property Appreciation',
                  description: 'Premium solar installations increase the market appeal and valuation of your residential property.',
                  icon: <Shield className="w-4 h-4 text-amber-500" />
                },
                {
                  title: 'Smart Monitoring',
                  description: 'Enjoy peace of mind with smart apps that track real-time energy production and performance.',
                  icon: <ShieldCheck className="w-4 h-4 text-amber-500" />
                },
              ].map((benefit, i) => (
                <div key={i} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                    className="group py-20 border-t border-white/[0.08] first:border-t-0 bg-transparent flex items-start gap-12"
                  >
                    <div className="pt-2 shrink-0">{benefit.icon}</div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-amber-500 transition-colors uppercase">{benefit.title}</h3>
                      <p className="text-neutral-400 opacity-80 font-medium text-lg leading-relaxed max-w-xl">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 6️⃣ RESIDENTIAL INTEGRATION PROCESS */}
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
              Residential <span className="text-amber-500">Integration</span> Process
            </h2>
          </motion.div>

          <div className="space-y-32 lg:space-y-48 relative z-10">
            {[
              {
                step: '01',
                title: 'Site Assessment',
                text: 'On-site structural review, shading analysis, and energy profiling to determine optimal system placement.',
                img: '/residential-assessment.jpeg'
              },
              {
                step: '02',
                title: 'System Engineering',
                text: 'Precision system layout, inverter configuration, and compliance planning tailored to your property.',
                img: '/engineering.jpeg'
              },
              {
                step: '03',
                title: 'Installation',
                text: 'Clean, efficient installation with minimal disruption and seamless architectural integration.',
                img: '/residential-installation.jpeg'
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
                    {/* Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={800}
                        height={600}
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

      {/* 7️⃣ TRUSTED BY ARCHITECTS & OWNERS */}
      <Section className="py-32 border-t border-white/5 bg-black/20">
        <Container className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20 space-y-6"
          >
            <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">TESTIMONIALS</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Trusted by <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-amber-500"
              >Architects & Owners</motion.span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className="relative rounded-2xl bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 p-10 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 group overflow-hidden hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute inset-0 border border-amber-500/20 rounded-2xl" />
                </div>
                <div className="flex gap-1.5 relative z-10">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-neutral-400 opacity-80 font-medium text-lg leading-relaxed flex-1 italic mt-8 relative z-10">
                  &quot;Choosing Solane was the best decision for our new home. The integration is so seamless that people don&apos;t realize we have solar until we tell them.&quot;
                </p>
                <div className="pt-8 mt-8 border-t border-white/10 relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">Resident — North Delhi</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8️⃣ SUPPORT / FAQ */}
      <Section className="py-32 border-t border-white/5 bg-transparent">
        <Container className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-20 text-left space-y-6"
          >
            <span className="text-[10px] tracking-[0.4em] text-amber-500 font-bold uppercase block">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">Support</h2>
          </motion.div>

          <div className="space-y-2">
            {[
              { q: 'How long does installation take?', a: 'Typically, the physical installation takes 3 to 5 days, while the entire process including approvals takes 60 to 90 days.' },
              { q: 'What is the average payback period?', a: 'Most residential systems recover their initial investment within 3 to 5 years through electricity bill savings.' },
              { q: 'Do you assist with government subsidies?', a: 'Yes, we handle all documentation and coordination required for central government solar subsidies.' },
              { q: 'What happens during power outages?', a: 'Standard grid-tied systems shut down during outages. We offer hybrid solutions with battery storage for uninterrupted power.' },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * i * 0.05, duration: 0.6 }}
                className="border-t border-white/5"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-10 text-left group transition-all"
                >
                  <h4 className={cn("text-xl font-medium transition-colors", openFaq === i ? "text-amber-500" : "text-white group-hover:text-amber-500")}>
                    {faq.q}
                  </h4>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={cn("p-2", openFaq === i ? "text-amber-500" : "text-neutral-600 group-hover:text-white")}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-neutral-500 text-lg leading-1.6 pb-12 max-w-2xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9️⃣ FINAL CTA SECTION */}
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
                Ready to Power Your Home with <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-amber-500"
                >Confidence?</motion.span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-neutral-400 opacity-80 text-lg lg:text-2xl max-w-2xl mx-auto font-medium leading-relaxed pt-6"
            >
              Book a personalized assessment and receive a structured savings projection for your property.
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
                  Request Assessment
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
              25-Year Performance Warranty Included
            </motion.p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
