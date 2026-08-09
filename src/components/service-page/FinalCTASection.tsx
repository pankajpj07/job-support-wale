import React from 'react'
import Link from 'next/link'
import type { FinalCTA } from '@/types/servicePageTypes'

interface FinalCTASectionProps {
  data: FinalCTA
}

export default function FinalCTASection({ data }: FinalCTASectionProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4 md:px-8 bg-ink-900 text-white">
      <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
      <div className="glow-blob left-1/4 top-10 h-72 w-72 bg-primary-600/40 animate-float" aria-hidden />
      <div className="glow-blob right-1/4 bottom-10 h-80 w-80 bg-accent-500/30 animate-float-slow" aria-hidden />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gradient">
          {data.heading}
        </h2>
        <p className="text-slate-300 text-lg mb-8">
          {data.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/join-our-team"
            className="glow-cta !px-8 !py-4 min-h-[48px]"
          >
            {data.cta.primary}
          </Link>
          <Link
            href="/services"
            className="glow-cta-outline !px-8 !py-4 min-h-[48px]"
          >
            {data.cta.secondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
