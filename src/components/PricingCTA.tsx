import React from 'react'
import Link from 'next/link'

export default function PricingCTA() {
  return (
    <section id="pricing" className="px-4 md:px-8 py-8 md:py-16">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-ink-900 px-5 py-12 md:px-12 md:py-16 text-center">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="glow-blob left-1/4 -top-10 h-56 w-56 bg-primary-600/40" aria-hidden />
        <div className="glow-blob right-1/4 -bottom-10 h-56 w-56 bg-accent-500/30" aria-hidden />
        <div className="relative">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Flexible plans for every need
          </h2>
          <p className="text-slate-300 text-base mb-7 md:mb-8 max-w-xl mx-auto">
            Hourly, half-month, or monthly support. No long-term commitment. Get a free consultation to find the right plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/join-our-team" className="glow-cta w-full sm:w-auto min-h-[52px] !px-8 !py-4">
              Get a quote
            </Link>
            <Link
              href="https://wa.link/xleobi"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-cta-outline w-full sm:w-auto min-h-[52px] !px-8 !py-4"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
