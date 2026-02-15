import Image from 'next/image'
import { easyJob, supportServices } from '@/constants/constants'
import BulletPoint from './bulletpoints'

const ServicesSection = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-slate-50 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-12">Support services</h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center text-left">
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
      </div>
    </section>
  )
}

export default ServicesSection
