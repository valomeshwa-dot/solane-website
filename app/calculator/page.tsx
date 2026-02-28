'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MapPin, Zap, Layout, Calendar, TrendingUp, Trees, Wind, ArrowRight, Share2, Info, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { cn } from '@/lib/utils';
import Magnetic from '@/components/ui/Magnetic';

const formatCurrency = (val: number) => {
  if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
  if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
  return `₹${val.toLocaleString()}`;
};

function Counter({ value, decimals = 0, prefix = "", suffix = "", isCurrency = false }: { value: number; decimals?: number; prefix?: string; suffix?: string; isCurrency?: boolean }) {
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 1.5,
      ease: "easeInOut",
      onUpdate: (latest) => setDisplayValue(latest)
    });
    return () => controls.stop();
  }, [value, displayValue]);

  return (
    <span className="whitespace-nowrap">
      {isCurrency ? formatCurrency(displayValue) : `${prefix}${displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}${suffix}`}
    </span>
  );
}

export default function SolarCalculator() {
  const [isCommercial, setIsCommercial] = useState(false);
  const [monthlyBill, setMonthlyBill] = useState(8000);
  const [location, setLocation] = useState('Maharashtra');
  const [roofArea, setRoofArea] = useState(1200);
  const [isCalculated, setIsCalculated] = useState(false);
  const [projectionYear, setProjectionYear] = useState(25);

  const annualSavings = monthlyBill * 0.9 * 12;
  const lifetimeSavings = annualSavings * projectionYear;
  const paybackPeriod = isCommercial ? 3.2 : 4.5;
  const co2Avoided = (monthlyBill / 10) * 0.8 * 12;
  const treesPlanted = Math.round(co2Avoided / 20);

  const handleCalculate = () => {
    setIsCalculated(true);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-[#0B0F14] text-[#FFFFFF] font-sans selection:bg-amber-500/30 overflow-x-hidden relative"
    >
      {/* Subtle Background Glow Animation */}
      <motion.div
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 blur-3xl pointer-events-none z-0"
      />

      {/* 🏙️ Hero Content */}
      <Section className="pt-32 pb-20 lg:pt-48 lg:pb-24">
        <Container className="max-w-[1200px] mx-auto px-6 text-center lg:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="space-y-6 relative z-10"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                <Zap className="w-3 h-3 text-[#F5A623] fill-[#F5A623]" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">ROI Calculator</span>
            </motion.div>

            <div className="max-w-3xl space-y-4">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
              >
                Calculate Your Solar <br />
                <span className="relative inline-block text-[#FFFFFF]">
                  ROI
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 h-[2px] bg-[#F5A623]"
                  />
                </span> In Minutes
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-[#FFFFFF]/70 text-base lg:text-lg leading-relaxed max-w-[500px] font-medium"
              >
                High-precision modeling for solar asset performance and multi-decade financial sovereignty.
              </motion.p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 📊 Calculator Core */}
      <Section className="pb-32 lg:pb-48">
        <Container className="max-w-[1200px] mx-auto px-6 overflow-hidden">
          <div className="grid lg:grid-cols-[460px_1fr] gap-12 lg:gap-16 items-start">

            {/* 🌑 LEFT SIDE — CONTROL PANEL (#0E1217) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#0E1217] border border-white/[0.06] rounded-[40px] p-8 lg:p-10 space-y-12 shadow-lg relative overflow-hidden"
            >
              {/* Type Toggle - Architectural Lock */}
              <div className="bg-[#14191F] border border-white/[0.08] p-1 rounded-full flex relative h-[56px] w-full max-w-[340px] overflow-hidden mx-auto lg:mx-0">
                <motion.div
                  className="absolute inset-y-1 left-1 bg-[#F5A623] rounded-full shadow-md z-0"
                  initial={false}
                  animate={{
                    x: isCommercial ? '100%' : '0%'
                  }}
                  style={{ width: 'calc(50% - 4px)' }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsCommercial(false)}
                  className={cn(
                    "flex-1 relative z-10 text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 text-center",
                    !isCommercial ? "text-[#0B0F14]" : "text-neutral-500 hover:text-neutral-300"
                  )}
                >
                  Residential
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsCommercial(true)}
                  className={cn(
                    "flex-1 relative z-10 text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 text-center",
                    isCommercial ? "text-[#0B0F14]" : "text-neutral-500 hover:text-neutral-300"
                  )}
                >
                  Commercial
                </motion.button>
              </div>

              {/* Input Fields */}
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Monthly Bill (₹)"
                    icon={<Zap className="w-4 h-4" />}
                    value={monthlyBill}
                    onChange={(val: any) => setMonthlyBill(val)}
                    type="number"
                  />
                  <InputField
                    label="Location"
                    icon={<MapPin className="w-4 h-4" />}
                    value={location}
                    onChange={(val: any) => setLocation(val)}
                  />
                </div>
                <InputField
                  label="Roof Area (sq. ft)"
                  icon={<Layout className="w-4 h-4" />}
                  value={roofArea}
                  onChange={(val: any) => setRoofArea(val)}
                  type="number"
                />
              </div>

              {/* Action */}
              <div className="pt-4 space-y-6">
                <Magnetic amount={0.03}>
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0px 0px 30px rgba(245, 166, 35, 0.4)"
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    onClick={handleCalculate}
                    className="w-full bg-[#F5A623] text-black font-black h-16 rounded-2xl border-none text-[11px] tracking-[0.3em] transition-all flex items-center justify-center gap-4 group"
                  >
                    <span className="relative z-10 uppercase tracking-[0.3em]">Calculate Savings</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Magnetic>
                <div className="flex items-start gap-3 px-1 opacity-40">
                  <Info className="w-3.5 h-3.5 mt-0.5" />
                  <p className="text-[9px] font-bold uppercase tracking-widest leading-relaxed">
                    Based on current tariff slabs & average insolation data.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 🌑 RIGHT SIDE — ANALYSIS DASHBOARD (#11161C) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#11161C] border border-white/[0.06] rounded-[48px] p-8 lg:p-12 space-y-12 overflow-hidden shadow-2xl relative flex flex-col justify-center"
            >
              {/* Internal Grid Alignment */}
              <div className="space-y-12">
                {/* Secondary Header */}
                <div className="flex justify-between items-center opacity-40 border-b border-white/[0.05] pb-6">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623]" />
                    Impact Terminal
                  </div>
                  <Share2 className="w-3.5 h-3.5 cursor-pointer hover:text-white transition-colors" />
                </div>

                {/* Primary Stats */}
                <div className="grid md:grid-cols-2 gap-6">
                  <StatTile
                    label="Annual Savings"
                    value={<Counter value={isCalculated ? annualSavings : 0} isCurrency />}
                    sub="Fiscal year 01 target"
                    icon={<Zap className="w-5 h-5 text-neutral-700" />}
                  />
                  <StatTile
                    label="Payback Period"
                    value={<Counter value={isCalculated ? paybackPeriod : 0} decimals={1} />}
                    suffix=" Years"
                    sub="Full ROI milestone"
                    icon={<Calendar className="w-5 h-5 text-neutral-700" />}
                  />
                </div>

                {/* Growth Projection Card */}
                <div className="bg-[#0B0F14] border border-white/[0.07] rounded-[40px] p-8 lg:p-10 space-y-10 relative overflow-hidden group">
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
                    <div className="space-y-10 flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">Asset Valuation Projection</p>
                        <div className="flex bg-[#151A20] rounded-full p-1 border border-white/[0.08] relative min-w-[110px] gap-[6px] shadow-inner mb-2 lg:mb-0">
                          {/* Sliding Amber Pill */}
                          <motion.div
                            className="absolute inset-y-[4px] left-[4px] bg-[#F5A623] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"
                            initial={false}
                            animate={{
                              x: projectionYear === 10 ? '0%' : '106%',
                              width: 'calc(50% - 3px)'
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 35 }}
                          />
                          {[10, 25].map(y => (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              key={y}
                              onClick={() => setProjectionYear(y)}
                              className={cn(
                                "flex-1 relative z-10 py-1.5 text-center text-[10px] font-bold tracking-widest rounded-full transition-colors duration-300",
                                projectionYear === y
                                  ? "text-[#0B0F14]"
                                  : "text-white/65 hover:text-white"
                              )}
                            >
                              {y}Y
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-4xl lg:text-7xl font-bold text-white tracking-tighter leading-none max-w-full overflow-hidden">
                          <Counter value={isCalculated ? lifetimeSavings : 0} isCurrency />
                        </div>
                        <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-[0.3em]">Cumulative Financial Sovereignty</p>
                      </div>
                    </div>

                    {/* Simple Data Projection Overlay */}
                    <div className="w-full lg:w-[320px] h-40 flex items-end gap-4 pt-6">
                      {[15, 25, 40, 55, 80, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col gap-3 items-center">
                          <div className="w-full bg-white/[0.03] rounded-t-lg h-24 relative overflow-hidden">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: isCalculated ? `${h}%` : 0 }}
                              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                              className={cn(
                                "absolute bottom-0 left-0 w-full transition-all duration-700",
                                i === 5 ? "bg-[#F5A623]" : "bg-white/10"
                              )}
                            />
                          </div>
                          <span className="text-[7px] font-black text-neutral-800 uppercase tracking-widest">Y{(projectionYear / 5) * i}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ecological Analysis */}
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <EcoCard
                    icon={<Trees className="w-5 h-5" />}
                    value={isCalculated ? treesPlanted : 0}
                    labelSecondary="Trees Saved"
                  />
                  <EcoCard
                    icon={<Wind className="w-5 h-5" />}
                    value={isCalculated ? co2Avoided : 0}
                    labelSecondary="Tons CO₂ Avoided"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 🏆 PREMIUM ASSESSMENT SECTION */}
      <Section className="bg-[#0E1217] py-32 mt-32">
        <Container className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[#F5A623] text-[10px] font-black uppercase tracking-[0.6em] block">
                FREE SOLAR ASSESSMENT
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-[1.1]">
                Ready to Take Control of Your <br />
                <span className="text-[#F5A623]">Energy Costs?</span>
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto font-medium">
                Receive a detailed engineering-grade savings projection tailored to your property.
              </p>
            </div>

            <div className="pt-4">
              <Magnetic amount={0.04}>
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0px 0px 30px rgba(245, 166, 35, 0.4)"
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="bg-gradient-to-r from-[#F5A623] to-[#D97706] text-black font-black h-16 px-12 rounded-2xl border-none text-[12px] tracking-[0.2em] shadow-xl uppercase group flex items-center justify-center mx-auto"
                >
                  REQUEST MY FREE SOLAR ASSESSMENT →
                </motion.button>
              </Magnetic>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="pt-8 text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase"
              >
                500+ ENGINEERING ASSESSMENTS COMPLETED
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      <div className="h-32" />
    </motion.main>
  );
}

function InputField({ label, icon, value, onChange, type = "text" }: any) {
  return (
    <div className="space-y-4 group">
      <label className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600 block pl-1">{label}</label>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-800 group-focus-within:text-[#F5A623] transition-colors duration-500">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
          className="w-full bg-black/40 border border-white/[0.08] rounded-2xl h-14 pl-14 pr-4 text-sm font-semibold text-white focus:border-[#F5A623]/40 outline-none transition-all"
        />
      </motion.div>
    </div>
  );
}

function StatTile({ label, value, sub, icon, suffix = "" }: any) {
  return (
    <div className="bg-[#0B0F14] border border-white/[0.06] rounded-[32px] p-8 space-y-4 relative overflow-hidden group shadow-xl">
      <div className="flex justify-between items-center text-[9px] font-black text-neutral-600 uppercase tracking-widest">
        {label}
        {icon}
      </div>
      <div className="space-y-3">
        <div className="text-4xl lg:text-5xl font-bold text-white tracking-tight flex items-baseline">
          {value}
          <span className="text-lg text-neutral-600 ml-2 font-medium">{suffix}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-0.5 h-3 bg-[#F5A623] rounded-full" />
          <p className="text-[9px] text-neutral-600 font-bold uppercase tracking-widest">{sub}</p>
        </div>
      </div>
    </div>
  );
}

function EcoCard({ icon, value, labelSecondary }: any) {
  return (
    <div className="bg-[#0B0F14]/50 border border-white/[0.04] rounded-[32px] p-[28px] flex-1 min-w-0 flex items-center gap-[20px] group transition-all min-h-[140px]">
      <div className="w-16 h-16 rounded-full bg-black/40 border border-white/5 flex items-center justify-center relative flex-shrink-0">
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <motion.circle
            cx="32" cy="32" r="30"
            fill="none"
            stroke="#F5A623"
            strokeWidth="1.5"
            strokeDasharray="188"
            initial={{ strokeDashoffset: 188 }}
            whileInView={{ strokeDashoffset: 120 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="opacity-20"
          />
        </svg>
        <div className="text-neutral-700 group-hover:text-[#F5A623] transition-colors duration-500">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-[clamp(26px,2.5vw,36px)] font-bold text-white leading-[1.1] break-keep">
          <Counter value={value} decimals={0} />
        </div>
        <p className="text-[14px] font-bold text-white opacity-65 uppercase tracking-widest mt-1">
          {labelSecondary}
        </p>
      </div>
    </div>
  );
}
