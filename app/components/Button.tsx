import Link from 'next/link';
import { type ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary';
    className?: string;
    type?: 'button' | 'submit';
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({
    children,
    href,
    variant = 'primary',
    className = '',
    type = 'button',
    onClick,
    disabled = false,
}: ButtonProps) {
    const base =
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-sm px-7 py-3.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary:
            'bg-gradient-to-r from-[var(--primary-600)] to-[var(--accent-500)] text-white hover:shadow-lg hover:shadow-[var(--primary-600)]/30 hover:scale-105 disabled:hover:scale-100 disabled:hover:shadow-none',
        secondary:
            'border border-white/15 text-white hover:bg-white/5 hover:border-white/30',
    };

    const classes = `${base} ${variants[variant]} ${className}`;

    if (href && !disabled) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes} disabled={disabled}>
            {children}
        </button>
    );
}
