"use client";

import Link from "next/link";
import { ArrowLeft, Clock, MapPin, User, Calendar, Camera, Plane, Palette, Sprout, BookOpen, Microscope, Music, Monitor, Globe, Gavel, HeartHandshake, Medal, LucideIcon, Search } from "lucide-react";

interface ClubDetailsClientProps {
    club: any;
}

const iconMap: Record<string, LucideIcon> = {
    Camera, Plane, Palette, Sprout, BookOpen,
    Microscope, Music, Monitor, Globe, Gavel,
    HeartHandshake, Medal
};

export default function ClubDetailsClient({ club }: ClubDetailsClientProps) {
    const Icon = iconMap[club.icon] || Search; // Fallback to Search
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero */}
            <div className="relative h-[50vh] min-h-[400px]">
                <img
                    src={club.image}
                    alt={club.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
                    <div className="max-w-7xl mx-auto w-full">
                        <Link
                            href="/clubs"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-sm font-medium transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Societies
                        </Link>
                        <div className="flex items-center gap-3 text-amber-400 font-semibold tracking-widest text-xs uppercase mb-4">
                            <span className="bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">{club.category}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                            <Icon className="inline-block w-8 h-8 md:w-16 md:h-16 mr-3 -mt-2 opacity-80" />
                            {club.title}
                        </h1>
                        <p className="text-xl text-slate-200 max-w-2xl">
                            {club.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 -mt-10 relative z-10">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">About the Society</h2>
                            <div
                                className="prose prose-slate max-w-none prose-p:leading-relaxed prose-a:text-amber-600"
                                dangerouslySetInnerHTML={{ __html: club.fullDescription }}
                            />
                        </div>

                        {/* Activities */}
                        {club.activities.length > 0 && (
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Key Activities & Events</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {club.activities.map((activity: string, idx: number) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900">{activity}</h4>
                                                <p className="text-xs text-slate-500 mt-1">Annual Event</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        {/* Quick Stats / Info */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <h3 className="font-serif font-bold text-lg text-slate-900 mb-6">Club Information</h3>

                            <div className="space-y-6">
                                {club.president && (
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">President</p>
                                            <p className="font-medium text-slate-900">{club.president}</p>
                                        </div>
                                    </div>
                                )}

                                {club.teacherInCharge && (
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Teacher-in-Charge</p>
                                            <p className="font-medium text-slate-900">{club.teacherInCharge}</p>
                                        </div>
                                    </div>
                                )}

                                {club.meetingTime && (
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Meeting Time</p>
                                            <p className="font-medium text-slate-900">{club.meetingTime}</p>
                                        </div>
                                    </div>
                                )}

                                {club.location && (
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Location</p>
                                            <p className="font-medium text-slate-900">{club.location}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button className="w-full mt-8 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors">
                                Join This Club
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
