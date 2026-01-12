import { Shield, Target, Lightbulb, Users, Award, BookOpen, Clock, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Our Legacy',
    description: 'Founded in 1924, Saranath College has a rich history of nurturing leaders. Learn about our century-long journey, mission, vision, and core values.',
}


export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* Immersive Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop"
                        className="w-full h-full object-cover scale-105"
                        alt="Hero Background"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md border border-amber-500/30">
                        Established 1924
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
                        Our Legacy of <span className="text-amber-400 italic">Excellence</span>
                    </h1>
                    <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
                        For over a century, Saranath College has been a sanctuary of knowledge,
                        shaping the leaders of tomorrow through tradition, integrity, and innovation.
                    </p>
                </div>

                {/* Decorative Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
                    <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
                    <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Explore Our Story</span>
                </div>
            </section>

            {/* Our Journey Timeline */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Journey Through Time</h2>
                    <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-slate-100 hidden md:block"></div>

                    <div className="space-y-24">
                        <TimelineItem
                            year="1924"
                            title="The Foundation"
                            description="Founded with a vision to provide quality education in the region, starting with a handful of dedicated teachers and a dozen students."
                            image="https://images.unsplash.com/photo-1549633030-89d0743bad01?q=80&w=2080&auto=format&fit=crop"
                            side="left"
                        />
                        <TimelineItem
                            year="1950"
                            title="Golden Era of Expansion"
                            description="Major infrastructure development including the Main Hall and Science Labs. Recognized as a premier educational institution."
                            image="https://images.unsplash.com/photo-1523050335456-adabbf7ceb77?q=80&w=2069&auto=format&fit=crop"
                            side="right"
                        />
                        <TimelineItem
                            year="2000"
                            title="Embracing Digital"
                            description="Introduction of ICT labs and modern computer education, bridging the gap between tradition and technology."
                            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                            side="left"
                        />
                        <TimelineItem
                            year="2024"
                            title="The Centenary"
                            description="Celebrating 100 years of academic excellence and social service. Moving forward with a renewed vision for the future."
                            image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                            side="right"
                        />
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                {/* Decorative blob backgrounds */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <div className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                                        <Shield className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
                                </div>
                                <p className="text-xl text-slate-400 font-light leading-relaxed">
                                    To provide a holistic education that balances academic excellence with character development,
                                    producing leaders who are grounded in traditional values and equipped for the modern world.
                                </p>
                            </div>

                            <div className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <Target className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold">Our Vision</h2>
                                </div>
                                <p className="text-xl text-slate-400 font-light leading-relaxed">
                                    To be the premier educational institution in the region, recognized for nurturing
                                    integrity, wisdom, and leadership in every student.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                                <img
                                    src="https://images.unsplash.com/photo-1549633030-89d0743bad01?q=80&w=2080&auto=format&fit=crop"
                                    className="w-full aspect-[4/5] object-cover scale-110"
                                    alt="School Atmosphere"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10">
                                    <p className="text-5xl font-serif font-bold text-white mb-2">100+</p>
                                    <p className="text-amber-400 font-bold uppercase tracking-widest text-sm">Years of Success</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-amber-600 font-bold tracking-widest text-xs uppercase block mb-3">Our DNA</span>
                        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Core Values</h2>
                        <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <ValueCard icon={Heart} title="Integrity" description="Honesty and moral uprightness in all actions." />
                        <ValueCard icon={Lightbulb} title="Innovation" description="Embracing new ideas and creative thinking." />
                        <ValueCard icon={Users} title="Service" description="Commitment to our community and society." />
                        <ValueCard icon={Award} title="Excellence" description="Striving for the highest possible standards." />
                        <ValueCard icon={Shield} title="Discipline" description="Self-control and order in search of growth." />
                        <ValueCard icon={BookOpen} title="Knowledge" description="Lifelong pursuit of wisdom and truth." />
                        <ValueCard icon={Clock} title="Tradition" description="Respecting our past while building the future." />
                        <ValueCard icon={Heart} title="Harmony" description="Fostering unity and mutual respect." />
                    </div>
                </div>
            </section>
        </main>
    );
}

function TimelineItem({ year, title, description, image, side }: { year: string, title: string, description: string, image: string, side: 'left' | 'right' }) {
    return (
        <div className={`flex flex-col md:flex-row items-center gap-12 ${side === 'right' ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full">
                <div className={`space-y-4 md:text-${side === 'left' ? 'right' : 'left'}`}>
                    <span className="text-amber-600 font-bold text-4xl font-serif">{year}</span>
                    <h3 className="text-2xl font-serif font-bold text-slate-900">{title}</h3>
                    <p className="text-slate-500 leading-relaxed max-w-lg mx-auto md:mx-0 inline-block">{description}</p>
                </div>
            </div>

            <div className="relative flex-none">
                <div className="w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow-lg relative z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-amber-500/20 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 w-full">
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-video border border-slate-100">
                    <img src={image} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt={title} />
                </div>
            </div>
        </div>
    );
}

function ValueCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-amber-200 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
        </div>
    );
}

