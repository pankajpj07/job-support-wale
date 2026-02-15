import React from 'react'
import Link from 'next/link'
import type { ServiceCaseStudy } from '@/types/servicePageTypes'

interface CaseStudiesSectionProps {
  caseStudies: ServiceCaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50" id="case-studies">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Success Stories
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Real projects, real results—see how we&apos;ve helped developers deliver
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <article
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {cs.title}
              </h3>
              {cs.client && (
                <p className="text-sm text-slate-500 mb-3">{cs.client}</p>
              )}
              <p className="text-slate-600 text-sm mb-4 flex-1 line-clamp-3">
                {cs.challenge}
              </p>
              <p className="text-slate-700 text-sm font-medium mb-2">
                Result: {cs.result.slice(0, 100)}...
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                {cs.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
                {cs.duration && <span> · {cs.duration}</span>}
              </div>
            </article>
          ))}
        </div>
        <p className="text-center mt-10">
          <Link
            href="/case-studies"
            className="text-primary-600 font-medium hover:underline"
          >
            Read more case studies →
          </Link>
        </p>
      </div>
    </section>
  )
}
