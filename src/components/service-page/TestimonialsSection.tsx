import React from 'react'
import { Star, Quote } from 'lucide-react'
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
              className="glass-card-light relative p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary-200" aria-hidden />
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
              <p className="text-slate-700 flex-1 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-bold text-white"
                  aria-hidden
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <strong className="text-slate-900">{t.name}</strong>
                  <span className="block text-sm text-slate-500">
                    {t.role}
                    {t.company && `, ${t.company}`}
                  </span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
