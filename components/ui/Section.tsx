import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({
  children,
  className,
  id,
  showDivider = false,
  variant = 'default'
}: SectionProps & {
  showDivider?: boolean;
  variant?: 'default' | 'tonal';
}) => {
  return (
    <section
      id={id}
      className={cn(
        'relative py-24',
        variant === 'tonal' && 'bg-white/[0.01]',
        showDivider && 'border-b border-white/[0.03]',
        className
      )}
    >
      {showDivider && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-linear-to-r from-transparent via-white/10 to-transparent" />
      )}
      {children}
    </section>
  );
};
