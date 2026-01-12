import Link from 'next/link';
import { Home, ArrowLeft, Search, Map, GraduationCap } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-6 bg-slate-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-amber-500 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-2xl w-full text-center relative z-10">
                <div className="mb-8 relative inline-block">
                    <div className="text-[120px] md:text-[180px] font-serif font-bold text-slate-100 leading-none">
                        404
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center border border-slate-100 rotate-6 hover:rotate-0 transition-transform duration-500 group">
                            <Map className="w-12 h-12 md:w-16 md:h-16 text-amber-500" strokeWidth={1.5} />
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                    Journey's End? Not Quite.
                </h1>
                <p className="text-slate-600 text-lg mb-12 max-w-md mx-auto leading-relaxed">
                    The page you are looking for seems to have vanished into the archives. Let's get you back on the right path.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-16">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-3 py-4 bg-slate-950 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <Link
                        href="/academics"
                        className="flex items-center justify-center gap-3 py-4 bg-white text-slate-900 rounded-2xl font-semibold border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm"
                    >
                        <GraduationCap className="w-5 h-5" />
                        Our Programs
                    </Link>
                </div>

                <div className="pt-12 border-t border-slate-200">
                    <p className="text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold">Quick Destinations</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
                        <Link href="/about" className="hover:text-amber-600 transition-colors">About Us</Link>
                        <Link href="/news" className="hover:text-amber-600 transition-colors">Latest News</Link>
                        <Link href="/administration" className="hover:text-amber-600 transition-colors">Help Desk</Link>
                        <Link href="/admissions" className="hover:text-amber-600 transition-colors">Admissions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
