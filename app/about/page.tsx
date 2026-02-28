'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Users, Leaf, Globe, Search, Heart, Award } from 'lucide-react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';

function Counter({ value, decimals = 0, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (latest: number) => setDisplayValue(latest)
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span>{prefix}{displayValue.toFixed(decimals)}{suffix}</span>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-[#0f0f10] text-neutral-100">
      {/* 1️⃣ HERO SECTION */}
      <Section className="relative pt-48 pb-40 lg:pt-72 lg:pb-56 overflow-hidden border-b border-white/[0.03]">
        {/* Background Depth */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.03),transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-20">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-amber-500 font-bold tracking-[0.4em] text-[10px] uppercase block"
            >
              ABOUT SOLANE
            </motion.span>

            <div className="overflow-hidden space-y-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl lg:text-[84px] font-semibold tracking-tight leading-[1.2] text-white"
              >
                <div className="inline-block">
                  Engineering Energy
                </div>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                  className="text-amber-500"
                >
                  Independence
                </motion.span>
                {" At Scale."}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="text-neutral-400 text-lg lg:text-xl leading-[1.8] max-w-[560px] opacity-80"
              >
                Solane is an infrastructure-first energy company. We see the sun as a strategic renewable asset, and we engineer the systems required to harness it with precision to ensure <span className="text-amber-500/80">energy independence</span> and <span className="text-amber-500/80">long-term performance</span>.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="w-full h-[300px] lg:h-[500px] bg-neutral-900 border border-white/[0.05] rounded-[16px] mt-40 relative overflow-hidden shadow-2xl"
          >
            {/* Image Placeholder - Grayscale Architectural Shot */}
            <div className="absolute inset-0 bg-[url('/api/placeholder/1200/600')] bg-cover bg-center grayscale opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          </motion.div>
        </Container>
      </Section>

      {/* 2️⃣ OUR STORY */}
      <Section className="py-40 lg:py-64">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-40 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-[400px] lg:h-[680px] bg-neutral-900 rounded-[16px] shadow-xl relative overflow-hidden border border-white/[0.05]"
            >
              <div className="absolute inset-0 bg-[url('/api/placeholder/600/800')] bg-cover bg-center grayscale opacity-30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-24"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-8"
              >
                <h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight">Our Story</h2>
                <div className="w-10 h-0.5 bg-amber-500/30" />
                <div className="w-[40px] h-0.5 bg-amber-500" />
              </motion.div>

              <div className="space-y-32">
                {[
                  { title: "Founded With Purpose", content: "Solane was established to bridge the gap between complex energy requirements and <span class='text-amber-500/70'>engineered solar infrastructure</span>. We moved beyond simple installations to focus on strategic energy infrastructure." },
                  { title: "Built With Precision", content: "Accountability is woven into our process. By combining tier-1 hardware with proprietary installation standards, we've automated reliability across every residential and commercial project, ensuring <span class='text-amber-500/70'>measurable performance</span>." },
                  { title: "Growing With Responsibility", content: "Today, Solane stands as a trust anchor in the renewable sector. We don't just sell solar; we manage <span class='text-amber-500/70'>long-term responsibility</span> of energy assets for property owners who prioritize permanence." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 * (i + 1) }}
                    className="space-y-6"
                  >
                    <h3 className="text-amber-500 font-bold tracking-[0.2em] text-[10px] uppercase">{item.title}</h3>
                    <p className="text-neutral-400 text-lg lg:text-xl leading-[1.8] opacity-80 max-w-[560px]" dangerouslySetInnerHTML={{ __html: item.content }} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 3️⃣ WHAT WE DO */}
      <Section className="py-48 lg:py-72 bg-white/[0.01] border-t border-white/[0.03]">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="space-y-36">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl lg:text-6xl font-semibold text-white tracking-tight mb-10"
              >
                What We Do
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-neutral-400 text-lg lg:text-xl leading-relaxed opacity-80 max-w-[600px]"
              >
                Solane operates as an end-to-end infrastructure provider. We manage the entire lifecycle of solar assets, from technical modeling to lifetime maintenance.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Residential Solar", icon: <Leaf className="w-5 h-5 text-amber-500" />, desc: "Technical solar integration for modern luxury <span class='text-amber-500/70'>homes</span>." },
                { title: "Commercial Systems", icon: <Award className="w-5 h-5 text-amber-500" />, desc: "MW-scale infrastructure for industrial <span class='text-amber-500/70'>enterprise</span> growth." },
                { title: "Energy Storage", icon: <Zap className="w-5 h-5 text-amber-500" />, desc: "High-density battery networks for total <span class='text-amber-500/70'>resilience</span>." }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                  className="electric-border p-16 group min-h-[320px] flex flex-col justify-between"
                >
                  <div className="space-y-10 relative z-10">
                    <div className="w-10 h-10 rounded-[10px] bg-neutral-900 border border-white/[0.03] flex items-center justify-center transition-colors">
                      <div className="opacity-50 group-hover:opacity-90 transition-opacity">
                        {service.icon}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-3xl font-semibold text-white tracking-tight">{service.title}</h3>
                      <p className="text-neutral-500 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: service.desc }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4️⃣ WHY CHOOSE SOLANE */}
      <Section className="py-[120px] border-t border-white/[0.03]">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="mb-24 lg:mb-32 space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber-500 font-bold tracking-[0.5em] text-[10px] uppercase"
            >
              WHY SOLANE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-semibold text-white tracking-tight"
            >
              Engineered Standards. <br />
              Proven Execution.
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Client-Centric Execution',
                description: 'We align our engineering with your specific structural goals and long-term financial roadmap.',
                icon: <Users className="w-4 h-4 text-amber-500" />
              },
              {
                title: 'Engineered & Certified',
                description: 'Proprietary installation protocols combined with tier-1 technology standards for predictable yields.',
                icon: <ShieldCheck className="w-4 h-4 text-amber-500" />
              },
              {
                title: 'Structured Project Delivery',
                description: 'From technical assessment to DISCOM commissioning, we execute the roadmap with zero friction.',
                icon: <Zap className="w-4 h-4 text-amber-500" />
              },
              {
                title: 'Lifetime Asset Stewardship',
                description: 'Our engagement continues for 25+ years, ensuring the asset performs to modeled expectations.',
                icon: <Globe className="w-4 h-4 text-amber-500" />
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                className="electric-border p-12 group flex flex-col min-h-[300px]"
              >
                <div className="space-y-12 relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-[12px] bg-neutral-900 border border-white/[0.03] flex items-center justify-center transition-colors">
                    <div className="opacity-40 group-hover:opacity-70 transition-opacity">
                      {card.icon}
                    </div>
                  </div>
                  <div className="mt-auto space-y-4">
                    <h3 className="text-xl font-semibold text-white leading-tight tracking-tight min-h-[3rem]">{card.title}</h3>
                    <p className="text-neutral-500 leading-relaxed text-sm opacity-85 max-w-[280px] line-clamp-3">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5️⃣ MISSION & VISION */}
      <Section className="py-[120px] border-y border-white/[0.02] bg-white/[0.005]">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-40 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h3 className="text-amber-500 font-extrabold tracking-[0.5em] text-[11px] uppercase">Mission</h3>
                <div className="w-10 h-0.5 bg-amber-500/50" />
              </div>
              <p className="text-4xl lg:text-[44px] font-semibold text-white leading-[1.25] tracking-tight max-w-[720px]">
                To accelerate the transition to renewable energy by delivering <span className="text-amber-500/80">reliable, high-performance solar infrastructure</span> that empowers individuals and businesses to take control of their energy future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h3 className="text-amber-500 font-extrabold tracking-[0.5em] text-[11px] uppercase">Vision</h3>
                <div className="w-10 h-0.5 bg-amber-500/50" />
              </div>
              <p className="text-4xl lg:text-[44px] font-semibold text-white leading-[1.25] tracking-tight max-w-[720px]">
                A world where every rooftop generates clean energy and <span className="text-amber-500/80">energy independence becomes the standard</span>, not the exception.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 6️⃣ CORE VALUES */}
      <Section className="py-[120px] border-t border-white/[0.02]">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="mb-24 lg:mb-32 space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber-500 font-bold tracking-[0.4em] text-[10px] uppercase"
            >
              OUR PRINCIPLES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-semibold text-white tracking-tight"
            >
              Built on Discipline. <br />
              Driven by Responsibility.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: "Reliability", icon: <ShieldCheck className="w-5 h-5 text-amber-500" />, desc: "Long-term system performance engineered for <span class='text-amber-500/70'>stability</span>." },
              { name: "Accountability", icon: <Award className="w-5 h-5 text-amber-500" />, desc: "Transparent processes and lifecycle responsibility." },
              { name: "Precision", icon: <Zap className="w-5 h-5 text-amber-500" />, desc: "Meticulous design and performance modeling." },
              { name: "Longevity", icon: <Globe className="w-5 h-5 text-amber-500" />, desc: "Built for <span class='text-amber-500/70'>decades</span>, not short-term returns." },
              { name: "Integrity", icon: <Heart className="w-5 h-5 text-amber-500" />, desc: "Ethical execution and trusted partnerships." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                className="electric-border p-8 group min-h-[260px] flex flex-col justify-between"
              >
                <div className="space-y-10 relative z-10">
                  <div className="w-10 h-10 rounded-[10px] bg-neutral-900 border border-white/[0.03] flex items-center justify-center transition-colors">
                    <div className="opacity-50 group-hover:opacity-90 transition-opacity">
                      {value.icon}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white text-xl font-semibold tracking-tight leading-none">{value.name}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed opacity-80" dangerouslySetInnerHTML={{ __html: value.desc }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7️⃣ BY THE NUMBERS */}
      <Section className="py-[120px] border-t border-white/[0.03] bg-white/[0.005]">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-20 lg:gap-24 text-center items-center justify-center max-w-5xl mx-auto">
            {[
              { val: 500, label: 'Systems Deployed', suffix: '+' },
              { val: 400, label: 'Happy Homeowners', suffix: '+' },
              { val: 100, label: 'Business Partners', suffix: '+' },
              { val: 12, label: 'MW Capacity Managed', suffix: '+' },
              { val: 25, label: 'Asset Life Standards', suffix: ' Years' }
            ].map((num, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                className="space-y-6 flex flex-col items-center"
              >
                <p className="text-6xl lg:text-[72px] font-bold text-white tracking-tighter leading-none">
                  <Counter value={num.val} suffix={num.suffix} />
                </p>
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-[1px] w-6 bg-amber-500/20" />
                  <p className="text-[15px] font-bold text-neutral-400 opacity-75 tracking-tight leading-tight">{num.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8️⃣ OUR TEAM */}
      <Section className="py-[120px] border-t border-white/[0.02]">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="mb-24 lg:mb-32 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl space-y-8"
            >
              <h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight">Our Team</h2>
              <div className="w-[40px] h-0.5 bg-amber-500" />
              <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed opacity-80 max-w-[600px]">
                Solane is powered by certified engineers and renewable specialists with combined decades of infrastructure expertise.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Arjun Mehta', role: 'Chief Engineering Officer' },
              { name: 'Suhail Khan', role: 'Renewables Specialist' },
              { name: 'Deepika Rao', role: 'Energy Consultant' }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
                className="electric-border p-8 pb-14 group cursor-pointer h-full"
              >
                <div className="space-y-12 relative z-10">
                  <div className="w-full aspect-[4/5] bg-neutral-900 rounded-[12px] overflow-hidden relative border border-white/[0.02] shadow-2xl transition-all duration-700">
                    {/* Grayscale Architectural Portraits */}
                    <div className="absolute inset-0 bg-[url('/api/placeholder/400/500')] bg-cover bg-center grayscale transition-all duration-1000 opacity-40 group-hover:opacity-50 group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  </div>
                  <div className="space-y-5 px-6">
                    <h4 className="text-2xl font-semibold text-white tracking-tight">{member.name}</h4>
                    <p className="text-amber-500 font-extrabold tracking-[0.4em] text-[10px] uppercase opacity-90">{member.role}</p>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-[280px] opacity-70">
                      Technical specialist with deep expertise in renewable asset stewardship.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9️⃣ FINAL CTA */}
      <Section className="py-72 lg:py-96 border-t border-white/[0.02]">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-24 overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl lg:text-[100px] font-semibold tracking-tighter leading-[1.1] text-white"
            >
              Partner With Solane For Long-Term <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-amber-500"
              >
                Energy Independence.
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="text-neutral-400 text-lg lg:text-xl max-w-[400px] mx-auto leading-relaxed opacity-60"
            >
              Join the property owners and enterprises who prioritize permanence and <span className="text-amber-500/80">long-term energy independence</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="pt-24 flex justify-center"
            >
              <Magnetic>
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-extrabold px-12 py-5 rounded-[12px] border-none text-[11px] tracking-[0.4em] transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-amber-500/10 active:scale-95 hover:brightness-110">
                  REQUEST TECHNICAL CONSULTATION
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
