import { missionPoints } from '@/constants/constants'
import { Target, Users, Layers, CalendarClock, Star } from 'lucide-react'
import BulletPoint from './bulletpoints'

const highlights = [
  {
    Icon: Layers,
    value: '50+',
    label: 'Technologies',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    Icon: Users,
    value: '1,000+',
    label: 'Developers helped',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    Icon: CalendarClock,
    value: '4+ yrs',
    label: 'Experience',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    Icon: Star,
    value: '4.8/5',
    label: 'Average rating',
    color: 'bg-amber-50 text-amber-500',
  },
]

const MissionSection = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 max-w-6xl">
        {/* Mission copy */}
        <div className="text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700 mb-4">
            <Target className="h-3.5 w-3.5" aria-hidden />
            Our mission
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Helping developers succeed on the job—in real time
          </h2>
          <ul>
            {missionPoints.map((point, index) => (
              <BulletPoint key={index} text={point} />
            ))}
          </ul>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="glass-card-light flex flex-col items-start gap-3 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${h.color}`}>
                <h.Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{h.value}</p>
                <p className="text-sm text-slate-600">{h.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionSection
