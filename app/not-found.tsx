import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
            <div className="hero-glow bg-[var(--primary-700)] top-1/4 -left-40 animate-pulse-glow" />
            <div className="hero-glow bg-[var(--accent-500)] bottom-1/4 -right-40 animate-pulse-glow" style={{ animationDelay: '2s' }} />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="section-container relative z-10 text-center py-32">
                {/* 404 Number */}
                <h1 className="text-[8rem] sm:text-[12rem] font-bold leading-none gradient-text mb-2 select-none">
                    404
                </h1>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Page Not Found
                </h2>

                <p className="text-lg text-[var(--text-secondary)] max-w-md mx-auto mb-10 leading-relaxed">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let&apos;s get you back on track.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--primary-600)] to-[var(--accent-500)] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[var(--primary-600)]/30 transition-all duration-300 hover:scale-105"
                    >
                        <Home className="w-4 h-4" /> Go Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" /> Contact Us
                    </Link>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
        </section>
    );
}
