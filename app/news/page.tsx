import { Calendar, User } from "lucide-react";

export default function NewsPage() {
    const news = [
        {
            title: "Saranath Students Top Island Rankings in GCE A/L",
            date: "Oct 12, 2024",
            category: "Academics",
            excerpt: "Exceptional performance by the 2023 batch with 15 students achieving 3As in the Physical Science stream. The college administration congratulates all students and teachers.",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Colors Night 2024: Celebrating Sportsmanship",
            date: "Sep 28, 2024",
            category: "Sports",
            excerpt: "The annual Colors Night was held at the Main Hall, graced by the Minister of Sports. Over 200 sportsmen were recognized for their achievements in the past year.",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Annual Science Day 'Eureka 2024'",
            date: "Sep 15, 2024",
            category: "Events",
            excerpt: "Showcasing innovation and scientific inquiry, the Science Union presented over 50 projects at the annual exhibition visited by schools district-wide.",
            image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Debating Team wins National Championship",
            date: "Aug 22, 2024",
            category: "Co-Curricular",
            excerpt: "The English Debating Team secured the championship trophy at the National Schools Debating Tournament held at Royal College.",
            image: "https://images.unsplash.com/photo-1577985051167-0d49eec21977?q=80&w=2089&auto=format&fit=crop"
        }
    ];

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

            <div className="grid md:grid-cols-2 gap-8">
                {news.map((item, i) => (
                    <article key={i} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                        <div className="h-64 overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                                <span className="text-amber-600 flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                                <span>•</span>
                                <span>{item.category}</span>
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">{item.title}</h2>
                            <p className="text-slate-600 line-clamp-3 mb-4">{item.excerpt}</p>
                            <span className="inline-block text-sm font-semibold text-slate-900 underline decoration-amber-500/50 underline-offset-4 group-hover:decoration-amber-500 transition-all">Read Full Story</span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
