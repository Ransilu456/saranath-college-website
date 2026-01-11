import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function NewsEvents() {
    return (
        <section className="py-20 bg-white" id="news">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Latest News */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-serif font-semibold text-slate-900 tracking-tight">
                                College News
                            </h2>
                            <Link
                                href="#"
                                className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center gap-1 group"
                            >
                                View Archives{" "}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid gap-8">
                            {/* News Item 1 */}
                            <div className="flex flex-col md:flex-row gap-6 group cursor-pointer">
                                <div className="w-full md:w-64 h-40 shrink-0 overflow-hidden rounded-xl border border-slate-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
                                        alt="News"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                                        <span className="text-amber-600 flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> Oct 12, 2024
                                        </span>
                                        <span>•</span>
                                        <span>Academics</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2 font-serif group-hover:text-amber-700 transition-colors">
                                        Saranath Students Top Island Rankings in GCE A/L
                                    </h3>
                                    <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                                        Exceptional performance by the 2023 batch with 15 students
                                        achieving 3As in the Physical Science stream. The college
                                        administration congratulates...
                                    </p>
                                    <span className="text-xs font-semibold text-slate-900 underline decoration-amber-500/50 underline-offset-4 group-hover:decoration-amber-500 transition-all">
                                        Read more
                                    </span>
                                </div>
                            </div>

                            {/* News Item 2 */}
                            <div className="flex flex-col md:flex-row gap-6 group cursor-pointer border-t border-slate-100 pt-8">
                                <div className="w-full md:w-64 h-40 shrink-0 overflow-hidden rounded-xl border border-slate-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
                                        alt="News"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                                        <span className="text-amber-600 flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> Sep 28, 2024
                                        </span>
                                        <span>•</span>
                                        <span>Sports</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2 font-serif group-hover:text-amber-700 transition-colors">
                                        Colors Night 2024: Celebrating Sportsmanship
                                    </h3>
                                    <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                                        The annual Colors Night was held at the Main Hall, graced by
                                        the Minister of Sports. Over 200 sportsmen were recognized for
                                        their achievements.
                                    </p>
                                    <span className="text-xs font-semibold text-slate-900 underline decoration-amber-500/50 underline-offset-4 group-hover:decoration-amber-500 transition-all">
                                        Read more
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-8 tracking-tight">
                            Upcoming Events
                        </h2>
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                            {/* Event 1 */}
                            <div className="flex gap-4 mb-6 pb-6 border-b border-slate-200 last:border-0 last:mb-0 last:pb-0 group cursor-pointer">
                                <div className="flex flex-col items-center justify-center w-14 h-14 bg-white border border-slate-200 rounded-xl shadow-sm shrink-0 group-hover:border-amber-400 transition-colors">
                                    <span className="text-[10px] font-semibold text-amber-600 uppercase">
                                        Nov
                                    </span>
                                    <span className="text-xl font-semibold text-slate-900 font-serif">
                                        15
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 leading-tight mb-1 group-hover:text-amber-700 transition-colors">
                                        Annual Prize Giving
                                    </h4>
                                    <p className="text-xs text-slate-500 mb-2">
                                        Main Hall • 08:00 AM
                                    </p>
                                    <span className="inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-green-100 text-green-700 rounded border border-green-200">
                                        Public
                                    </span>
                                </div>
                            </div>

                            {/* Event 2 */}
                            <div className="flex gap-4 mb-6 pb-6 border-b border-slate-200 last:border-0 last:mb-0 last:pb-0 group cursor-pointer">
                                <div className="flex flex-col items-center justify-center w-14 h-14 bg-white border border-slate-200 rounded-xl shadow-sm shrink-0 group-hover:border-amber-400 transition-colors">
                                    <span className="text-[10px] font-semibold text-amber-600 uppercase">
                                        Nov
                                    </span>
                                    <span className="text-xl font-semibold text-slate-900 font-serif">
                                        22
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 leading-tight mb-1 group-hover:text-amber-700 transition-colors">
                                        Inter-House Debating
                                    </h4>
                                    <p className="text-xs text-slate-500 mb-2">
                                        Library Auditorium • 02:00 PM
                                    </p>
                                    <span className="inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-blue-100 text-blue-700 rounded border border-blue-200">
                                        Students Only
                                    </span>
                                </div>
                            </div>

                            {/* Event 3 */}
                            <div className="flex gap-4 group cursor-pointer">
                                <div className="flex flex-col items-center justify-center w-14 h-14 bg-white border border-slate-200 rounded-xl shadow-sm shrink-0 group-hover:border-amber-400 transition-colors">
                                    <span className="text-[10px] font-semibold text-amber-600 uppercase">
                                        Dec
                                    </span>
                                    <span className="text-xl font-semibold text-slate-900 font-serif">
                                        05
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 leading-tight mb-1 group-hover:text-amber-700 transition-colors">
                                        Christmas Carols
                                    </h4>
                                    <p className="text-xs text-slate-500 mb-2">
                                        College Chapel • 06:00 PM
                                    </p>
                                    <span className="inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-green-100 text-green-700 rounded border border-green-200">
                                        Public
                                    </span>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="#"
                            className="block w-full py-3 mt-4 text-center text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
                        >
                            View Full Calendar
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
