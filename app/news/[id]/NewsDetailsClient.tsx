"use client";

import { news } from "@/data/news";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";

interface NewsDetailsClientProps {
    newsItem: any;
    relatedNews: any[];
}

export default function NewsDetailsClient({ newsItem, relatedNews }: NewsDetailsClientProps) {
    return (
        <article className="bg-white min-h-screen pb-20">
            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[400px]">
                <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
                    <div className="max-w-4xl mx-auto w-full">
                        <Link
                            href="/news"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-medium transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to News
                        </Link>
                        <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> {newsItem.date}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-white/50"></span>
                            <span>{newsItem.category}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            {newsItem.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-t-3xl p-8 md:p-12 shadow-sm min-h-[500px]">
                            <div
                                className="prose prose-lg prose-slate prose-headings:font-serif prose-a:text-amber-600 prose-img:rounded-2xl max-w-none first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left"
                                dangerouslySetInnerHTML={{ __html: newsItem.content }}
                            />

                            <hr className="my-12 border-slate-100" />

                            <div className="flex items-center justify-between">
                                <div className="text-sm text-slate-500 font-medium">
                                    Share this article
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 mt-8 lg:mt-0">
                        <div className="sticky top-24 space-y-8">
                            {/* Related News */}
                            {relatedNews.length > 0 && (
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                    <h3 className="font-serif font-bold text-xl text-slate-900 mb-6">
                                        Related News
                                    </h3>
                                    <div className="space-y-6">
                                        {relatedNews.map((item) => (
                                            <Link href={`/news/${item.id}`} key={item.id} className="group block">
                                                <div className="aspect-video rounded-lg overflow-hidden mb-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className="text-xs font-semibold text-amber-600 mb-1 uppercase tracking-wider">
                                                    {item.date}
                                                </div>
                                                <h4 className="font-semibold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2">
                                                    {item.title}
                                                </h4>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Stay Connected */}
                            <div className="bg-slate-900 rounded-2xl p-8 text-center text-white">
                                <h3 className="font-serif font-bold text-2xl mb-2">
                                    Stay Connected
                                </h3>
                                <p className="text-slate-400 text-sm mb-6">
                                    Follow Saranath College for daily updates and highlights.
                                </p>
                                <button className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors">
                                    Subscribe to Newsletter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
