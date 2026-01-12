import type { Metadata } from "next";
import { clubs } from "@/data/clubs";
import ClubsClient from "./ClubsClient";

export const metadata: Metadata = {
    title: 'Clubs & Societies',
    description: 'Explore the vibrant extracurricular life at Saranath College. Join our clubs and societies to develop new skills, pursue interests, and build community.',
}

export default function ClubsPage() {
    return <ClubsClient clubs={clubs} />;
}
