import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { ProcessStep } from '@/types/servicePageTypes'

interface HowItWorksSectionProps {
  steps: ProcessStep[]
}

export default function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          How It Works
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Get from first call to daily support in four simple steps
        </p>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent lg:block" aria-hidden />
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white font-bold flex items-center justify-center text-xl mb-4 shadow-glow-sm">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-1.5 text-primary-600 font-medium hover:underline"
          >
            Read the full process
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  )
}
