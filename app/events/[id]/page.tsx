import { events } from "@/data/events";
import { notFound } from "next/navigation";
import EventDetailsClient from "./EventDetailsClient";
import { Metadata } from 'next';

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const event = events.find((e) => e.id === params.id);
    if (!event) return { title: 'Event Not Found' };

    return {
        title: event.title,
        description: event.description.substring(0, 160),
        openGraph: {
            title: event.title,
            description: event.description.substring(0, 160),
            images: [event.image],
        }
    };
}

export default function EventDetailsPage({ params }: Props) {
    const event = events.find((e) => e.id === params.id);

    if (!event) {
        notFound();
    }

    return <EventDetailsClient event={event} />;
}
