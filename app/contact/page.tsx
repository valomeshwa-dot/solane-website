'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    property_type: 'residential',
    project_description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          property_type: formData.property_type,
          project_description: formData.project_description,
          source: 'contact_consultation'
        }]);

      if (error) throw error;

      console.log('Contact submission successful');
      setSubmitted(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        property_type: 'residential',
        project_description: ''
      });
    } catch (err: any) {
      console.error("Supabase insert error:", err.message);
      console.error("Full error object:", err);
      alert(`Error: ${err.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0f0f10] text-neutral-100 min-h-screen relative overflow-hidden">
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
              CONTACT SOLANE
            </motion.span>

            <div className="space-y-10">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl lg:text-[80px] font-bold tracking-tight leading-[1.1] text-white"
                >
                  Start Your
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                  className="text-5xl lg:text-[80px] font-bold tracking-tight leading-[1.1] text-amber-500"
                >
                  Solar Transition Today
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-neutral-400 text-lg lg:text-xl leading-[1.85] max-w-[600px] mx-auto opacity-80"
              >
                Whether you're exploring residential solar or planning a large-scale commercial installation, our team is ready to guide you with clarity and precision.
              </motion.p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2️⃣ MAIN CONTACT SECTION */}
      <Section className="py-24 lg:py-[120px] relative border-t border-white/[0.05]">
        <Container className="max-w-7xl mx-auto px-6">
          {/* Header Structure */}
          <div className="max-w-3xl mb-24 space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber-500 font-bold tracking-[0.5em] text-[10px] uppercase block"
            >
              GET IN TOUCH
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-semibold text-white tracking-tight"
            >
              Let&apos;s Build Your <br />
              Energy Strategy.
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-start">
            {/* LEFT SIDE — CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="electric-border"
            >
              <div className="bg-[#0b0b0b] rounded-[24px] p-8 lg:p-14 space-y-10 relative z-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center space-y-6"
                    >
                      <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto border border-amber-500/20">
                        <CheckCircle2 className="w-10 h-10 text-amber-500" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Inquiry Sent Successfully</h3>
                      <p className="text-neutral-500 text-sm max-w-xs mx-auto">
                        Thank you for reaching out. An engineering specialist will review your requirements and contact you within 24 hours.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 mt-4"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-white tracking-tight">Request a Technical Consultation</h3>
                        <p className="text-neutral-500 text-sm opacity-80">Submit your requirements and an engineering specialist will reach out within 24 hours.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold opacity-70">Full Name</label>
                            <input
                              required
                              type="text"
                              value={formData.full_name}
                              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                              placeholder="John Doe"
                              className="bg-black border border-white/[0.06] rounded-[10px] px-5 py-3.5 text-white w-full focus:border-amber-500/50 focus:bg-[#0c0c0c] outline-none transition-all duration-300 text-sm"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold opacity-70">Email Address</label>
                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@example.com"
                              className="bg-black border border-white/[0.06] rounded-[10px] px-5 py-3.5 text-white w-full focus:border-amber-500/50 focus:bg-[#0c0c0c] outline-none transition-all duration-300 text-sm"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold opacity-70">Phone Number</label>
                            <input
                              required
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+91 98765 43210"
                              className="bg-black border border-white/[0.06] rounded-[10px] px-5 py-3.5 text-white w-full focus:border-amber-500/50 focus:bg-[#0c0c0c] outline-none transition-all duration-300 text-sm"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold opacity-70">Property Type</label>
                            <select
                              required
                              value={formData.property_type}
                              onChange={(e) => setFormData({ ...formData, property_type: e.target.value })}
                              className="bg-black border border-white/[0.06] rounded-[10px] px-5 py-3.5 text-white w-full focus:border-amber-500/50 focus:bg-[#0c0c0c] outline-none transition-all duration-300 appearance-none cursor-pointer text-sm"
                            >
                              <option value="residential">Residential Estate</option>
                              <option value="commercial">Commercial Enterprise</option>
                              <option value="industrial">Industrial Facility</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold opacity-70">Brief Project Overview</label>
                          <textarea
                            required
                            value={formData.project_description}
                            onChange={(e) => setFormData({ ...formData, project_description: e.target.value })}
                            placeholder="Tell us about your structural or energy requirements..."
                            className="bg-black border border-white/[0.06] rounded-[10px] px-5 py-3.5 text-white w-full focus:border-amber-500/50 focus:bg-[#0c0c0c] outline-none transition-all duration-300 min-h-[140px] resize-none text-sm"
                          ></textarea>
                        </div>

                        <div className="pt-2 flex flex-col items-center gap-6">
                          <Magnetic amount={0.1}>
                            <Button
                              disabled={loading}
                              type="submit"
                              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-extrabold py-5 px-10 rounded-[10px] border-none text-[11px] tracking-[0.3em] transition-all flex items-center justify-center gap-3 hover:-translate-y-1 shadow-none disabled:opacity-70"
                            >
                              {loading ? (
                                <>PROCESSING <Loader2 className="w-4 h-4 animate-spin" /></>
                              ) : (
                                <>SEND INQUIRY <ArrowRight className="w-4 h-4" /></>
                              )}
                            </Button>
                          </Magnetic>
                          <p className="text-[10px] text-neutral-600 font-bold tracking-[0.2em] uppercase opacity-70">
                            Engineering Response Time: &lt; 24 Hours
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* RIGHT SIDE — INFO CARDS */}
            <div className="space-y-10">
              {[
                {
                  title: 'Head Office',
                  icon: <MapPin className="w-6 h-6 text-amber-500" />,
                  lines: ['Solane Energy Pvt. Ltd.', 'Bandra Kurla Complex', 'Mumbai, Maharashtra 400051', 'India']
                },
                {
                  title: 'Contact Details',
                  icon: <Phone className="w-6 h-6 text-amber-500" />,
                  details: [
                    { label: 'Primary Contact', val: '+91 98765 43210' },
                    { label: 'Technical Correspondence', val: 'hello@solane.energy' }
                  ]
                },
                {
                  title: 'Our Standards',
                  icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
                  text: 'Solane provides engineering-first guidance. Every inquiry receives a dedicated technical assessment tailored to your structural benchmarks.'
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="electric-border group cursor-pointer"
                >
                  <div className="p-8 lg:p-12 bg-[#0b0b0b] rounded-[24px] space-y-8 relative z-10 transition-transform duration-500 hover:-translate-y-1">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-[12px] bg-black border border-white/[0.05] flex items-center justify-center transition-all duration-500 group-hover:border-amber-500/30">
                        {React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 text-amber-500' })}
                      </div>
                      <h3 className="text-xl font-semibold text-white tracking-tight">{card.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {card.lines && card.lines.map((line, idx) => (
                        <p key={idx} className="text-neutral-400 text-sm leading-relaxed opacity-80">{line}</p>
                      ))}
                      {card.details && card.details.map((detail, idx) => (
                        <div key={idx} className="space-y-1">
                          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 font-bold">{detail.label}</p>
                          <p className="text-neutral-300 font-semibold text-sm">{detail.val}</p>
                        </div>
                      ))}
                      {card.text && (
                        <p className="text-neutral-400 text-sm leading-relaxed opacity-80">{card.text}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4️⃣ FINAL CTA STRIP */}
      <Section className="py-[120px] border-t border-white/[0.02]">
        <Container className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="electric-border max-w-5xl mx-auto overflow-hidden rounded-[40px]"
          >
            <div className="relative z-10 p-12 lg:p-20 bg-[#0b0b0b] text-center space-y-12 backdrop-blur-3xl overflow-hidden">
              {/* Subtle Radial Gradient */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.05),transparent_70%)]" />

              <div className="space-y-10 relative z-20">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white"
                >
                  Ready to Take Control of Your <br /> <span className="text-amber-500">Energy Costs</span>?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-neutral-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed opacity-80"
                >
                  Schedule your consultation and receive a tailored energy assessment designed around your property and financial goals.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pt-4 relative z-20 flex justify-center"
              >
                <Magnetic amount={0.1}>
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-extrabold px-12 py-4 rounded-[10px] border-none text-[11px] tracking-[0.4em] transition-all duration-300 hover:-translate-y-1 shadow-none active:scale-95 hover:brightness-110">
                    GET A FREE SOLAR ASSESSMENT
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
