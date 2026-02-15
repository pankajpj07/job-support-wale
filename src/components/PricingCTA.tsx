import React from 'react'
import Link from 'next/link'

export default function PricingCTA() {
  return (
    <section id="pricing" className="py-8 md:py-16 px-4 md:px-8 bg-slate-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Flexible plans for every need
        </h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Hourly, half-month, or monthly support. No long-term commitment. Get a free consultation to find the right plan for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/join-our-team"
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get a quote
          </Link>
          <Link
            href="https://wa.link/zwq1xp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-300 hover:border-slate-400 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
