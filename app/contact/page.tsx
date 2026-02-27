'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-[#0f0f10] text-neutral-100 min-h-screen">
      {/* 1️⃣ HERO SECTION */}
      <Section className="pt-32 pb-16 lg:pt-48 lg:pb-24 text-center">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase block">
              CONTACT SOLANE
            </span>
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
              Start Your Solar <br /> Transition Today
            </h1>
            <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Whether you're exploring residential solar or planning a large-scale commercial installation, our team is ready to guide you with clarity and precision.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2️⃣ MAIN CONTACT SECTION */}
      <Section className="py-20 lg:py-28 border-t border-neutral-900">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* LEFT SIDE — CONTACT FORM */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 lg:p-10 space-y-8 shadow-xl">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Request a Consultation</h2>
                <p className="text-neutral-500 text-sm">Fill out the form below and an expert will reach out.</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Location (City, State)</label>
                    <input
                      type="text"
                      placeholder="Mumbai, Maharashtra"
                      className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Property Type</label>
                  <select className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors appearance-none cursor-pointer">
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Message</label>
                  <textarea
                    placeholder="Tell us about your project or energy requirements..."
                    className="bg-black border border-neutral-800 rounded-lg px-4 py-3.5 text-white w-full focus:border-amber-500 outline-hidden transition-colors min-h-[140px] resize-none"
                  ></textarea>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-5 rounded-xl border-none text-base transition-all flex items-center justify-center gap-2">
                    Send Inquiry <ArrowRight className="w-4 h-4" />
                  </Button>
                  <p className="text-[10px] text-neutral-600 font-medium text-center">
                    Our team typically responds within 24 hours.
                  </p>
                </div>
              </form>
            </div>

            {/* RIGHT SIDE — COMPANY DETAILS */}
            <div className="space-y-8">
              {/* Card 1 — Office Location */}
              <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900/20 space-y-4 group hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Head Office</h3>
                </div>
                <div className="pl-13">
                  <p className="text-neutral-400 leading-relaxed">
                    Solane Energy Pvt. Ltd.<br />
                    Bandra Kurla Complex<br />
                    Mumbai, Maharashtra 400051<br />
                    India
                  </p>
                </div>
              </div>

              {/* Card 2 — Contact Details */}
              <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900/20 space-y-6 group hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Contact Details</h3>
                </div>
                <div className="pl-13 space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Phone</p>
                    <p className="text-neutral-300 font-medium">+91 98765 43210</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Email</p>
                    <p className="text-neutral-300 font-medium">hello@solane.energy</p>
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-600 font-bold">
                      <Clock className="w-3 h-3" /> Business Hours
                    </div>
                    <p className="text-neutral-400 text-sm">Monday – Saturday<br />9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Card 3 — Why Contact Us */}
              <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900/30 space-y-6 group hover:border-amber-500/20 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Why Solane?</h3>
                </div>
                <div className="pl-13">
                  <p className="text-neutral-400 leading-relaxed text-sm lg:text-base">
                    Whether you're requesting a site assessment, ROI projection, or commercial audit, Solane provides engineering-first guidance tailored to your property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3️⃣ MAP SECTION */}
      <Section className="py-20 lg:py-28 bg-neutral-950/20 border-y border-neutral-900">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">Our Location</h2>
          </div>
          <div className="w-full h-[300px] lg:h-[420px] bg-neutral-800 rounded-2xl relative overflow-hidden shadow-2xl transition-all border border-neutral-800">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-neutral-700 animate-pulse" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 4️⃣ FINAL CTA STRIP */}
      <Section className="py-28">
        <Container className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">Ready to Take Control of Your Energy Costs?</h2>
            <p className="text-neutral-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Schedule your consultation and receive a tailored energy assessment designed around your property and financial goals.
            </p>

            <div className="pt-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-12 py-5 rounded-full border-none text-lg">
                Get a Free Solar Assessment
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
