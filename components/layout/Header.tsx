"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Search, Menu, X, ChevronDown } from "lucide-react";
import TopBar from "./TopBar";
import SearchModal from "@/components/ui/SearchModal";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDropdownEnter = (name: string) => {
        setActiveDropdown(name);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <>
            <TopBar />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <header
                className={`bg-white sticky top-0 z-50 border-t-4 border-amber-600 transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-sm"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20 md:h-24">
                        {/* School Logo & Name */}
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 text-amber-500 rounded-full flex items-center justify-center border-2 border-amber-500 shadow-md transition-transform group-hover:scale-105">
                                    <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 font-serif leading-none tracking-tight group-hover:text-amber-700 transition-colors">
                                    Saranath College
                                </h1>
                                <span className="text-[10px] md:text-xs font-medium text-amber-600 uppercase tracking-widest mt-1">
                                    Est. 1838 | Kuliyapitiya, Sri Lanka
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            <div className="flex items-center gap-1 mr-4">
                                <Link
                                    href="/"
                                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-amber-700 rounded-md transition-colors"
                                >
                                    Home
                                </Link>
                                <div className="relative group h-full"
                                    onMouseEnter={() => handleDropdownEnter('about')}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <Link href="/about" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-amber-700 flex items-center gap-1 rounded-md transition-colors">
                                        About
                                    </Link>
                                </div>
                                <Link
                                    href="/administration"
                                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-amber-700 rounded-md transition-colors"
                                >
                                    Administration
                                </Link>
                                <div className="relative group h-full"
                                    onMouseEnter={() => handleDropdownEnter('academics')}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <Link
                                        href="/academics"
                                        className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-amber-700 flex items-center gap-1 rounded-md transition-colors"
                                    >
                                        Academics <ChevronDown className="w-3 h-3" strokeWidth={1.5} />
                                    </Link>
                                    {activeDropdown === 'academics' && (
                                        <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 rounded-md shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                            <Link href="/academics#physical" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700">Physical Science</Link>
                                            <Link href="/academics#bio" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700">Biological Science</Link>
                                            <Link href="/academics#commerce" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700">Commerce</Link>
                                            <Link href="/academics#arts" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700">Arts</Link>
                                            <Link href="/academics#tech" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700">Technology</Link>
                                        </div>
                                    )}
                                </div>
                                <div className="relative group h-full"
                                    onMouseEnter={() => handleDropdownEnter('clubs')}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <Link
                                        href="/clubs"
                                        className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-amber-700 flex items-center gap-1 rounded-md transition-colors"
                                    >
                                        Clubs & Sports <ChevronDown className="w-3 h-3" strokeWidth={1.5} />
                                    </Link>
                                    {activeDropdown === 'clubs' && (
                                        <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 rounded-md shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                            <Link href="/clubs?category=Co-Curricular" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700">Co-Curricular</Link>
                                            <Link href="/clubs?category=Academic" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700">Academic</Link>
                                            <Link href="/clubs?category=Sports" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700">Sports</Link>
                                            <Link href="/clubs?category=Aesthetics" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700">Aesthetics</Link>
                                            <Link href="/clubs?category=Social Service" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700">Social Service</Link>
                                        </div>
                                    )}
                                </div>
                                <Link
                                    href="/news"
                                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-amber-700 rounded-md transition-colors"
                                >
                                    News
                                </Link>
                            </div>
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="text-slate-500 hover:text-amber-600 p-2 transition-colors"
                            >
                                <Search className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                            <Link
                                href="/admissions"
                                className="ml-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800 transition-colors border-b-2 border-amber-600 shadow-sm"
                            >
                                Admissions
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-7 h-7" strokeWidth={1.5} />
                            ) : (
                                <Menu className="w-7 h-7" strokeWidth={1.5} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-slate-100 p-4 absolute w-full shadow-lg">
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 rounded-md"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 rounded-md"
                            >
                                About
                            </Link>
                            <Link
                                href="/administration"
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 rounded-md"
                            >
                                Administration
                            </Link>
                            <Link
                                href="/academics"
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 rounded-md"
                            >
                                Academics
                            </Link>
                            <Link
                                href="/clubs"
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 rounded-md"
                            >
                                Clubs & Sports
                            </Link>
                            <Link
                                href="/news"
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 rounded-md"
                            >
                                News
                            </Link>
                            <Link
                                href="/admissions"
                                className="mt-2 text-center px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded"
                            >
                                Admissions
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
