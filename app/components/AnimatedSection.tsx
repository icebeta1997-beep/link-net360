'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    direction?: Direction;
    delay?: number;
    duration?: number;
}

const getVariants = (direction: Direction): Variants => {
    const offsets: Record<Direction, { x: number; y: number }> = {
        up: { x: 0, y: 40 },
        down: { x: 0, y: -40 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 },
    };

    return {
        hidden: {
            opacity: 0,
            x: offsets[direction].x,
            y: offsets[direction].y,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };
};

export default function AnimatedSection({
    children,
    className = '',
    direction = 'up',
    delay = 0,
    duration = 0.6,
}: AnimatedSectionProps) {
    return (
        <motion.div
            variants={getVariants(direction)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration,
                delay,
                ease: [0.4, 0, 0.2, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
