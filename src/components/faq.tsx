import { faqData } from '@/constants/constants'
import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-slate-50" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Frequently asked questions
        </h2>
        <p className="text-slate-600 text-center mb-10">
          Still have questions?{' '}
          <a href="https://wa.link/xleobi" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium hover:underline">
            Contact us
          </a>
        </p>
        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = index === activeIndex
            return (
              <div
                key={index}
                className={`rounded-2xl border bg-white overflow-hidden transition-all ${
                  isOpen ? 'border-accent-300 shadow-glow-sm' : 'border-slate-200 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  className="w-full flex justify-between items-center gap-4 py-5 px-6 text-left font-semibold text-slate-900 transition-colors hover:text-primary-700"
                  onClick={() => handleAccordionClick(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                      isOpen ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                    aria-hidden
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="py-2 px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
