export default function Stats() {
    return (
        <section className="py-12 bg-white border-b border-slate-100 relative z-20 -mt-8 mx-4 md:mx-auto max-w-7xl rounded-xl shadow-xl shadow-slate-200/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
                <div className="text-center group cursor-default">
                    <div className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                        98%
                    </div>
                    <div className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        Pass Rate
                    </div>
                </div>
                <div className="text-center group cursor-default border-l border-slate-100">
                    <div className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                        3500+
                    </div>
                    <div className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        Students
                    </div>
                </div>
                <div className="text-center group cursor-default border-l border-slate-100">
                    <div className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                        150+
                    </div>
                    <div className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        Teachers
                    </div>
                </div>
                <div className="text-center group cursor-default border-l border-slate-100">
                    <div className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                        40+
                    </div>
                    <div className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        Clubs & Sports
                    </div>
                </div>
            </div>
        </section>
    );
}
