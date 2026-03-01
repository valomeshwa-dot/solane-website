'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { motion, animate, AnimatePresence } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';
import { Zap, MapPin, Layers } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Project {
  id: string;
  site_name: string;
  location: string;
  capacity_kw: string;
  surface_category: string;
  completion_year: string;
  image_url: string | null;
  created_at: string;
}

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





export default function Projects() {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState('All');

  // Fetch projects from Supabase on mount
  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        setProjects(data as Project[]);
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.surface_category === activeTab);



  return (
    <main className="bg-[#0a0a0a] text-neutral-100 relative overflow-hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(0,0,0,0))]">
      {/* Background Depth - Texture Noise */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pt-24 max-w-5xl mx-auto border-t border-white/10 mt-32 justify-center pb-24 lg:pb-32 relative z-10">
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
                className={`space-y-6 py-8 md:py-0 text-center transition-all group ${i !== 2 ? 'md:border-r border-white/10' : ''}`}
              >
                <div className="flex flex-col items-center">
                  <p className="text-6xl lg:text-[72px] font-bold text-white tracking-tighter leading-none group-hover:text-amber-500 transition-colors">
                    {item.label ? item.label : <Counter value={item.val} suffix={item.suffix} />}
                  </p>
                  <div className="flex flex-col items-center mt-6">
                    <div className="h-[1px] w-6 bg-amber-500/20 mb-4" />
                    <p className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest group-hover:text-white/80 transition-colors leading-tight">{item.sublabel}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2️⃣ FILTER TABS + 3️⃣ PROJECT GRID */}
      <Section className="py-32 bg-transparent relative z-10">
        <div className="absolute top-0 w-[1200px] h-[600px] left-1/2 -translate-x-1/2 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
        <Container className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-20 overflow-hidden">
            {['All', 'Residential', 'Commercial', 'Industrial'].map((tab, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (i * 0.05) }}
                whileHover={{ y: -3 }}
                onClick={() => setActiveTab(tab)}
                className={`border rounded-full px-8 py-3 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 ${activeTab === tab
                  ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20'
                  : 'border-white/10 text-neutral-400 hover:border-white/30 hover:text-white backdrop-blur-sm'
                  }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto mt-12 w-full">
            {loading ? (
              <div className="col-span-full flex flex-col items-center py-20 gap-4">
                <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 font-bold">Synchronizing Portfolio...</p>
              </div>
            ) : filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-40 bg-white/[0.02] border border-white/5 border-dashed rounded-[50px] flex flex-col items-center justify-center gap-8"
              >
                <div className="p-8 bg-neutral-900/50 border border-white/5 rounded-full text-neutral-800">
                  <Layers size={48} strokeWidth={1} />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-500">No projects available yet.</h3>
                </div>
              </motion.div>
            ) : (
              filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.15 }}
                  className="group relative cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:border-amber-500/50 border border-white/5 rounded-2xl overflow-hidden bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full flex flex-col"
                >
                  <a href="#" className="block h-full">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-20">
                      <div className="absolute inset-0 border border-amber-500/20 rounded-2xl" />
                    </div>
                    <div className="relative w-full h-[450px] overflow-hidden bg-[#111111]">
                      {/* Shimmer placeholder */}
                      <div className="absolute inset-0 bg-neutral-800 animate-pulse" />

                      {/* Project Image */}
                      {project.image_url ? (
                        <img
                          src={project.image_url}
                          alt={project.site_name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                          <Layers size={48} className="text-neutral-800" />
                        </div>
                      )}

                      {/* Subtle dark gradient overlay from bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-transparent pointer-events-none z-10" />

                      {/* Content container (Bottom-left aligned) */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white text-left z-20 w-full h-full">
                        <div className="mt-auto">
                          {/* Top: Category badge + Year */}
                          <div className="flex items-center gap-3 mb-6">
                            <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                              {project.surface_category}
                            </span>
                            <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">
                              {project.completion_year}
                            </span>
                          </div>

                          {/* Middle: Site name */}
                          <h3 className="text-2xl font-bold tracking-tight leading-[1.2] mb-3 drop-shadow-sm group-hover:text-amber-400 transition-colors">
                            {project.site_name}
                          </h3>

                          {/* Under: Location with icon */}
                          <div className="flex items-center text-sm text-neutral-400 mb-8 font-medium">
                            <MapPin size={14} className="text-amber-500 mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="tracking-wide">{project.location}</span>
                          </div>

                          {/* Bottom: Divider + Capacity */}
                          <div className="border-t border-white/10 pt-5 flex items-center w-full">
                            <div className="flex items-center text-amber-500 font-bold tracking-wide text-sm uppercase">
                              <Zap size={16} className="mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                              <span>{project.capacity_kw} kW Installed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))
            )}
          </div>


        </Container >
      </Section >

      {/* 5️⃣ FINAL CTA */}
      < Section className="py-48 lg:py-72 border-t border-white/[0.02]" >
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
                  <Button
                    size="lg"
                    className="!w-fit !h-auto !bg-amber-500 hover:!bg-amber-600 !text-black font-extrabold !py-[16px] !px-[42px] !rounded-[9999px] border-none text-[11px] tracking-[0.4em] transition-all duration-300 ease-in-out hover:!-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(255,170,0,0.25)] active:scale-95 hover:brightness-110 !inline-flex items-center justify-center"
                  >
                    REQUEST A CONSULTATION
                  </Button>
                </Magnetic>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section >
    </main >
  );
}
