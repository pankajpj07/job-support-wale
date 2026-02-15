import React from 'react'
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section id="join-our-team" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Get in touch
        </h2>
        <p className="text-slate-600 mb-8">
          Tell us your tech stack and we’ll match you with an expert within 24 hours. Free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/join-our-team"
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Request support
          </Link>
          <Link
            href="https://wa.link/zwq1xp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}
