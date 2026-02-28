'use client';

import React from 'react';

interface ElectricBorderCardProps {
    children: React.ReactNode;
    className?: string;
}

export const ElectricBorderCard = ({ children, className = '' }: ElectricBorderCardProps) => {
    return (
        <div className={`relative p-[1px] rounded-xl overflow-hidden group ${className}`}>
            {/* The electric border effect */}
            <div
                className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] transition-all opacity-0 group-hover:opacity-100"
                style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(245, 185, 66, 0.4) 10%, transparent 20%, transparent 50%, rgba(245, 185, 66, 0.4) 70%, transparent 80%)',
                }}
            />

            {/* Inner background to create border effect */}
            <div className="relative bg-[#0f0f10] rounded-[11px] h-full w-full z-10 transition-colors group-hover:bg-[#151516]">
                {children}
            </div>
        </div>
    );
};
