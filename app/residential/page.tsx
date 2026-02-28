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
  Star,
  Clock,
  Shield
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
    <main className="bg-[#0f0f10] text-neutral-100 selection:bg-amber-500/30">

      {/* 1️⃣ HERO SECTION */}
      <Section className="relative pt-48 pb-56 overflow-hidden">
        <Container className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-10"
            >
              <motion.span
                variants={fadeUpVariant(20, 0.6)}
                className="text-amber-500 font-bold tracking-[0.3em] text-[10px] uppercase block"
              >
                RESIDENTIAL SOLAR ENGINEERING
              </motion.span>

              <motion.h1
                className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white"
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                  className="block"
                >
                  Solar Systems
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                  className="block"
                >
                  Designed for <span className="text-amber-500">Modern</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className="block"
                >
                  Homes.
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-[540px]"
              >
                Rising electricity costs should not compromise your lifestyle. Solane designs architect-integrated rooftop solar systems that reduce up to 80% of grid dependency while enhancing your home&apos;s value.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-8 pt-6"
              >
                <MagneticButton>
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-12 py-7 rounded-full border-none text-base shadow-xl shadow-amber-500/10 transition-all hover:-translate-y-[4px]">
                    Request Assessment
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="secondary" size="lg" className="border border-white/20 hover:border-white/40 text-white px-12 py-7 rounded-full text-base transition-all hover:bg-white/5">
                    View Projects
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
                src="https://picsum.photos/seed/reshero/1200/1500"
                alt="Modern Residential Solar"
                fill
                className="object-cover opacity-90 transition-transform duration-[800ms] ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 2️⃣ WHY PROPERTY OWNERS ARE CHOOSING ENERGY INDEPENDENCE */}
      <Section className="py-44 border-t border-white/5">
        <Container className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-24"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-white -tracking-tight">
              Why Property Owners Are <br />
              Choosing <span className="text-amber-500">Energy Independence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                value: '80%',
                label: 'Monthly Savings',
                desc: 'Reduce electricity bills by up to 80% with precision design.',
                icon: <Zap className="w-5 h-5 text-amber-500" />
              },
              {
                value: '25+ Years',
                label: 'Performance Asset',
                desc: 'Predicatable power generation with Tier-1 components.',
                icon: <ShieldCheck className="w-5 h-5 text-amber-500" />
              },
              {
                value: 'Subsidies',
                label: 'Incentives Available',
                desc: 'Recover investment in 3-5 years through government support.',
                icon: <Clock className="w-5 h-5 text-amber-500" />
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="electric-border p-12 group shadow-lg transition-shadow duration-300 hover:shadow-black/60"
              >
                <div className="mb-8 p-3 w-fit rounded-full bg-amber-500/5 group-hover:scale-[1.05] transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-6xl font-semibold text-white tracking-tighter transition-colors group-hover:text-white/100">{stat.value}</h3>
                  <p className="text-xs uppercase tracking-[0.25em] font-bold text-neutral-600 uppercase pt-2">{stat.label}</p>
                  <p className="text-neutral-500 leading-relaxed text-sm pt-4 max-w-[240px]">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3️⃣ PACING IMAGE BLOCK */}
      <Section className="py-24 overflow-hidden">
        <Container className="max-w-6xl mx-auto px-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-[85%] max-h-[480px] aspect-[21/9] rounded-[16px] overflow-hidden border border-white/5 group shadow-2xl mx-auto"
          >
            <Image
              src="https://picsum.photos/seed/rescinematic/1920/1080"
              alt="Cinematic Residential View"
              fill
              className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.02] opacity-80"
            />
            <div className="absolute inset-0 bg-black/15 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none" />
          </motion.div>
        </Container>
      </Section>

      {/* 4️⃣ BUILT FOR ENERGY INDEPENDENCE SECTION */}
      <Section className="py-44 border-b border-white/5 bg-white/[0.01]">
        <Container className="max-w-6xl mx-auto px-6">
          <motion.div className="max-w-3xl mb-24">
            <h2 className="text-3xl lg:text-5xl font-semibold text-white -tracking-tight leading-tight">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                whileHover={{ y: -6 }}
                className="electric-border p-12 flex flex-col items-start gap-10 group h-full shadow-lg transition-shadow duration-300 hover:shadow-black/60"
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

      {/* 5️⃣ WHAT YOU GAIN SECTION */}
      <Section className="py-32 border-t border-white/5">
        <Container className="max-w-6xl mx-auto px-6">
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
                    <div className="space-y-5">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-amber-500 transition-colors uppercase">{benefit.title}</h3>
                      <p className="text-neutral-500 text-lg leading-relaxed max-w-xl">
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
      <Section className="py-44 bg-white/[0.01]">
        <Container className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-32"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold text-white -tracking-tight">Residential <span className="text-amber-500">Integration</span> Process</h2>
            <div className="w-20 h-px bg-amber-500/50 mt-10" />
          </motion.div>

          <div className="space-y-64">
            {[
              {
                step: '01',
                title: 'Site Assessment',
                text: 'We evaluate rooftop structure, energy load, and shading conditions using advanced site assessment tools and precision modelling.'
              },
              {
                step: '02',
                title: 'System Design',
                text: 'Custom engineering based on your property and savings goals. We provide detailed layouts integrated with home architecture.'
              },
              {
                step: '03',
                title: 'Installation',
                text: 'Certified installation by specialists, complete net metering setup, and full system activation with performance support.'
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
                      whileInView={{ opacity: 0.05 }}
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
                    src={`https://picsum.photos/seed/process-${i}/1200/800`}
                    alt={item.title}
                    fill
                    className="object-cover opacity-70 grayscale transition-all duration-[800ms] ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/8 pointer-events-none" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7️⃣ TRUSTED BY ARCHITECTS & OWNERS */}
      <Section className="py-56 border-t border-white/5">
        <Container className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-36"
          >
            <h2 className="text-4xl lg:text-6xl font-semibold mb-8 text-white -tracking-tight">
              Trusted by <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-amber-500"
              >Architects & Owners</motion.span>
            </h2>
            <p className="text-neutral-500 text-lg lg:text-2xl leading-relaxed italic tracking-tight">Quiet excellence in energy independence.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="bg-white/[0.02] rounded-[16px] p-14 space-y-12 flex flex-col transition-all duration-300 group shadow-lg hover:shadow-black/40"
              >
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-2.5 h-2.5 text-amber-500/60 fill-amber-500/60" />
                  ))}
                </div>
                <p className="text-neutral-400 text-lg leading-1.8 flex-1 italic">
                  &quot;Choosing Solane was the best decision for our new home. The integration is so seamless that people don&apos;t realize we have solar until we tell them.&quot;
                </p>
                <div className="pt-10 border-t border-white/5">
                  <p className="text-white text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-600">Resident — North Delhi</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8️⃣ SUPPORT / FAQ */}
      <Section className="py-44 bg-white/[0.01]">
        <Container className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-24 text-left"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold text-white -tracking-tight mb-8">Support</h2>
            <div className="w-12 h-px bg-amber-500/40" />
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
      <Section className="py-56 relative overflow-hidden">
        <Container className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-[5rem] font-semibold tracking-tight text-white leading-[1.05]"
            >
              Ready to Power Your Home with <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-amber-500"
              >Confidence?</motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-neutral-500 text-lg lg:text-xl max-w-xl mx-auto leading-relaxed"
            >
              Book a personalized assessment and receive a structured savings projection for your property.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex justify-center pt-8"
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
