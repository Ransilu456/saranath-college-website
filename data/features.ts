import { FlaskConical, Users, Library, Trophy, LucideIcon } from "lucide-react";

export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    size: "large" | "tall" | "small";
    image?: string; // For tall card
    stats?: { label: string; value: string }[]; // Optional stats
}

// Keeping it simple as per component structure for now
// We can make it more generic if needed
export const features = {
    large: {
        title: "World-Class Research Facilities",
        description: "Our laboratories are equipped with cutting-edge technology, fostering an environment where students can pioneer the next big breakthrough in science and technology.",
        icon: FlaskConical
    },
    tall: {
        title: "Vibrant Community",
        description: "Join a diverse network of students. Experience cultural exchange right on campus.",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
        icon: Users,
        badgeText: "+2k"
    },
    small1: {
        title: "Digital Library",
        description: "Access millions of resources anytime, anywhere via our cloud library.",
        icon: Library
    },
    small2: {
        title: "Top Rankings",
        description: "Consistently ranked among the top 10 innovation colleges in South Asia.",
        icon: Trophy
    }
};
