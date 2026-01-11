import { Download, PhoneCall } from "lucide-react";

export default function CtaStrip() {
    return (
        <section
            className="py-24 bg-amber-600 relative overflow-hidden"
            id="application"
        >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-semibold text-white mb-6 tracking-tight">
                    Join the Saranath Family
                </h2>
                <p className="text-amber-100 text-lg max-w-2xl mx-auto mb-12">
                    We are currently accepting applications for Grade 1 (2025) and Grade 6
                    (2025). Download the application form or contact the registrar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg shadow-xl shadow-amber-900/20 hover:bg-amber-50 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                        <Download className="w-5 h-5" strokeWidth={2} />
                        Download Application
                    </button>
                    <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                        <PhoneCall className="w-5 h-5" strokeWidth={2} />
                        Contact Registrar
                    </button>
                </div>
            </div>
        </section>
    );
}
