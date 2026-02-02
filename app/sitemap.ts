import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jcga.dev'
  const lastModified = new Date()

  // Define all routes with their priorities and change frequencies
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/experience', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/projects', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/certifications', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/skills', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/content', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
  ]

  // Generate entries for both Spanish (default) and English locales
  const locales = ['', '/en']
  
  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}${locale}${route.path}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            es: `${baseUrl}${route.path}`,
            en: `${baseUrl}/en${route.path}`,
          },
        },
      })
    }
  }

  return sitemapEntries
}
