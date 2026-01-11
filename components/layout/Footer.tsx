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
                            <div className="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-amber-900/20">
                                <ShieldCheck className="w-5 h-5" />
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
                        <h3 className="text-white font-semibold mb-6">Academic</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Primary School
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Middle School
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Upper School
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Sports Academy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-amber-500 transition-colors">
                                    Library
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
                                    Colombo 07, Sri Lanka
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

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2024 Saranath College. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
