import { BulletPointProps } from '@/types/types'
import { DoubleArrow } from '@mui/icons-material'

const BulletPoint = ({ text }: BulletPointProps) => {
  return (
    <li className="flex mb-5 text-sm md:text-lg ld:text-xl text-justify">
      <DoubleArrow className="mr-2 text-black" />
      <span>{text}</span>
    </li>
  )
}
export default BulletPoint
