import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
    return (
        <section className="py-24 bg-amber-50/50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-serif font-semibold text-slate-900 text-center mb-12 tracking-tight">
                    Voices of Alumni
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((item) => (
                        <div key={item.id} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative">
                            <Quote className="w-10 h-10 text-amber-100 absolute top-6 right-6" />
                            <p className="text-slate-600 italic mb-6 relative z-10">
                                "{item.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.author.image}
                                    alt={item.author.name}
                                    className="w-12 h-12 rounded-full border-2 border-amber-100"
                                />
                                <div>
                                    <h4 className="font-semibold text-slate-900 text-sm">
                                        {item.author.name}
                                    </h4>
                                    <p className="text-xs text-slate-500">
                                        {item.author.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
