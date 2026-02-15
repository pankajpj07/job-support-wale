import React from 'react'
import Link from 'next/link'
import type { FinalCTA } from '@/types/servicePageTypes'

interface FinalCTASectionProps {
  data: FinalCTA
}

export default function FinalCTASection({ data }: FinalCTASectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-primary-600 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {data.heading}
        </h2>
        <p className="text-primary-100 text-lg mb-8">
          {data.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/join-our-team"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors min-h-[48px]"
          >
            {data.cta.primary}
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg border-2 border-white/40 hover:bg-primary-400 transition-colors min-h-[48px]"
          >
            {data.cta.secondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
