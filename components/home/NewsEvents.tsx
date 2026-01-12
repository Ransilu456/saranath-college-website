import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { news } from "@/data/news";
import { events } from "@/data/events";

export default function NewsEvents() {
    // Get latest 2 news items
    const latestNews = news.filter(news => news.preview).slice(0, 2);
    // Get latest 3 events
    const upcomingEvents = events.filter(event => event.preview).slice(0, 3);

    return (
        <section className="py-20 bg-white" id="news">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Latest News */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-serif font-semibold text-slate-900 tracking-tight">
                                College News
                            </h2>
                            <Link
                                href="/news"
                                className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center gap-1 group"
                            >
                                View Archives{" "}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid gap-8">
                            {latestNews.map((item, index) => (
                                <Link href={`/news/${item.id}`} key={item.id} className={`flex flex-col md:flex-row gap-6 group cursor-pointer ${index !== 0 ? 'border-t border-slate-100 pt-8' : ''}`}>
                                    <div className="w-full md:w-64 h-40 shrink-0 overflow-hidden rounded-xl border border-slate-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                                            <span className="text-amber-600 flex items-center gap-1">
                                                <Calendar className="w-3 h-3" /> {item.date}
                                            </span>
                                            <span>•</span>
                                            <span>{item.category}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2 font-serif group-hover:text-amber-700 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                                            {item.excerpt}
                                        </p>
                                        <span className="text-xs font-semibold text-slate-900 underline decoration-amber-500/50 underline-offset-4 group-hover:decoration-amber-500 transition-all">
                                            Read more
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-serif font-semibold text-slate-900 mb-8 tracking-tight">
                            Upcoming Events
                        </h2>
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                            {upcomingEvents.map((event, index) => (
                                <div key={event.id} className={`flex gap-4 ${index !== upcomingEvents.length - 1 ? 'mb-6 pb-6 border-b border-slate-200' : ''} group cursor-pointer`}>
                                    <div className="flex flex-col items-center justify-center w-14 h-14 bg-white border border-slate-200 rounded-xl shadow-sm shrink-0 group-hover:border-amber-400 transition-colors">
                                        <span className="text-[10px] font-semibold text-amber-600 uppercase">
                                            {event.date.month}
                                        </span>
                                        <span className="text-xl font-semibold text-slate-900 font-serif">
                                            {event.date.day}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 leading-tight mb-1 group-hover:text-amber-700 transition-colors">
                                            {event.title}
                                        </h4>
                                        <p className="text-xs text-slate-500 mb-2">
                                            {event.location} • {event.time}
                                        </p>
                                        <span className={`inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-${event.color}-100 text-${event.color}-700 rounded border border-${event.color}-200`}>
                                            {event.type}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/events"
                            className="block w-full py-3 mt-4 text-center text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
                        >
                            View Full Calendar
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
