import { MetricsCardProps } from '@/types/types'

const MetricsCard = ({ icon: Icon, bgColor, iconColor, metrics, text }: MetricsCardProps) => {
  return (
    <div className="glass-card-light group relative overflow-hidden p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm">
      <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${bgColor} ${iconColor} shadow-sm`}>
        {typeof Icon === 'string' ? <span className="text-3xl">{Icon}</span> : <Icon className="h-7 w-7" aria-hidden />}
      </div>
      <h3 className="mb-1 text-3xl font-bold text-gradient-dark">{metrics}</h3>
      <p className="text-lg text-slate-600">{text}</p>
    </div>
  )
}

export default MetricsCard
