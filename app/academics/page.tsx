import { streams } from "@/data/streams";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, School, BookOpen, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Academic Pathways',
    description: 'Explore the academic streams and subject combinations at Saranath College. We offer comprehensive programs in Science, Commerce, Arts, and Technology.',
}


export default function AcademicsPage() {
    return (
        <div className="pb-20 bg-slate-50">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                    alt="Academics"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <span className="inline-block text-amber-400 font-semibold tracking-widest text-xs uppercase mb-4 border border-amber-400/30 px-3 py-1 rounded-full bg-amber-400/10 backdrop-blur-md">
                        Excellence in Education
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6">
                        Academic Pathways
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                        Forging future leaders through rigorous academic programs, state-of-the-art facilities, and holistic development.
                    </p>
                </div>
            </section>

            {/* Stats / Intro */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
                        <div className="p-4">
                            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
                            <div className="text-sm text-slate-500 font-medium">University Entrance</div>
                        </div>
                        <div className="p-4">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6" />
                            </div>
                            <div className="text-3xl font-bold text-slate-900 mb-1">1:20</div>
                            <div className="text-sm text-slate-500 font-medium">Teacher-Student Ratio</div>
                        </div>
                        <div className="p-4">
                            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <School className="w-6 h-6" />
                            </div>
                            <div className="text-3xl font-bold text-slate-900 mb-1">5</div>
                            <div className="text-sm text-slate-500 font-medium">Advanced Streams</div>
                        </div>
                        <div className="p-4">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div className="text-3xl font-bold text-slate-900 mb-1">40+</div>
                            <div className="text-sm text-slate-500 font-medium">Subject Combinations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Streams Detail */}
            <section className="py-20 max-w-7xl mx-auto px-6 space-y-24">
                {streams.map((stream, index) => (
                    <div key={stream.id} id={stream.id} className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                                <div className={`absolute inset-0 bg-${stream.color}-600/10 group-hover:bg-transparent transition-colors duration-500`}></div>
                                <img
                                    src={stream.image}
                                    alt={stream.title}
                                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full bg-${stream.color}-100 flex items-center justify-center text-${stream.color}-600`}>
                                            <stream.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Head of Section</p>
                                            <p className="font-semibold text-slate-900">{stream.headOfSection}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${stream.color}-50 text-${stream.color}-700 text-xs font-bold uppercase tracking-wider mb-6`}>
                                <stream.icon className="w-4 h-4" />
                                {stream.title} Stream
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                                {stream.title}
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                {stream.description}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-slate-400" />
                                        Key Subjects
                                    </h4>
                                    <ul className="space-y-3">
                                        {stream.subjects.map(subject => (
                                            <li key={subject} className="flex items-center gap-2 text-sm text-slate-600">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-${stream.color}-400`}></div>
                                                {subject}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4 text-slate-400" />
                                        Career Paths
                                    </h4>
                                    <ul className="space-y-3">
                                        {stream.careerPaths.map(path => (
                                            <li key={path} className="flex items-center gap-2 text-sm text-slate-600">
                                                <CheckCircle2 className={`w-4 h-4 text-${stream.color}-500`} />
                                                {path}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button className={`text-${stream.color}-600 font-semibold text-sm flex items-center gap-2 group hover:gap-3 transition-all`}>
                                Download Syllabus Information <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
