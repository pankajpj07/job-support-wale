import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
import { ArrowLeft, Target, CheckCircle2, TrendingUp } from 'lucide-react'
import {
  caseStudies,
  getCaseStudyBySlug,
  CaseStudy,
} from '@/constants/caseStudiesData'

interface Props {
  caseStudy: CaseStudy | null
  slug: string
}

export default function CaseStudyPage({ caseStudy, slug }: Props) {
  if (!caseStudy) {
    return (
      <Layout metaTitle="Case study not found" pageHref="case-studies">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Case study not found
          </h1>
          <Link href="/case-studies" className="text-primary-600 hover:underline">
            View all case studies
          </Link>
        </div>
      </Layout>
    )
  }

  const metaTitle = `${caseStudy.title} | Case Study`
  const metaDescription = `${caseStudy.challenge.slice(0, 155)}...`

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonicalPath={`/case-studies/${slug}`}
      />
      <Layout metaTitle={metaTitle} pageHref={`case-studies/${slug}`}>
        <article className="py-8 md:py-16 px-4 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-1.5 text-primary-600 font-medium hover:text-primary-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden />
              All case studies
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {caseStudy.title}
            </h1>
            <div className="space-y-8 text-slate-700">
              <section>
                <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-2">
                  <Target className="h-5 w-5 text-primary-600" aria-hidden />
                  Challenge
                </h2>
                <p className="leading-relaxed">{caseStudy.challenge}</p>
              </section>
              <section>
                <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-600" aria-hidden />
                  Solution
                </h2>
                <ul className="space-y-2">
                  {caseStudy.solution.map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500" aria-hidden />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary-600" aria-hidden />
                  Results
                </h2>
                <ul className="space-y-2">
                  {caseStudy.results.map((r, i) => (
                    <li key={i} className="flex gap-2">
                      <TrendingUp className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500" aria-hidden />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>
                <strong className="text-slate-900">Technologies:</strong>{' '}
                {caseStudy.technologies.join(', ')}
              </span>
              <span>
                <strong className="text-slate-900">Duration:</strong>{' '}
                {caseStudy.duration}
              </span>
            </div>
            <div className="mt-10">
              <Link
                href="/join-our-team"
                className="glow-cta !px-8 !py-4"
              >
                Get similar support
              </Link>
            </div>
          </div>
        </article>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = caseStudies.map((c) => ({ params: { slug: c.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const caseStudy = getCaseStudyBySlug(slug) ?? null
  return { props: { caseStudy, slug } }
}
