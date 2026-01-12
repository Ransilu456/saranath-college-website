export interface GalleryItem {
    id: string;
    image: string;
    caption: string;
    category: "Sports" | "Events" | "Academic" | "Campus";
    size: "small" | "medium" | "large" | "tall" | "wide";
}

export const galleryItems: GalleryItem[] = [
    {
        id: "main-building",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
        caption: "The Historic Main Building",
        category: "Campus",
        size: "large"
    },
    {
        id: "science-lab",
        image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=2070&auto=format&fit=crop",
        caption: "Advanced Physics Laboratory",
        category: "Academic",
        size: "medium"
    },
    {
        id: "cricket-match",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
        caption: "Annual Big Match",
        category: "Sports",
        size: "wide"
    },
    {
        id: "library",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
        caption: "Knowledge Center",
        category: "Campus",
        size: "tall"
    },
    {
        id: "art-exhibition",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop",
        caption: "'Varna' Art Exhibition",
        category: "Events",
        size: "medium"
    },
    {
        id: "swimming-meet",
        image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=2070&auto=format&fit=crop",
        caption: "Inter-House Swimming Meet",
        category: "Sports",
        size: "medium"
    },
    {
        id: "auditorium",
        image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop",
        caption: "College Auditorium",
        category: "Campus",
        size: "wide"
    }

];
