import { MetadataRoute } from 'next'
import { getBaseUrl } from './utils/getBaseUrl'

// Required for static export
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl()
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

