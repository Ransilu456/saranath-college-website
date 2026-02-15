export interface NewsItem {
    id: string;
    title: string;
    date: string;
    category: "Academics" | "Sports" | "Events" | "Co-Curricular";
    excerpt: string;
    content: string;
    image: string;
    featured?: boolean;
    preview?: boolean;
}

export const news: NewsItem[] = [
    {
        id: "al-results-2025",
        title: "Saranath Students Top Island Rankings in GCE A/L",
        date: "Oct 12, 2026",
        category: "Academics",
        excerpt: "Exceptional performance by the 2023 batch with 15 students achieving 3As in the Physical Science stream.",
        content: `
            <p>The 2023 G.C.E. Advanced Level examination results have brought immense glory to Saranath College, with our students securing top positions in the island rankings. A total of 15 students from the Physical Science stream achieved 3As, marking a historic milestone for the college.</p>
            
            <p>Among the high achievers, Master K. Perera ranked 2nd in the district and 5th in the island in the Physical Science stream. In the Biological Science stream, Master M. Silva secured the 8th position in the district.</p>
            
            <p>The Principal, in a special assembly, commended the dedication of the students and the unwavering support of the academic staff. "This achievement is a testament to the rigorous academic environment and the holistic education we provide at Saranath," he stated.</p>

            <p>We strictly adhere to a balanced curriculum that emphasizes both theoretical knowledge and practical application, which has evidently yielded these fruitful results. The college administration congratulates all students who sat for the exam and wishes them the very best in their tertiary education endeavors.</p>
        `,
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
        featured: true,
        preview: true
    },
    {
        id: "colors-night-2026",
        title: "Colors Night 2024: Celebrating Sportsmanship",
        date: "Sep 28, 2026",
        category: "Sports",
        excerpt: "The annual Colors Night was held at the Main Hall, graced by the Minister of Sports. Over 200 sportsmen were recognized.",
        content: `
            <p>The Saranath College Main Hall was illuminated with pride and celebration as we hosted the Annual Colors Night 2024. The event was graced by the Honorable Minister of Sports as the Chief Guest, along with distinguished alumni and parents.</p>

            <p>Over 200 sportsmen from 15 different sports disciplines were awarded Colors and Merit awards for their outstanding performance at Zonal, Provincial, and National levels. The coveted 'Sportsman of the Year' trophy was awarded to Master T. Fernando of the Athletics team for his record-breaking performance in the 400m hurdles.</p>

            <p>The Chief Guest, in his address, highlighted the importance of sports in character building. "Victory is not just about the medal, but the discipline, teamwork, and resilience required to achieve it," he remarked.</p>

            <p>The night concluded with a cultural performance by the Western Music Band, followed by a fellowship dinner.</p>
        `,
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
        featured: true,
        preview: true
    },
    {
        id: "science-day-2026",
        title: "Annual Science Day 'Something 2026'",
        date: "Sep 15, 2026",
        category: "Events",
        excerpt: "Showcasing innovation and scientific inquiry, the Science Union presented over 50 projects at the annual exhibition.",
        content: `
            <p>'Something 2026', the annual Science Day of Saranath College, captivated visitors with a display of student innovation and scientific inquiry. Organized by the Science Union, the event featured over 50 projects ranging from robotics and renewable energy solutions to biological models.</p>

            <p>The highlight of the exhibition was the 'Eco-City' model presented by the Grade 10 students, which demonstrated a self-sustaining urban ecosystem powered by solar and wind energy. The project received special commendation from the guest judges from the University of Moratuwa.</p>

            <p>In addition to the exhibition, the day included a quiz competition giving students from invited schools a platform to test their scientific knowledge. The event aimed to inspire the next generation of scientists and engineers to tackle global challenges through innovation.</p>
        `,
        image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "debating-champ-2026",
        title: "Debating Team wins National Championship",
        date: "Aug 22, 2026",
        category: "Co-Curricular",
        excerpt: "The English Debating Team secured the championship trophy at the National Schools Debating Tournament.",
        content: `
            <p>The Saranath College English Debating Team has once again proven their mettle by clinching the championship trophy at the prestigious All-Island Schools Debating Tournament held at Royal College.</p>

            <p>In a thrilling final round against a formidable opponent, our team successfully proposed the motion regarding 'The Role of AI in Modern Education'. The judges praised our team for their coherent arguments, rebuttal skills, and eloquent delivery.</p>

            <p>Team Captain Master A. Perera was adjudged the Best Speaker of the tournament. "This victory is the result of months of research and practice. We are grateful to our coaches and the school for their continuous support," he said.</p>

            <p>The team was welcomed back to college with a warm reception, inspiring many younger students to take up the art of debating.</p>
        `,
        image: "https://images.unsplash.com/photo-1577985051167-0d49eec21977?q=80&w=2089&auto=format&fit=crop"
    }
];
