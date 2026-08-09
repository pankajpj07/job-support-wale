import React from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
import { ArrowRight, Target, CheckCircle2, TrendingUp } from 'lucide-react'
import { caseStudies } from '@/constants/caseStudiesData'

const caseStudiesMeta = {
  title: 'Case Studies | Job Support Success Stories',
  description:
    'Read how we helped developers deliver projects on time with React, Node.js, Angular, and more. Real success stories from our job support clients.',
  keywords:
    'job support success stories, developer case studies, React job support results, IT support testimonials, Node.js job support case study, Angular support results',
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
        <section className="relative overflow-hidden bg-ink-900 py-14 md:py-24 px-4 md:px-8">
          <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
          <div className="glow-blob left-1/4 top-8 h-72 w-72 bg-primary-600/40 animate-float" aria-hidden />
          <div className="glow-blob right-1/4 bottom-0 h-64 w-64 bg-accent-400/20 animate-float-slow" aria-hidden />
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Success stories
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              How we helped developers deliver projects on time and grow their
              skills.
            </p>
          </div>
        </section>

        {/* Intro for SEO */}
        <section className="py-8 px-4 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-700 leading-relaxed">
              These case studies show how our job support helped developers in the USA, UK, and Canada deliver React, Node.js, and Angular projects on time. Each story includes the challenge, solution, and measurable results. Explore our <Link href="/services" className="text-primary-600 font-medium hover:underline">technology-specific support</Link> or <Link href="/pricing" className="text-primary-600 font-medium hover:underline">pricing</Link> to get similar help.
            </p>
          </div>
        </section>

        {/* List */}
        <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            {caseStudies.map((cs) => (
              <article
                key={cs.slug}
                className="glass-card-light p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm"
              >
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  {cs.title}
                </h2>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold text-slate-900 mb-1">
                      <Target className="h-4 w-4 text-primary-600" aria-hidden />
                      Challenge
                    </h3>
                    <p>{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold text-slate-900 mb-1">
                      <CheckCircle2 className="h-4 w-4 text-primary-600" aria-hidden />
                      Solution
                    </h3>
                    <ul className="space-y-1">
                      {cs.solution.map((s, i) => (
                        <li key={i} className="flex gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500" aria-hidden />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold text-slate-900 mb-1">
                      <TrendingUp className="h-4 w-4 text-primary-600" aria-hidden />
                      Results
                    </h3>
                    <ul className="space-y-1">
                      {cs.results.map((r, i) => (
                        <li key={i} className="flex gap-2">
                          <TrendingUp className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500" aria-hidden />
                          <span>{r}</span>
                        </li>
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
                  className="group mt-4 inline-flex items-center gap-1.5 text-primary-600 font-medium hover:text-primary-700"
                >
                  Read full case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-ink-900 py-14 md:py-20 px-4 md:px-8">
          <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
          <div className="glow-blob left-1/3 top-0 h-64 w-64 bg-primary-600/40 animate-float" aria-hidden />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get the same support for your project
            </h2>
            <p className="text-slate-300 mb-8">
              Free 15-minute consultation. Matched with an expert within 24
              hours.
            </p>
            <Link
              href="/join-our-team"
              className="glow-cta !px-8 !py-4"
            >
              Book free consultation
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}
