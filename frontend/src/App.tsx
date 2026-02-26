import React from 'react';
import Header from './components/Header';
import { Zap, ArrowRight, Globe, Shield, BarChart3, Code2, Heart, ChevronRight } from 'lucide-react';

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection: React.FC = () => (
    <section
        className="relative overflow-hidden py-24 md:py-32 px-4 md:px-6 lg:px-8 xl:px-12"
        style={{ background: 'linear-gradient(135deg, oklch(0.22 0.07 160) 0%, oklch(0.16 0.05 160) 60%, oklch(0.12 0.04 160) 100%)' }}
    >
        {/* Background decoration */}
        <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ backgroundColor: 'oklch(0.72 0.18 65)' }}
        />
        <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
            style={{ backgroundColor: 'oklch(0.72 0.18 65)' }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                style={{
                    backgroundColor: 'oklch(0.72 0.18 65 / 0.15)',
                    color: 'oklch(0.72 0.18 65)',
                    border: '1px solid oklch(0.72 0.18 65 / 0.3)',
                }}
            >
                <Zap size={12} />
                Responsive 3-Level Navigation Demo
            </div>

            <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                style={{
                    fontFamily: '"Playfair Display", serif',
                    color: 'oklch(0.97 0.008 95)',
                }}
            >
                Header Width
                <br />
                <span style={{ color: 'oklch(0.72 0.18 65)' }}>Responsive</span>
                <br />
                3-Level Menu
            </h1>

            <p
                className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                style={{ color: 'oklch(0.75 0.03 160)' }}
            >
                Explore the full-width sticky header above. On desktop, hover over any nav item to reveal
                Level 2 dropdowns, then hover a sub-item to see Level 3 flyouts. On mobile, tap the
                hamburger icon for the accordion-style menu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    className="px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wider transition-all duration-150 hover:opacity-90 hover:scale-105 flex items-center gap-2 justify-center"
                    style={{
                        backgroundColor: 'oklch(0.72 0.18 65)',
                        color: 'oklch(0.18 0.06 160)',
                    }}
                >
                    Explore Menu <ArrowRight size={16} />
                </button>
                <button
                    className="px-8 py-3.5 rounded font-bold text-sm uppercase tracking-wider transition-all duration-150 flex items-center gap-2 justify-center"
                    style={{
                        border: '2px solid oklch(0.72 0.18 65 / 0.4)',
                        color: 'oklch(0.97 0.008 95)',
                    }}
                >
                    View Source
                </button>
            </div>
        </div>
    </section>
);

// ─── Feature Cards ────────────────────────────────────────────────────────────
const features = [
    {
        icon: Globe,
        title: 'Full-Width Responsive',
        desc: 'Header stretches to 100% viewport width at every breakpoint — mobile, tablet, and desktop.',
    },
    {
        icon: BarChart3,
        title: '3-Level Hierarchy',
        desc: 'Level 1 top-nav → Level 2 dropdown → Level 3 flyout. Clean, intuitive navigation structure.',
    },
    {
        icon: Shield,
        title: 'Keyboard Accessible',
        desc: 'Full keyboard navigation with Tab, Enter, Space, and Escape key support at all levels.',
    },
    {
        icon: Code2,
        title: 'Mobile Hamburger',
        desc: 'Collapses to an accordion-style mobile menu with expandable levels on smaller screens.',
    },
];

const FeaturesSection: React.FC = () => (
    <section className="py-20 px-4 md:px-6 lg:px-8 xl:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
                <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    What's Included
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    A production-ready navigation component built with React, TypeScript, and Tailwind CSS.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={feature.title}
                            className="p-6 rounded-lg border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group"
                            style={{
                                backgroundColor: 'oklch(0.22 0.07 160 / 0.04)',
                                borderColor: 'oklch(0.22 0.07 160 / 0.15)',
                            }}
                        >
                            <div
                                className="w-10 h-10 rounded flex items-center justify-center mb-4 transition-colors duration-200"
                                style={{
                                    backgroundColor: 'oklch(0.72 0.18 65 / 0.12)',
                                    color: 'oklch(0.72 0.18 65)',
                                }}
                            >
                                <Icon size={20} />
                            </div>
                            <h3 className="font-bold text-base mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

// ─── Instructions Section ─────────────────────────────────────────────────────
const InstructionsSection: React.FC = () => (
    <section
        className="py-16 px-4 md:px-6 lg:px-8 xl:px-12"
        style={{ backgroundColor: 'oklch(0.22 0.07 160 / 0.04)' }}
    >
        <div className="max-w-4xl mx-auto">
            <h2
                className="text-2xl md:text-3xl font-bold mb-8 text-center"
                style={{ fontFamily: '"Playfair Display", serif' }}
            >
                How to Interact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Desktop */}
                <div
                    className="p-6 rounded-lg border"
                    style={{
                        borderColor: 'oklch(0.22 0.07 160 / 0.2)',
                        backgroundColor: 'oklch(0.22 0.07 160 / 0.06)',
                    }}
                >
                    <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                        <span
                            className="px-2 py-0.5 rounded text-xs font-bold uppercase"
                            style={{
                                backgroundColor: 'oklch(0.72 0.18 65)',
                                color: 'oklch(0.18 0.06 160)',
                            }}
                        >
                            Desktop
                        </span>
                        Hover Navigation
                    </h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                            <span className="font-bold text-foreground flex-shrink-0">1.</span>
                            Hover over any top-level nav item (Products, Solutions, etc.)
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-foreground flex-shrink-0">2.</span>
                            A Level 2 dropdown appears with sub-items and descriptions
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-foreground flex-shrink-0">3.</span>
                            Hover a sub-item with a{' '}
                            <ChevronRight size={12} className="inline flex-shrink-0 self-center" />{' '}
                            arrow to reveal the Level 3 flyout
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-foreground flex-shrink-0">4.</span>
                            Move cursor away to close all menus
                        </li>
                    </ol>
                </div>

                {/* Mobile */}
                <div
                    className="p-6 rounded-lg border"
                    style={{
                        borderColor: 'oklch(0.22 0.07 160 / 0.2)',
                        backgroundColor: 'oklch(0.22 0.07 160 / 0.06)',
                    }}
                >
                    <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                        <span
                            className="px-2 py-0.5 rounded text-xs font-bold uppercase"
                            style={{
                                backgroundColor: 'oklch(0.32 0.09 160)',
                                color: 'oklch(0.97 0.008 95)',
                            }}
                        >
                            Mobile
                        </span>
                        Tap Navigation
                    </h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                            <span className="font-bold text-foreground flex-shrink-0">1.</span>
                            Tap the ☰ hamburger icon in the top-right corner
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-foreground flex-shrink-0">2.</span>
                            The full-screen mobile menu slides open
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-foreground flex-shrink-0">3.</span>
                            Tap a Level 1 item to expand its Level 2 sub-items
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-foreground flex-shrink-0">4.</span>
                            Tap a Level 2 item to expand its Level 3 sub-items
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    const hostname = typeof window !== 'undefined' ? window.location.hostname : 'unknown-app';
    const utmContent = encodeURIComponent(hostname);

    return (
        <footer
            className="py-8 px-4 md:px-6 lg:px-8 xl:px-12 border-t"
            style={{
                borderColor: 'oklch(0.22 0.07 160 / 0.15)',
                backgroundColor: 'oklch(0.22 0.07 160 / 0.04)',
            }}
        >
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div
                        className="w-6 h-6 rounded flex items-center justify-center"
                        style={{ backgroundColor: 'oklch(0.72 0.18 65)' }}
                    >
                        <Zap size={13} style={{ color: 'oklch(0.18 0.06 160)' }} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-sm" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Forge<span style={{ color: 'oklch(0.72 0.18 65)' }}>.</span>
                    </span>
                    <span className="text-muted-foreground text-sm">© {year}</span>
                </div>

                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    Built with{' '}
                    <Heart
                        size={14}
                        className="fill-current"
                        style={{ color: 'oklch(0.72 0.18 65)' }}
                    />{' '}
                    using{' '}
                    <a
                        href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${utmContent}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:underline transition-colors"
                        style={{ color: 'oklch(0.72 0.18 65)' }}
                    >
                        caffeine.ai
                    </a>
                </p>
            </div>
        </footer>
    );
};

// ─── App ──────────────────────────────────────────────────────────────────────
const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <HeroSection />
                <FeaturesSection />
                <InstructionsSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
