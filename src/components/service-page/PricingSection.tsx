import React from 'react'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import type { PricingPlan } from '@/types/servicePageTypes'

interface PricingSectionProps {
  plans: PricingPlan[]
}

export default function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Flexible Pricing Plans
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your project and timeline
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card-light relative p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm ${
                plan.popular
                  ? '!border-accent-400 ring-2 ring-accent-400/40 shadow-glow-sm'
                  : ''
              }`}
            >
              {plan.popular && (
                <span className="mb-2 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-slate-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-slate-600 text-sm">{plan.period}</span>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/join-our-team"
                className={`block w-full text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5'
                    : 'bg-ink-900 text-white hover:bg-ink-800'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-primary-600 font-medium hover:underline">
            View full pricing details
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  )
}
