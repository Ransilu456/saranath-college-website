import type { Metadata } from "next";
import { events } from "@/data/events";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
    title: 'Upcoming Events',
    description: 'Discover upcoming events, workshops, and school activities at Saranath College. Join us in celebrating our traditions and community spirit.',
}

export default function EventsPage() {
    return <EventsClient events={events} />;
}
