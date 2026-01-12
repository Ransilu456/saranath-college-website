"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Club } from "@/data/clubs";
import { Search, Filter } from "lucide-react";
import Link from "next/link";

interface ClubsClientProps {
    clubs: Club[];
}

export default function ClubsClient({ clubs }: ClubsClientProps) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ClubsContent clubs={clubs} />
        </Suspense>
    );
}

function ClubsContent({ clubs }: { clubs: Club[] }) {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>(
        categoryParam && ["Co-Curricular", "Academic", "Sports", "Aesthetics", "Social Service"].includes(categoryParam)
            ? categoryParam
            : "All"
    );

    const categories = ["All", ...Array.from(new Set(clubs.map((c) => c.category)))];

    const filteredClubs = clubs.filter((club) => {
        const matchesSearch = club.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            club.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || club.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-24 pb-12 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900 mb-6">
                    Student Activities
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                    Discover your passion. From the field to the stage, Saranath offers over 40 clubs and societies to shape your character.
                </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 bg-white p-4 rounded-xl border border-slate-200 shadow-sm sticky top-24 z-30">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Find a club..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                    <Filter className="w-4 h-4 text-slate-400 shrink-0" />
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${selectedCategory === cat
                                ? "bg-slate-900 text-white"
                                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClubs.length > 0 ? (
                    filteredClubs.map((club) => (
                        <ClubCard key={club.id} club={club} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-24 text-slate-400">
                        <p>No clubs found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedCategory("All") }}
                            className="mt-4 text-amber-600 hover:underline text-sm font-medium"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

function ClubCard({ club }: { club: Club }) {
    const Icon = club.icon;
    return (
        <Link href={`/clubs/${club.id}`} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex flex-col h-full cursor-pointer">
            <div className="h-48 overflow-hidden relative bg-slate-100">
                {club.image ? (
                    <img
                        src={club.image}
                        alt={club.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <Icon className="w-12 h-12" />
                    </div>
                )}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-slate-900 border border-white/20 shadow-sm">
                        {club.category}
                    </span>
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                        <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-900 leading-tight group-hover:text-amber-700 transition-colors">
                        {club.title}
                    </h3>
                </div>
                <p className="text-sm text-slate-600 mb-6 flex-1 line-clamp-3">
                    {club.description}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    {club.memberCount && <span>{club.memberCount} Members</span>}
                    <span className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">View Details →</span>
                </div>
            </div>
        </Link>
    );
}
