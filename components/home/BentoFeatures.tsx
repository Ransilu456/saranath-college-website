import Link from "next/link";
import { ArrowRight, FlaskConical, Users, Library, Trophy, LucideIcon, Sparkles, GraduationCap, Globe } from "lucide-react";

export default function BentoFeatures() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden" id="academics">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-white">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-amber-500" />
                            <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase">The Saranath Advantage</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
                            Why choose Saranath?
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                            We don't just educate; we forge character and prepare students for a lifetime of leadership and global impact.
                        </p>
                    </div>
                    <Link
                        href="/about"
                        className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all backdrop-blur-sm self-start md:self-auto"
                    >
                        <span className="text-sm font-semibold">Our Philosophy</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[240px]">

                    {/* Featured: Research Facilities (Large) */}
                    <div className="md:col-span-2 lg:col-span-4 lg:row-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group hover:border-amber-500/50 transition-all duration-500 shadow-2xl">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-8 border border-amber-500/20 group-hover:scale-110 transition-transform">
                                <FlaskConical className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <div className="mt-auto">
                                <h3 className="text-3xl font-serif font-bold text-white mb-4">
                                    Pioneering Research & Innovation
                                </h3>
                                <p className="text-slate-400 text-lg max-w-xl leading-relaxed font-light">
                                    Our state-of-the-art laboratories and STEM centers empower students to solve real-world problems through scientific inquiry and technological advancement.
                                </p>
                                <div className="mt-8 flex gap-8">
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold text-2xl">15+</span>
                                        <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Advanced Labs</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold text-2xl">5K+</span>
                                        <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Annual Projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Community: Vibrant Life (Tall) */}
                    <div className="md:col-span-2 lg:col-span-2 lg:row-span-3 bg-slate-900 border border-slate-800 rounded-[2.5rem] relative overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
                            alt="Student Community"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                        <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20">
                                <Users className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">
                                A Global Brotherhood
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light">
                                Saranathians belong to a century-old network of leaders, innovators, and changemakers across the globe.
                            </p>
                            <div className="flex items-center gap-4 py-4 px-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                                            <img src={`https://i.pravatar.cc/150?u=${i + 10}`} className="w-full h-full rounded-full object-cover" alt="Avatar" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-white tracking-wider">+3.5K Active Students</span>
                            </div>
                        </div>
                    </div>

                    {/* Academic: Excellence (Square) */}
                    <div className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 group hover:bg-white/[0.08] transition-all">
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-white mb-2">Academic Rigor</h3>
                        <p className="text-slate-400 text-sm font-light">Consistently delivering world-class results in national examinations.</p>
                    </div>

                    {/* Global: Recognition (Square) */}
                    <div className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 group hover:bg-white/[0.08] transition-all">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-white mb-2">Global Reach</h3>
                        <p className="text-slate-400 text-sm font-light">Collaborations with top international universities and institutions.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
