import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
        <section className="relative overflow-hidden bg-ink-900 py-14 md:py-20 px-4 md:px-8">
          <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
          <div
            className="glow-blob left-1/4 top-10 h-72 w-72 bg-primary-600/40 animate-float"
            aria-hidden
          />
          <div
            className="glow-blob right-1/4 bottom-10 h-80 w-80 bg-accent-500/30 animate-float-slow"
            aria-hidden
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Job support for 50+ technologies
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              Real-time help from India&apos;s top IT experts. Frontend, backend,
              full stack, DevOps, and .NET. Available Monday–Friday, 2–4 hours
              daily.
            </p>
            <Link
              href="/join-our-team"
              className="glow-cta !px-8 !py-4"
            >
              Book free consultation
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </section>

        {/* Tech grid */}
        <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
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
                    className="group block p-6 glass-card-light transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm hover:border-primary-300"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {s.name} Job Support
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {s.heroSubhead}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="h-4 w-4" aria-hidden />
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
                className="inline-flex items-center gap-1 text-primary-600 font-medium hover:underline"
              >
                View all job support options
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-ink-900 py-14 md:py-20 px-4 md:px-8">
          <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
          <div
            className="glow-blob right-1/4 top-10 h-72 w-72 bg-accent-500/30 animate-float"
            aria-hidden
          />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not sure which technology? We’ll help you choose.
            </h2>
            <p className="text-slate-300 mb-8">
              Free 15-minute consultation. We match you with an expert within 24
              hours.
            </p>
            <Link
              href="https://wa.link/ddu8hq"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-cta !px-8 !py-4"
            >
              Get in touch
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}
