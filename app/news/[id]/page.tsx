import { news } from "@/data/news";
import { notFound } from "next/navigation";
import NewsDetailsClient from "./NewsDetailsClient";
import { Metadata } from 'next';

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const newsItem = news.find((item) => item.id === params.id);
    if (!newsItem) return { title: 'News Not Found' };

    return {
        title: newsItem.title,
        description: newsItem.excerpt,
        openGraph: {
            title: newsItem.title,
            description: newsItem.excerpt,
            images: [newsItem.image],
        }
    };
}

export default function NewsDetailsPage({ params }: Props) {
    const newsItem = news.find((item) => item.id === params.id);

    if (!newsItem) {
        return notFound();
    }

    const relatedNews = news
        .filter((item) => item.id !== params.id && item.category === newsItem.category)
        .slice(0, 2);

    return <NewsDetailsClient newsItem={newsItem} relatedNews={relatedNews} />;
}
