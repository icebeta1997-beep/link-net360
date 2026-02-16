'use client';

import { ArrowRight, Target, Eye, Lightbulb, Handshake, Award, Zap, Globe2, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

const coreValues = [
    { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of the curve, adopting the latest technologies to deliver cutting-edge solutions.' },
    { icon: ShieldCheck, title: 'Reliability', description: 'Our clients count on us for rock-solid infrastructure and unwavering uptime.' },
    { icon: Award, title: 'Excellence', description: 'Every project is executed to the highest standards with meticulous attention to detail.' },
    { icon: Handshake, title: 'Partnership', description: 'We treat every client relationship as a long-term strategic partnership.' },
];

const highlights = [
    { icon: Globe2, title: 'UAE-Based & Globally Connected', description: 'Headquartered in Dubai with partnerships spanning major global technology vendors.' },
    { icon: Zap, title: '16 Specialized Service Areas', description: 'From servers and networking to cloud, VoIP, and managed support — we cover everything.' },
    { icon: ShieldCheck, title: 'Certified & Experienced', description: 'Our engineers hold certifications across Cisco, Microsoft, VMware, Fortinet, and more.' },
    { icon: Award, title: 'SLA-Backed Service Contracts', description: 'Enterprise-grade Annual Maintenance Contracts with guaranteed response times.' },
];

export default function AboutClient() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
                <div className="hero-glow bg-[var(--primary-700)] -top-20 -left-40 animate-pulse-glow" />
                <div className="section-container relative z-10 text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[var(--accent-400)] mb-6">
                            About Our Company
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            About <span className="gradient-text">Link Net360</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-lg leading-relaxed">
                            A Dubai-based IT solutions provider committed to empowering businesses with reliable, scalable, and secure technology infrastructure.
                        </p>
                    </AnimatedSection>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
            </section>

            {/* Company Overview */}
            <section className="py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection>
                            <div className="glass rounded-3xl p-10 sm:p-14">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Who We Are</h2>
                                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                                    <p>
                                        <strong className="text-white">Link Net360 Technologies — FZCO</strong> is a comprehensive IT solutions and services company
                                        based in Dubai, United Arab Emirates. We specialize in designing, deploying, and managing enterprise-grade IT infrastructure
                                        for businesses of all sizes.
                                    </p>
                                    <p>
                                        With expertise spanning 16 specialized service categories — from Windows and Linux server management to network design,
                                        cybersecurity, virtualization, VoIP, cloud services, and managed IT support — we serve as a single point of contact
                                        for all your technology needs.
                                    </p>
                                    <p>
                                        Our team of certified engineers partners with world-leading hardware and software vendors including Dell EMC, HPE, Cisco,
                                        Fortinet, VMware, and Microsoft to deliver solutions that are reliable, secure, and built for growth.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-950)]/20 to-transparent" />
                <div className="section-container relative z-10">
                    <SectionHeader title="Mission & Vision" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <AnimatedSection direction="left">
                            <div className="glass rounded-2xl p-8 h-full">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-600)]/20 to-[var(--accent-500)]/10 flex items-center justify-center mb-5">
                                    <Target className="w-7 h-7 text-[var(--primary-500)]" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    To deliver reliable, innovative, and cost-effective IT solutions that empower businesses across the UAE
                                    to operate efficiently, securely, and at scale — backed by world-class support and local expertise.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection direction="right">
                            <div className="glass rounded-2xl p-8 h-full">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-600)]/20 to-[var(--accent-500)]/10 flex items-center justify-center mb-5">
                                    <Eye className="w-7 h-7 text-[var(--primary-500)]" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    To be the most trusted IT infrastructure partner in the UAE — recognized for technical excellence,
                                    proactive service, and deep commitment to our clients&apos; success in an increasingly digital world.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24">
                <div className="section-container">
                    <SectionHeader
                        title="Our Core Values"
                        subtitle="The principles that guide everything we do at Link Net360 Technologies."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {coreValues.map((val, i) => (
                            <AnimatedSection key={val.title} delay={i * 0.1}>
                                <div className="glass rounded-2xl p-8 h-full text-center hover:bg-[var(--glass-hover)] transition-colors duration-300">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-600)]/20 to-[var(--accent-500)]/10 flex items-center justify-center mx-auto mb-5">
                                        <val.icon className="w-7 h-7 text-[var(--primary-500)]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">{val.title}</h3>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{val.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Link Net360 */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-950)]/20 to-transparent" />
                <div className="section-container relative z-10">
                    <SectionHeader
                        title="Why Link Net360"
                        subtitle="What sets us apart as your trusted IT partner in the UAE."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {highlights.map((item, i) => (
                            <AnimatedSection key={item.title} delay={i * 0.1}>
                                <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:bg-[var(--glass-hover)] transition-colors duration-300">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-[var(--primary-600)]/20 to-[var(--accent-500)]/10 flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-[var(--primary-500)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
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
                                    Let&apos;s Build Something Great Together
                                </h2>
                                <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                                    Whatever your IT challenge, our team is ready to help you find the right solution.
                                </p>
                                <Button href="/contact">
                                    Get in Touch <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
