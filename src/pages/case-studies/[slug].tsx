import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
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
        <article className="py-16 md:py-24 px-4 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="text-primary-600 font-medium hover:underline mb-6 inline-block"
            >
              ← All case studies
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {caseStudy.title}
            </h1>
            <div className="space-y-8 text-slate-700">
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Challenge
                </h2>
                <p className="leading-relaxed">{caseStudy.challenge}</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Solution
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  {caseStudy.solution.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Results
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  {caseStudy.results.map((r, i) => (
                    <li key={i}>{r}</li>
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
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
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
