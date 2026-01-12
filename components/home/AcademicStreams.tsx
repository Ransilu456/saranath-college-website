import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { streams } from "@/data/streams";

export default function AcademicStreams() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-amber-600 font-semibold tracking-widest text-xs uppercase mb-2 block">
                        Advanced Level
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-4 tracking-tight">
                        Academic Streams
                    </h2>
                    <p className="text-slate-500">
                        We offer comprehensive streams for G.C.E A/L students with
                        state-of-the-art facilities and experienced lecture panels.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {streams.map((stream) => (
                        <div key={stream.id} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 transition-colors group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-12 h-12 rounded-lg bg-${stream.color}-50 text-${stream.color}-600 flex items-center justify-center`}>
                                    <stream.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 font-serif">
                                    {stream.title}
                                </h3>
                            </div>
                            <ul className="space-y-3 mb-6">
                                {stream.subjects.map((subject, index) => (
                                    <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                                        <Check className="w-4 h-4 text-green-500" /> {subject}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/academics"
                                className={`text-xs font-semibold text-${stream.color}-600 uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all`}
                            >
                                Syllabus <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
