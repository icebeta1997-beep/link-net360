import Link from 'next/link';
import { Zap, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
];

const topServices = [
    'Windows & Linux Servers',
    'Network Infrastructure',
    'Firewalls & Security',
    'Virtualization',
    'VoIP Solutions',
    'Managed IT Support',
];

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-[var(--bg-secondary)]">
            {/* Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-600)] to-transparent z-10" />

            {/* Spacer to force distance */}
            <div className="w-full h-24" aria-hidden="true" />

            <div className="section-container pb-16 relative z-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Company */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden shadow-lg shadow-[var(--primary-600)]/30">
                                <img
                                    src="/logo.png"
                                    alt="Link Net360 Logo"
                                    className="w-full h-full object-contain p-1"
                                />
                            </div>
                            <div>
                                <span className="text-lg font-bold text-white block leading-tight">
                                    Link Net<span className="gradient-text">360</span>
                                </span>
                                <span className="text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase block leading-tight">
                                    Technologies — FZCO
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                            Delivering comprehensive IT solutions and infrastructure services across the UAE with enterprise-grade reliability.
                        </p>
                        <div className="flex gap-3">
                            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Top Services */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {topServices.map((s) => (
                                <li key={s}>
                                    <Link href="/services" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200">
                                        {s}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-1 text-[var(--primary-500)] shrink-0" />
                                <span className="text-sm text-[var(--text-secondary)]">Dubai, United Arab Emirates</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[var(--primary-500)] shrink-0" />
                                <a href="tel:+971000000000" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">
                                    +971 XX XXX XXXX
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[var(--primary-500)] shrink-0" />
                                <a href="mailto:info@linknet360.com" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">
                                    info@linknet360.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[var(--text-muted)]">
                        &copy; {new Date().getFullYear()} Link Net360 Technologies — FZCO. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-[var(--text-muted)] hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs text-[var(--text-muted)] hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
