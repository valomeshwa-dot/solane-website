"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export default function Magnetic({ children, amount, className }: { children: React.ReactNode; amount?: number; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove(e: React.MouseEvent) {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("inline-block", className)}
        >
            {children}
        </motion.div>
    );
}
