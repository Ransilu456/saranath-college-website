import Link from "next/link";
import { ArrowRight, FlaskConical, Users, Library, Trophy } from "lucide-react";

export default function BentoFeatures() {
    return (
        <section className="py-24 bg-white" id="academics">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 tracking-tight mb-4">
                            Why choose Saranath?
                        </h2>
                        <p className="text-slate-500 text-lg">
                            Discover an ecosystem designed for growth, creativity, and academic
                            rigor.
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center gap-1.5 transition-colors group"
                    >
                        Learn more about us{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6 auto-rows-[320px]">
                    {/* Large Card */}
                    <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/50 rounded-full -mr-20 -mt-20 z-0 transition-transform duration-700 group-hover:scale-110 blur-2xl"></div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-amber-600 shadow-sm">
                                <FlaskConical className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-3">
                                    World-Class Research Facilities
                                </h3>
                                <p className="text-slate-500 max-w-md leading-relaxed">
                                    Our laboratories are equipped with cutting-edge technology,
                                    fostering an environment where students can pioneer the next big
                                    breakthrough in science and technology.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tall Card */}
                    <div className="md:row-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden group text-white">
                        <img
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-700 transform group-hover:scale-105"
                            alt="Community"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950"></div>
                        <div className="relative z-10 flex flex-col h-full justify-end">
                            <div className="mb-auto w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                                <Users className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif font-semibold text-white mb-3">
                                Vibrant Community
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                Join a diverse network of students. Experience cultural exchange
                                right on campus.
                            </p>
                            <div className="flex -space-x-3">
                                <img
                                    className="w-10 h-10 rounded-full border-2 border-slate-900"
                                    src="https://i.pravatar.cc/150?u=10"
                                    alt="Student"
                                />
                                <img
                                    className="w-10 h-10 rounded-full border-2 border-slate-900"
                                    src="https://i.pravatar.cc/150?u=12"
                                    alt="Student"
                                />
                                <img
                                    className="w-10 h-10 rounded-full border-2 border-slate-900"
                                    src="https://i.pravatar.cc/150?u=15"
                                    alt="Student"
                                />
                                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-amber-600 flex items-center justify-center text-xs font-semibold">
                                    +2k
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Card 1 */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all hover:border-amber-200">
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 border border-indigo-100">
                                <Library className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">
                                    Digital Library
                                </h3>
                                <p className="text-sm text-slate-500">
                                    Access millions of resources anytime, anywhere via our cloud
                                    library.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Small Card 2 */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all hover:border-amber-200">
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 border border-amber-100">
                                <Trophy className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">
                                    Top Rankings
                                </h3>
                                <p className="text-sm text-slate-500">
                                    Consistently ranked among the top 10 innovation colleges in
                                    South Asia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
