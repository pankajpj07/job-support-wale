import React from 'react'
import { Cpu } from 'lucide-react'
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
            <div key={i} className="glass-card-light p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {cat.category}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-slate-700 flex items-center gap-2 font-mono text-sm">
                    <Cpu className="h-4 w-4 shrink-0 text-accent-500" aria-hidden />
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
