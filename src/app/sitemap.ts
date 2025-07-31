import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
          url: 'https://nankousai.vercel.app/',
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 1,
        },
        {
          url: 'https://nankousai.vercel.app/event',
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 0.9,
        },
        {
          url: 'https://nankousai.vercel.app/map',
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.5,
        },
        {
            url: 'https://nankousai.vercel.app/timetable',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://nankousai.vercel.app/info',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: 'https://nankousai.vercel.app/gallery',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.3,
        },
        {
            url: 'https://nankousai.vercel.app/event/introduction',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
        {
            url: 'https://nankousai.vercel.app/event/preview',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.1,
        },
      ]
}