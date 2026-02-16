'use client';

import { ArrowRight, ChevronRight, Shield, Users, Cpu, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './components/Button';
import SectionHeader from './components/SectionHeader';
import ServiceCard from './components/ServiceCard';
import StatsCounter from './components/StatsCounter';
import AnimatedSection from './components/AnimatedSection';
import { serviceCategories } from './data/services';

const whyChooseUs = [
  { icon: Clock, title: '24/7 Support', description: 'Round-the-clock helpdesk and on-site support to keep your business running.' },
  { icon: Users, title: 'Expert Team', description: 'Certified engineers with deep expertise across all major IT platforms and vendors.' },
  { icon: Cpu, title: 'Latest Technology', description: 'We deploy cutting-edge solutions from world-leading technology partners.' },
  { icon: Shield, title: 'UAE-Based', description: 'Local presence in Dubai with deep understanding of UAE business requirements.' },
];

export default function Home() {
  return (
    <>
      {/* ======================== HERO ======================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="hero-glow bg-[var(--primary-700)] top-1/4 -left-40 animate-pulse-glow" />
        <div className="hero-glow bg-[var(--accent-500)] bottom-1/4 -right-40 animate-pulse-glow" style={{ animationDelay: '2s' }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="section-container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[var(--accent-400)] mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-400)] animate-pulse" />
                Enterprise IT Solutions in the UAE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Powering Your
              <br />
              <span className="gradient-text">Digital Infrastructure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10"
            >
              Link Net360 Technologies — FZCO provides end-to-end IT solutions,
              from server deployment and network design to managed support contracts.
              We keep your business connected, secure, and always online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/services">
                Our Services <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
      </section>

      {/* ======================== SERVICES OVERVIEW ======================== */}
      <section className="py-24 relative">
        <div className="section-container">
          <SectionHeader
            title="What We Offer"
            subtitle="Comprehensive IT solutions spanning 16 specialized service categories to cover every aspect of your digital infrastructure."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCategories.map((cat, i) => (
              <ServiceCard
                key={cat.id}
                icon={cat.icon}
                title={cat.title}
                description={cat.shortDescription}
                index={i}
                href="/services"
              />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button href="/services" variant="secondary">
              View All Services <ArrowRight className="w-4 h-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ======================== STATS ======================== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-950)]/20 to-transparent" />
        <div className="section-container relative z-10">
          <div className="glass rounded-3xl p-10 sm:p-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              <StatsCounter value={10} suffix="+" label="Years of Experience" />
              <StatsCounter value={200} suffix="+" label="Clients Served" />
              <StatsCounter value={500} suffix="+" label="Projects Completed" />
              <StatsCounter value={16} label="Service Categories" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================== WHY CHOOSE US ======================== */}
      <section className="py-24 relative">
        <div className="section-container">
          <SectionHeader
            title="Why Choose Us"
            subtitle="We combine deep technical expertise with a customer-first approach to deliver IT solutions that drive real business results."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 h-full text-center hover:bg-[var(--glass-hover)] transition-colors duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-600)]/20 to-[var(--accent-500)]/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-[var(--primary-500)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CTA BANNER ======================== */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center bg-gradient-to-br from-[var(--primary-800)] via-[var(--primary-700)] to-[var(--accent-600)]">
              <div className="hero-glow bg-white/10 -top-40 -right-40" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                  Get in touch with our team for a free consultation and discover how we can elevate your business technology.
                </p>
                <Button href="/contact">
                  Get Started Today <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
