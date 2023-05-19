import Image from 'next/image'
import { easyJob, supportServices } from '@/constants/constants'
import BulletPoint from './bulletpoints'

const ServicesSection = () => {
  return (
    <section className="py-12 px-5 bg-gray-100 text-center">
      <div className="font-bold text-3xl mb-5 md:mb-16">Support Services</div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/6 flex justify-center mb-8 md:mb-0 md:mr-8">
          <div className="w-64 h-64 md:w-80 md:h-80">
            <Image
              src={easyJob}
              alt="Mission Image"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-4/6">
          <ul className="list-disc list-inside">
            {supportServices.map((point, index) => (
              <BulletPoint key={index} text={point} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
