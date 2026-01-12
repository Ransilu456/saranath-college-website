import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { programs } from "@/data/programs";

export default function ProgramsGallery() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">Curriculum</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
                            Excellence in Education
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-xl">
                            Our comprehensive curriculum is designed to foster critical thinking, creativity, and moral integrity across all age groups.
                        </p>
                    </div>

                    <div className="hidden md:flex gap-2">
                        <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                            <ArrowLeft className="w-5 h-5 text-slate-600" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-slate-900 border border-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors">
                            <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <Link
                            key={program.id}
                            href={`/programs/${program.id}`}
                            className="group relative flex flex-col h-full rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Gradient Overlay moving on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                            {/* Background Image */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={program.image}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt={program.title}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 bg-slate-50 border border-t-0 border-slate-100 p-8 relative z-20 group-hover:bg-transparent group-hover:border-transparent transition-colors duration-500 flex flex-col">
                                <div className="mb-4">
                                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded text-slate-900 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                        {program.category}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors flex-grow">
                                    {program.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-bold text-amber-600 group-hover:text-amber-400 transition-colors mt-auto">
                                    View Program
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
