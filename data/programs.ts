export interface Program {
    id: string;
    title: string;
    category: string;
    description: string;
    fullDescription: string; // HTML
    image: string;
    link: string; // This might now be redundant if we link to /programs/[id] by default, but keeping for compatibility or custom internal redirects
    grades?: string;
    curriculumHighlights: string[];
    facilities: string[];
}

export const programs: Program[] = [
    {
        id: "junior-school",
        title: "Junior School",
        category: "Primary",
        description: "Foundational years focusing on creativity, language, and basic mathematics in a nurturing environment. We prioritize holistic development through play-based learning and interactive activities.",
        fullDescription: `
            <p>Our Junior School provides a warm, nurturing environment where young minds are encouraged to explore, question, and create. We believe that the early years are crucial for character formation and cognitive development.</p>
            <p>The curriculum is designed to be activity-based, moving away from rote learning. We integrate music, art, and drama into daily lessons to make learning enjoyable and effective. Special emphasis is placed on mastery of the mother tongue and English language.</p>
            <p>We strictly adhere to the government curriculum while supplementing it with international best practices in primary education.</p>
        `,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
        link: "/programs/junior-school",
        grades: "Grade 1 - 5",
        curriculumHighlights: ["Activity Based Learning", "Bilingual Education", "Value Education", "Aesthetic Skills"],
        facilities: ["Primary Library", "Kids' Play Area", "Activity Room", "Smart Classrooms"]
    },
    {
        id: "ordinary-level",
        title: "Ordinary Level",
        category: "Secondary",
        description: "Rigorous preparation for the G.C.E O/L examination with a focus on core subjects and electives. Students are guided to discover their academic strengths and interests.",
        fullDescription: `
            <p>The Secondary Section is where students begin to tackle more specialized subjects and prepare for the G.C.E. Ordinary Level examination. Our focus is on providing a balanced education that covers the core subjects of Mathematics, Science, Langauges, and Religion/Civil educaiton.</p>
            <p>We offer a wide range of elective subjects including Commerce, Arts, ICT, and Agriculture, allowing students to explore their interests. The academic program is supported by a robust co-curricular program that ensures physical and social development.</p>
            <p>Regular assessments and remedial classes ensure that every student reaches their full potential before the national examination.</p>
        `,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        link: "/programs/ordinary-level",
        grades: "Grade 6 - 11",
        curriculumHighlights: ["G.C.E O/L Syllabus", "Practical Science", "ICT Integration", "Life Skills"],
        facilities: ["Science Labs", "Computer Labs", "Main Library", "Auditorium"]
    },
    {
        id: "sports-academy",
        title: "Sports Academy",
        category: "Sports",
        description: "Professional training in Cricket, Rugby, Swimming, and Athletics for aspiring national players. We balance athletic excellence with academic commitments.",
        fullDescription: `
            <p>The Saranath Sports Academy is dedicated to producing world-class athletes. We believe that sports are integral to character building, teaching resilience, teamwork, and leadership.</p>
            <p>Our academy offers professional coaching in over 15 sports including Cricket, Rugby, Swimming, Athletics, and Basketball. We have a history of producing national and international level players.</p>
            <p>Student-athletes are supported with special academic schedules to ensure they do not compromise on their studies while pursuing their sporting dreams.</p>
        `,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        link: "/programs/sports-academy",
        grades: "All Grades",
        curriculumHighlights: ["Professional Coaching", "Fitness Training", "Sports Psychology", "Nutrition Guidance"],
        facilities: ["Swimming Pool", "Indoor Stadium", "Rugby/Cricket Grounds", "Gymnasium"]
    }
];
