'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MapPin, Zap, Layout, Calendar, TrendingUp, Trees, Wind, ArrowRight, Share2, Info, ChevronUp, HelpCircle } from 'lucide-react';
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
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(latest)
    });
    return () => controls.stop();
  }, [value, displayValue]);

  return (
    <motion.span
      key={value}
      initial={{ scale: 0.95, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="whitespace-nowrap"
    >
      {isCurrency ? formatCurrency(displayValue) : `${prefix}${displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}${suffix}`}
    </motion.span>
  );
}

export default function SolarCalculator() {
  const [isCommercial, setIsCommercial] = useState(false);
  const [monthlyBill, setMonthlyBill] = useState(8000);
  const [location, setLocation] = useState('Maharashtra');
  const [roofType, setRoofType] = useState('RCC Flat Roof');
  const [isCalculated, setIsCalculated] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [projectionYear, setProjectionYear] = useState(25);

  const annualSavings = monthlyBill * 0.9 * 12;
  const lifetimeSavings = annualSavings * projectionYear;
  const paybackPeriod = isCommercial ? 3.2 : 4.5;
  const co2Avoided = (monthlyBill / 10) * 0.8 * 12;
  const treesPlanted = Math.round(co2Avoided / 20);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setIsCalculated(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0B0F14]">

      {/* Hero Content */}
      <Section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative z-10">
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
            className="space-y-6"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full">
                <Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wide text-neutral-400">ROI Calculator</span>
            </motion.div>

            <div className="max-w-3xl space-y-4">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
              >
                Calculate Your Solar{" "}
                <span className="text-amber-500">
                  ROI
                </span>{" "}
                In Minutes
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-neutral-400 text-lg leading-relaxed max-w-[600px] font-medium"
              >
                High-precision modeling for solar asset performance and multi-decade financial sovereignty.
              </motion.p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Calculator Core */}
      <Section className="pb-32 lg:pb-48 relative z-10">
        <Container className="max-w-[1200px] mx-auto px-6 overflow-hidden">
          <div className="grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">

            {/* LEFT SIDE — CONTROL PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#0F141A] border border-neutral-800/60 rounded-2xl p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-500 ease-out"
            >
              {/* Type Toggle */}
              <div className="bg-[#14191F] border border-white/[0.08] p-1.5 rounded-xl flex relative mb-8 w-full max-w-[340px] mx-auto lg:mx-0 shadow-inner">
                <motion.div
                  className="absolute inset-y-1.5 left-1.5 bg-amber-500 rounded-lg shadow-md z-0"
                  initial={false}
                  animate={{
                    x: isCommercial ? '100%' : '0%'
                  }}
                  style={{ width: 'calc(50% - 6px)' }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsCommercial(false)}
                  className={cn(
                    "flex-1 relative z-10 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors duration-300 text-center rounded-lg",
                    !isCommercial ? "text-black" : "text-neutral-400 hover:text-white"
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
                    "flex-1 relative z-10 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors duration-300 text-center rounded-lg",
                    isCommercial ? "text-black" : "text-neutral-400 hover:text-white"
                  )}
                >
                  Commercial
                </motion.button>
              </div>

              {/* Input Fields */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  <InputField
                    label="Monthly Bill (₹)"
                    tooltip="Average electricity bill per month"
                    icon={<Zap className="w-4 h-4" />}
                    value={monthlyBill}
                    onChange={(val: any) => setMonthlyBill(val)}
                    type="number"
                  />
                  <InputField
                    label="Location"
                    tooltip="Your city/state for average solar irradiance data"
                    icon={<MapPin className="w-4 h-4" />}
                    value={location}
                    onChange={(val: any) => setLocation(val)}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <SelectField
                    label="Roof Type"
                    tooltip="Select the type of roof your property has"
                    icon={<Layout className="w-4 h-4" />}
                    value={roofType}
                    onChange={(val: any) => setRoofType(val)}
                    options={['RCC Flat Roof', 'Tin Shed', 'Tiled Roof', 'Sloped Concrete', 'Other']}
                  />
                </motion.div>
              </div>

              {/* Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pt-8 mt-6 w-full"
              >
                <Magnetic amount={0.25} className="w-full block">
                  <motion.button
                    animate={{
                      boxShadow: [
                        "0px 0px 0px rgba(234,179,8,0)",
                        "0px 0px 25px rgba(234,179,8,0.3)",
                        "0px 0px 0px rgba(234,179,8,0)"
                      ]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleCalculate}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold h-14 px-10 rounded-xl text-base tracking-wide uppercase flex items-center justify-center gap-3 group relative overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] active:scale-95 before:absolute before:inset-0 before:rounded-xl before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition"
                  >
                    <span className="relative z-10">Calculate Savings</span>
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1 relative z-10" />
                  </motion.button>
                </Magnetic>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE — ANALYSIS DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#0F141A] border border-neutral-800/60 rounded-2xl p-10 lg:p-14 space-y-12 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] relative flex flex-col justify-center transition-all duration-500 ease-out"
            >
              {/* Shimmer Overlay */}
              <AnimatePresence>
                {isCalculating && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0F141A]/95 z-50 flex flex-col items-center justify-center rounded-2xl"
                  >
                    <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
                    <p className="mt-6 text-amber-500 font-bold tracking-widest text-xs uppercase animate-pulse">Running Simulation...</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Internal Grid Alignment */}
              <div className="space-y-12">
                {/* Secondary Header */}
                <div className="flex justify-between items-center opacity-70 border-b border-white/[0.05] pb-5">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-neutral-400">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    Impact Terminal
                  </div>
                  <Share2 className="w-4 h-4 cursor-pointer hover:text-white transition-colors text-neutral-500" />
                </div>

                {/* Primary Stats */}
                <div className="grid md:grid-cols-2 gap-6">
                  <StatTile
                    label="Annual Savings"
                    value={<Counter value={isCalculated ? annualSavings : 0} isCurrency />}
                    sub="Fiscal year 01 target"
                    icon={<Zap className="w-4 h-4 text-amber-500" />}
                  />
                  <StatTile
                    label="Payback Period"
                    value={<Counter value={isCalculated ? paybackPeriod : 0} decimals={1} />}
                    suffix=" Years"
                    sub="Full ROI milestone"
                    icon={<Calendar className="w-4 h-4 text-amber-500" />}
                  />
                </div>

                {/* Growth Projection Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0F141A] border border-neutral-800/60 rounded-2xl p-8 space-y-8 relative overflow-hidden group shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
                    <div className="space-y-8 flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500">Asset Valuation</p>
                        <div className="flex bg-[#151A20] rounded-lg p-1 border border-white/[0.08] relative shadow-inner mb-2 lg:mb-0">
                          {/* Sliding Amber Pill */}
                          <motion.div
                            className="absolute inset-y-1 left-1 bg-amber-500 rounded-md shadow-sm"
                            initial={false}
                            animate={{
                              x: projectionYear === 10 ? '0%' : '100%',
                              width: 'calc(50% - 4px)'
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                          {[10, 25].map(y => (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              key={y}
                              onClick={() => setProjectionYear(y)}
                              className={cn(
                                "relative z-10 px-4 py-1.5 text-center text-xs font-bold tracking-wide rounded-md transition-colors duration-300",
                                projectionYear === y
                                  ? "text-black"
                                  : "text-neutral-500 hover:text-white"
                              )}
                            >
                              {y}Y
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none overflow-hidden pb-1">
                          <Counter value={isCalculated ? lifetimeSavings : 0} isCurrency />
                        </div>
                        <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Cumulative Financial Sovereignty</p>
                      </div>
                    </div>

                    {/* Simple Data Projection Overlay */}
                    <div className="w-full lg:w-[280px] h-32 flex items-end gap-3 pt-6">
                      {[15, 25, 40, 55, 80, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col gap-2 items-center group/bar">
                          <div className="w-full bg-white/[0.03] rounded-t-lg h-24 relative overflow-hidden group-hover/bar:bg-white/[0.06] transition-colors">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: isCalculated ? `${h}%` : 0 }}
                              transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                              className={cn(
                                "absolute bottom-0 left-0 w-full transition-all duration-700 rounded-t-sm",
                                i === 5 ? "bg-amber-500" : "bg-neutral-700"
                              )}
                            />
                          </div>
                          <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-wide">Y{(projectionYear / 5) * i}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Ecological Analysis */}
                <div className="grid md:grid-cols-2 gap-6 pt-2">
                  <EcoCard
                    icon={<Trees className="w-6 h-6" />}
                    value={isCalculated ? treesPlanted : 0}
                    labelSecondary="Trees Saved"
                  />
                  <EcoCard
                    icon={<Wind className="w-6 h-6" />}
                    value={isCalculated ? co2Avoided : 0}
                    labelSecondary="Tons CO₂ Avoided"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* PREMIUM ASSESSMENT SECTION */}
      <section className="py-28 bg-[#0B0F14] text-white">
        <div className="max-w-4xl mx-auto text-center px-6">

          <p className="text-xs tracking-[0.3em] text-yellow-500 mb-4 uppercase">
            Free Solar Assessment
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ready to Take Control of Your <br />
            <span className="text-yellow-500">Energy Costs?</span>
          </h2>

          <p className="text-neutral-400 text-lg mb-10">
            Receive a detailed engineering-grade savings projection tailored to your property.
          </p>

          <div className="flex justify-center">
            <Magnetic amount={0.25}>
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out">
                REQUEST MY FREE SOLAR ASSESSMENT →
              </button>
            </Magnetic>
          </div>

          <p className="mt-6 text-sm text-neutral-500">
            500+ Engineering Assessments Completed
          </p>

        </div>
      </section>

      <div className="h-32" />
    </div>
  );
}

function InputField({ label, icon, value, onChange, type = "text", tooltip }: any) {
  return (
    <div className="space-y-2 group relative">
      <div className="flex items-center gap-2">
        <label className="text-[9px] text-neutral-400 uppercase tracking-widest font-black block pl-1">{label}</label>
        {tooltip && (
          <div className="relative flex items-center group/tooltip cursor-help mb-0.5">
            <HelpCircle className="w-3.5 h-3.5 text-neutral-600 hover:text-amber-500 transition-colors" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] px-3 py-2 bg-neutral-800 text-white text-[10px] sm:text-xs rounded-lg shadow-xl opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 transform group-hover/tooltip:-translate-y-1">
              {tooltip}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-800" />
            </div>
          </div>
        )}
      </div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-amber-500 transition-colors duration-500">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
          className="w-full bg-[#0F141A] border border-neutral-800/60 rounded-xl h-12 pl-12 pr-4 text-sm font-semibold text-white hover:border-amber-500/50 focus:border-amber-500/40 focus:ring-2 focus:ring-amber-500/40 outline-none transition-all"
        />
      </motion.div>
    </div>
  );
}

function SelectField({ label, icon, value, onChange, options, tooltip }: any) {
  return (
    <div className="space-y-2 group relative">
      <div className="flex items-center gap-2">
        <label className="text-[9px] text-neutral-400 uppercase tracking-widest font-black block pl-1">{label}</label>
        {tooltip && (
          <div className="relative flex items-center group/tooltip cursor-help mb-0.5">
            <HelpCircle className="w-3.5 h-3.5 text-neutral-600 hover:text-amber-500 transition-colors" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] px-3 py-2 bg-neutral-800 text-white text-[10px] sm:text-xs rounded-lg shadow-xl opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 transform group-hover/tooltip:-translate-y-1">
              {tooltip}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-800" />
            </div>
          </div>
        )}
      </div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-amber-500 transition-colors duration-500 z-10">
          {icon}
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#0F141A] border border-neutral-800/60 rounded-xl h-12 pl-12 pr-4 text-sm font-semibold text-white hover:border-amber-500/50 focus:border-amber-500/40 focus:ring-2 focus:ring-amber-500/40 outline-none transition-all appearance-none cursor-pointer relative z-0"
        >
          {options.map((opt: string) => (
            <option key={opt} value={opt} className="bg-[#0F141A] text-white py-2">{opt}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-600 z-10">
          <ChevronUp className="w-4 h-4 rotate-180" />
        </div>
      </motion.div>
    </div>
  );
}

function StatTile({ label, value, sub, icon, suffix = "" }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#0F141A] border border-neutral-800/60 rounded-2xl p-6 space-y-4 relative overflow-hidden group shadow-xl"
    >
      <div className="flex justify-between items-center text-xs font-bold text-neutral-400 uppercase tracking-wide">
        {label}
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="bg-[#11161C] p-2 rounded-lg border border-white/[0.04] text-amber-500"
        >
          {icon}
        </motion.div>
      </div>
      <div className="space-y-1">
        <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight flex items-baseline">
          {value}
          <span className="text-sm text-neutral-500 ml-1 font-medium">{suffix}</span>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <p className="text-[10px] text-neutral-500 font-semibold tracking-wide uppercase">{sub}</p>
        </div>
      </div>
    </motion.div>
  );
}

function EcoCard({ icon, value, labelSecondary }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#0F141A] border border-neutral-800/60 rounded-2xl p-6 flex-1 min-w-0 flex items-center gap-5 group transition-all shadow-xl"
    >
      <div className="w-14 h-14 rounded-full bg-black/40 border border-white/5 flex items-center justify-center relative flex-shrink-0">
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <motion.circle
            cx="28" cy="28" r="26"
            fill="none"
            stroke="#F5A623"
            strokeWidth="1.5"
            strokeDasharray="164"
            initial={{ strokeDashoffset: 164 }}
            whileInView={{ strokeDashoffset: 90 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="opacity-30"
          />
        </svg>
        <div className="text-neutral-500 group-hover:text-amber-500 transition-colors duration-500">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold text-white leading-tight break-keep">
          <Counter value={value} decimals={0} />
        </div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mt-1">
          {labelSecondary}
        </p>
      </div>
    </motion.div>
  );
}
