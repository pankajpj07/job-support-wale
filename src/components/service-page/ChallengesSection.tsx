import React from 'react'
import type { Challenge } from '@/types/servicePageTypes'

interface ChallengesSectionProps {
  challenges: Challenge[]
}

export default function ChallengesSection({ challenges }: ChallengesSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50" id="challenges">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Common Challenges We Solve
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Our experts help you overcome these common obstacles in your development journey
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {challenges.map((ch, i) => (
            <article
              key={i}
              className="glass-card-light p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm hover:border-primary-200"
            >
              {ch.icon && (
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-2xl" aria-hidden>
                  {ch.icon}
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {ch.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{ch.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
