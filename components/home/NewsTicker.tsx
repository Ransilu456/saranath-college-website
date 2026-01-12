import { Bell } from "lucide-react";

export default function NewsTicker() {
    return (
        <div className="bg-amber-50 border-b border-amber-100 py-2.5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[10px] font-semibold bg-amber-600 text-white px-2 py-0.5 rounded border border-amber-700/20 shrink-0 uppercase tracking-wide shadow-sm">
                    <Bell className="w-2.5 h-2.5" /> Latest
                </span>
                <div className="marquee-container w-full">
                    <div className="marquee-content text-xs md:text-sm font-medium text-slate-800 flex gap-8">
                        <span>Grade 6 Admissions for 2025 are now open until August 30th</span>
                        <span className="text-amber-400 ml-4 mr-2">•</span>
                        <span>Annual Sports Meet Postponed to next Friday due to weather</span>
                        <span className="text-amber-400 ml-4 mr-2">•</span>
                        <span>
                            Congratulations to the Under-19 Cricket Team for reaching the finals!
                        </span>
                        <span className="text-amber-400 ml-4 mr-2">•</span>
                        <span>
                            O/L Results released: Saranath College achieves 98% pass rate
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
