import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu, X, Zap } from 'lucide-react';
import { navigationData, type NavLevel1Item, type NavLevel2Item } from '../data/navigationData';

// ─── Desktop Level-3 Flyout ───────────────────────────────────────────────────
interface FlyoutProps {
    items: NavLevel2Item['children'];
    visible: boolean;
}

const Level3Flyout: React.FC<FlyoutProps> = ({ items, visible }) => {
    if (!visible || !items || items.length === 0) return null;

    return (
        <div
            className="nav-flyout flyout-enter absolute left-full top-0 ml-1 z-50"
            role="menu"
            aria-label="Sub-submenu"
        >
            <div className="py-1.5">
                {items.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className="nav-l3-item"
                        role="menuitem"
                        onClick={(e) => e.preventDefault()}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 flex-shrink-0" />
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

// ─── Desktop Level-2 Dropdown ─────────────────────────────────────────────────
interface DropdownProps {
    items: NavLevel1Item['children'];
    visible: boolean;
}

const Level2Dropdown: React.FC<DropdownProps> = ({ items, visible }) => {
    const [activeL2, setActiveL2] = useState<string | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleL2Enter = useCallback((id: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveL2(id);
    }, []);

    const handleL2Leave = useCallback(() => {
        timeoutRef.current = setTimeout(() => setActiveL2(null), 120);
    }, []);

    const handleFlyoutEnter = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        if (!visible) setActiveL2(null);
    }, [visible]);

    if (!visible || !items || items.length === 0) return null;

    return (
        <div
            className="nav-dropdown dropdown-enter absolute top-full left-0 mt-1 z-40"
            role="menu"
            aria-label="Submenu"
        >
            <div className="py-1.5">
                {items.map((item) => {
                    const hasChildren = item.children && item.children.length > 0;
                    const isActive = activeL2 === item.id;

                    return (
                        <div
                            key={item.id}
                            className="relative"
                            onMouseEnter={() => handleL2Enter(item.id)}
                            onMouseLeave={handleL2Leave}
                        >
                            <a
                                href={item.href}
                                className={`nav-l2-item ${isActive ? 'active' : ''}`}
                                role="menuitem"
                                aria-haspopup={hasChildren ? 'true' : undefined}
                                aria-expanded={hasChildren ? isActive : undefined}
                                onClick={(e) => e.preventDefault()}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setActiveL2(isActive ? null : item.id);
                                    }
                                    if (e.key === 'Escape') setActiveL2(null);
                                }}
                            >
                                <span className="flex flex-col">
                                    <span>{item.label}</span>
                                    {item.description && (
                                        <span className="text-xs opacity-50 font-normal mt-0.5">
                                            {item.description}
                                        </span>
                                    )}
                                </span>
                                {hasChildren && (
                                    <ChevronRight
                                        size={14}
                                        className={`flex-shrink-0 transition-transform duration-150 ${isActive ? 'text-amber-400' : 'opacity-50'}`}
                                    />
                                )}
                            </a>

                            {hasChildren && (
                                <div onMouseEnter={handleFlyoutEnter} onMouseLeave={handleL2Leave}>
                                    <Level3Flyout items={item.children} visible={isActive} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// ─── Desktop Nav Item (Level 1) ───────────────────────────────────────────────
interface NavItemProps {
    item: NavLevel1Item;
}

const DesktopNavItem: React.FC<NavItemProps> = ({ item }) => {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const hasChildren = item.children && item.children.length > 0;

    const handleEnter = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    }, []);

    const handleLeave = useCallback(() => {
        timeoutRef.current = setTimeout(() => setOpen(false), 150);
    }, []);

    const handleDropdownEnter = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }, []);

    return (
        <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <a
                href={item.href}
                className={`nav-l1-item ${open ? 'active' : ''}`}
                role="menuitem"
                aria-haspopup={hasChildren ? 'true' : undefined}
                aria-expanded={hasChildren ? open : undefined}
                onClick={(e) => e.preventDefault()}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setOpen((prev) => !prev);
                    }
                    if (e.key === 'Escape') setOpen(false);
                }}
                tabIndex={0}
            >
                {item.label}
                {hasChildren && (
                    <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    />
                )}
            </a>

            {hasChildren && (
                <div onMouseEnter={handleDropdownEnter} onMouseLeave={handleLeave}>
                    <Level2Dropdown items={item.children} visible={open} />
                </div>
            )}
        </div>
    );
};

// ─── Mobile Level-3 Items ─────────────────────────────────────────────────────
interface MobileL3Props {
    items: NavLevel2Item['children'];
    visible: boolean;
}

const MobileLevel3: React.FC<MobileL3Props> = ({ items, visible }) => {
    if (!visible || !items || items.length === 0) return null;

    return (
        <div className="mobile-expand">
            {items.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    className="mobile-l3-item"
                    onClick={(e) => e.preventDefault()}
                >
                    <span className="w-1 h-1 rounded-full bg-current opacity-40 flex-shrink-0" />
                    {item.label}
                </a>
            ))}
        </div>
    );
};

// ─── Mobile Level-2 Items ─────────────────────────────────────────────────────
interface MobileL2Props {
    items: NavLevel1Item['children'];
    visible: boolean;
}

const MobileLevel2: React.FC<MobileL2Props> = ({ items, visible }) => {
    const [openL2, setOpenL2] = useState<string | null>(null);

    useEffect(() => {
        if (!visible) setOpenL2(null);
    }, [visible]);

    if (!visible || !items || items.length === 0) return null;

    return (
        <div className="mobile-expand">
            {items.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isOpen = openL2 === item.id;

                return (
                    <div key={item.id}>
                        <button
                            className={`mobile-l2-item w-full text-left ${isOpen ? 'active' : ''}`}
                            onClick={() => setOpenL2(isOpen ? null : item.id)}
                            aria-expanded={hasChildren ? isOpen : undefined}
                        >
                            <span>{item.label}</span>
                            {hasChildren && (
                                <ChevronDown
                                    size={14}
                                    className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                />
                            )}
                        </button>
                        {hasChildren && (
                            <MobileLevel3 items={item.children} visible={isOpen} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
    const [openL1, setOpenL1] = useState<string | null>(null);

    useEffect(() => {
        if (!open) setOpenL1(null);
    }, [open]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="mobile-menu fixed inset-x-0 top-[64px] bottom-0 z-50 overflow-y-auto lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
        >
            <nav>
                {navigationData.map((item) => {
                    const hasChildren = item.children && item.children.length > 0;
                    const isOpen = openL1 === item.id;

                    return (
                        <div key={item.id}>
                            <button
                                className={`mobile-l1-item w-full text-left ${isOpen ? 'active' : ''}`}
                                onClick={() => setOpenL1(isOpen ? null : item.id)}
                                aria-expanded={hasChildren ? isOpen : undefined}
                            >
                                <span>{item.label}</span>
                                {hasChildren && (
                                    <ChevronDown
                                        size={16}
                                        className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                )}
                            </button>
                            {hasChildren && (
                                <MobileLevel2 items={item.children} visible={isOpen} />
                            )}
                        </div>
                    );
                })}

                {/* CTA in mobile menu */}
                <div className="p-4 border-t" style={{ borderColor: 'oklch(0.30 0.07 160)' }}>
                    <button
                        className="w-full py-3 px-6 rounded font-bold text-sm uppercase tracking-wider transition-all duration-150"
                        style={{
                            backgroundColor: 'oklch(0.72 0.18 65)',
                            color: 'oklch(0.18 0.06 160)',
                        }}
                        onClick={onClose}
                    >
                        Get Started
                    </button>
                </div>
            </nav>
        </div>
    );
};

// ─── Main Header ──────────────────────────────────────────────────────────────
const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobile = useCallback(() => {
        setMobileOpen((prev) => !prev);
    }, []);

    const closeMobile = useCallback(() => {
        setMobileOpen(false);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <header
                className="nav-header w-full h-16 flex items-center sticky top-0 z-50"
                role="banner"
            >
                <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8 xl:px-12">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-2 flex-shrink-0"
                        onClick={(e) => e.preventDefault()}
                        aria-label="Home"
                    >
                        <div
                            className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: 'oklch(0.72 0.18 65)' }}
                        >
                            <Zap size={18} style={{ color: 'oklch(0.18 0.06 160)' }} strokeWidth={2.5} />
                        </div>
                        <span className="nav-logo-text text-xl font-bold tracking-tight">
                            Forge<span className="nav-logo-dot">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav
                        className="hidden lg:flex items-center gap-1 flex-1 justify-center"
                        role="menubar"
                        aria-label="Main navigation"
                    >
                        {navigationData.map((item) => (
                            <DesktopNavItem key={item.id} item={item} />
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                        <a
                            href="#signin"
                            className="nav-l1-item text-sm"
                            onClick={(e) => e.preventDefault()}
                        >
                            Sign In
                        </a>
                        <a
                            href="#get-started"
                            className="px-5 py-2 rounded font-bold text-sm uppercase tracking-wider transition-all duration-150 hover:opacity-90 hover:scale-105"
                            style={{
                                backgroundColor: 'oklch(0.72 0.18 65)',
                                color: 'oklch(0.18 0.06 160)',
                            }}
                            onClick={(e) => e.preventDefault()}
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden flex items-center justify-center w-10 h-10 rounded transition-colors duration-150"
                        style={{
                            color: 'oklch(0.97 0.008 95)',
                        }}
                        onClick={toggleMobile}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <MobileMenu open={mobileOpen} onClose={closeMobile} />

            {/* Mobile overlay backdrop */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 top-16 z-40 lg:hidden"
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    onClick={closeMobile}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default Header;
