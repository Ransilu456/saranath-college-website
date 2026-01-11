import Link from "next/link";
import { Landmark, Users, Trophy, Medal } from "lucide-react";

export default function QuickLinks() {
    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-semibold tracking-widest text-xs uppercase block mb-2">
                        Discover
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 tracking-tight">
                        Life at Saranath
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link
                        href="#"
                        className="group bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-amber-200 transition-all text-center hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 mx-auto bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                            <Landmark className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif font-semibold text-lg mb-2 text-slate-900">
                            Our History
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Founded in 1924, exploring our rich heritage and traditions.
                        </p>
                    </Link>

                    <Link
                        href="#"
                        className="group bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-amber-200 transition-all text-center hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 mx-auto bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                            <Users className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif font-semibold text-lg mb-2 text-slate-900">
                            Administration
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Meet the academic staff and board of governors.
                        </p>
                    </Link>

                    <Link
                        href="#"
                        className="group bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-amber-200 transition-all text-center hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 mx-auto bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                            <Trophy className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif font-semibold text-lg mb-2 text-slate-900">
                            Sports
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Cricket, Rugby, Swimming and Athletics achievements.
                        </p>
                    </Link>

                    <Link
                        href="#"
                        className="group bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-amber-200 transition-all text-center hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 mx-auto bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                            <Medal className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif font-semibold text-lg mb-2 text-slate-900">
                            Prefects' Guild
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Student leadership and the disciplinary committee.
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
