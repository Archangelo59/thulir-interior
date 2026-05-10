import type { MetadataRoute } from 'next';
import { blogs, pages, services } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://thulirinterior.com';
  const routes = [
    '',
    ...pages.map((p) => p.slug),
    ...services.map((s) => `services/${s.slug}`),
    ...blogs.map((b) => `blog/${b.slug}`)
  ];
  return routes.map((route) => ({ url: `${base}/${route}`, lastModified: new Date('2026-05-10'), changeFrequency: 'weekly', priority: route === '' ? 1 : 0.8 }));
}
