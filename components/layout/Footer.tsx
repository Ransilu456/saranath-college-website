import Link from "next/link";
import { ShieldCheck, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t-4 border-amber-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img src="/logos/sch.png" alt="Saranath College Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-serif font-semibold text-white">
                                Saranath College
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            An institution dedicated to the pursuit of educational excellence,
                            character building, and national service since 1924.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    School History
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Admission Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Academic Calendar
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    News & Events
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Academic */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Academic Sections</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/programs/junior-secondary" className="hover:text-amber-500 transition-colors">
                                    Junior Secondary (6-8)
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs/ordinary-level" className="hover:text-amber-500 transition-colors">
                                    Secondary (9-11)
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs/senior-secondary" className="hover:text-amber-500 transition-colors">
                                    Senior Secondary (12-13)
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs/sports-academy" className="hover:text-amber-500 transition-colors">
                                    Sports Academy
                                </Link>
                            </li>
                            <li>
                                <Link href="/academics" className="hover:text-amber-500 transition-colors">
                                    Library & Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                                <span>
                                    123 School Avenue, <br />
                                    Kuliyapitiya 01, Sri Lanka
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                                <span>+94 11 234 5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                                <span>info@saranath.lk</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs italic">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p>© 2026 Saranath College. All rights reserved.</p>
                        <div className="hidden md:block w-px h-4 bg-slate-800"></div>
                        <div className="flex items-center gap-2 group">
                            <span className="text-slate-500 not-italic">Developed by </span>
                            <span className="text-slate-300 font-semibold not-italic group-hover:text-amber-500 transition-colors">Keshan Ransilu from Agradhi Media Unit</span>
                            <img
                                src="/logos/Agradhi.png"
                                alt="Agradhi Media Logo"
                                className="h-6 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 not-italic font-medium">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
