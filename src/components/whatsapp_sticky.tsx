import { WhatsAppIcon } from '@/constants/constants'
import Image from 'next/image'

const WHATSAPP_URL = 'https://wa.link/ddu8hq'

export default function WhatsAppSticky() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-[0_8px_30px_-6px_rgba(34,197,94,0.6)] transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-400/40 animate-pulse-glow -z-10" aria-hidden />
      <Image src={WhatsAppIcon} alt="" width={28} height={28} className="md:w-8 md:h-8" />
      <span className="hidden sm:inline text-sm font-medium pr-1">Chat with us</span>
    </a>
  )
}
