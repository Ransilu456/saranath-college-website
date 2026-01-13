export interface Program {
    id: string;
    title: string;
    category: string;
    description: string;
    fullDescription: string; 
    image: string;
    link: string;
    grades?: string;
    curriculumHighlights: string[];
    facilities: string[];
}

export const programs: Program[] = [
    {
        id: "junior-secondary",
        title: "Junior Secondary",
        category: "Secondary",
        description: "Focusing on building a strong academic foundation for students in grades 6 to 8. We emphasize critical thinking, language proficiency, and core mathematical concepts.",
        fullDescription: `
            <p>The Junior Secondary section serves as the transitional phase where students move into more structured academic disciplines. We focus on fostering a love for learning while establishing high standards of discipline and character.</p>
            <p>Our curriculum for Grades 6-8 covers a broad spectrum of subjects, ensuring students discover their interests before specializing in later years. Special attention is given to English, Mathematics, and Science, alongside Creative Arts and Physical Education.</p>
            <p>We provide a supportive environment that helps students navigate the challenges of early adolescence with confidence and integrity.</p>
        `,
        image: "https://images.unsplash.com/photo-1549633030-89d0743bad01?q=80&w=2080&auto=format&fit=crop",
        link: "/programs/junior-secondary",
        grades: "Grade 6 - 8",
        curriculumHighlights: ["Core Subject Foundation", "Language Development", "Aesthetic Exploration", "Character Building"],
        facilities: ["Junior Science Lab", "Reading Room", "Activity Hall", "Smart Classrooms"]
    },
    {
        id: "ordinary-level",
        title: "Ordinary Level (O/L)",
        category: "Secondary",
        description: "Comprehensive preparation for the G.C.E Ordinary Level examination (Grades 9-11). We guide students through specialized subjects and personal development.",
        fullDescription: `
            <p>The Secondary Section (Grades 9-11) is dedicated to preparing students for the crucial G.C.E. Ordinary Level examination. This phase is characterized by academic rigor and a focus on specialized subject choices.</p>
            <p>Students select from a variety of elective buckets, including Commerce, Arts, ICT, and Agriculture, allowing them to align their studies with their future goals. Our experienced faculty provides personalized guidance to ensure every student excels in the national exams.</p>
            <p>Beyond academics, we encourage participation in clubs and sports to maintain a balanced lifestyle during these demanding years.</p>
        `,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        link: "/programs/ordinary-level",
        grades: "Grade 9 - 11",
        curriculumHighlights: ["G.C.E O/L Preparation", "Elective Specialization", "ICT and Technical Skills", "National Exam Strategy"],
        facilities: ["Senior Science Labs", "ICT Center", "Main Library", "Auditorium"]
    },
    {
        id: "senior-alevel",
        title: "Senior  (A/L)",
        category: "Secondary",
        description: "Advanced Level excellence across Science, Commerce, Arts, and Technology streams (Grades 12-13). Nurturing future professionals and leaders.",
        fullDescription: `
            <p>The Senior Secondary section is the pinnacle of school life at Saranath College. We offer a highly competitive and supportive environment for students in the Advanced Level streams.</p>
            <p>Our A/L program is recognized for its excellence in University Entrance results. We offer comprehensive support for Physical Science, Bio Science, Commerce, Arts, and Technology streams, led by a panel of expert educators.</p>
            <p>We focus on producing well-rounded individuals who are ready to take on the challenges of higher education and professional life with wisdom and virtue.</p>
        `,
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
        link: "/programs/senior-secondary",
        grades: "Grade 12 - 13",
        curriculumHighlights: ["University Entrance Focus", "Stream-wise Specialization", "Research Projects", "Leadership Development"],
        facilities: ["Stream Specific Labs", "A/L Study Center", "Digital Archive", "Career Guidance Unit"]
    },
];
