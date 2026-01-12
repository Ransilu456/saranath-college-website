"use client";

import { ArrowLeft, Calendar, Clock, MapPin, User, Info } from "lucide-react";
import Link from "next/link";

interface EventDetailsClientProps {
    event: any;
}

export default function EventDetailsClient({ event }: EventDetailsClientProps) {
    // Helper to get color classes
    const getColorClasses = (color: string) => {
        const colors: { [key: string]: string } = {
            green: "bg-green-100 text-green-800 border-green-200",
            blue: "bg-blue-100 text-blue-800 border-blue-200",
            amber: "bg-amber-100 text-amber-800 border-amber-200",
        };
        return colors[color] || colors.green;
    };

    return (
        <div className="pb-20 bg-white min-h-screen">
            {/* Hero Image */}
            <div className="h-[400px] w-full relative overflow-hidden bg-slate-900">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
                    <Link
                        href="/events"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-medium text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Events
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getColorClasses(event.color)} bg-white/90`}>
                            {event.type}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 shadow-sm">
                        {event.title}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Key Info Cards */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3 text-amber-600 font-semibold mb-1">
                                <Calendar className="w-5 h-5" />
                                <span>Date</span>
                            </div>
                            <p className="text-slate-900 font-serif text-lg">
                                {event.date.month} {event.date.day}, 2024
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3 text-amber-600 font-semibold mb-1">
                                <Clock className="w-5 h-5" />
                                <span>Time</span>
                            </div>
                            <p className="text-slate-900 font-serif text-lg">
                                {event.time}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3 text-amber-600 font-semibold mb-1">
                                <MapPin className="w-5 h-5" />
                                <span>Location</span>
                            </div>
                            <p className="text-slate-900 font-serif text-lg">
                                {event.location}
                            </p>
                        </div>
                    </div>

                    {/* About Event */}
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Info className="w-6 h-6 text-amber-600" />
                            About the Event
                        </h2>
                        <div className="prose prose-lg prose-slate text-slate-600 max-w-none whitespace-pre-line leading-relaxed">
                            {event.description}
                        </div>
                    </div>

                    {/* Schedule */}
                    {event.schedule && event.schedule.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Event Schedule</h2>
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                                {event.schedule.map((item: any, index: number) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col md:flex-row gap-4 md:gap-8 p-6 ${index !== event.schedule.length - 1 ? 'border-b border-slate-200' : ''
                                            }`}
                                    >
                                        <div className="md:w-32 shrink-0 font-bold text-amber-700">
                                            {item.time}
                                        </div>
                                        <div className="text-slate-700 font-medium">
                                            {item.activity}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Organizer Card */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 font-serif border-b border-slate-100 pb-4">
                            Event Organizer
                        </h3>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                <User className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">{event.organizer}</p>
                                <p className="text-xs text-slate-500 uppercase tracking-wide">Contact Person</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 mb-6">
                            For any inquiries regarding this event, please contact the school administration office or the organizing committee.
                        </p>
                        <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors text-sm">
                            Contact Organizers
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
