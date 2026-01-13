
export interface Club {
    id: string;
    title: string;
    category: "Co-Curricular" | "Academic" | "Sports" | "Aesthetics" | "Social Service";
    description: string;
    fullDescription: string;
    icon: string;
    image: string;
    featured?: boolean;
    memberCount?: string;
    president?: string;
    secretary?: string;
    teacherInCharge?: string;
    meetingTime?: string;
    location?: string;
    activities: string[];
}

export const clubs: Club[] = [
    {
        id: "media-unit",
        title: "Media Unit",
        category: "Co-Curricular",
        description: "The voice of Saranath. Covering events, producing documentaries, and broadcasting live updates since 1995.",
        fullDescription: `
            <p>The Saranath College Media Unit stands as a pillar of communication and creativity within the school. Established in 1995, it has grown from a small group of enthusiasts to a fully-fledged organization responsible for covering all major school events, maintaining the official social media channels, and producing high-quality documentaries.</p>
            <p>Our members gain hands-on experience in photography, videography, announcing, and post-production. We take pride in our live broadcasts of the Big Match and the annual Sports Meet, bringing the action to alumni around the world.</p>
            <p>The Media Unit also organizes 'Media Day', an inter-school competition that brings together aspiring young media personalities from across the island.</p>
        `,
        icon: "Camera",
        image: "https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=2070&auto=format&fit=crop",
        featured: true,
        memberCount: "50+",
        president: "S. Perera",
        secretary: "D. Gunawardena",
        teacherInCharge: "Mr. T. Rajapaksa",
        meetingTime: "Wednesdays 2:30 PM",
        location: "Media Studio",
        activities: ["Event Coverage", "Announcing Workshops", "Photography Exhibitions", "Short Film Production"]
    },
    {
        id: "aviation",
        title: "Aviation Club",
        category: "Co-Curricular",
        description: "Explore the skies with flight simulations and aeronautical workshops. Future pilots start here.",
        fullDescription: `
            <p>The Aviation Club of Saranath College is dedicated to fostering a passion for aeronautics and aerospace engineering among students. We provide a platform for students to learn about the principles of flight, aircraft mechanics, and the history of aviation.</p>
            <p>Regular workshops feature flight simulators, model aircraft building, and guest lectures from industry professionals, including pilots and engineers. The club also organizes field trips to airports and air force bases to give students a real-world perspective.</p>
        `,
        icon: "Plane",
        image: "https://images.unsplash.com/photo-1559087316-6b2c332e2c88?q=80&w=2070&auto=format&fit=crop",
        featured: true,
        memberCount: "35",
        president: "M. Silva",
        secretary: "K. Fernando",
        teacherInCharge: "Mr. A. Jayasuriya",
        meetingTime: "Thursdays 3:00 PM",
        location: "Physics Lab",
        activities: ["Model Aircraft Building", "Flight Simulator Training", "Airport Field Trips", "Rocketry Workshops"]
    },
    {
        id: "science-union",
        title: "Science Union",
        category: "Academic",
        description: "Fostering scientific curiosity through experiments, exhibitions, and the annual Science Day.",
        fullDescription: `
            <p>The Science Union is one of the most active academic societies in the college. We aim to ignite curiosity and foster a scientific temper among students. Our activities range from conducting simple experiments for junior students to organizing large-scale exhibitions.</p>
            <p>The flagship event, 'Eureka', is an annual science exhibition that attracts participation from schools district-wide. We also prepare students for national and international science Olympiads.</p>
        `,
        icon: "Microscope",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        memberCount: "120",
        president: "R. Dissanaike",
        teacherInCharge: "Mrs. S. Gamage",
        meetingTime: "Fridays 2:00 PM",
        location: "Main Science Lab",
        activities: ["Annual Science Day", "Astronomy Night", "Science Quizzes", "Research Projects"]
    },
    {
        id: "commerce",
        title: "Commerce Society",
        category: "Academic",
        description: "Understanding the business world, economics, and entrepreneurship.",
        fullDescription: `
            <p>The Commerce Society equips students with the knowledge and skills needed to navigate the complex world of business and finance. We bridge the gap between classroom learning and the real corporate world.</p>
            <p>We organize the 'Young Entrepreneur' challenge, stock market simulation games, and seminars on financial literacy. Our members regularly interact with successful business leaders and alumni.</p>
        `,
        icon: "BookOpen",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        president: "J. Cooray",
        teacherInCharge: "Mr. D. Perera",
        meetingTime: "Mondays 2:30 PM",
        location: "Commerce Section Hall",
        activities: ["Business Quiz", "Market Day", "Leadership Workshops", "Bank Visits"]
    },
    {
        id: "ict",
        title: "ICT Club",
        category: "Academic",
        description: "Coding, robotics, and digital design. Powering the school's digital infrastructure.",
        fullDescription: `
            <p>The ICT Club is the hub for all tech enthusiasts at Saranath. From web development to robotics, we cover it all. Our members play a key role in maintaining the school's computer labs and website.</p>
            <p>We organize hackathons, coding bootcamps, and e-sports tournaments. The club also runs a 'Digital Literacy' program for community members.</p>
        `,
        icon: "Monitor",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        president: "T. Bandara",
        teacherInCharge: "Mrs. N. Senanayake",
        meetingTime: "Tuesdays 3:30 PM",
        location: "Computer Lab 1",
        activities: ["Hackathon", "Robotics Workshop", "Web Design Course", "Gaming Tournament"]
    },
    {
        id: "debate",
        title: "Debating Society",
        category: "Academic",
        description: "Mastering the art of argument and rhetoric in Sinhala and English.",
        fullDescription: `
            <p>The Debating Society has a rich history of excellence, producing eloquent speakers who have excelled at the national level. We believe that debating sharpens critical thinking and builds confidence.</p>
            <p>We conduct regular practice debates, workshops on public speaking, and host the prestigious 'Saranath Challenge Trophy' inter-school debating tournament.</p>
        `,
        icon: "Gavel",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        president: "A. Perera",
        teacherInCharge: "Mr. G. Alwis",
        meetingTime: "Thursdays 2:30 PM",
        location: "Library Auditorium",
        activities: ["Weekly Debates", "Public Speaking Training", "Inter-School Tournaments"]
    },
    {
        id: "oriental-music",
        title: "Oriental Music",
        category: "Aesthetics",
        description: "Preserving traditional music and winning accolades at all-island competitions.",
        fullDescription: `
            <p>The Oriental Music Unit is the soul of our cultural heritage. Our orchestra is renowned for its mesmerizing performances of classical and folk music.</p>
            <p>We provide training in various instruments such as the Sitar, Violin, Flute, and Tabla. The unit performs at all major school functions and competes in the All-Island Music Competitions.</p>
        `,
        icon: "Music",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        president: "H. Liyanage",
        teacherInCharge: "Mrs. K. Somalatha",
        meetingTime: "Wednesdays 1:30 PM",
        location: "Music Room",
        activities: ["Orchestra Practice", "Folk Song Competition", "Cultural Shows"]
    },
    {
        id: "art-circle",
        title: "Art Circle",
        category: "Aesthetics",
        description: "Where creativity knows no bounds. Monthly exhibitions and workshops.",
        fullDescription: `
            <p>The Art Circle is a canvas for students to express their creativity. We explore various mediums of art, from sketching and painting to sculpture and digital art.</p>
            <p>We decorate the school for festivals and organize 'Chithra', an annual art exhibition showcasing the best talents of our students.</p>
        `,
        icon: "Palette",
        image: "https://images.unsplash.com/photo-1460661631189-a05e61849254?q=80&w=2067&auto=format&fit=crop",
        featured: false,
        president: "D. Mendis",
        meetingTime: "Mondays 3:00 PM",
        location: "Art Room",
        activities: ["Art Exhibition", "Street Art Project", "Design Workshop"]
    },
    {
        id: "globe-rangers",
        title: "Globe Rangers",
        category: "Social Service",
        description: "Dedicated to environmental conservation and community service projects.",
        fullDescription: `
            <p>Globe Rangers is the environmental arm of the school. We are committed to making our school and community greener and cleaner.</p>
            <p>Our projects include tree planting campaigns, recycling programs, and beach clean-ups. We also maintain the school's herbal garden.</p>
        `,
        icon: "Globe",
        image: "https://images.unsplash.com/photo-1542601906990-24d452b469ad?q=80&w=2070&auto=format&fit=crop",
        featured: false,
        president: "N. Karunaratne",
        meetingTime: "Tuesdays 2:30 PM",
        location: "Bio Garden",
        activities: ["Tree Planting", "Recycling Drive", "Nature Walks"]
    },
    {
        id: "scouts",
        title: "Scout Troop",
        category: "Co-Curricular",
        description: "Be Prepared. One of the oldest and most decorated scout troops in the island.",
        fullDescription: `
            <p>The 42nd Colombo Scout Troop of Saranath College has a proud legacy dating back decades. We instill values of discipline, leadership, and service.</p>
            <p>Scouts engage in camping, hiking, knotting, and first aid training. We regularly participate in national jamborees and community service projects.</p>
        `,
        icon: "Sprout",
        image: "https://images.unsplash.com/photo-1534330207526-9e451c220f18?q=80&w=2376&auto=format&fit=crop",
        featured: false,
        president: "Troop Leader S. Dias",
        teacherInCharge: "Mr. B. Ekanayake",
        meetingTime: "Saturdays 8:00 AM",
        location: "Scout Den",
        activities: ["Weekly Campfire", "Annual Camp", "Badge Work", "Hiking Expeditions"]
    },
    {
        id: "interact",
        title: "Interact Club",
        category: "Social Service",
        description: "Service above self. Connecting with the community through impactful projects.",
        fullDescription: `
            <p>The Interact Club, sponsored by the Rotary Club regarding, is dedicated to selfless service. We organize projects in four avenues: Community Service, International Understanding, Club Service, and Finance.</p>
            <p>Our signature projects include donating libraries to rural schools, blood donation campaigns, and leadership training camps.</p>
        `,
        icon: "HeartHandshake",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop",
        featured: false,
        president: "Int. K. Perera",
        teacherInCharge: "Mrs. R. Silva",
        meetingTime: "Fridays 3:00 PM",
        location: "Main Hall Foyer",
        activities: ["Community Service Projects", "Leadership Camp", "Fundraisers"]
    },
    {
        id: "prefects-guild",
        title: "Prefects' Guild",
        category: "Co-Curricular",
        description: "Leading with integrity. The highest student representative body of Saranath College.",
        fullDescription: `
            <p>The Prefects' Guild of Saranath College is the apex student leadership body. Entrusted with maintaining discipline, organizing major school events, and representing the student body, the Guild plays a pivotal role in school governance.</p>
            <p>Being appointed as a Prefect is one of the highest honors a Saranathian can achieve. The Guild fosters qualities of responsibility, dedication, and peer leadership. They are the bridge between the administration and the students, upholding the traditions and values of the college.</p>
        `,
        icon: "Medal",
        image: "https://images.unsplash.com/photo-1523240715639-655b3ff15d68?q=80&w=2070&auto=format&fit=crop",
        featured: true,
        memberCount: "40",
        president: "Head Prefect M. Bandara",
        teacherInCharge: "Discipline Committee",
        meetingTime: "Daily Briefings",
        location: "Prefects' Room",
        activities: ["Event Management", "Peer Mentoring", "Disciplinary Support", "Annual Prefects' Seminar"]
    }
];
