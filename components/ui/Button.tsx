'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'gradient-accent text-background font-bold hover:opacity-90 shadow-lg shadow-accent-start/20',
    secondary: 'bg-transparent border border-white/20 text-text-primary hover:border-accent-start/50 hover:shadow-[0_0_20px_rgba(245,166,35,0.15)] transition-all duration-300',
    outline: 'bg-transparent border border-accent-start text-accent-start hover:bg-accent-start hover:text-background',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
