import { WhatsAppIcon } from '@/constants/constants'
import Image from 'next/image'

const WHATSAPP_URL = 'https://wa.link/zwq1xp'

export default function WhatsAppSticky() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-green-600 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      <Image src={WhatsAppIcon} alt="" width={28} height={28} className="md:w-8 md:h-8" />
      <span className="hidden sm:inline text-sm font-medium pr-1">Chat with us</span>
    </a>
  )
}
