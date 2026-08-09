import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Location not found
          </h1>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-primary-600 font-medium hover:underline"
          >
            Go to homepage
            <ArrowRight className="h-4 w-4" aria-hidden />
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
        <section className="relative overflow-hidden bg-ink-900 py-14 md:py-20 px-4 md:px-8">
          <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
          <div className="glow-blob left-1/4 top-8 h-64 w-64 bg-primary-600/40 animate-float" aria-hidden />
          <div className="glow-blob right-1/4 bottom-8 h-72 w-72 bg-accent-500/30 animate-float-slow" aria-hidden />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              {data.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {data.heroSubhead}
            </p>
            <Link
              href="https://wa.link/ddu8hq"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-cta !px-8 !py-4"
            >
              Book free consultation
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </section>
        <section className="py-10 md:py-16 px-4 md:px-8 max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            {data.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-primary-600 font-medium hover:underline"
            >
              View our services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1 text-primary-600 font-medium hover:underline"
            >
              How it works
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1 text-primary-600 font-medium hover:underline"
            >
              Pricing
              <ArrowRight className="h-4 w-4" aria-hidden />
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
