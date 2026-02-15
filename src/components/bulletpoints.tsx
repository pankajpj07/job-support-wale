import { BulletPointProps } from '@/types/types'

const DoubleArrowIcon = () => (
  <svg className="w-5 h-5 mr-2 flex-shrink-0 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M15.5 5H11l5 7-5 7h4.5l5-7z" />
    <path d="M8.5 5H4l5 7-5 7h4.5l5-7z" />
  </svg>
)

const BulletPoint = ({ text }: BulletPointProps) => {
  return (
    <li className="flex mb-5 text-sm md:text-lg ld:text-xl text-justify">
      <DoubleArrowIcon />
      <span>{text}</span>
    </li>
  )
}
export default BulletPoint
