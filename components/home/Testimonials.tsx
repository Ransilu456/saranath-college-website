import { Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-24 bg-amber-50/50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-serif font-semibold text-slate-900 text-center mb-12 tracking-tight">
                    Voices of Alumni
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Review 1 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative">
                        <Quote className="w-10 h-10 text-amber-100 absolute top-6 right-6" />
                        <p className="text-slate-600 italic mb-6 relative z-10">
                            "Saranath taught me that integrity is more important than success.
                            The discipline I learned here has been the foundation of my career."
                        </p>
                        <div className="flex items-center gap-4">
                            <img
                                src="https://i.pravatar.cc/150?u=5"
                                alt="Alumni"
                                className="w-12 h-12 rounded-full border-2 border-amber-100"
                            />
                            <div>
                                <h4 className="font-semibold text-slate-900 text-sm">
                                    Dr. A. Jayasinghe
                                </h4>
                                <p className="text-xs text-slate-500">
                                    Batch of 1995 • Surgeon
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Review 2 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative">
                        <Quote className="w-10 h-10 text-amber-100 absolute top-6 right-6" />
                        <p className="text-slate-600 italic mb-6 relative z-10">
                            "The camaraderie at Saranath is unmatched. Even 20 years later, my
                            closest friends are the ones I made in Grade 6."
                        </p>
                        <div className="flex items-center gap-4">
                            <img
                                src="https://i.pravatar.cc/150?u=8"
                                alt="Alumni"
                                className="w-12 h-12 rounded-full border-2 border-amber-100"
                            />
                            <div>
                                <h4 className="font-semibold text-slate-900 text-sm">
                                    Mr. S. Fernando
                                </h4>
                                <p className="text-xs text-slate-500">
                                    Batch of 2003 • CEO, TechCorp
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
