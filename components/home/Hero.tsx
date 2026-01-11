import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[600px] bg-slate-900 flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                    alt="School Building"
                    className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-3xl border-l-4 border-amber-500 pl-8 md:pl-10 py-2">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                        <span className="text-amber-400 font-medium tracking-wider uppercase text-xs md:text-sm">
                            Welcome to Saranath College
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif font-semibold text-white leading-[1.1] mb-6 tracking-tight">
                        A Legacy of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                            Excellence & Virtue
                        </span>
                    </h2>
                    <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl font-light">
                        Nurturing the next generation of leaders with traditional values and
                        modern education. Join a century-old brotherhood of achievement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#application"
                            className="px-8 py-3.5 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-500 transition-all shadow-lg shadow-amber-900/20 flex items-center justify-center gap-2"
                        >
                            Apply Now <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="#"
                            className="px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                        >
                            <PlayCircle className="w-[18px] text-amber-400" />
                            School Anthem
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
