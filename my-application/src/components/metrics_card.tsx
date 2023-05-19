import { MetricsCardProps } from '@/types/types'

const MetricsCard = ({ bgColor, icon, metrics, text }: MetricsCardProps) => {
  return (
    <div
      className={`bg-${bgColor} p-6 rounded-lg text-center cursor-pointer shadow-2xl transform transition-all lg:hover:scale-90`}
    >
      <div className="text-4xl text-green-500 mb-4">{icon}</div>
      <h3 className="text-2xl text-blue-500 font-bold mb-2">{metrics}</h3>
      <p className="text-lg text-gray-800">{text}</p>
    </div>
  )
}

export default MetricsCard
