import { whyChooseUsList } from '@/constants/constants'
import React from 'react'
import BulletPoint from './bulletpoints'

const WhyChooseUsSection = () => {
  return (
    <section className="py-12 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Choose <span className="text-green-800">India</span>
          <span className="text-red-900">Job</span>
          <span className="text-yellow-600">Support?</span>
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
