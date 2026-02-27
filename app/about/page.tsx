'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ShieldCheck, Zap, Users, Leaf, Globe, Search, Heart, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-[#0f0f10] text-neutral-100">
      {/* 1️⃣ HERO SECTION */}
      <Section className="pt-32 pb-32 lg:pt-48 text-center">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase block">
              ABOUT SOLANE
            </span>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              Powering a Brighter, <br /> Cleaner Tomorrow
            </h1>
            <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              At Solane, we see the sun not just as a resource, but as the most powerful renewable asset available. Our mission is to harness that energy and engineer systems that deliver measurable savings, long-term reliability, and energy independence.
            </p>
          </div>
          <div className="w-full h-[300px] lg:h-[500px] bg-neutral-800 rounded-2xl mt-12 relative overflow-hidden shadow-2xl">
            {/* Image Placeholder */}
          </div>
        </Container>
      </Section>

      {/* 2️⃣ OUR STORY */}
      <Section className="py-28 border-t border-neutral-900">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="w-full h-[300px] lg:h-[520px] bg-neutral-800 rounded-2xl shadow-xl relative overflow-hidden border border-neutral-800">
              {/* Image Placeholder */}
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight">Our Story</h2>
              <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                <p>
                  Solane was founded in response to rising energy costs and growing environmental concerns. A team of engineers and energy specialists came together with one clear objective — to make solar energy accessible, high-performing, and financially intelligent.
                </p>
                <p>
                  From humble beginnings, Solane has grown into a full-service solar infrastructure company serving homes, businesses, and industrial facilities. Every project reflects our commitment to precision, quality, and long-term sustainability.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3️⃣ WHAT WE DO */}
      <Section className="py-28 bg-neutral-950/50">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
            <h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight">What We Do</h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Solane provides end-to-end solar energy solutions tailored to each property. From energy assessment and system design to installation, activation, and long-term monitoring, we manage the complete lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Residential Solar Installations",
              "Commercial Solar Systems",
              "Solar Battery Storage Solutions",
              "Energy Monitoring & Management",
              "Ongoing Maintenance & Support"
            ].map((service, i) => (
              <div
                key={i}
                className={`p-10 border border-neutral-800 rounded-xl bg-neutral-900/40 hover:border-amber-500 transition-colors group ${i === 4 ? 'lg:col-span-1 md:col-span-2' : ''}`}
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-amber-500 transition-colors">{service}</h3>
                <div className="mt-4 w-10 h-1 bg-neutral-800 group-hover:bg-amber-500/50 transition-colors" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4️⃣ WHY CHOOSE SOLANE */}
      <Section className="py-28">
        <Container className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight mb-20 text-center">Why Choose Solane</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: 'People First',
                description: 'We take time to understand your energy goals, budget, and property before recommending solutions.',
                icon: <Users className="w-6 h-6 text-amber-500" />
              },
              {
                title: 'Certified Quality',
                description: 'We use industry-leading Tier-1 solar technology and certified components for decades of performance.',
                icon: <ShieldCheck className="w-6 h-6 text-amber-500" />
              },
              {
                title: 'Process Simplicity',
                description: 'We handle approvals, permits, financing coordination, and installation seamlessly.',
                icon: <Zap className="w-6 h-6 text-amber-500" />
              },
              {
                title: 'Long-Term Partnership',
                description: 'Ongoing monitoring and support ensure your system performs year after year.',
                icon: <Heart className="w-6 h-6 text-amber-500" />
              }
            ].map((card, i) => (
              <div key={i} className="p-8 lg:p-10 border border-neutral-800 rounded-2xl bg-neutral-900/20 flex gap-8 group hover:border-amber-500 transition-all duration-300">
                <div className="shrink-0 pt-1">{card.icon}</div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-sm lg:text-base">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5️⃣ MISSION & VISION */}
      <Section className="py-28 border-y border-neutral-900 bg-neutral-950/30">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-0 relative">
            <div className="lg:pr-20 space-y-8">
              <h3 className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase">Mission</h3>
              <p className="text-2xl lg:text-3xl font-semibold text-white leading-tight">
                To accelerate the transition to renewable energy by delivering reliable, high-performance solar infrastructure that empowers individuals and businesses to take control of their energy future.
              </p>
            </div>

            <div className="lg:pl-12 lg:border-l lg:border-neutral-800 space-y-8">
              <h3 className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase">Vision</h3>
              <p className="text-2xl lg:text-3xl font-semibold text-white leading-tight">
                A world where every rooftop generates clean energy and energy independence becomes the standard, not the exception.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6️⃣ CORE VALUES */}
      <Section className="py-32">
        <Container className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight mb-20 text-center">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Sustainability", icon: <Leaf className="w-5 h-5 text-amber-500" /> },
              { name: "Integrity", icon: <ShieldCheck className="w-5 h-5 text-amber-500" /> },
              { name: "Innovation", icon: <Zap className="w-5 h-5 text-amber-500" /> },
              { name: "Customer Commitment", icon: <Heart className="w-5 h-5 text-amber-500" /> },
              { name: "Community", icon: <Globe className="w-5 h-5 text-amber-500" /> }
            ].map((value, i) => (
              <div key={i} className="rounded-xl border border-neutral-800 p-8 text-center space-y-4 bg-neutral-900/10 hover:border-amber-500 transition-colors">
                <div className="mx-auto w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-2">
                  {value.icon}
                </div>
                <h4 className="text-white font-medium tracking-tight text-sm lg:text-base">{value.name}</h4>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7️⃣ BY THE NUMBERS */}
      <Section className="py-28 bg-neutral-950/50 border-y border-neutral-900">
        <Container className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight text-center">By the Numbers</h2>
          <div className="w-full h-[1px] bg-neutral-900 mt-16 mb-16" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-center">
            {[
              { val: '500+', label: 'Solar Systems Installed' },
              { val: '400+', label: 'Happy Homeowners' },
              { val: '100+', label: 'Business Partners' },
              { val: 'Thousands', label: 'Tons of CO₂ Saved' },
              { val: 'Millions', label: 'In Electricity Savings' }
            ].map((num, i) => (
              <div key={i} className="space-y-3">
                <p className="text-4xl lg:text-5xl font-semibold text-white">{num.val}</p>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold leading-relaxed">{num.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8️⃣ OUR TEAM */}
      <Section className="py-28">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
            <h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight">Our Team</h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Solane is powered by certified engineers, energy consultants, and renewable specialists with decades of combined expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Arjun Mehta', role: 'Chief Engineering Officer', desc: 'Expert in MW-scale industrial solar design and structural stability.' },
              { name: 'Suhail Khan', role: 'Renewables Specialist', desc: 'Focuses on architectural integration and battery storage efficiency.' },
              { name: 'Deepika Rao', role: 'Energy Consultant', desc: 'Specialist in financial ROI modeling and DISCOM compliance.' }
            ].map((member, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-full h-[320px] lg:h-[360px] bg-neutral-800 rounded-2xl overflow-hidden relative shadow-lg border border-neutral-800">
                  {/* Placeholder */}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                  <p className="text-amber-500 text-sm font-bold tracking-widest uppercase">{member.role}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed pt-2">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9️⃣ FINAL CTA */}
      <Section className="py-32 bg-neutral-950/30">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto p-12 lg:p-24 border border-neutral-800 rounded-[3rem] bg-neutral-900/10 text-center space-y-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">Join the Solar Transition</h2>
            <p className="text-neutral-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Whether you're installing your first system or upgrading existing infrastructure, Solane is ready to engineer your energy independence.
            </p>

            <div className="pt-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-10 py-5 rounded-full border-none text-lg">
                Request a Free Energy Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
