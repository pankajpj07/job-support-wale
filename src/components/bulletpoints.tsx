import { BulletPointProps } from '@/types/types'
import { Check } from 'lucide-react'

const BulletPoint = ({ text }: BulletPointProps) => {
  return (
    <li className="flex items-start gap-3 mb-4 text-sm md:text-lg text-slate-700">
      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <Check className="h-3.5 w-3.5" aria-hidden />
      </span>
      <span>{text}</span>
    </li>
  )
}
export default BulletPoint
