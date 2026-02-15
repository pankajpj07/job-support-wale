import type { ServicePageDataFull } from '@/types/servicePageTypes'
import { reactJobSupportData } from './reactJobSupport'
import { angularJobSupportData } from './angularJobSupport'
import { nodeJobSupportData } from './nodeJobSupport'
import { pythonJobSupportData } from './pythonJobSupport'
import { javaJobSupportData } from './javaJobSupport'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiajobsupport.in'

const fullDataMap: Record<string, ServicePageDataFull> = {
  'react-job-support': reactJobSupportData,
  'angular-job-support': angularJobSupportData,
  'nodejs-job-support': nodeJobSupportData,
  'python-job-support': pythonJobSupportData,
  'java-job-support': javaJobSupportData,
}

export function getServiceDataFull(slug: string): ServicePageDataFull | null {
  return fullDataMap[slug] ?? null
}

export function buildServiceSchema(data: ServicePageDataFull): object {
  const serviceName = `${data.name} Job Support`
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: data.meta.description,
    provider: {
      '@type': 'Organization',
      name: 'IndiaJobSupport',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8010592093',
        contactType: 'customer service',
      },
    },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${serviceName} Services`,
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hourly Support' }, price: '25', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monthly Support' }, price: '1400', priceCurrency: 'USD' },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '400',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export { reactJobSupportData }
export { angularJobSupportData }
export { nodeJobSupportData }
export { pythonJobSupportData }
export { javaJobSupportData }
