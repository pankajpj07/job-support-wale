import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
import {
  locationSlugs,
  getLocationBySlug,
  LocationPageData,
} from '@/constants/locationData'

interface Props {
  data: LocationPageData | null
  slug: string
}

export default function LocationPage({ data, slug }: Props) {
  if (!data) {
    return (
      <Layout metaTitle="Location not found" pageHref="locations">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Location not found
          </h1>
          <Link href="/" className="text-primary-600 hover:underline">
            Go to homepage
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <>
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        canonicalPath={`/locations/${slug}`}
      />
      <Layout metaTitle={data.metaTitle} pageHref={`locations/${slug}`}>
        <section className="bg-slate-900 text-black py-8 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {data.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              {data.heroSubhead}
            </p>
            <Link
              href="https://wa.link/zwq1xp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition-colors"
            >
              Book free consultation
            </Link>
          </div>
        </section>
        <section className="py-8 md:py-16 px-4 md:px-8 max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            {data.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="text-primary-600 font-medium hover:underline"
            >
              View our services →
            </Link>
            <Link
              href="/how-it-works"
              className="text-primary-600 font-medium hover:underline"
            >
              How it works →
            </Link>
            <Link
              href="/pricing"
              className="text-primary-600 font-medium hover:underline"
            >
              Pricing →
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = locationSlugs.map((slug) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const data = getLocationBySlug(slug)
  return { props: { data, slug } }
}
