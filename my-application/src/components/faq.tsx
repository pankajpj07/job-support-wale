import { faqData } from '@/constants/constants'
import React, { useState } from 'react'

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className="py-12 px-2 md:px-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">OUR FAQ</h2>
      <div className="">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-4 shadow-sm">
            <button
              className="w-full flex justify-between items-center bg-white hover:bg-green-500 py-4 px-6 rounded-lg font-semibold text-left"
              onClick={() => handleAccordionClick(index)}
            >
              <span>{faq.question}</span>
              <span
                className={`transform transition-transform ${
                  index === activeIndex ? 'rotate-180' : 'rotate-0'
                }`}
              >
                👇
              </span>
            </button>
            {index === activeIndex && (
              <div className="bg-white py-4 px-6">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
