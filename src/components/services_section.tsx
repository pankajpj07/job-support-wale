import { supportServices } from '@/constants/constants'
import { CalendarRange, CalendarDays, Clock, Headset } from 'lucide-react'
import BulletPoint from './bulletpoints'

const plans = [
  {
    Icon: CalendarRange,
    title: 'Monthly',
    desc: 'Ongoing support for long-term projects',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    Icon: CalendarDays,
    title: 'Half-month',
    desc: 'Two weeks of focused help',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    Icon: Clock,
    title: 'Hourly',
    desc: 'Pay as you go, ad-hoc tasks',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    Icon: Headset,
    title: 'Weekend',
    desc: 'On call when deadlines hit',
    color: 'bg-orange-50 text-orange-500',
  },
]

const ServicesSection = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 text-center">
          Support that fits your schedule
        </h2>
        <p className="text-slate-600 text-center mb-10 md:mb-12 max-w-2xl mx-auto">
          Flexible engagement models, 2–4 hours a day, Monday to Friday—and
          weekends when you really need us.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Engagement model cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {plans.map((p) => (
              <div
                key={p.title}
                className="glass-card-light flex flex-col gap-3 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm"
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${p.color}`}>
                  <p.Icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed points */}
          <ul>
            {supportServices.map((point, index) => (
              <BulletPoint key={index} text={point} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
