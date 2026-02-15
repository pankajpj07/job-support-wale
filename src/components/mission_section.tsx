import Image from 'next/image'
import { mission, missionPoints } from '@/constants/constants'
import BulletPoint from './bulletpoints'

const MissionSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center max-w-6xl">
        <div className="md:w-2/6 flex justify-center mb-8 md:mb-0 md:mr-8">
          <div className="w-64 h-64 md:w-80 md:h-80">
            <Image
              src={mission}
              alt="Our mission - IT job support and training"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-4/6 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Our mission</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {missionPoints.map((point, index) => (
              <BulletPoint key={index} text={point} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
