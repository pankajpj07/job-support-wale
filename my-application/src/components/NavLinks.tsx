import { NavLinkProps } from '@/types/types'
import Link from 'next/link'

const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <Link href={href}>
      <span className="text-black font-bold hover:text-gray-500">{text}</span>
    </Link>
  )
}
const NavLinkMobile = ({ href, text }: NavLinkProps) => {
  return (
    <Link href={href}>
      <span className="block py-2 text-black hover:text-gray-500">{text}</span>
    </Link>
  )
}

export { NavLink, NavLinkMobile }
