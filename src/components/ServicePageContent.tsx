import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'
import { ServicePageData } from '@/constants/servicesData'

interface ServicePageContentProps {
  data: ServicePageData
}

export default function ServicePageContent({ data }: ServicePageContentProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-900 py-14 md:py-24 px-4 md:px-8">
        <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
        <div className="glow-blob left-1/4 top-8 h-72 w-72 bg-primary-600/40 animate-float" aria-hidden />
        <div className="glow-blob right-1/4 bottom-0 h-64 w-64 bg-accent-400/20 animate-float-slow" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {data.heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            {data.heroSubhead}
          </p>
          <Link
            href="https://wa.link/ddu8hq"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-cta !px-8 !py-4"
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
        <ul className="space-y-3 text-slate-700">
          {data.sampleProjects.map((p, i) => (
            <li key={i} className="flex gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent-500" aria-hidden />
              <span>{p}</span>
            </li>
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
                className="glass-card-light px-4 py-2 text-slate-700 font-medium transition-all hover:-translate-y-0.5 hover:text-primary-700 hover:shadow-glow-sm"
              >
                {t.name}
              </Link>
            ))}
            <Link
              href="/services"
              className="group glass-card-light inline-flex items-center gap-1.5 px-4 py-2 text-slate-700 font-medium transition-all hover:-translate-y-0.5 hover:text-primary-700 hover:shadow-glow-sm"
            >
              All services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-900 py-14 md:py-20 px-4 md:px-8">
        <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
        <div className="glow-blob left-1/3 top-0 h-64 w-64 bg-primary-600/40 animate-float" aria-hidden />
        <div className="glow-blob right-1/4 bottom-0 h-56 w-56 bg-accent-400/20 animate-float-slow" aria-hidden />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {data.ctaHeading}
          </h2>
          <p className="text-slate-300 mb-8">{data.ctaSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join-our-team"
              className="glow-cta !px-8 !py-4"
            >
              Request support
            </Link>
            <a
              href="https://wa.link/ddu8hq"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-cta-outline inline-flex items-center justify-center gap-2 !px-8 !py-4"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
