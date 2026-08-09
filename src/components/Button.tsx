import { ButtonProps } from '@/types/types'
import Link from 'next/link'

export default function Button({ title, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="m-1.5 inline-flex min-w-56 md:min-w-60 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 md:py-4 font-semibold text-white shadow-glow-sm transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2"
    >
      {title}
    </Link>
  )
}
