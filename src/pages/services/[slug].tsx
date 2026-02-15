import React from 'react'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import ServicePageContent from '@/components/ServicePageContent'
import { ServiceSchema } from '@/components/ServiceSchema'
import {
  serviceSlugs,
  getServiceBySlug,
  ServicePageData,
} from '@/constants/servicesData'

interface Props {
  data: ServicePageData | null
  slug: string
}

export default function ServiceTechnologyPage({ data, slug }: Props) {
  if (!data) {
    return (
      <Layout metaTitle="Service not found" pageHref="services">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Service not found
          </h1>
          <Link href="/services" className="text-primary-600 hover:underline">
            View all services
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
        keywords={data.metaKeywords}
        canonicalPath={`/services/${slug}`}
      />
      <Head>
        <ServiceSchema
          name={data.title}
          description={data.metaDescription}
          slug={data.slug}
        />
      </Head>
      <Layout metaTitle={data.metaTitle} pageHref={`services/${slug}`}>
        <ServicePageContent data={data} />
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = serviceSlugs.map((slug) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const data = getServiceBySlug(slug)
  return { props: { data, slug } }
}
