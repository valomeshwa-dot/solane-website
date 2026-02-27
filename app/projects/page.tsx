'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

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
  return (
    <main className="bg-[#0f0f10] text-neutral-100">
      {/* 1️⃣ HERO SECTION */}
      <Section className="pt-32 pb-28 lg:pt-48 lg:pb-32 text-center">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase text-center block">
              PROJECTS
            </span>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              Proven Solar Installations <br /> Across India
            </h1>
            <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              From luxury residences to large-scale industrial facilities, Solane delivers high-performance solar systems engineered for long-term reliability and measurable savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pt-20 max-w-5xl mx-auto border-t border-neutral-900 mt-20">
            {[
              { label: '500+', sublabel: 'Installations Completed' },
              { label: '50MW+', sublabel: 'Capacity Delivered' },
              { label: 'Pan-India', sublabel: 'Execution Coverage' },
            ].map((item, i) => (
              <div
                key={i}
                className={`space-y-2 py-8 md:py-0 ${i !== 2 ? 'md:border-r border-neutral-800' : ''}`}
              >
                <p className="text-4xl lg:text-6xl font-semibold text-white">{item.label}</p>
                <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2️⃣ FILTER TABS + 3️⃣ PROJECT GRID */}
      <Section className="py-24 border-t border-neutral-900 bg-neutral-950/20">
        <Container className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {['All', 'Residential', 'Commercial', 'Industrial'].map((tab, i) => (
              <button
                key={i}
                className={`border rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${tab === 'All'
                    ? 'bg-amber-500 text-black border-amber-500 font-medium'
                    : 'border-neutral-800 text-neutral-400 hover:border-amber-500'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {projects.map((project, i) => (
              <div key={i} className="flex flex-col group border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500 transition-all duration-300 bg-neutral-900/40">
                <div className="w-full h-[300px] bg-neutral-800 relative overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                </div>
                <div className="p-8 space-y-4">
                  <span className="text-amber-500 font-bold text-xs tracking-widest uppercase block">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-semibold text-white leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-neutral-300 text-sm font-medium tracking-wide">
                    {project.capacity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 4️⃣ LOAD MORE */}
          <div className="text-center mt-16">
            <button className="border border-neutral-700 rounded-full px-8 py-3 text-neutral-400 font-semibold hover:border-amber-500 hover:text-white transition-all duration-300">
              Load More Projects
            </button>
          </div>
        </Container>
      </Section>

      {/* 5️⃣ FINAL CTA */}
      <Section className="py-28 border-t border-neutral-900">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto p-12 lg:p-24 border border-neutral-800 rounded-[3rem] bg-neutral-950/40 text-center space-y-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">Ready to See What’s Possible <br /> for Your Property?</h2>
            <p className="text-neutral-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore how Solane can design a high-performance solar solution tailored to your needs.
            </p>

            <div className="pt-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-10 py-5 rounded-full border-none text-lg">
                Request a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
