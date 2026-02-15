const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiajobsupport.in'

export interface ServiceSchemaProps {
  name: string
  description: string
  slug: string
}

export function ServiceSchema({ name, description, slug }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}/services/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'IndiaJobSupport',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: ['United States', 'United Kingdom', 'Canada', 'Australia', 'UAE'],
    },
    serviceType: 'IT Job Support',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
