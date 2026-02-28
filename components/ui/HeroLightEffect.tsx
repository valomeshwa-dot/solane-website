"use client";

import React, { useEffect, useRef } from 'react';

export const HeroLightEffect = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const rafId = useRef<number | null>(null);

    // Smooth position tracking (lerp)
    const targetPos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (typeof window === 'undefined' || window.innerWidth < 768) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                targetPos.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                };
            }
        };

        const animate = () => {
            // Lerp smoothing (0.1 factor)
            currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.1;
            currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.1;

            if (glowRef.current) {
                glowRef.current.style.background = `radial-gradient(
          600px circle at ${currentPos.current.x}px ${currentPos.current.y}px,
          rgba(245, 185, 66, 0.18),
          transparent 60%
        )`;
            }

            rafId.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block z-0"
        >
            {/* 1️⃣ Dynamic Glow Layer */}
            <div
                ref={glowRef}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ willChange: 'background' }}
            />

            {/* 2️⃣ Subtle Light Rays */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(245, 185, 66, 0.4) 0px, transparent 1px, transparent 40px)`,
                    backgroundSize: '200% 200%',
                    animation: 'raysMove 20s linear infinite',
                }}
            />

            <style jsx global>{`
        @keyframes raysMove {
          from { background-position: 0% 0%; }
          to { background-position: 100% 100%; }
        }
      `}</style>
        </div>
    );
};
