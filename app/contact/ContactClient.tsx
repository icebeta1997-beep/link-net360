'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

const contactInfo = [
    { icon: Phone, title: 'Call Us', info: '+971 XX XXX XXXX', sub: 'Mon-Sat 9AM-6PM GST', href: 'tel:+971000000000' },
    { icon: Mail, title: 'Email Us', info: 'info@linknet360.com', sub: 'We reply within 24 hours', href: 'mailto:info@linknet360.com' },
    { icon: MapPin, title: 'Visit Us', info: 'Dubai, UAE', sub: 'United Arab Emirates', href: '#' },
    { icon: Clock, title: 'Business Hours', info: 'Sun-Thu: 9AM-6PM', sub: 'Fri-Sat: By Appointment', href: '#' },
];

export default function ContactClient() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
                <div className="hero-glow bg-[var(--accent-500)] -top-20 -right-40 animate-pulse-glow" />
                <div className="section-container relative z-10 text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[var(--accent-400)] mb-6">
                            <Mail className="w-3.5 h-3.5" /> Get in Touch
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Contact <span className="gradient-text">Us</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-lg leading-relaxed">
                            Have a question or need a custom IT solution? Reach out to us and our team will get back to you promptly.
                        </p>
                    </AnimatedSection>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
            </section>

            {/* Contact Info Cards */}
            <section className="py-24">
                <div className="section-container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {contactInfo.map((item, i) => (
                            <AnimatedSection key={item.title} delay={i * 0.1}>
                                <a
                                    href={item.href}
                                    className="glass rounded-2xl p-6 text-center h-full block hover:bg-[var(--glass-hover)] transition-colors duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary-600)]/20 to-[var(--accent-500)]/10 flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="w-6 h-6 text-[var(--primary-500)]" />
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                                    <p className="text-sm text-[var(--accent-400)] font-medium">{item.info}</p>
                                    <p className="text-xs text-[var(--text-muted)] mt-1">{item.sub}</p>
                                </a>
                            </AnimatedSection>
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
                                    Quick Response Guaranteed
                                </h2>
                                <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                                    Our team responds to all inquiries within 24 hours. For urgent requests, call us directly.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Button href="tel:+971000000000">
                                        <Phone className="w-4 h-4" /> Call Now
                                    </Button>
                                    <Button href="mailto:info@linknet360.com" variant="secondary">
                                        <Mail className="w-4 h-4" /> Email Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
