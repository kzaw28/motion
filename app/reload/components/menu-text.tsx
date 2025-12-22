"use client";
import { motion } from "motion/react";
import { Roboto } from "next/font/google";
import { useState } from "react";

const roboto = Roboto({
    weight: ["700"],
    subsets: ["latin"],
});

export default function MenuText({ children }: { children: React.ReactNode }) {
    const [width, setWidth] = useState<number | undefined>(undefined);
    
    // Find the width of the hover background by the left position of the div
    const measureRef = (node: HTMLDivElement | null) => {
        if (node) {
            const left = node.getBoundingClientRect().left;
            setWidth(window.innerWidth - left);
        }
    }

    return (
        <motion.div ref={measureRef} className="relative">
            <h1 className={`text-5xl uppercase tracking-tighter leading-8 ${roboto.className}`}>{children}</h1>
            <motion.div 
                className="h-8 z-[-1] bg-[#0101C7] absolute left-0 top-1"
                style={{ width: width ?? '100%' }}
            />
        </motion.div>
    );
}