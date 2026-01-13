import { clubs } from "@/data/clubs";
import { notFound } from "next/navigation";
import ClubDetailsClient from "./ClubDetailsClient";
import { Metadata } from 'next';

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const club = clubs.find((c) => c.id === id);
    if (!club) return { title: 'Club Not Found' };

    return {
        title: club.title,
        description: club.description,
        openGraph: {
            title: club.title,
            description: club.description,
            images: [club.image],
        }
    };
}

export default async function ClubDetailsPage({ params }: Props) {
    const { id } = await params;
    const club = clubs.find((c) => c.id === id);

    if (!club) {
        return notFound();
    }

    return <ClubDetailsClient club={club} />;
}
