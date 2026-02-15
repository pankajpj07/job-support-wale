import React from 'react'
import type { TechnologyCategory } from '@/types/servicePageTypes'

interface TechnologiesSectionProps {
  technologies: TechnologyCategory[]
}

export default function TechnologiesSection({ technologies }: TechnologiesSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white" id="technologies">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Technologies We Support
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive expertise across the full ecosystem
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((cat, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {cat.category}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-slate-700 flex items-center gap-2">
                    <span className="text-primary-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
