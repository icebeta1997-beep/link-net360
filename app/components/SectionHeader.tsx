'use client';

import AnimatedSection from './AnimatedSection';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
    return (
        <AnimatedSection className={`mb-16 ${centered ? 'text-center' : ''}`}>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : ''}`}>
                {title.split(' ').map((word, i, arr) =>
                    i === arr.length - 1 ? (
                        <span key={i} className="gradient-text"> {word}</span>
                    ) : (
                        <span key={i}> {word}</span>
                    )
                )}
            </h2>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--accent-500)] mx-auto mb-6" />
            {subtitle && (
                <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                    {subtitle}
                </p>
            )}
        </AnimatedSection>
    );
}
