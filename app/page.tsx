'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-[#0f0f10] text-neutral-100">
      {/* SECTION 1 — HERO */}
      <Section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden">
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase">
              POWERING MODERN INDIA
            </span>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              Own Your Energy. <br />
              Eliminate Electricity Bills for Good.
            </h1>
            <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Rising power tariffs are draining your income. Solane designs architect-integrated solar systems that reduce up to 80% of grid dependency within 60 to 90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full border-none">
                  Get Your Free Solar Assessment
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="secondary" size="lg" className="border border-neutral-800 hover:bg-neutral-800 text-white px-8 py-4 rounded-full">
                  View Real Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* SECTION 2 — TRUST STRIP */}
      <div className="border-t border-neutral-800 py-16">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: '500+', sublabel: 'Successful Installations' },
              { label: '25-Year', sublabel: 'Performance Warranty' },
              { label: '50MW', sublabel: 'Total Capacity Delivered' },
              { label: 'Pan-India', sublabel: 'Engineering & Execution' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <p className="text-3xl lg:text-4xl font-semibold text-white">{item.label}</p>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold max-w-[150px] mx-auto">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* NEW SECTION — WHY PROPERTY OWNERS CHOOSE SOLANE */}
      <Section className="py-24 border-t border-neutral-900">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white/90">Why Property Owners Choose Solane</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              {[
                "Reduce electricity costs by up to 80%",
                "Recover investment within 3 to 5 years",
                "Generate predictable power for 25+ years"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-neutral-400">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm lg:text-base font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — WHY SOLANE REFINED */}
      <Section className="py-24 bg-neutral-950/50">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Engineered for Performance. Designed for Permanence.</h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We do not install generic solar packages. Every Solane system is precision-engineered for your property’s structure, energy load, and long-term financial return.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 border border-neutral-800 rounded-xl hover:border-amber-500 transition-all duration-300 bg-neutral-900/40"
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm lg:text-base">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — RESIDENTIAL & COMMERCIAL SPLIT */}
      <Section className="py-24">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Residential */}
            <Link href="/residential" className="block group">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[420px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src="https://picsum.photos/seed/res-solar/1200/800"
                  alt="Residential Solar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="max-w-[70%]">
                    <h3 className="text-2xl font-semibold mb-2 text-white uppercase tracking-tight">Residential Solar</h3>
                    <p className="text-neutral-300 text-sm">Premium rooftop systems tailored for luxury homes seeking independence and long-term savings.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full flex items-center gap-2 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-300">
                    <span className="text-sm font-semibold whitespace-nowrap">Explore Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Commercial */}
            <Link href="/commercial" className="block group">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[420px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src="https://picsum.photos/seed/com-solar/1200/800"
                  alt="Commercial Solar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="max-w-[70%]">
                    <h3 className="text-2xl font-semibold mb-2 text-white uppercase tracking-tight">Commercial Solar</h3>
                    <p className="text-neutral-300 text-sm">Scalable solar infrastructure that reduces operational costs and protects business margins.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full flex items-center gap-2 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-300">
                    <span className="text-sm font-semibold whitespace-nowrap">Explore Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — PROCESS REFINED */}
      <Section className="py-24 bg-neutral-950/50">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">The Path to Energy Independence</h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              A structured three-stage process built around precision, performance, and long-term reliability.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {[
              {
                step: '01',
                title: 'Consultation',
                text: 'We analyze your consumption patterns, rooftop structure, and financial goals to design a system aligned with your vision.'
              },
              {
                step: '02',
                title: 'Engineering',
                text: 'Our engineers create a high-performance system using advanced modeling to maximize output and durability.'
              },
              {
                step: '03',
                title: 'Installation',
                text: 'Certified specialists execute installation with structural precision and full compliance support.'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <span className="text-6xl font-bold text-neutral-800/40 font-mono tracking-tighter leading-none">{item.step}</span>
                  <h3 className="text-2xl lg:text-3xl font-semibold uppercase tracking-tight">{item.title}</h3>
                  <p className="text-neutral-400 text-base lg:text-lg leading-relaxed max-w-xl">
                    {item.text}
                  </p>
                </div>
                <div className="h-[300px] lg:h-[380px] bg-neutral-900 rounded-2xl overflow-hidden relative">
                  <Image
                    src={`https://picsum.photos/seed/process-${i}/800/600`}
                    alt={item.title}
                    fill
                    className="object-cover opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — FINAL CTA REFINED */}
      <Section className="py-24">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">Ready to Take Control of Your Energy Costs?</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Join hundreds of property owners who have transitioned to predictable, self-generated power with Solane.
            </p>

            <div className="space-y-6">
              <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-neutral-900 border border-neutral-800 rounded-lg px-6 py-4 focus:border-amber-500 focus:outline-hidden text-neutral-200 transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-neutral-900 border border-neutral-800 rounded-lg px-6 py-4 focus:border-amber-500 focus:outline-hidden text-neutral-200 transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-neutral-900 border border-neutral-800 rounded-lg px-6 py-4 focus:border-amber-500 focus:outline-hidden text-neutral-200 transition-colors"
                  required
                />
                <div className="md:col-span-3 pt-4">
                  <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 rounded-lg border-none">
                    Request Your Free Assessment
                  </Button>
                </div>
              </form>
              <p className="text-neutral-600 text-[10px] tracking-[0.2em] uppercase font-bold text-center">25-Year Performance Warranty Included</p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
