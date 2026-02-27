'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <motion.div
      whileHover={{ 
        y: -6, 
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.3)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        transition: { duration: 0.3, ease: 'easeOut' } 
      }}
      className={cn(
        'bg-card/50 backdrop-blur-md border border-white/5 rounded-3xl p-10 transition-all duration-300 shadow-lg bg-linear-to-br from-white/[0.02] to-transparent',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
