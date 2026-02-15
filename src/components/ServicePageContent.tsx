import React from 'react'
import Link from 'next/link'
import { ServicePageData } from '@/constants/servicesData'

interface ServicePageContentProps {
  data: ServicePageData
}

export default function ServicePageContent({ data }: ServicePageContentProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-black py-8 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {data.heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            {data.heroSubhead}
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

      {/* Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <p className="text-lg text-slate-700 leading-relaxed">{data.intro}</p>
      </section>

      {/* Challenges */}
      <section className="bg-slate-50 py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Common challenges we help with
          </h2>
          <ul className="space-y-6">
            {data.challenges.map((ch, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-semibold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {ch.title}
                  </h3>
                  <p className="text-slate-600">{ch.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sample projects */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Sample projects we support
        </h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2">
          {data.sampleProjects.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </section>

      {/* Related technologies */}
      <section className="bg-slate-50 py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Related technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.relatedTechnologies.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium hover:border-primary-300 hover:text-primary-700 transition-colors"
              >
                {t.name}
              </Link>
            ))}
            <Link
              href="/services"
              className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium hover:border-primary-300 hover:text-primary-700 transition-colors"
            >
              All services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-primary-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {data.ctaHeading}
          </h2>
          <p className="text-primary-100 mb-8">{data.ctaSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join-our-team"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Request support
            </Link>
            <a
              href="https://wa.link/zwq1xp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
