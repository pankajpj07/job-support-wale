import React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import type { HeroSection as HeroSectionType } from '@/types/servicePageTypes'

export default function HeroSection({
  title,
  subtitle,
  cta,
  trustBadges,
}: HeroSectionType) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white py-16 md:py-24 px-4 md:px-8">
      <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
      <div className="glow-blob left-1/4 top-10 h-72 w-72 bg-primary-600/40 animate-float" aria-hidden />
      <div className="glow-blob right-1/4 bottom-10 h-80 w-80 bg-accent-500/30 animate-float-slow" aria-hidden />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-gradient">
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
                  className="glass-card inline-flex items-center gap-2 px-4 py-2 !rounded-full text-sm font-medium text-white/90"
                >
                  <Check className="h-4 w-4 text-accent-400" aria-hidden />
                  {badge}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={cta.primaryLink}
              className="glow-cta !px-8 !py-4 min-h-[48px]"
            >
              {cta.primary}
            </Link>
            <Link
              href={cta.secondaryLink}
              className="glow-cta-outline !px-8 !py-4 min-h-[48px]"
            >
              {cta.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
