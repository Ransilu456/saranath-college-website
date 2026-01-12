import { programs } from "@/data/programs";
import { notFound } from "next/navigation";
import ProgramDetailsClient from "./ProgramDetailsClient";
import { Metadata } from 'next';

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const program = programs.find((p) => p.id === params.id);
    if (!program) return { title: 'Program Not Found' };

    return {
        title: program.title,
        description: program.description,
        openGraph: {
            title: program.title,
            description: program.description,
            images: [program.image],
        }
    };
}

export default function ProgramDetailsPage({ params }: Props) {
    const program = programs.find((p) => p.id === params.id);

    if (!program) {
        return notFound();
    }

    return <ProgramDetailsClient program={program} />;
}
