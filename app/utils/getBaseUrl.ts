/**
 * Get the base URL for the application
 * Checks environment variables and falls back to Netlify URL
 */
export function getBaseUrl(): string {
  // Check for explicit base URL
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL
  }
  
  // Check for Vercel deployment
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  
  // Check for Netlify deployment
  if (process.env.NETLIFY || process.env.CONTEXT === 'production') {
    return 'https://maxim-portal.netlify.app'
  }
  
  // Fallback to Netlify URL
  return 'https://maxim-portal.netlify.app'
}

