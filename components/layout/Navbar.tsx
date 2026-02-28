'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Residential', href: '/residential' },
  { name: 'Commercial', href: '/commercial' },
  { name: 'Projects', href: '/projects' },
  { name: 'Calculator', href: '/calculator' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center px-6 lg:px-12 backdrop-blur-md border-b",
        scrolled
          ? "h-16 bg-black/75 border-amber-500/10"
          : "h-20 bg-[#0f0f10]/80 border-neutral-800/50"
      )}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white flex items-center gap-1">
          SOLANE <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-all hover:text-amber-500',
                pathname === link.href ? 'text-amber-500' : 'text-neutral-400'
              )}
            >
              {link.name}
            </Link>
          ))}
          <MagneticButton>
            <Link href="/assessment">
              <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full px-6 border-none">
                Get Assessment
              </Button>
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 right-0 lg:hidden bg-card border-b border-white/5 overflow-hidden"
          >
            <div className="px-8 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-accent-start',
                    pathname === link.href ? 'text-accent-start' : 'text-text-secondary'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full">Get a Free Solar Assessment</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
