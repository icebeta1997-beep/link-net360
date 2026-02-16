'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, CheckCircle2, Cpu, Wrench, FolderOpen } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { serviceCategories } from '../data/services';

function ServiceAccordion({ category, index }: { category: typeof serviceCategories[0]; index: number }) {
    const [open, setOpen] = useState(false);
    const Icon = category.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="glass rounded-2xl overflow-hidden"
        >
            {/* Header (always visible) */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
            >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-[var(--primary-600)]/20 to-[var(--accent-500)]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[var(--primary-500)]" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-1 line-clamp-1">{category.shortDescription}</p>
                </div>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-[var(--text-muted)] shrink-0" />
                </motion.div>
            </button>

            {/* Expanded Content */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-0 border-t border-white/5">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                                {/* Services List */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-400)]" />
                                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        {category.services.map((s) => (
                                            <li key={s} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)] mt-1.5 shrink-0" />
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Hardware Vendors */}
                                {category.hardwareVendors && category.hardwareVendors.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Cpu className="w-4 h-4 text-[var(--accent-400)]" />
                                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                                                Hardware / Vendors
                                            </h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {category.hardwareVendors.map((v) => (
                                                <li key={v} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-500)] mt-1.5 shrink-0" />
                                                    {v}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Software */}
                                {(category.software.paid.length > 0 || category.software.openSource.length > 0) && (
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <FolderOpen className="w-4 h-4 text-[var(--accent-400)]" />
                                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Software</h4>
                                        </div>
                                        {category.software.paid.length > 0 && (
                                            <div className="mb-3">
                                                <span className="text-xs font-medium text-[var(--primary-400)] uppercase tracking-wider">Paid</span>
                                                <ul className="mt-1 space-y-1.5">
                                                    {category.software.paid.map((s) => (
                                                        <li key={s} className="text-sm text-[var(--text-secondary)]">• {s}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {category.software.openSource.length > 0 && (
                                            <div>
                                                <span className="text-xs font-medium text-green-400 uppercase tracking-wider">Open Source</span>
                                                <ul className="mt-1 space-y-1.5">
                                                    {category.software.openSource.map((s) => (
                                                        <li key={s} className="text-sm text-[var(--text-secondary)]">• {s}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function ServicesClient() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
                <div className="hero-glow bg-[var(--primary-700)] -top-20 -right-40 animate-pulse-glow" />
                <div className="section-container relative z-10 text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[var(--accent-400)] mb-6">
                            <Wrench className="w-3.5 h-3.5" /> 16 Service Categories
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Our <span className="gradient-text">Services</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-lg leading-relaxed">
                            From server deployment to managed IT support, we deliver enterprise-grade solutions tailored to your business needs in the UAE.
                        </p>
                    </AnimatedSection>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
            </section>

            {/* All Services */}
            <section className="py-24">
                <div className="section-container">
                    <SectionHeader
                        title="Service Catalog"
                        subtitle="Click on any category to explore detailed services, supported hardware vendors, and software solutions."
                    />

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {serviceCategories.map((cat, i) => (
                            <ServiceAccordion key={cat.id} category={cat} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="section-container">
                    <AnimatedSection>
                        <div className="relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center bg-gradient-to-br from-[var(--primary-800)] via-[var(--primary-700)] to-[var(--accent-600)]">
                            <div className="hero-glow bg-white/10 -top-40 -right-40" />
                            <div className="relative z-10">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    Need a Custom IT Solution?
                                </h2>
                                <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                                    Our team will design a tailored solution that fits your exact requirements and budget.
                                </p>
                                <Button href="/contact">
                                    Request a Consultation <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
