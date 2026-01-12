import { MetadataRoute } from 'next'
import { news } from '@/data/news'
import { events } from '@/data/events'
import { clubs } from '@/data/clubs'
import { programs } from '@/data/programs'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://saranathcollege.edu.lk'

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/admissions',
        '/academics',
        '/administration',
        '/news',
        '/events',
        '/clubs',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic News routes
    const newsRoutes = news.map((item) => ({
        url: `${baseUrl}/news/${item.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // Dynamic Event routes
    const eventRoutes = events.map((event) => ({
        url: `${baseUrl}/events/${event.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // Dynamic Club routes
    const clubRoutes = clubs.map((club) => ({
        url: `${baseUrl}/clubs/${club.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }))

    // Dynamic Program routes
    const programRoutes = programs.map((program) => ({
        url: `${baseUrl}/programs/${program.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        ...staticRoutes,
        ...newsRoutes,
        ...eventRoutes,
        ...clubRoutes,
        ...programRoutes,
    ]
}
