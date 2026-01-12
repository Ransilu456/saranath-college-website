import type { Metadata } from "next";
import { Download, FileText, CheckCircle2, Calendar, MapPin, ClipboardCheck, GraduationCap, ArrowRight, UserCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Admissions 2025',
    description: 'Join the Saranath College legacy. Discover our simplified admission process, download necessary forms, and view important deadlines for the 2025 academic year.',
}

export default function AdmissionsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Immersive Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                    alt="Saranath College Campus"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>

                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <UserCheck className="w-4 h-4 text-amber-500" />
                        <span className="text-amber-500 font-bold tracking-[0.2em] text-[10px] uppercase">Join the Legacy</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
                        Admissions <span className="text-amber-500">2025</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                        We are looking for individuals who aspire to lead, innovate, and contribute to a century-old tradition of excellence.
                    </p>
                </div>

                {/* Bottom Curve */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 pb-24">

                {/* Important Dates Ticker */}
                <div className="bg-amber-600 rounded-3xl p-8 mb-20 shadow-2xl shadow-amber-900/20 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 group">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white backdrop-blur-md group-hover:rotate-6 transition-transform">
                            <Calendar className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-white font-serif font-bold text-2xl">Upcoming Deadlines</h3>
                            <p className="text-amber-100/80 text-sm">Don't miss your chance to be part of the 2025 intake.</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
                        <div className="text-center md:text-left">
                            <span className="block text-amber-200 text-[10px] uppercase font-bold tracking-widest mb-1">Grade 6</span>
                            <span className="text-white font-bold text-lg">August 30, 2024</span>
                        </div>
                        <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
                        <div className="text-center md:text-left">
                            <span className="block text-amber-200 text-[10px] uppercase font-bold tracking-widest mb-1">Grade 12 (A/L)</span>
                            <span className="text-white font-bold text-lg">September 15, 2024</span>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Left & Middle: Process & Requirements */}
                    <div className="lg:col-span-2 space-y-24">

                        {/* Interactive Roadmap */}
                        <section>
                            <div className="mb-12">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Journey to Saranath</h2>
                                <p className="text-slate-500 max-w-xl">Our structured admission process ensures a fair and comprehensive evaluation of every candidate.</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8 relative">
                                <AdmissionStep
                                    number="01"
                                    title="Application Submission"
                                    desc="Download and complete the official application. Submit via post or visit our registrar's office."
                                    icon={ClipboardCheck}
                                />
                                <AdmissionStep
                                    number="02"
                                    title="Entrance Evaluation"
                                    desc="Selected candidates will undergo a holistic aptitude assessment focusing on core competency."
                                    icon={FileText}
                                />
                                <AdmissionStep
                                    number="03"
                                    title="Formal Interview"
                                    desc="A meaningful engagement session with the student and parents to align on values and aspirations."
                                    icon={UsersCheckIcon}
                                />
                                <AdmissionStep
                                    number="04"
                                    title="Final Enrollment"
                                    desc="Successful candidates receive notification of admission and complete the registration formalities."
                                    icon={GraduationCap}
                                    isLast
                                />
                            </div>
                        </section>

                        {/* Requirements Grid */}
                        <section className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
                            <div className="mb-10">
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Necessary Documentation</h2>
                                <p className="text-slate-500">Please ensure you have high-quality copies of the following documents ready for submission.</p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <RequirementItem text="Certified Birth Certificate" />
                                <RequirementItem text="Grama Niladhari Character Certificate" />
                                <RequirementItem text="Previous 3 Years School Reports" />
                                <RequirementItem text="Extra-Curricular Achievement Portfolio" />
                                <RequirementItem text="NIC Copies of Parents/Guardians" />
                                <RequirementItem text="2 Passport Sized Photographs" />
                            </div>
                        </section>
                    </div>

                    {/* Right Side: Resource Center */}
                    <aside className="space-y-8">
                        <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                            <h3 className="text-2xl font-serif font-bold mb-6">Resource Center</h3>
                            <p className="text-slate-400 text-sm mb-10 leading-relaxed">
                                Get all official 2025 admission documents. Ensure you download the correct version for your grade level.
                            </p>

                            <div className="space-y-4">
                                <DownloadCard
                                    title="General Admission Form"
                                    lang="English"
                                />
                                <DownloadCard
                                    title="General Admission Form"
                                    lang="Sinhala"
                                />
                                <DownloadCard
                                    title="Grade 6 Grade Guide"
                                    lang="Bilingual"
                                />
                                <DownloadCard
                                    title="A/L Stream Selection Guide"
                                    lang="Bilingual"
                                />
                            </div>

                            <button className="w-full mt-10 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn">
                                Need Help? Contact Registrar
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="bg-slate-100 rounded-[2.5rem] p-8 border border-slate-200">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 mb-6 shadow-sm">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Visit Our Office</h4>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Our admissions office is open Monday to Friday, from 8:30 AM to 3:30 PM.
                            </p>
                            <Link href="#" className="text-xs font-bold text-amber-600 uppercase tracking-widest hover:underline">Get Directions</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

function AdmissionStep({ number, title, desc, icon: Icon, isLast = false }: any) {
    return (
        <div className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-amber-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 relative">
            <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <span className="text-4xl font-serif font-black text-slate-100 group-hover:text-amber-500/20 transition-colors">{number}</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function RequirementItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 group/req">
            <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-amber-500 group-hover/req:bg-amber-600 group-hover/req:text-white transition-colors">
                <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-slate-700 font-medium text-sm">{text}</span>
        </div>
    );
}

function DownloadCard({ title, lang }: { title: string, lang: string }) {
    return (
        <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-white/20 transition-all text-left group/card">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-slate-400 group-hover/card:text-amber-500 transition-colors">
                    <FileText className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{title}</h4>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{lang}</span>
                </div>
            </div>
            <Download className="w-5 h-5 text-slate-600 group-hover/card:text-white transition-colors" />
        </button>
    );
}

function UsersCheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <polyline points="16 11 18 13 22 9" />
        </svg>
    );
}
