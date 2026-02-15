import React from 'react'

const badges = [
  { label: 'Trusted by 1,000+ developers', icon: '✓' },
  { label: '4.8/5 average rating', icon: '★' },
  { label: 'Secure payment', icon: '🔒' },
  { label: '100% confidential', icon: '✓' },
]

export default function TrustBadges() {
  return (
    <section className="py-8 md:py-10 px-4 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-slate-600 text-sm md:text-base">
          {badges.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 font-medium"
            >
              <span className="text-emerald-600" aria-hidden>
                {b.icon}
              </span>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
