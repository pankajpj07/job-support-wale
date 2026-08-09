import React from 'react'
import Link from 'next/link'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'IndiaJobSupport saved my job! I was struggling with React hooks and their expert helped me deliver my project on time.',
    author: 'John D.',
    role: 'Frontend Developer',
    location: 'USA',
    rating: 5,
  },
  {
    quote:
      'Professional, responsive, and knowledgeable. The best investment I made for my career.',
    author: 'Sarah M.',
    role: 'Full Stack Developer',
    location: 'USA',
    rating: 5,
  },
  {
    quote:
      'They helped me transition from Java to Node.js smoothly. Excellent communication and technical skills.',
    author: 'Raj K.',
    role: 'Backend Developer',
    location: 'USA',
    rating: 5,
  },
]

const initials = (name: string) =>
  name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase()

export default function Testimonials() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          What developers say about us
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Trusted by developers across the USA and worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative glass-card-light flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-glow-sm"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary-100" aria-hidden />
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
              <blockquote className="text-slate-700 flex-1 mb-6 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-3 text-sm text-slate-600">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-semibold text-white">
                  {initials(t.author)}
                </span>
                <span>
                  <strong className="block text-slate-900">{t.author}</strong>
                  <span className="block text-slate-500">
                    {t.role}, {t.location}
                  </span>
                </span>
              </footer>
            </div>
          ))}
        </div>
        <p className="text-center mt-10">
          <Link
            href="https://wa.link/ddu8hq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 font-medium hover:underline"
          >
            Join 1,000+ developers who trust us →
          </Link>
        </p>
      </div>
    </section>
  )
}
