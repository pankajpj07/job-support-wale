import React from 'react'
import Link from 'next/link'

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

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50" id="testimonials">
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
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-amber-400" aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-slate-700 flex-1 mb-6 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="text-sm text-slate-600">
                <strong className="text-slate-900">{t.author}</strong>
                <span className="block text-slate-500">
                  {t.role}, {t.location}
                </span>
              </footer>
            </div>
          ))}
        </div>
        <p className="text-center mt-10">
          <Link
            href="https://wa.link/zwq1xp"
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
