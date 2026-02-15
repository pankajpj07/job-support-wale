export interface LocationPageData {
  slug: string
  name: string
  title: string
  metaTitle: string
  metaDescription: string
  heroHeadline: string
  heroSubhead: string
  intro: string
}

export const locationSlugs = ['usa', 'uk', 'canada'] as const
export type LocationSlug = (typeof locationSlugs)[number]

export const locationPageData: Record<LocationSlug, LocationPageData> = {
  usa: {
    slug: 'usa',
    name: 'USA',
    title: 'Job Support for USA',
    metaTitle: 'IT Job Support for US Developers | React, Node.js, Remote Support',
    metaDescription:
      'Professional job support for developers in the USA. Real-time help from India for React, Angular, Node.js & 50+ technologies. 2–4 hours daily, timezone-friendly.',
    heroHeadline: 'Job support for developers in the USA',
    heroSubhead:
      'Real-time technical assistance from India’s top IT experts. We work in your timezone so you can deliver on time.',
    intro:
      'We serve developers across the United States with daily job support in React, Angular, Node.js, Python, Java, and 50+ technologies. Our consultants are available during hours that overlap with US timezones (EST, CST, MST, PST). Many of our clients are based in the USA and use our support for ongoing projects, deadlines, and skill gaps. Book a free 15-minute consultation to see how we can help.',
  },
  uk: {
    slug: 'uk',
    name: 'UK',
    title: 'Job Support for UK',
    metaTitle: 'IT Job Support for UK Developers | React, .NET, Remote Support',
    metaDescription:
      'Professional job support for developers in the UK. Real-time help from India for React, .NET, Node.js & more. 2–4 hours daily, IST overlap with UK hours.',
    heroHeadline: 'Job support for developers in the UK',
    heroSubhead:
      'Real-time technical assistance from India’s top IT experts. Overlap with UK business hours for seamless collaboration.',
    intro:
      'We work with developers across the United Kingdom, providing job support in React, Angular, .NET, Node.js, Python, Java, and many more technologies. Our support windows overlap with UK business hours so you can pair program and get unblocked without waiting. Book a free 15-minute call to discuss your project and get matched with an expert within 24 hours.',
  },
  canada: {
    slug: 'canada',
    name: 'Canada',
    title: 'Job Support for Canada',
    metaTitle: 'IT Job Support for Canadian Developers | React, Node.js, Remote Support',
    metaDescription:
      'Professional job support for developers in Canada. Real-time help from India for React, Node.js, Python & 50+ technologies. 2–4 hours daily.',
    heroHeadline: 'Job support for developers in Canada',
    heroSubhead:
      'Real-time technical assistance from India’s top IT experts. Timezone-friendly support for EST/PST and everywhere in between.',
    intro:
      'Developers across Canada use our job support for React, Angular, Node.js, Python, Java, .NET, and DevOps. We offer flexible scheduling that works with Canadian timezones so you can get daily support when you need it. Free consultation and match with an expert within 24 hours.',
  },
}

export function getLocationBySlug(slug: string): LocationPageData | null {
  if (locationSlugs.includes(slug as LocationSlug)) {
    return locationPageData[slug as LocationSlug]
  }
  return null
}
