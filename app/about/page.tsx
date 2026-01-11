export default function AboutPage() {
    return (
        <div className="pt-24 pb-12 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900 mb-6">
                    Our Legacy
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                    Since 1924, Saranath College has been a pillar of education, character, and service.
                    Discover the history and values that define us.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div>
                    <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Our Mission</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        To provide a holistic education that balances academic excellence with character development,
                        producing leaders who are grounded in traditional values and equipped for the modern world.
                    </p>
                    <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Our Vision</h2>
                    <p className="text-slate-600 leading-relaxed">
                        To be the premier educational institution in the region, recognized for nurturing
                        integrity, wisdom, and leadership in every student.
                    </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1549633030-89d0743bad01?q=80&w=2080&auto=format&fit=crop"
                        alt="School Corridor"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
