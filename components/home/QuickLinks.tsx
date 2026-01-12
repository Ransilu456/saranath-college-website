import Link from "next/link";
import { Landmark, Users, Trophy, Medal, ArrowRight } from "lucide-react";

export default function QuickLinks() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase block mb-4">
                        Discover
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
                        Explore Saranath
                    </h2>
                    <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <QuickLinkCard
                        href="/about"
                        icon={Landmark}
                        title="Our History"
                        description="Founded in 1924, exploring our rich heritage and century-old traditions."
                        delay="delay-0"
                    />

                    <QuickLinkCard
                        href="/administration"
                        icon={Users}
                        title="Administration"
                        description="Meet the academic leadership, board of governors, and section heads."
                        delay="delay-100"
                    />

                    <QuickLinkCard
                        href="/clubs?category=Sports"
                        icon={Trophy}
                        title="Sports"
                        description="Cricket, Rugby, and Athletics. View our trophy room and active teams."
                        delay="delay-200"
                    />

                    <QuickLinkCard
                        href="/clubs/prefects-guild"
                        icon={Medal}
                        title="Prefects' Guild"
                        description="The apex student leadership body maintaining discipline and values."
                        delay="delay-300"
                    />
                </div>
            </div>
        </section>
    );
}

function QuickLinkCard({ href, icon: Icon, title, description, delay }: { href: string, icon: any, title: string, description: string, delay: string }) {
    return (
        <Link
            href={href}
            className={`group bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:border-amber-200 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden h-full ${delay}`}
        >
            <div className="w-20 h-20 bg-white shadow-sm border border-slate-100 text-slate-700 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-amber-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-slate-200/50">
                <Icon className="w-9 h-9" strokeWidth={1.25} />
            </div>

            <h3 className="font-serif font-bold text-2xl mb-4 text-slate-900 group-hover:text-amber-700 transition-colors">
                {title}
            </h3>

            <p className="text-slate-500 leading-relaxed text-sm mb-8 flex-grow">
                {description}
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-amber-600 uppercase tracking-widest transition-all">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Subtle bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </Link>
    );
}
