import { whyChooseUsList } from '@/constants/constants'
import React from 'react'
import { Check } from 'lucide-react'

const WhyChooseUsSection = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Why choose IndiaJobSupport?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whyChooseUsList.map((point, index) => (
            <div
              key={index}
              className="glass-card-light flex items-start gap-4 p-5 md:p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm">
                <Check className="h-5 w-5" aria-hidden />
              </span>
              <p className="text-slate-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
