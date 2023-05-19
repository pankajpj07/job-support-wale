import React from 'react'
import MetricsCard from './metrics_card'
import { JobSupportSectionProps } from '@/types/types'
import Image from 'next/image'
import JoinOurTeam from './join_our_team'
import { metricsData } from '@/constants/constants'
import WhyChooseUsSection from './why_choose_us'
import FAQ from './faq'

const JobSupportSection = ({
  imagePath,
  skills,
  skillsText,
  skillsServiceText,
}: JobSupportSectionProps) => {
  return (
    <div>
      <div className="bg-black py-8 px-4 text-white">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="w-2/3">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {`Online ${skills ? skills + ' ' : ''}Job Support From India`}
            </h2>
            <p className="text-xs md:text-lg">
              {skillsText ??
                'The Job support is to provide the ability to solve complex project requirements in Real-Time for beginners in IT. Our team at IndiaJobSupport provides job support, training, and consulting for more than 50+ IT courses.'}
            </p>
          </div>
          <div className="w-1/3">
            <Image src={imagePath} alt="Image Icon" height={300} width={300} />
          </div>
        </div>
      </div>

      {/* Light Gray Background Section */}
      <div className="bg-gray-200 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{`${
            skills ? skills + ' ' : ''
          }Job Support Services`}</h2>
          <p className="text-sm md:text-lg">
            {skillsServiceText}
            <br />
            The mission of our IT on-the-job support is to provide the ability
            to solve complex project requirements in Real-Time for beginners in
            IT. Our team at JobSupportGuru provides job support, training, and
            consulting for more than 50+ IT courses. Our company can help those
            who are struggling to survive on the job due to a lack of technical
            skills. We can also offer assistance to those who have been assigned
            a new project and are stressed about the work. To help you get the
            most successful outcome from your work and complete your
            deliverables, we present our most qualified consultants.
          </p>
          <br />
          <p className="text-sm md:text-lg">
            Our team will work from all different locations, including
            Hyderabad, Chennai, Bangalore, Mumbai, Delhi, USA, and more. We are
            providing services to different countries like USA, Canada, UK,
            Australia, and all other countries.
          </p>
        </div>
      </div>
      {/* Why choose section */}
      <WhyChooseUsSection />
      {/* Metric Cards Section */}
      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-6xl bg- mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {metricsData.map((data, index) => (
            <MetricsCard
              key={index}
              bgColor={data.bgColor}
              icon={data.icon}
              metrics={data.metrics}
              text={data.text}
            />
          ))}
        </div>
      </div>
      <FAQ />
      <JoinOurTeam />
    </div>
  )
}

export default JobSupportSection
