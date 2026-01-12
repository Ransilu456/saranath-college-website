"use client";

import { useState } from "react";
import { Calendar, Search } from "lucide-react";
import { NewsItem } from "@/data/news";
import Link from "next/link";

interface NewsClientProps {
    news: NewsItem[];
}

export default function NewsClient({ news }: NewsClientProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Get unique categories
    const categories = ["All", ...Array.from(new Set(news.map(item => item.category)))];

    // Filter news
    const filteredNews = news.filter(item => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPreview = item.preview === true;
        return matchesCategory && matchesSearch && matchesPreview;
    });

    return (
        <div className="pt-24 pb-12 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
                <h1 className="text-4xl font-serif font-semibold text-slate-900 mb-4">
                    News & Events
                </h1>
                <p className="text-lg text-slate-600">
                    Stay updated with the latest happenings at Saranath College.
                </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-start md:items-center">
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                ? "bg-slate-900 text-white shadow-md"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all text-sm"
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.length > 0 ? (
                    filteredNews.map((item) => (
                        <Link href={`/news/${item.id}`} key={item.id} className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-amber-200 transition-all duration-300">
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">
                                    <span className="text-amber-600 flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {item.date}
                                    </span>
                                    <span>•</span>
                                    <span>{item.category}</span>
                                </div>
                                <h2 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
                                    {item.title}
                                </h2>
                                <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                                    {item.excerpt}
                                </p>
                                <span className="inline-block text-xs font-semibold text-slate-900 underline decoration-amber-500/50 underline-offset-4 group-hover:decoration-amber-500 transition-all">
                                    Read Full Story
                                </span>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                        <Search className="w-8 h-8 mx-auto mb-3 text-slate-400 opacity-50" />
                        <p>No news found matching your criteria.</p>
                        <button
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="mt-4 text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
