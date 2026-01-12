"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, User, Briefcase, GraduationCap } from "lucide-react";
import { streams, AcademicStream } from "@/data/streams";

export default function AcademicStreams() {
    const [activeStream, setActiveStream] = useState<AcademicStream>(streams[0]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Side: Navigation & Info */}
                    <div className="w-full lg:w-2/5">
                        <div className="mb-12">
                            <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase block mb-4">
                                Advanced Level
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-6">
                                Academic Streams
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                Our G.C.E. Advanced Level program is designed to foster deep specialization and prepare students for world-class universities.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {streams.map((stream) => (
                                <button
                                    key={stream.id}
                                    onClick={() => setActiveStream(stream)}
                                    className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 text-left group ${activeStream.id === stream.id
                                            ? `bg-white border-amber-500 shadow-xl shadow-amber-900/10 -translate-x-2`
                                            : "bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-100"
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${activeStream.id === stream.id ? "bg-amber-600 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                                        }`}>
                                        <stream.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className={`font-serif font-bold text-lg transition-colors ${activeStream.id === stream.id ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"
                                            }`}>
                                            {stream.title}
                                        </h3>
                                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{stream.subjects.length} Subjects</p>
                                    </div>
                                    <ArrowRight className={`w-5 h-5 ml-auto transition-all ${activeStream.id === stream.id ? "text-amber-500 opacity-100 translate-x-0" : "text-slate-300 opacity-0 -translate-x-2"
                                        }`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Stream Details Display */}
                    <div className="w-full lg:w-3/5 min-h-[600px] relative">
                        <div
                            key={activeStream.id}
                            className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 md:p-12 animate-in fade-in slide-in-from-right-8 duration-700 h-full flex flex-col"
                        >
                            {/* Header Section */}
                            <div className="flex flex-col md:flex-row gap-8 mb-10 items-start">
                                <div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                                    <img
                                        src={activeStream.image}
                                        alt={activeStream.title}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-widest mb-4`}>
                                        Section Info
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Head of Section</p>
                                                <p className="font-bold text-slate-800">{activeStream.headOfSection}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                                                <Briefcase className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Career Pathways</p>
                                                <p className="text-sm text-slate-600 leading-tight">
                                                    {activeStream.careerPaths.slice(0, 4).join(", ")} & more.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-grow">
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                                    Exploring {activeStream.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-10 text-lg italic font-light">
                                    "{activeStream.description.split('.')[0]}."
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-12">
                                    {activeStream.subjects.map((subject, i) => (
                                        <div key={i} className="flex items-center gap-3 group/item">
                                            <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 transition-transform group-hover/item:scale-110">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{subject}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Link */}
                            <div className="pt-8 border-t border-slate-100 flex justify-between items-center">
                                <Link
                                    href={`/academics#${activeStream.id}`}
                                    className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all group"
                                >
                                    View Full Curriculum
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg text-slate-400 font-bold text-[10px] uppercase tracking-tighter">
                                    <GraduationCap className="w-3.5 h-3.5" />
                                    University Ready
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
