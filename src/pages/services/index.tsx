import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
import { serviceSlugs, servicesPageData } from '@/constants/servicesData'

const servicesLandingMeta = {
  title: 'IT Job Support Services | React, Angular, Node.js, Python, Java',
  description:
    'Professional job support for 50+ technologies. React, Angular, Node.js, Python, Java, .NET, DevOps and more. Real-time help 2–4 hours daily. Free consultation.',
  keywords:
    'job support services, React job support, Angular support, Node.js support, Python job support, Java job support, IT job support',
}

export default function ServicesLanding() {
  return (
    <>
      <SEO
        title={servicesLandingMeta.title}
        description={servicesLandingMeta.description}
        keywords={servicesLandingMeta.keywords}
        canonicalPath="/services"
      />
      <Layout metaTitle={servicesLandingMeta.title} pageHref="services">
        <Head>
          <meta name="description" content={servicesLandingMeta.description} />
          <meta name="keywords" content={servicesLandingMeta.keywords} />
        </Head>

        {/* Hero */}
        <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Job support for 50+ technologies
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              Real-time help from India&apos;s top IT experts. Frontend, backend,
              full stack, DevOps, and .NET. Available Monday–Friday, 2–4 hours
              daily.
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

        {/* Tech grid */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Technology-specific support
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceSlugs.map((slug) => {
                const s = servicesPageData[slug]
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="block p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-primary-300 hover:bg-primary-50/50 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {s.name} Job Support
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {s.heroSubhead}
                    </p>
                    <span className="text-primary-600 font-medium text-sm hover:underline">
                      Learn more →
                    </span>
                  </Link>
                )
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">
                We also support .NET, PHP, DevOps, and many more.
              </p>
              <Link
                href="/job-support"
                className="text-primary-600 font-medium hover:underline"
              >
                View all job support options →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Not sure which technology? We’ll help you choose.
            </h2>
            <p className="text-slate-600 mb-8">
              Free 15-minute consultation. We match you with an expert within 24
              hours.
            </p>
            <Link
              href="/join-our-team"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}
