type ButtonProps = {
  title: string
  href: string
}

export default function Button({ title, href }: ButtonProps) {
  return (
    <a href={href}>
      <button className="p-3 m-1.5 flex md:w-56 justify-center bg-indigo-700 text-white hover:bg-indigo-600 rounded-full">
        {title}
      </button>
    </a>
  )
}
