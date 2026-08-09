import React from 'react'
import MetricsCard from './metrics_card'
import { JobSupportSectionProps } from '@/types/types'
import { Code2 } from 'lucide-react'
import JoinOurTeam from './join_our_team'
import { metricsData } from '@/constants/constants'
import WhyChooseUsSection from './why_choose_us'
import FAQ from './faq'

const JobSupportSection = ({
  skills,
  skillsText,
  skillsServiceText,
}: JobSupportSectionProps) => {
  return (
    <div>
      <div className="relative overflow-hidden bg-ink-900 py-12 px-4 text-white">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="glow-blob left-10 top-0 h-56 w-56 bg-primary-600/30" aria-hidden />
        <div className="glow-blob right-10 bottom-0 h-56 w-56 bg-accent-500/20" aria-hidden />
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {`Online ${skills ? skills + ' ' : ''}Job Support From India`}
            </h2>
            <p className="text-sm md:text-lg text-slate-300">
              {skillsText ??
                'We provide job support services from India and IT job support from India for Indian IT professionals in the USA and worldwide. Our team at IndiaJobSupport delivers job support, training, and consulting for 50+ IT courses—including Java job support from India, DevOps, and data science—so you can solve complex project requirements in real time.'}
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="relative flex h-48 w-48 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/40 to-accent-500/40 blur-2xl animate-pulse-glow" aria-hidden />
              <div className="relative flex h-36 w-36 items-center justify-center rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                <Code2 className="h-16 w-16 text-accent-400" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Light Gray Background Section */}
      <div className="bg-slate-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{`${
            skills ? skills + ' ' : ''
          }Job Support Services`}</h2>
          <p className="text-sm md:text-lg text-slate-700">
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
          <p className="text-sm md:text-lg text-slate-700">
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
      <div className="bg-slate-50 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricsData.map((data, index) => (
            <MetricsCard
              key={index}
              bgColor={data.bgColor}
              iconColor={data.iconColor}
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
