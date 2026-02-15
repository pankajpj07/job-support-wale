import React from 'react'

const steps = [
  {
    step: 1,
    title: 'Schedule consultation',
    description:
      'Free 15-minute call to understand your needs and discuss project requirements and technologies.',
  },
  {
    step: 2,
    title: 'Get matched with an expert',
    description:
      'We assign a consultant within 24 hours. Review their profile and experience before you start.',
  },
  {
    step: 3,
    title: 'Start getting support',
    description:
      'Daily 2–4 hour sessions Monday–Friday. Screen sharing, code reviews, and pair programming.',
  },
  {
    step: 4,
    title: 'Complete your project successfully',
    description:
      'Regular progress tracking and flexible support hours based on your deadlines.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-8 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          How it works
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Get from first call to daily support in three simple steps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center text-lg mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
              {item.step < steps.length && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
