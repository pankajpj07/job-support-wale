import Link from 'next/link'

type NavLinkProps = {
  href: string
  text: string
}
const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className="text-black font-bold hover:text-gray-500">{text}</a>
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
