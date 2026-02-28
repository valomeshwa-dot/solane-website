'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { motion, animate } from 'framer-motion';
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

const projects = [
  {
    type: 'Industrial',
    name: 'Textile Manufacturing Unit, Surat',
    capacity: '500kW Rooftop Solar',
  },
  {
    type: 'Residential',
    name: 'Luxury Villa, Goa',
    capacity: '12kW Residential Hybrid',
  },
  {
    type: 'Commercial',
    name: 'Tech Park, Bangalore',
    capacity: '1.2MW Ground Mount',
  },
  {
    type: 'Commercial',
    name: 'Corporate HQ, Gurgaon',
    capacity: '80kW Rooftop Solar',
  },
  {
    type: 'Commercial',
    name: 'Hotel Resort, Udaipur',
    capacity: '250kW Rooftop Solar',
  },
  {
    type: 'Industrial',
    name: 'Warehouse Facility, Mumbai',
    capacity: '400kW PV System',
  },
  {
    type: 'Residential',
    name: 'Farmhouse Estate, Alibaug',
    capacity: '15kW Hybrid Solution',
  },
  {
    type: 'Commercial',
    name: 'IT Campus, Hyderabad',
    capacity: '2MW Industrial Plant',
  },
  {
    type: 'Commercial',
    name: 'Retail Mall, Pune',
    capacity: '600kW Commercial Rooftop',
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = React.useState('All');

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.type === activeTab);

  return (
    <main className="bg-[#0f0f10] text-neutral-100 relative overflow-hidden">
      {/* Background Depth - Texture Noise */}
      <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 1️⃣ HERO SECTION */}
      <Section className="relative pt-48 pb-32 lg:pt-64 lg:pb-40 overflow-hidden border-b border-white/[0.05]">
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-amber-500 font-bold tracking-[0.4em] text-[10px] uppercase block"
            >
              PROJECTS
            </motion.span>

            <div className="space-y-12">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl lg:text-[80px] font-bold tracking-tight leading-[1.1] text-white"
                >
                  Proven Solar Installations
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                  className="text-5xl lg:text-[80px] font-bold tracking-tight leading-[1.1] text-amber-500"
                >
                  Across India
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-[600px] mx-auto opacity-80"
              >
                From luxury residences to large-scale industrial facilities, Solane delivers high-performance systems engineered for <span className="text-amber-500/80">long-term reliability</span> and <span className="text-amber-500/80">measurable savings</span>.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pt-24 max-w-5xl mx-auto border-t border-white/[0.05] mt-32 justify-center">
            {[
              { val: 500, suffix: '+', sublabel: 'Installations Completed' },
              { val: 50, suffix: 'MW+', sublabel: 'Capacity Delivered' },
              { val: 0, label: 'Pan-India', sublabel: 'Execution Coverage' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className={`space-y-6 py-8 md:py-0 text-center transition-all group ${i !== 2 ? 'md:border-r border-white/5' : ''}`}
              >
                <div className="flex flex-col items-center">
                  <p className="text-6xl lg:text-[72px] font-bold text-white tracking-tighter leading-none group-hover:text-amber-500 transition-colors">
                    {item.label ? item.label : <Counter value={item.val} suffix={item.suffix} />}
                  </p>
                  <div className="flex flex-col items-center mt-6">
                    <div className="h-[1px] w-6 bg-amber-500/20 mb-4" />
                    <p className="text-[15px] font-bold text-neutral-400 opacity-75 tracking-tight group-hover:text-white/80 transition-colors leading-tight">{item.sublabel}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2️⃣ FILTER TABS + 3️⃣ PROJECT GRID */}
      <Section className="py-32 lg:py-48 bg-white/[0.01]">
        <Container className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-6 mb-24 overflow-hidden">
            {['All', 'Residential', 'Commercial', 'Industrial'].map((tab, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (i * 0.05) }}
                whileHover={{ y: -3 }}
                onClick={() => setActiveTab(tab)}
                className={`border rounded-full px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${activeTab === tab
                  ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/10'
                  : 'border-white/5 text-neutral-500 hover:border-white/20 hover:text-white'
                  }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={`${project.name}-${activeTab}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: (i % 3) * 0.15 }}
                className="electric-border group cursor-pointer"
              >
                <div className="relative z-10 flex flex-col h-full bg-[#0b0b0b]">
                  <div className="w-full aspect-[4/3] bg-neutral-900 relative overflow-hidden">
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent z-10 opacity-60 pointer-events-none group-hover:opacity-80 transition-opacity duration-700" />

                    {/* Placeholder Image */}
                    <div className="absolute inset-0 bg-[url('/api/placeholder/600/400')] bg-cover bg-center grayscale transition-all duration-1000 group-hover:grayscale-[0.5] group-hover:scale-[1.02] opacity-40 group-hover:opacity-50" />
                  </div>

                  <div className="p-10 space-y-8 transition-transform duration-500 group-hover:-translate-y-1 flex flex-col h-full">
                    <div className="space-y-4">
                      <span className="text-amber-500 font-extrabold text-[10px] tracking-[0.4em] uppercase block">
                        {project.type}
                      </span>
                      <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight min-h-[4rem]">
                        {project.name}
                      </h3>
                    </div>

                    <div className="flex flex-col mt-auto pt-8">
                      <div className="h-[1px] w-8 bg-amber-500/15 mb-4 group-hover:w-12 transition-all duration-500" />
                      <p className="text-neutral-500 text-xs font-bold tracking-widest uppercase opacity-60 group-hover:opacity-100 group-hover:text-white/80 transition-all">
                        {project.capacity}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 4️⃣ LOAD MORE */}
          <div className="text-center mt-24">
            <motion.button
              whileHover={{ y: -3 }}
              className="border border-white/5 rounded-full px-12 py-4 text-[11px] font-bold tracking-[0.3em] uppercase text-neutral-500 hover:border-white/20 hover:text-white transition-all duration-300"
            >
              Load More Projects
            </motion.button>
          </div>
        </Container>
      </Section>

      {/* 5️⃣ FINAL CTA */}
      <Section className="py-48 lg:py-72 border-t border-white/[0.02]">
        <Container className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="electric-border max-w-5xl mx-auto overflow-hidden rounded-[3rem]"
          >
            <div className="relative z-10 p-12 lg:p-24 bg-[#0b0b0b] text-center space-y-12 backdrop-blur-3xl overflow-hidden">
              {/* Subtle Radial Gradient */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.03),transparent_70%)]" />

              <div className="space-y-10 relative z-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white"
                >
                  Ready to See What’s Possible <br /> for Your Property?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-neutral-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed opacity-70"
                >
                  Explore how Solane can design a <span className="text-amber-500/80">high-performance solar solution</span> tailored to your structural and energy goals.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pt-8 relative z-20 flex justify-center"
              >
                <Magnetic>
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-extrabold px-12 py-5 rounded-[12px] border-none text-[11px] tracking-[0.4em] transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-amber-500/10 active:scale-95 hover:brightness-110">
                    REQUEST A CONSULTATION
                  </Button>
                </Magnetic>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
