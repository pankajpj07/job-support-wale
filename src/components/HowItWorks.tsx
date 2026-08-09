import React from 'react'
import { CalendarCheck, UserCheck, MonitorPlay, Rocket } from 'lucide-react'

const steps = [
  {
    step: 1,
    Icon: CalendarCheck,
    color: 'from-sky-500 to-blue-600',
    title: 'Schedule consultation',
    description:
      'Free 15-minute call to understand your needs and discuss project requirements and technologies.',
  },
  {
    step: 2,
    Icon: UserCheck,
    color: 'from-violet-500 to-purple-600',
    title: 'Get an expert',
    description:
      'We assign a consultant within 24 hours. Review their profile and experience before you start.',
  },
  {
    step: 3,
    Icon: MonitorPlay,
    color: 'from-emerald-500 to-teal-600',
    title: 'Start getting support',
    description:
      'Daily 2–4 hour sessions Monday–Friday. Screen sharing, code reviews, and pair programming.',
  },
  {
    step: 4,
    Icon: Rocket,
    color: 'from-orange-500 to-amber-600',
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
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* connecting gradient line (desktop) */}
          <div className="pointer-events-none absolute top-8 left-[12%] right-[12%] hidden h-0.5 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 lg:block" aria-hidden />
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative glass-card-light flex flex-col items-center p-6 text-center transition-all hover:-translate-y-1 hover:shadow-glow-sm"
            >
              <div className={`relative z-1 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                <item.Icon className="h-7 w-7" aria-hidden />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-xs font-bold text-accent-300 ring-2 ring-white">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
