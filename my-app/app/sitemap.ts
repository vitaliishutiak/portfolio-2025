import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vitaliishutiak.com'
  
  const routes = [
    '',
    '/projects',
    '/about',
    '/contact',
  ]

  const locales = ['en', 'uk', 'pl']

  const sitemap: MetadataRoute.Sitemap = []

  // Generate entries for each route and locale
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            uk: `${baseUrl}/uk${route}`,
            pl: `${baseUrl}/pl${route}`,
          },
        },
      })
    })
  })

  return sitemap
}

