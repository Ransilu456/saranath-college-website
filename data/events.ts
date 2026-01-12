export interface EventItem {
    id: string;
    title: string;
    date: {
        month: string;
        day: string;
    };
    location: string;
    time: string;
    type: "Public" | "Students Only";
    color: "green" | "blue" | "amber";
    preview: boolean;
    image: string;
    description: string;
    organizer: string;
    schedule: {
        time: string;
        activity: string;
    }[];
}

export const events: EventItem[] = [
    {
        id: "prize-giving",
        title: "Annual Prize Giving",
        date: { month: "Nov", day: "15" },
        location: "Main Hall",
        time: "08:00 AM",
        type: "Public",
        color: "green",
        preview: true,
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
        description: "The Annual Prize Giving ceremony represents the pinnacle of our academic calendar, where we recognize and celebrate the outstanding achievements of our students. This prestigious event brings together students, parents, teachers, and distinguished alumni to honor excellence in academics, sports, and co-curricular activities.\n\nThe ceremony will feature addresses by the Principal and a Chief Guest, followed by the awarding of prizes, scholarships, and special awards. It is a moment of pride for the entire Saranath College community as we acknowledge the hard work, dedication, and talent of our students.",
        organizer: "Academic Administration",
        schedule: [
            { time: "08:00 AM", activity: "Arrival of Guests" },
            { time: "08:30 AM", activity: "Lighting of the Oil Lamp" },
            { time: "08:45 AM", activity: "Principal's Report" },
            { time: "09:30 AM", activity: "Distribution of Academic Awards" },
            { time: "10:30 AM", activity: "Cultural Items" },
            { time: "11:00 AM", activity: "Speech by Chief Guest" },
            { time: "11:30 AM", activity: "Distribution of Sports & Special Awards" },
            { time: "12:30 PM", activity: "Vote of Thanks & National Anthem" }
        ]
    },
    {
        id: "debating",
        title: "Inter-House Debating",
        date: { month: "Nov", day: "22" },
        location: "Library Auditorium",
        time: "02:00 PM",
        type: "Students Only",
        color: "blue",
        preview: true,
        image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=2070&auto=format&fit=crop",
        description: "The Inter-House Debating Competition is a battle of wits and eloquence. Teams from our four houses - Vijaya, Gemunu, Parakrama, and Tissa - will face off in intense debates on contemporary topics. This event aims to foster critical thinking, public speaking skills, and teamwork among students.\n\nWitness the future leaders of our society articulate their views with passion and logic. The competition will be judged by a panel of experienced adjudicators, ensuring a fair and challenging environment for all participants.",
        organizer: "Debating Society",
        schedule: [
            { time: "02:00 PM", activity: "Opening Remarks & Draw" },
            { time: "02:15 PM", activity: "Semi-Final 1: Vijaya vs Gemunu" },
            { time: "03:15 PM", activity: "Semi-Final 2: Parakrama vs Tissa" },
            { time: "04:15 PM", activity: "Break & Finalists Announcement" },
            { time: "04:30 PM", activity: "Grand Final" },
            { time: "05:30 PM", activity: "Awards Presentation" }
        ]
    },
    {
        id: "carols",
        title: "Christmas Carols",
        date: { month: "Dec", day: "05" },
        location: "College Chapel",
        time: "06:00 PM",
        type: "Public",
        color: "green",
        preview: true,
        image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069&auto=format&fit=crop",
        description: "Join us for a magical evening of music and joy at the Annual Christmas Carols service. The College Choir, accompanied by the school orchestra, will perform a selection of traditional carols and modern seasonal favorites. \n\nThis event is a cherished tradition that brings the spirit of Christmas to Saranath College. We invite all families, alumni, and well-wishers to celebrate this festive season with us in the beautiful setting of our College Chapel.",
        organizer: "Music Circle & Christian Union",
        schedule: [
            { time: "06:00 PM", activity: "Procession" },
            { time: "06:15 PM", activity: "Opening Prayer" },
            { time: "06:30 PM", activity: "Carols Service Begins" },
            { time: "07:30 PM", activity: "Message for Christmas" },
            { time: "08:00 PM", activity: "Closing Hymn & Benediction" },
            { time: "08:15 PM", activity: "Refreshments" }
        ]
    }
];
