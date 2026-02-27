import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const Footer = () => {
  return (
    <footer className="bg-[#0b0b0c] border-t border-neutral-900 py-24">
      <Container className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <Link href="/" className="text-xl font-semibold tracking-tight text-white flex items-center gap-1">
              SOLANE <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </Link>
            <p className="text-neutral-400 max-w-sm leading-relaxed text-base">
              The pinnacle of solar energy. We provide bespoke, high-performance solutions for the world&apos;s most discerning properties.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-widest text-[10px]">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/residential" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">Residential Solar</Link></li>
              <li><Link href="/commercial" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">Commercial Solar</Link></li>
              <li><Link href="/projects" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">Our Projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/calculator" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">Solar Calculator</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-500 text-xs tracking-wide">
            © {new Date().getFullYear()} Solane. Engineered for excellence.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="text-neutral-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-neutral-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
