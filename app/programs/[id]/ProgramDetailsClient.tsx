"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, GraduationCap, Building2 } from "lucide-react";

interface ProgramDetailsClientProps {
    program: any;
}

export default function ProgramDetailsClient({ program }: ProgramDetailsClientProps) {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero */}
            <div className="relative h-[60vh] min-h-[400px]">
                <img
                    src={program.image}
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
                    <div className="max-w-7xl mx-auto w-full">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-medium transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                        <div className="flex items-center gap-3 text-amber-400 font-semibold tracking-widest text-xs uppercase mb-4">
                            <span className="bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">{program.category}</span>
                            {program.grades && <span className="text-slate-300">• {program.grades}</span>}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                            {program.title}
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
                            {program.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Description */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Program Overview</h2>
                            <div
                                className="prose prose-lg prose-slate max-w-none prose-p:leading-relaxed prose-a:text-amber-600 first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-slate-900"
                                dangerouslySetInnerHTML={{ __html: program.fullDescription }}
                            />
                        </div>
                    </div>

                    {/* Sidebar / Highlights */}
                    <div className="space-y-8">
                        {program.curriculumHighlights && (
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                                <h3 className="flex items-center gap-2 text-xl font-serif font-bold text-slate-900 mb-6">
                                    <GraduationCap className="w-5 h-5 text-amber-600" />
                                    Highlights
                                </h3>
                                <ul className="space-y-4">
                                    {program.curriculumHighlights.map((highlight: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {program.facilities && (
                            <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg">
                                <h3 className="flex items-center gap-2 text-xl font-serif font-bold mb-6">
                                    <Building2 className="w-5 h-5 text-amber-400" />
                                    Facilities
                                </h3>
                                <ul className="space-y-4">
                                    {program.facilities.map((facility: string, idx: number) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                            <span>{facility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 text-center">
                            <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Admissions Open</h3>
                            <p className="text-slate-600 text-sm mb-6">For the upcoming academic year.</p>
                            <Link href="/admissions" className="inline-block w-full py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
