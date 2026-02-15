import React from 'react'
import Link from 'next/link'
import type { HeroSection as HeroSectionType } from '@/types/servicePageTypes'

export default function HeroSection({
  title,
  subtitle,
  cta,
  trustBadges,
}: HeroSectionType) {
  return (
    <section className="bg-slate-900 text-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          {trustBadges && trustBadges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {trustBadges.map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-white/90"
                >
                  <span className="text-green-400" aria-hidden>✓</span>
                  {badge}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={cta.primaryLink}
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition-colors min-h-[48px]"
            >
              {cta.primary}
            </Link>
            <Link
              href={cta.secondaryLink}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/15 text-black font-semibold rounded-lg border-2 border-white/40 hover:bg-white/25 transition-colors min-h-[48px]"
            >
              {cta.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
