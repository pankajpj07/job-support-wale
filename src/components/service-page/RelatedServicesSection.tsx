import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { RelatedService } from '@/types/servicePageTypes'

interface RelatedServicesSectionProps {
  services: RelatedService[]
}

export default function RelatedServicesSection({ services }: RelatedServicesSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Related Services
        </h2>
        <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
          Explore other technologies we support
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.link}
              href={s.link}
              className="glass-card-light block p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm hover:border-primary-200 group"
            >
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-700 mb-2">
                {s.name}
              </h3>
              {s.description && (
                <p className="text-slate-600 text-sm">{s.description}</p>
              )}
              <span className="mt-3 inline-flex items-center gap-1.5 text-primary-600 font-medium text-sm transition-transform duration-300 group-hover:translate-x-0.5">
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-primary-600 font-medium hover:underline">
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  )
}
