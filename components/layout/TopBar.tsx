import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" strokeWidth={1.5} /> +94 11 234 5678
                    </span>
                    <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" strokeWidth={1.5} /> info@saranath.lk
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="#" className="hover:text-amber-500 transition-colors">
                        LMS Login
                    </Link>
                    <span className="text-slate-700">|</span>
                    <Link href="#" className="hover:text-amber-500 transition-colors">
                        Parent Portal
                    </Link>
                    <span className="text-slate-700">|</span>
                    <Link href="#" className="hover:text-amber-500 transition-colors">
                        Alumni (OBA)
                    </Link>
                </div>
            </div>
        </div>
    );
}
