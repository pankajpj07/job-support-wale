import { NavLinkProps } from '@/types/types'
import Link from 'next/link'

const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <Link href={href}>
      <span className="text-slate-700 font-semibold transition-colors hover:text-primary-600">{text}</span>
    </Link>
  )
}
const NavLinkMobile = ({ href, text }: NavLinkProps) => {
  return (
    <Link href={href}>
      <span className="block py-2 text-slate-700 transition-colors hover:text-primary-600">{text}</span>
    </Link>
  )
}

export { NavLink, NavLinkMobile }
