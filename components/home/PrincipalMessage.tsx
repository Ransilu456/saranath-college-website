import { Quote } from "lucide-react";

export default function PrincipalMessage() {
    return (
        <section className="py-24 bg-white" id="administration">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-5/12 relative group">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden border border-slate-200 shadow-2xl relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                                alt="Principal"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-50 rounded-full -z-0"></div>
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-slate-50 rounded-full -z-0"></div>
                        <div className="absolute bottom-8 left-8 z-20 bg-white/95 backdrop-blur p-4 rounded shadow-lg border-l-4 border-amber-500 max-w-[200px]">
                            <p className="text-lg font-serif font-semibold text-slate-900">
                                Mr. K. Perera
                            </p>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                                Principal
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-7/12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-semibold uppercase tracking-wider rounded-full mb-6 border border-amber-100">
                            <Quote className="w-3 h-3" /> From the Desk of the Principal
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900 mb-6 leading-tight tracking-tight">
                            Building Character, <br />
                            <span className="text-slate-400 italic font-normal">
                                Inspiring Greatness.
                            </span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                            <p>
                                "Welcome to Saranath College. For over 100 years, we have stood
                                as a beacon of education in Sri Lanka. Our mission goes beyond
                                textbooks; we strive to mold disciplined, honorable, and capable
                                young men who will serve our motherland with distinction."
                            </p>
                            <p>
                                We continue to adapt to the changing world while holding fast to
                                the traditions that define us. Whether it is in the classroom,
                                on the rugby field, or in the debating hall, a Saranath student
                                strives for nothing less than the best.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                            <img
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                                alt="Signature"
                                className="h-12 opacity-40"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
