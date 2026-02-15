import { whyChooseUsList } from '@/constants/constants'
import React from 'react'
import BulletPoint from './bulletpoints'

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Why choose IndiaJobSupport?
        </h2>
        <ul className="">
          {whyChooseUsList.map((point, index) => (
            <BulletPoint key={index} text={point} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
