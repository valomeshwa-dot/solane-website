"use client";

import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const MagneticButton = ({ children, className = '', onClick }: MagneticButtonProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        // Calculate distance from center
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Apply magnetic pull (x/5, y/5) + scale(1.05)
        setTransform({
            x: x / 5,
            y: y / 5,
            scale: 1.05
        });
    };

    const handleMouseLeave = () => {
        // Reset to zero position and scale
        setTransform({ x: 0, y: 0, scale: 1 });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`inline-block transition-transform duration-200 ease-out ${className}`}
            style={{
                transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                willChange: 'transform',
            }}
            onClick={onClick}
        >
            <div className="relative group">
                {/* Subtle glow shadow on hover */}
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                    {children}
                </div>
            </div>
        </div>
    );
};
