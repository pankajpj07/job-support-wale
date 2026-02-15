import React from 'react'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import ServicePageContent from '@/components/ServicePageContent'
import ServicePageFull from '@/components/service-page/ServicePageFull'
import { ServiceSchema } from '@/components/ServiceSchema'
import { FAQSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { serviceSlugs, getServiceBySlug } from '@/constants/servicesData'
import type { ServicePageData } from '@/constants/servicesData'
import { getServiceDataFull, buildServiceSchema } from '@/data/servicePages'
import type { ServicePageDataFull } from '@/types/servicePageTypes'

interface Props {
  data: ServicePageData | null
  dataFull: ServicePageDataFull | null
  slug: string
}

export default function ServiceTechnologyPage({ data, dataFull, slug }: Props) {
  const useFullLayout = Boolean(dataFull)

  if (!data && !dataFull) {
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

  if (useFullLayout && dataFull) {
    const meta = dataFull.meta
    const canonicalPath = `/services/${slug}`
    const schema = buildServiceSchema(dataFull)

    return (
      <>
        <SEO
          title={meta.title}
          description={meta.description}
          keywords={meta.keywords}
          canonicalPath={canonicalPath}
          image={meta.ogImage}
        />
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
          <FAQSchema faqs={dataFull.faq} />
          <BreadcrumbSchema
            items={[
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: dataFull.name + ' Job Support', url: canonicalPath },
            ]}
          />
        </Head>
        <Layout metaTitle={meta.title} pageHref={canonicalPath.replace(/^\//, '')}>
          <ServicePageFull data={dataFull} />
        </Layout>
      </>
    )
  }

  if (data) {
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

  return null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = serviceSlugs.map((slug) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const dataFull = getServiceDataFull(slug)
  const data = dataFull ? null : getServiceBySlug(slug)
  return { props: { data, dataFull, slug } }
}
