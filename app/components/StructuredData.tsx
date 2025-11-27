import { headers } from 'next/headers'
import { getBaseUrl } from '../utils/getBaseUrl'

interface StructuredDataProps {
  pathname?: string
  title?: string
  description?: string
  type?: 'FAQPage' | 'Article' | 'WebPage'
}

export async function StructuredData({
  pathname,
  title,
  description,
  type = 'WebPage'
}: StructuredDataProps) {
  const baseUrl = getBaseUrl()

  // Get pathname from headers if not provided
  const headersList = await headers()
  const path = pathname || headersList.get('x-pathname') || '/'

  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title || 'Maxim AI FAQ',
    description: description || 'Frequently Asked Questions about Maxim AI',
    url: `${baseUrl}${path}`,
    publisher: {
      '@type': 'Organization',
      name: 'Maxim AI',
      url: 'https://getmaxim.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mintcdn.com/maximai/3RnX5HkRjKtE2PMo/logo/light.svg',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

