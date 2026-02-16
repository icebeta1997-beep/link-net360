'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'glass-strong shadow-lg shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <nav className="section-container flex items-center justify-between h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden shadow-lg shadow-[var(--primary-600)]/30 transition-transform duration-300 group-hover:scale-110">
                        <img
                            src="/logo.png"
                            alt="Link Net360 Logo"
                            className="w-full h-full object-contain p-1"
                        />
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-lg font-bold text-white leading-tight block">
                            Link Net<span className="gradient-text">360</span>
                        </span>
                        <span className="text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase leading-tight block">
                            Technologies
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                                    ? 'text-white'
                                    : 'text-[var(--text-secondary)] hover:text-white'
                                    }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-active"
                                        className="absolute inset-0 rounded-lg bg-white/10"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        className="ml-4 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--primary-600)] to-[var(--accent-500)] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[var(--primary-600)]/30 transition-all duration-300 hover:scale-105"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="md:hidden glass-strong overflow-hidden border-t border-white/5"
                    >
                        <div className="section-container py-6 flex flex-col gap-2">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive
                                                ? 'bg-white/10 text-white'
                                                : 'text-[var(--text-secondary)] hover:bg-white/5 hover:text-white'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <Link
                                href="/contact"
                                className="mt-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[var(--primary-600)] to-[var(--accent-500)] text-white text-center font-semibold"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
