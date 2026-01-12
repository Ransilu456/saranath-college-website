import type { Metadata } from "next";
import { User, Users, GraduationCap, Briefcase, Trophy, ChevronDown, UserCheck, Star, BookOpen } from "lucide-react";

export const metadata: Metadata = {
    title: 'Administration',
    description: 'Meet the leadership of Saranath College. Explore our organizational structure, from the Board of Governors to the academic staff and section heads.',
}


export default function AdministrationPage() {
    return (
        <div className="pb-20 bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white pt-32 pb-24 mb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-sm font-bold uppercase tracking-widest mb-6">Leadership</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">School Administration</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Dedicated leaders committed to guiding Saranath College towards academic excellence, character development, and holistic growth.
                    </p>
                </div>
            </section>

            {/* Organizational Chart */}
            <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
                <div className="min-w-[768px] flex flex-col items-center">

                    {/* Level 1: Principal */}
                    <div className="flex flex-col items-center relative z-10">
                        <PrincipalCard
                            name="Mr. K. Perera"
                            role="Principal"
                            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                        />
                        {/* Connector Down */}
                        <div className="h-12 w-0.5 bg-slate-300"></div>
                    </div>

                    {/* Level 2: Deputies */}
                    <div className="flex flex-col items-center w-full relative">
                        {/* Horizontal Bar connecting Deputies */}
                        <div className="relative flex justify-center w-full gap-8">
                            <div className="absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-slate-300"></div>

                            {/* Deputy 1 */}
                            <div className="flex-1 flex flex-col items-center relative pt-8">
                                <div className="absolute top-0 w-0.5 h-8 bg-slate-300"></div>
                                <DeputyCard
                                    name="Mrs. D. Silva"
                                    role="Deputy Principal (Admin)"
                                    icon={Briefcase}
                                    color="blue"
                                />
                            </div>

                            {/* Deputy 2 (Academics - Central) */}
                            <div className="flex-1 flex flex-col items-center relative pt-8">
                                <div className="absolute top-0 w-0.5 h-8 bg-slate-300"></div>
                                <DeputyCard
                                    name="Mr. S. Fernando"
                                    role="Deputy Principal (Academics)"
                                    icon={GraduationCap}
                                    color="green"
                                />
                                {/* Connector Down to Sections */}
                                <div className="h-12 w-0.5 bg-slate-300"></div>
                            </div>

                            {/* Deputy 3 */}
                            <div className="flex-1 flex flex-col items-center relative pt-8">
                                <div className="absolute top-0 w-0.5 h-8 bg-slate-300"></div>
                                <DeputyCard
                                    name="Mr. R. Alwis"
                                    role="Deputy Principal (Co-Curricular)"
                                    icon={Trophy}
                                    color="purple"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Level 3: Sections (Under Academics) */}
                    <div className="relative flex flex-col items-center w-full mt-0">
                        {/* Horizontal Bar for Sections Split */}
                        <div className="relative flex justify-center gap-12 w-full max-w-5xl">
                            <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-slate-300"></div>

                            {/* Grade Coordinators Group */}
                            <div className="flex-1 flex flex-col items-center relative pt-8">
                                <div className="absolute top-0 w-0.5 h-8 bg-slate-300"></div>
                                <div className="w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-6 relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Junior Secondary
                                    </div>
                                    <h3 className="text-center font-serif font-bold text-slate-900 mb-6">Grade Coordinators</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <SimpleSectionHead name="Mrs. A. Gunawardena" role="Grades 6-8" color="teal" />
                                        <SimpleSectionHead name="Mr. P. Jayasinghe" role="Grades 9-11" color="cyan" />
                                    </div>
                                </div>
                            </div>

                            {/* Advanced Level Headers Group */}
                            <div className="flex-[1.5] flex flex-col items-center relative pt-8">
                                <div className="absolute top-0 w-0.5 h-8 bg-slate-300"></div>
                                <div className="w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-6 relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Senior Secondary
                                    </div>
                                    <h3 className="text-center font-serif font-bold text-slate-900 mb-6">Advanced Level (Grades 12-13)</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <SimpleSectionHead name="Mr. K. Weerasinghe" role="Physical Science" color="blue" />
                                        <SimpleSectionHead name="Mrs. S. Gamage" role="Bio Science" color="green" />
                                        <SimpleSectionHead name="Mr. D. Perera" role="Commerce" color="amber" />
                                        <SimpleSectionHead name="Mrs. M. Fernando" role="Arts" color="indigo" />
                                        <SimpleSectionHead name="Mr. T. Silva" role="Technology" color="slate" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Footer Note */}
            <div className="max-w-3xl mx-auto px-6 mt-20 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-xs font-semibold uppercase tracking-wide mb-4 shadow-sm">
                    <Users className="w-4 h-4" />
                    <span>Total Staff Strength</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-light">
                    Supported by <span className="font-semibold text-slate-900">150+ Academic Staff</span> and <span className="font-semibold text-slate-900">40+ Non-Academic Staff</span> dedicated to student welfare.
                </p>
            </div>
        </div>
    );
}

function PrincipalCard({ name, role, image }: { name: string, role: string, image: string }) {
    return (
        <div className="w-80 bg-white p-6 rounded-2xl shadow-xl border-t-4 border-amber-500 text-center relative group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full mb-4 flex items-center justify-center border-4 border-white shadow-md overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-serif">{name}</h3>
            <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mt-1">{role}</p>
        </div>
    )
}

function DeputyCard({ name, role, icon: Icon, color }: { name: string, role: string, icon: any, color: string }) {
    const colors: { [key: string]: string } = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-green-50 text-green-600",
        purple: "bg-purple-50 text-purple-600",
    };
    const borderColors: { [key: string]: string } = {
        blue: "border-blue-500",
        green: "border-green-500",
        purple: "border-purple-500",
    };

    return (
        <div className={`w-64 bg-white p-5 rounded-xl shadow-md border-t-4 ${borderColors[color]} text-center group hover:-translate-y-1 transition-transform duration-300`}>
            <div className={`w-12 h-12 mx-auto rounded-full mb-3 flex items-center justify-center ${colors[color]}`}>
                <Icon className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-lg">{name}</h4>
            <p className="text-xs font-bold text-slate-500 uppercase mt-1 leading-tight">{role}</p>
        </div>
    )
}

function SimpleSectionHead({ name, role, color }: { name: string, role: string, color: string }) {
    const bgColors: { [key: string]: string } = {
        blue: "bg-blue-50 text-blue-700 border-blue-100",
        green: "bg-green-50 text-green-700 border-green-100",
        amber: "bg-amber-50 text-amber-700 border-amber-100",
        indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
        slate: "bg-slate-100 text-slate-700 border-slate-200",
        teal: "bg-teal-50 text-teal-700 border-teal-100",
        cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
    };

    return (
        <div className={`p-3 rounded-lg border flex items-center gap-3 ${bgColors[color]} transition-all hover:shadow-md`}>
            <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-current">
                <UserCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
                <p className="text-xs font-bold uppercase opacity-70 mb-0.5">{role}</p>
                <p className="text-sm font-bold leading-tight">{name}</p>
            </div>
        </div>
    );
}
