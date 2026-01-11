import { Download, FileText, CheckCircle2 } from "lucide-react";

export default function AdmissionsPage() {
    return (
        <div className="pt-24 pb-12 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900 mb-6">
                    Join Our Family
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                    We welcome applications for the academic year 2025.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="col-span-2 space-y-8">
                    <section className="bg-white p-8 rounded-2xl border border-slate-200">
                        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-6">Admission Process</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Application Submission</h3>
                                    <p className="text-slate-500 text-sm mt-1">Download the application form and submit via post or email.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Entrance Examination</h3>
                                    <p className="text-slate-500 text-sm mt-1">Selected candidates will be called for an aptitude test.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Interview</h3>
                                    <p className="text-slate-500 text-sm mt-1">Parents and student will be interviewed by the board.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h3 className="font-semibold text-red-800 mb-2">Important Dates</h3>
                        <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                            <li>Grade 1 Applications Close: <strong>August 30, 2024</strong></li>
                            <li>Grade 6 Applications Close: <strong>September 15, 2024</strong></li>
                        </ul>
                    </section>
                </div>

                <div className="space-y-6">
                    <div className="bg-slate-950 text-white p-8 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-2">Downloads</h3>
                        <p className="text-slate-400 text-sm mb-6">Get the official forms here.</p>
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm">
                                <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> Application Form (English)</span>
                                <Download className="w-4 h-4" />
                            </button>
                            <button className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm">
                                <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> Application Form (Sinhala)</span>
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                        <h3 className="font-semibold text-amber-900 mb-2">Requirements</h3>
                        <ul className="space-y-2 text-sm text-amber-800">
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" /> Birth Certificate</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" /> Grama Niladhari Certificate</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" /> Previous School Records</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
