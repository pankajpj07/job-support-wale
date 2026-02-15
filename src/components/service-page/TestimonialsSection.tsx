import React from 'react'
import type { Testimonial } from '@/types/servicePageTypes'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          What Developers Say About Us
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Trusted by developers across the USA, UK, Canada, and worldwide
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-amber-400" aria-hidden>★</span>
                ))}
              </div>
              <p className="text-slate-700 flex-1 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer>
                <strong className="text-slate-900">{t.name}</strong>
                <span className="block text-sm text-slate-500">
                  {t.role}
                  {t.company && `, ${t.company}`}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
