import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
import FAQ from '@/components/faq'
import { BreadcrumbSchema } from '@/components/StructuredData'

const pricingMeta = {
  title: 'Pricing | Job Support Plans – Hourly, Half-Month, Monthly',
  description:
    'Flexible job support pricing: $25/hour, half-month from $800, monthly from $1,400. No long-term commitment. Free consultation.',
  keywords:
    'job support pricing, hourly job support, monthly job support, IT support cost',
}

const plans = [
  {
    name: 'Hourly Support',
    price: '$25',
    period: '/hour',
    tagline: 'Pay as you go',
    features: [
      'Flexible hours',
      'Same-day start when available',
      'Ideal for ad-hoc tasks',
    ],
    cta: 'Get a quote',
    highlighted: false,
  },
  {
    name: 'Half-Month',
    price: '$400',
    period: 'for 2 weeks',
    tagline: '* Supporting all timezones',
    features: [
      '2 hours/day support',
      'Zoom, Google Meet, Teams, or similar',
      'WhatsApp, Email, and Phone support',
      'Best for short sprints',
    ],
    cta: 'Get a quote',
    highlighted: true,
  },
  {
    name: 'Monthly',
    price: '$700',
    period: '/month',
    tagline: '* Supporting all timezones',
    features: [
      '2 hours/day support',
      'Zoom, Google Meet, Teams, or similar',
      'WhatsApp, Email, and Phone support',
      'Best for long term projects',
    ],
    cta: 'Get a quote',
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <SEO
        title={pricingMeta.title}
        description={pricingMeta.description}
        keywords={pricingMeta.keywords}
        canonicalPath="/pricing"
      />
      <Head>
        <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Pricing', url: '/pricing' }]} />
      </Head>
      <Layout metaTitle={pricingMeta.title} pageHref="pricing">
        {/* Hero */}
        <section className="bg-slate-900 text-black py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Flexible Job Support Pricing for Every Need
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-6">
              Hourly, half-month, or monthly plans. No long-term commitment.
              Free 15-minute consultation to find the right plan for your project.
            </p>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Trusted by 1,000+ developers in the USA, UK, Canada, and Australia.
              All plans include real-time support via Zoom, Google Meet, or Teams.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-8 md:py-16 px-4 md:px-8 -mt-2">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border-2 p-6 md:p-8 flex flex-col ${
                    plan.highlighted
                      ? 'border-primary-500 bg-primary-50/50 shadow-lg scale-105 md:scale-105'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  {plan.highlighted && (
                    <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide mb-2">
                      Most popular
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    {plan.name}
                  </h2>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-600">{plan.period}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-6">{plan.tagline}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-slate-700">
                        <span className="text-primary-600 mt-0.5" aria-hidden>
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/join-our-team"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-slate-900 text-black hover:bg-slate-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-16 p-6 md:p-8 rounded-2xl border border-slate-200 bg-slate-50 max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Custom plans for your needs
              </h3>
              <p className="text-slate-600 mb-4">
                Need dedicated support for a team or longer engagement? We
                offer tailored plans and volume discounts. Get a free consultation to find the right plan for you.
              </p>
              <Link
                href="/join-our-team"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
              >
                Contact us
              </Link>
            </div>
            {/* <div className="mt-12 text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Learn more</h2>
              <p className="text-slate-600 mb-4">
                See how our job support works, which technologies we cover, and stories from developers we&apos;ve helped.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/how-it-works" className="text-primary-600 font-medium hover:underline">
                  How it works
                </Link>
                <Link href="/services" className="text-primary-600 font-medium hover:underline">
                  Technology support
                </Link>
                <Link href="/case-studies" className="text-primary-600 font-medium hover:underline">
                  Case studies
                </Link>
              </div>
            </div> */}
          </div>
        </section>

        <FAQ />
      </Layout>
    </>
  )
}
