import { MetadataRoute } from 'next'
import { getPageMap } from 'nextra/page-map'
import { getBaseUrl } from './utils/getBaseUrl'

// Required for static export
export const dynamic = 'force-static'

// Helper function to recursively extract all routes from pageMap
function extractRoutes(pageMap: any[], basePath: string = ''): string[] {
  const routes: string[] = []
  
  for (const item of pageMap) {
    if (item.route) {
      // Add the route (excluding index routes that are just '/')
      if (item.route !== '/') {
        routes.push(item.route)
      } else {
        // Include root path
        routes.push('/')
      }
    }
    
    // Recursively process children
    if (item.children && Array.isArray(item.children)) {
      routes.push(...extractRoutes(item.children, basePath))
    }
  }
  
  return routes
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl()
  
  // Get all pages from Nextra
  const pageMap = await getPageMap()
  
  // Extract all routes
  const routes = extractRoutes(pageMap)
  
  // Remove duplicates and sort
  const uniqueRoutes = Array.from(new Set(routes)).sort()
  
  // Generate sitemap entries
  const entries: MetadataRoute.Sitemap = uniqueRoutes.map((route) => {
    // Determine priority based on route depth
    const depth = route.split('/').filter(Boolean).length
    let priority = 1.0
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'
    
    if (route === '/') {
      priority = 1.0
      changeFrequency = 'daily'
    } else if (depth === 1) {
      priority = 0.9
      changeFrequency = 'weekly'
    } else if (depth === 2) {
      priority = 0.8
      changeFrequency = 'monthly'
    } else {
      priority = 0.7
      changeFrequency = 'monthly'
    }
    
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }
  })
  
  return entries
}

