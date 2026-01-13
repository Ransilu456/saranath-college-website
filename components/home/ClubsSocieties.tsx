import Link from "next/link";
import { ArrowRight, Plane, Camera, Palette, Sprout, BookOpen, Microscope, Music, Monitor, Globe, Gavel, HeartHandshake, Medal, LucideIcon } from "lucide-react";
import { clubs } from "@/data/clubs";

const iconMap: Record<string, LucideIcon> = {
    Camera, Plane, Palette, Sprout, BookOpen,
    Microscope, Music, Monitor, Globe, Gavel,
    HeartHandshake, Medal
};

export default function ClubsSocieties() {

    const manualLayout = {
        main: clubs.find(c => c.id === "media-unit") || clubs[0],
        side: clubs.find(c => c.id === "aviation") || clubs[1],
        bottom1: clubs.find(c => c.id === "oriental-music") || clubs[6],
        bottom2: clubs.find(c => c.id === "scouts") || clubs[9],
        bottom3: clubs.find(c => c.id === "science-union") || clubs[2],
    };

    const MainIcon = iconMap[manualLayout.main.icon] || Plane;

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="clubs">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-amber-500 font-semibold tracking-widest text-xs uppercase block mb-2">
                            Co-Curricular
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white tracking-tight">
                            Societies & Activities
                        </h2>
                        <p className="text-slate-400 mt-4 max-w-xl text-lg font-light">
                            Beyond textbooks, character is forged in our 40+ active student
                            bodies.
                        </p>
                    </div>
                    <Link
                        href="/clubs"
                        className="group flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full text-sm font-medium transition-all backdrop-blur-sm border border-white/10"
                    >
                        View All Clubs{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-500" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Main Featured Card */}
                    <div className="md:col-span-7 lg:col-span-8 relative group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 min-h-[300px]">
                        <img
                            src={manualLayout.main.image}
                            alt={manualLayout.main.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                        <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                            <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-900 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20">
                                <MainIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {manualLayout.main.title}
                            </h3>
                            <p className="text-slate-300 text-sm max-w-md">
                                {manualLayout.main.description}
                            </p>
                        </div>
                    </div>

                    {/* Side Card */}
                    <div className="md:col-span-5 lg:col-span-4 relative group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-amber-500/30 transition-colors">
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Plane className="w-30 h-30 text-slate-500 rotate-12" strokeWidth={1} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-semibold uppercase tracking-wider rounded border border-blue-500/20 mb-4">
                                    Trending
                                </span>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {manualLayout.side.title}
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    {manualLayout.side.description}
                                </p>
                            </div>
                            <Link href="/clubs" className="mt-6 text-xs font-semibold text-white uppercase tracking-wide flex items-center gap-2 group-hover:text-amber-500 transition-colors">
                                Join Society <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    {[manualLayout.bottom1, manualLayout.bottom2, manualLayout.bottom3].map((club, idx) => {
                        const ClubIcon = iconMap[club.icon] || Plane;
                        return (
                            <div key={idx} className="md:col-span-4 relative group rounded-3xl bg-slate-900 border border-slate-800 p-6 hover:bg-slate-800 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-white/5 text-white flex items-center justify-center border border-white/10 shrink-0`}>
                                        <ClubIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">
                                            {club.title}
                                        </h3>
                                        <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2">
                                            {club.description}
                                        </p>
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full border border-slate-800 bg-slate-700"></div>
                                            <div className="w-6 h-6 rounded-full border border-slate-800 bg-slate-600"></div>
                                            <div className="w-6 h-6 rounded-full border border-slate-800 bg-slate-500 flex items-center justify-center text-[8px] text-white">
                                                +{club.memberCount || "10"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
