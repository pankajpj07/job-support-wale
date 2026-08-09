import React from 'react'

interface IntroSectionProps {
  content: string
}

export default function IntroSection({ content }: IntroSectionProps) {
  return (
    <section className="relative py-12 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card-light p-6 md:p-10">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
