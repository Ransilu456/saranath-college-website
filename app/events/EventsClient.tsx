"use client";

import { useState } from "react";
import { Search, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import { EventItem } from "@/data/events";
import Link from "next/link";

interface EventsClientProps {
    events: EventItem[];
}

export default function EventsClient({ events }: EventsClientProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Get unique categories
    const categories = ["All", ...Array.from(new Set(events.map(event => event.type)))];

    // Filter events
    const filteredEvents = events.filter(event => {
        const matchesCategory = selectedCategory === "All" || event.type === selectedCategory;
        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPreview = event.preview === true;
        return matchesCategory && matchesSearch && matchesPreview;
    });

    return (
        <div className="pt-24 pb-12 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                    Events at Saranath
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                    From academic seminars to athletic meets, discover what's happening at Saranath College.
                </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-start md:items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm sticky top-24 z-30">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                                ? "bg-slate-900 text-white shadow-md"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search events by title or location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all text-sm"
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <Link
                            href={`/events/${event.id}`}
                            key={event.id}
                            className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-amber-200 transition-all duration-300"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm border border-white/20">
                                        {event.type}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-amber-600">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3 h-3" />
                                        <span>{event.date.month} {event.date.day}</span>
                                    </div>
                                    <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-3 h-3" />
                                        <span>{event.time}</span>
                                    </div>
                                </div>

                                <h2 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-1">
                                    {event.title}
                                </h2>

                                <p className="text-slate-500 text-sm line-clamp-2 mb-6 flex-grow leading-relaxed">
                                    {event.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <MapPin className="w-3 h-3" />
                                        <span className="text-[11px] font-medium truncate max-w-[120px]">{event.location}</span>
                                    </div>
                                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1 group-hover:text-amber-600 transition-colors">
                                        Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                        <Search className="w-8 h-8 mx-auto mb-3 text-slate-400 opacity-50" />
                        <p className="font-medium">No events found matching your search.</p>
                        <button
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="mt-4 text-sm font-semibold text-amber-600 hover:text-amber-700 hover:underline"
                        >
                            View all events
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
