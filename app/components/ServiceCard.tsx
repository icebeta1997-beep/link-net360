'use client';

import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    index: number;
    href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, index, href }: ServiceCardProps) {
    const Wrapper = href ? motion.a : motion.div;

    return (
        <Wrapper
            {...(href ? { href } : {})}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative rounded-2xl p-6 glass cursor-pointer overflow-hidden"
        >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--primary-600)]/10 to-[var(--accent-500)]/5" />

            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-1px] rounded-2xl p-[1px] bg-gradient-to-br from-[var(--primary-600)]/40 to-[var(--accent-500)]/40"
                    style={{
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                    }}
                />
            </div>

            <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary-600)]/20 to-[var(--accent-500)]/10 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-[var(--primary-600)]/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[var(--primary-500)] group-hover:text-[var(--accent-400)] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>
        </Wrapper>
    );
}
