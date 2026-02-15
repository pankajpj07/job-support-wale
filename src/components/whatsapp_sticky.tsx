import { WhatsAppIcon } from '@/constants/constants'
import Image from 'next/image'

const WhatsAppSticky = () => {
  return (
    <div className="fixed right-5 bottom-3">
      <a href="https://wa.link/zwq1xp" target="_blank">
        <Image src={WhatsAppIcon} alt="Whatsapp icon" width={70} height={70} />
      </a>
    </div>
  )
}

export default WhatsAppSticky
