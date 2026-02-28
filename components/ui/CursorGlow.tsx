'use client';

import React, { useEffect, useState } from 'react';

export const CursorGlow = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            if (isMobile) return;

            // No requestAnimationFrame here for simplicity as it's a very light operation
            // and we want zero lag for the cursor itself
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300"
            style={{
                opacity: position.x === -100 ? 0 : 1,
            }}
        >
            <div
                className="absolute w-[700px] h-[700px] rounded-full blur-[180px]"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: "translate(-50%, -50%)",
                    background: "radial-gradient(circle, rgba(255,170,0,0.18) 0%, rgba(255,170,0,0.12) 40%, transparent 70%)",
                }}
            />
        </div>
    );
};
