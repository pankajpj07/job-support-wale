import React, { useState } from 'react'
import type { FAQItem } from '@/types/servicePageTypes'

interface FAQSectionProps {
  faq: FAQItem[]
}

export default function FAQSection({ faq }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white" id="faq" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-center mb-10">
          Still have questions?{' '}
          <a
            href="https://wa.link/zwq1xp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 font-medium hover:underline"
          >
            Contact us on WhatsApp
          </a>
        </p>
        <div className="space-y-3">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex justify-between items-center gap-4 py-5 px-6 text-left font-semibold text-slate-900 hover:bg-slate-100/80 transition-colors"
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                aria-expanded={index === activeIndex}
                aria-controls={`service-faq-answer-${index}`}
                id={`service-faq-question-${index}`}
              >
                <span>{item.question}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 transition-transform duration-200 ${
                    index === activeIndex ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                >
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                id={`service-faq-answer-${index}`}
                role="region"
                aria-labelledby={`service-faq-question-${index}`}
                className={`overflow-hidden transition-all duration-200 ${
                  index === activeIndex ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-2 px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-200">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
