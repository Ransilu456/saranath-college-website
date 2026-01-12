import type { Metadata } from "next";
import { news } from "@/data/news";
import NewsClient from "./NewsClient";

export const metadata: Metadata = {
    title: 'College News',
    description: 'Stay updated with the latest news, updates, and announcements from Saranath College. Explore our recent achievements and milestones.',
}

export default function NewsPage() {
    return <NewsClient news={news} />;
}
