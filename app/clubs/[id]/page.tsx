import { clubs } from "@/data/clubs";
import { notFound } from "next/navigation";
import ClubDetailsClient from "./ClubDetailsClient";
import { Metadata } from 'next';

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const club = clubs.find((c) => c.id === params.id);
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

export default function ClubDetailsPage({ params }: Props) {
    const club = clubs.find((c) => c.id === params.id);

    if (!club) {
        return notFound();
    }

    return <ClubDetailsClient club={club} />;
}
