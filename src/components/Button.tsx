import { ButtonProps } from '@/types/types'
import Link from 'next/link'

export default function Button({ title, href }: ButtonProps) {
  return (
    <Link href={href}>
      <button className="p-2 md:p-4 m-1.5 flex min-w-56 md:min-w-60 justify-center bg-indigo-700 text-white hover:bg-indigo-600 rounded-full">
        {title}
      </button>
    </Link>
  )
}
