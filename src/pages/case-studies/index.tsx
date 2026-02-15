import React from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
import { caseStudies } from '@/constants/caseStudiesData'

const caseStudiesMeta = {
  title: 'Case Studies | Job Support Success Stories',
  description:
    'Read how we helped developers deliver projects on time with React, Node.js, Angular, and more. Real success stories from our job support clients.',
  keywords:
    'job support success stories, developer case studies, React job support results, IT support testimonials',
}

export default function CaseStudiesIndex() {
  return (
    <>
      <SEO
        title={caseStudiesMeta.title}
        description={caseStudiesMeta.description}
        keywords={caseStudiesMeta.keywords}
        canonicalPath="/case-studies"
      />
      <Layout metaTitle={caseStudiesMeta.title} pageHref="case-studies">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Success stories
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              How we helped developers deliver projects on time and grow their
              skills.
            </p>
          </div>
        </section>

        {/* List */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto space-y-12">
            {caseStudies.map((cs) => (
              <article
                key={cs.slug}
                className="border border-slate-200 rounded-xl p-6 md:p-8 hover:border-primary-200 transition-colors"
              >
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  {cs.title}
                </h2>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Challenge
                    </h3>
                    <p>{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Solution
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      {cs.solution.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Results
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      {cs.results.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <span className="text-slate-500">
                    Technologies: {cs.technologies.join(', ')}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500">
                    Duration: {cs.duration}
                  </span>
                </div>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-block mt-4 text-primary-600 font-medium hover:underline"
                >
                  Read full case study →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Get the same support for your project
            </h2>
            <p className="text-slate-600 mb-8">
              Free 15-minute consultation. Matched with an expert within 24
              hours.
            </p>
            <Link
              href="/join-our-team"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Book free consultation
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}
