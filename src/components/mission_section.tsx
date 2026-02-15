import Image from 'next/image'
import { mission, missionPoints } from '@/constants/constants'
import BulletPoint from './bulletpoints'

const MissionSection = () => {
  return (
    <section className="py-12 px-5 bg-gray-100 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/6 flex justify-center mb-8 md:mb-0 md:mr-8">
          <div className="w-64 h-64 md:w-80 md:h-80">
            <Image
              src={mission}
              alt="Mission Image"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-4/6">
          {/* <h2 className="text-3xl font-bold mb-4"><span className="text-green-800">Our </span><span className="text-yellow-600">Mission</span></h2> */}
          <ul className="list-disc list-inside">
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
