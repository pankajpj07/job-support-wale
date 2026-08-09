import { supportServices } from '@/constants/constants'
import { Sparkles } from 'lucide-react'
import BulletPoint from './bulletpoints'

const ServicesSection = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-12 text-center">Support services</h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center text-left">
          <div className="md:w-2/6 flex justify-center mb-8 md:mb-0 md:mr-10">
            <div className="relative flex h-56 w-56 md:h-72 md:w-72 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-500/30 to-primary-500/30 blur-2xl animate-pulse-glow" aria-hidden />
              <div className="relative flex h-40 w-40 md:h-52 md:w-52 items-center justify-center rounded-3xl bg-gradient-to-br from-ink-900 to-ink-800 shadow-glow">
                <div className="absolute inset-0 rounded-3xl grid-bg opacity-40" aria-hidden />
                <Sparkles className="relative h-20 w-20 md:h-24 md:w-24 text-accent-400" aria-hidden />
              </div>
            </div>
          </div>
          <div className="md:w-4/6">
            <ul>
              {supportServices.map((point, index) => (
                <BulletPoint key={index} text={point} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
