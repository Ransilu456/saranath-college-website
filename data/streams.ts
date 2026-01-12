import { Atom, Divide, Check, Dna, BarChart3, LucideIcon, Calculator, Cpu, Globe, Scale, BookOpen, HeartPulse } from "lucide-react";

export interface AcademicStream {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    subjects: string[];
    image: string;
    careerPaths: string[];
    headOfSection: string;
}

export const streams: AcademicStream[] = [
    {
        id: "physical",
        title: "Physical Science",
        description: "The Physical Science stream is designed for students with a strong aptitude for mathematics and physics. It provides a rigorous foundation for engineering, technology, and physical science degrees. Our state-of-the-art physics labs and computer facilities ensure students get hands-on experience alongside theoretical knowledge.",
        icon: Atom,
        color: "blue",
        subjects: ["Combined Mathematics", "Physics", "Chemistry / ICT"],
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
        careerPaths: ["Engineering", "Computer Science", "Data Science", "Physics", "Architecture", "Aviation"],
        headOfSection: "Mr. K. Weerasinghe"
    },
    {
        id: "bio",
        title: "Biological Science",
        description: "Ideal for aspiring medical professionals and biologists, this stream explores the complexities of life sciences. Students engage in extensive laboratory work in Biology and Chemistry, preparing them for careers in medicine, research, and biotechnology.",
        icon: Dna,
        color: "green",
        subjects: ["Biology", "Chemistry", "Physics / Agriculture"],
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
        careerPaths: ["Medicine", "Biotechnology", "Microbiology", "Agriculture", "Environmental Science", "Genetics"],
        headOfSection: "Mrs. S. Gamage"
    },
    {
        id: "commerce",
        title: "Commerce",
        description: "The Commerce stream serves as a gateway to the business world. It covers essential topics in accounting, economics, and business studies, fostering financial literacy and entrepreneurial skills. Students are encouraged to analyze real-world economic trends and business case studies.",
        icon: BarChart3,
        color: "amber",
        subjects: ["Accounting", "Business Studies", "Economics"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        careerPaths: ["Management", "Accounting", "Banking & Finance", "Marketing", "Human Resources", "Entrepreneurship"],
        headOfSection: "Mr. D. Perera"
    },
    {
        id: "arts",
        title: "Arts",
        description: "The Arts stream fosters creativity, critical thinking, and cultural understanding. With a wide range of subjects from languages to humanities, it prepares students for diverse fields such as law, media, education, and public service.",
        icon: BookOpen,
        color: "indigo",
        subjects: ["Sinhala / English / Tamil", "History / Geography", "Political Science / Media"],
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop",
        careerPaths: ["Law", "Journalism", "Education", "Psychology", "International Relations", "Social Work"],
        headOfSection: "Mrs. M. Fernando"
    },
    {
        id: "tech",
        title: "Technology",
        description: "A modern stream focusing on practical application of technology. It combines engineering or biosystems technology with science for technology, catering to the growing demand for skilled technologists in the industry.",
        icon: Cpu,
        color: "slate",
        subjects: ["Engineering Tech / Bio Systems Tech", "Science for Technology", "ICT / Geography / Arts"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        careerPaths: ["Engineering Technology", "Information Technology", "Industrial Management", "Network Administration"],
        headOfSection: "Mr. T. Silva"
    }
];
