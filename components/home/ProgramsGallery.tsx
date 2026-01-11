import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function ProgramsGallery() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Course Card 1 */}
                    <Link
                        href="#"
                        className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="aspect-[16/9] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Technology"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 uppercase">
                                    Primary
                                </span>
                                <ArrowUpRight className="w-[18px] text-slate-300 group-hover:text-amber-600 transition-colors" />
                            </div>
                            <h3 className="text-lg font-semibold font-serif text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                                Junior School
                            </h3>
                            <p className="text-sm text-slate-500 line-clamp-2">
                                Foundational years focusing on creativity, language, and basic
                                mathematics in a nurturing environment.
                            </p>
                        </div>
                    </Link>

                    {/* Course Card 2 */}
                    <Link
                        href="#"
                        className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="aspect-[16/9] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Business"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 uppercase">
                                    Secondary
                                </span>
                                <ArrowUpRight className="w-[18px] text-slate-300 group-hover:text-amber-600 transition-colors" />
                            </div>
                            <h3 className="text-lg font-semibold font-serif text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                                Ordinary Level
                            </h3>
                            <p className="text-sm text-slate-500 line-clamp-2">
                                Rigorous preparation for the G.C.E O/L examination with a focus on
                                core subjects and electives.
                            </p>
                        </div>
                    </Link>

                    {/* Course Card 3 */}
                    <Link
                        href="#"
                        className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="aspect-[16/9] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Science"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 uppercase">
                                    Sports
                                </span>
                                <ArrowUpRight className="w-[18px] text-slate-300 group-hover:text-amber-600 transition-colors" />
                            </div>
                            <h3 className="text-lg font-semibold font-serif text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                                Sports Academy
                            </h3>
                            <p className="text-sm text-slate-500 line-clamp-2">
                                Professional training in Cricket, Rugby, Swimming, and Athletics
                                for aspiring national players.
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 bg-white text-slate-600 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
                        View Full Curriculum <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
