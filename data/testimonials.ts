export interface Testimonial {
    id: string;
    content: string;
    author: {
        name: string;
        role: string;
        image: string;
    };
}

export const testimonials: Testimonial[] = [
    {
        id: "t1",
        content: "Saranath taught me that integrity is more important than success. The discipline I learned here has been the foundation of my career.",
        author: {
            name: "Dr. A. Jayasinghe",
            role: "Batch of 1995 • Surgeon",
            image: "https://i.pravatar.cc/150?u=5"
        }
    },
    {
        id: "t2",
        content: "The camaraderie at Saranath is unmatched. Even 20 years later, my closest friends are the ones I made in Grade 6.",
        author: {
            name: "Mr. S. Fernando",
            role: "Batch of 2003 • CEO, TechCorp",
            image: "https://i.pravatar.cc/150?u=8"
        }
    }
];
