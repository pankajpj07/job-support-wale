import React from 'react'
import Link from 'next/link'
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
              className={`rounded-2xl border-2 p-6 md:p-8 flex flex-col ${
                plan.popular
                  ? 'border-primary-500 bg-primary-50/50 shadow-lg'
                  : 'border-slate-200 bg-slate-50/50'
              }`}
            >
              {plan.popular && (
                <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide mb-2">
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
                    <span className="text-primary-600 mt-0.5" aria-hidden>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/join-our-team"
                className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/pricing" className="text-primary-600 font-medium hover:underline">
            View full pricing details →
          </Link>
        </p>
      </div>
    </section>
  )
}
