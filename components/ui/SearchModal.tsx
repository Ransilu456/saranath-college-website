"use client";

import * as React from "react";
import { Search, X, ArrowRight, BookOpen, User, Calendar } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = React.useState("");
    const router = useRouter();

    // Close on Escape key
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden animate-[in_0.2s_ease-out_fade_slide-up]">
                <div className="flex items-center border-b border-slate-100 px-4 py-3">
                    <Search className="w-5 h-5 text-slate-400 mr-3" />
                    <input
                        type="text"
                        placeholder="Search for pages, events, news..."
                        className="flex-1 text-lg outline-none placeholder:text-slate-400 text-slate-900"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto p-2">
                    {query === "" ? (
                        <div className="p-4">
                            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                                Quick Links
                            </h3>
                            <div className="grid gap-2">
                                <NavResult
                                    href="/about"
                                    icon={<User className="w-4 h-4" />}
                                    title="About Us"
                                    description="History, Mission & Vision"
                                    onClose={onClose}
                                />
                                <NavResult
                                    href="/admissions"
                                    icon={<BookOpen className="w-4 h-4" />}
                                    title="Admissions"
                                    description="Application process for 2025"
                                    onClose={onClose}
                                />
                                <NavResult
                                    href="/news"
                                    icon={<Calendar className="w-4 h-4" />}
                                    title="News & Events"
                                    description="Latest updates from the college"
                                    onClose={onClose}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="p-4 text-center text-slate-500 py-12">
                            <p>No results found for "{query}"</p>
                        </div>
                        // In a real app, you'd map filtered results here
                    )}
                </div>

                <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 text-[10px] text-slate-400 flex justify-between">
                    <span>Press <kbd className="font-sans bg-white border border-slate-200 rounded px-1">ESC</kbd> to close</span>
                    <span>Saranath College Search</span>
                </div>
            </div>
        </div>
    );
}

function NavResult({ href, icon, title, description, onClose }: { href: string, icon: React.ReactNode, title: string, description: string, onClose: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClose}
            className="flex items-center p-3 rounded-lg hover:bg-slate-50 group transition-colors border border-transparent hover:border-slate-200"
        >
            <div className="w-8 h-8 rounded-md bg-white border border-slate-100 flex items-center justify-center text-slate-500 group-hover:text-amber-600 group-hover:border-amber-200 transition-colors">
                {icon}
            </div>
            <div className="ml-3 flex-1">
                <h4 className="text-sm font-medium text-slate-900 group-hover:text-amber-700">{title}</h4>
                <p className="text-xs text-slate-500">{description}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
        </Link>
    )
}
