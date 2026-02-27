'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ShieldCheck, Zap, Layers, ArrowRight, Plus } from 'lucide-react';

export default function ResidentialSolar() {
  return (
    <main className="bg-[#0f0f10] text-neutral-100">
      {/* SECTION 1 — HERO */}
      <Section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden">
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase">
                RESIDENTIAL SOLAR
              </span>
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                Solar Systems Designed for Modern Homes
              </h1>
              <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed">
                Rising electricity costs should not compromise your lifestyle. Solane designs architect-integrated rooftop solar systems that reduce up to 80% of grid dependency while enhancing your home’s value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-5 rounded-full border-none text-base">
                  Request Residential Consultation
                </Button>
                <Button variant="secondary" size="lg" className="border border-neutral-800 hover:bg-neutral-800 text-white px-10 py-5 rounded-full text-base">
                  View Projects
                </Button>
              </div>
            </div>
            <div className="w-full h-[300px] lg:h-[560px] bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — PROBLEM + OUTCOME */}
      <Section className="py-24 border-t border-neutral-900">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">Why Homeowners Are Switching to Solar</h2>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
                Electricity tariffs rise every year. Grid outages remain unpredictable. Premium homeowners are choosing energy independence to protect their wealth and lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {[
                "Reduce monthly electricity bills by up to 80%",
                "Recover your investment in 3 to 5 years",
                "Generate predictable power for 25+ years"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4 text-neutral-300 p-4 border border-neutral-800 rounded-lg bg-neutral-900/30">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  </div>
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[300px] lg:h-[420px] bg-neutral-800 rounded-2xl overflow-hidden shadow-xl relative">
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — WHAT MAKES SOLANE DIFFERENT */}
      <Section className="py-24 bg-neutral-950/50">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-full h-[300px] lg:h-[500px] bg-neutral-800 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="space-y-12 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white">Not Just Solar Panels. Engineered Energy Assets.</h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Architectural Integration',
                    description: 'Seamless rooftop systems designed to complement modern residential architecture.',
                    icon: <Layers className="w-6 h-6 text-amber-500" />
                  },
                  {
                    title: 'Precision Engineering',
                    description: 'Advanced load analysis and modeling ensure optimal output and long-term performance.',
                    icon: <Zap className="w-6 h-6 text-amber-500" />
                  },
                  {
                    title: 'Premium Components',
                    description: 'Tier-1 monocrystalline panels and world-class inverters backed by 25-year warranty.',
                    icon: <ShieldCheck className="w-6 h-6 text-amber-500" />
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="p-8 border border-neutral-800 rounded-2xl bg-neutral-900/40 hover:border-amber-500/50 transition-colors duration-300 flex gap-8"
                  >
                    <div className="shrink-0 pt-1">{card.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                      <p className="text-neutral-500 leading-relaxed text-sm md:text-base">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — SYSTEM BENEFITS GRID */}
      <Section className="py-24">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">What You Gain</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {[
              {
                title: 'Energy Independence',
                description: 'Shield your home from unpredictable grid outages and rising municipal electricity tariffs with self-generated power.'
              },
              {
                title: 'Long-Term Savings',
                description: 'Redirect your monthly electricity expenditure toward long-term savings or property enhancements with a system that pays for itself.'
              },
              {
                title: 'Property Value Appreciation',
                description: 'Premium solar installations are viewed as high-value assets that increase the market appeal and valuation of your property.'
              },
              {
                title: 'Low Maintenance & Smart Monitoring',
                description: 'Enjoy peace of mind with smart apps that track energy production and a system designed for minimal maintenance overhead.'
              },
            ].map((benefit, i) => (
              <div key={i} className="space-y-4 py-10 border-t border-neutral-800">
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="text-neutral-500 text-sm lg:text-base leading-relaxed max-w-xl">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 5 — INSTALLATION PROCESS */}
      <Section className="py-24 bg-neutral-950/50">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-32">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Our Residential Installation Process</h2>
          </div>

          <div className="space-y-32">
            {[
              {
                step: '01',
                title: 'Site Assessment',
                text: 'We evaluate rooftop structure, energy load, and shading conditions using advanced site assessment tools.'
              },
              {
                step: '02',
                title: 'System Design',
                text: 'Custom engineering based on your property and savings goals. We provide detailed layouts and production forecasts.'
              },
              {
                step: '03',
                title: 'Installation & Activation',
                text: 'Certified installation by specialists, complete net metering setup, and full system activation.'
              },
            ].map((item, i) => (
              <div
                key={i}
                className="grid lg:grid-cols-2 gap-16 items-center relative"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative z-10 space-y-6">
                    <span className="absolute -top-16 -left-4 text-8xl font-bold text-neutral-800/10 font-mono tracking-tighter leading-none select-none -z-10">{item.step}</span>
                    <h3 className="text-2xl lg:text-4xl font-semibold uppercase tracking-tight">{item.title}</h3>
                    <p className="text-neutral-400 text-base lg:text-xl leading-relaxed max-w-2xl">
                      {item.text}
                    </p>
                  </div>
                </div>
                <div className={`w-full h-[320px] lg:h-[400px] bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* BEFORE FINAL CTA — TESTIMONIALS */}
      <Section className="py-32 border-t border-neutral-900">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Trusted by Homeowners Across India</h2>
            <p className="text-neutral-500 text-lg">Real stories of energy independence and architectural excellence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 space-y-8 flex flex-col hover:border-neutral-700 transition-colors">
                <div className="w-full h-[200px] bg-neutral-800 rounded-xl overflow-hidden relative shadow-lg">
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Zap key={s} className="w-3 h-3 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-neutral-300 text-sm md:text-base italic leading-relaxed">
                      &quot;Choosing Solane was the best decision for our new home. The architectural integration is so seamless that people don&apos;t even realize we have solar until we tell them.&quot;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-neutral-800">
                    <p className="text-white text-xs font-bold uppercase tracking-widest">— Resident, North Delhi</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — FAQ SECTION */}
      <Section className="py-24 bg-neutral-950/30">
        <Container className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How long does installation take?', a: 'Typically, the physical installation takes 3 to 5 days, while the entire process including net-metering approvals takes 60 to 90 days.' },
              { q: 'What is the average payback period?', a: 'Most residential systems recover their initial investment within 3 to 5 years through electricity bill savings.' },
              { q: 'Do you assist with government subsidies?', a: 'Yes, we handle all documentation and coordination required for state and central government solar subsidies.' },
              { q: 'What happens during power outages?', a: 'Standard grid-tied systems shut down during outages for safety. We also offer battery-backed hybrid systems for continued indoor power.' },
            ].map((faq, i) => (
              <div key={i} className="border border-neutral-800 p-8 rounded-2xl space-y-4 bg-neutral-900/10">
                <div className="flex justify-between items-center cursor-pointer group">
                  <h4 className="text-lg md:text-xl font-medium text-white group-hover:text-amber-500 transition-colors">{faq.q}</h4>
                  <Plus className="w-5 h-5 text-amber-500 shrink-0" />
                </div>
                <p className="text-neutral-500 text-sm md:text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — FINAL CTA */}
      <Section className="py-28">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto p-16 lg:p-24 border border-neutral-800 rounded-[3rem] bg-neutral-950/40 text-center space-y-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight">Ready to Power Your Home with Confidence?</h2>
              <p className="text-neutral-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                Book a personalized consultation and receive a detailed savings projection for your property.
              </p>
            </div>

            <div className="space-y-8">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-16 py-6 rounded-full border-none text-lg shadow-xl shadow-amber-500/10">
                Get Free Residential Assessment
              </Button>
              <p className="text-neutral-600 text-[10px] tracking-[0.2em] uppercase font-bold">Backed by 25-Year Performance Warranty</p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
