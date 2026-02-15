import React from 'react'
import type { ServicePageDataFull } from '@/types/servicePageTypes'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import ChallengesSection from './ChallengesSection'
import TechnologiesSection from './TechnologiesSection'
import HowItWorksSection from './HowItWorksSection'
import PricingSection from './PricingSection'
import CaseStudiesSection from './CaseStudiesSection'
import TestimonialsSection from './TestimonialsSection'
import FAQSection from './FAQSection'
import FinalCTASection from './FinalCTASection'
import RelatedServicesSection from './RelatedServicesSection'

interface ServicePageFullProps {
  data: ServicePageDataFull
}

export default function ServicePageFull({ data }: ServicePageFullProps) {
  return (
    <div className="bg-white">
      <HeroSection {...data.hero} />
      <IntroSection content={data.introduction} />
      <ChallengesSection challenges={data.challenges} />
      <TechnologiesSection technologies={data.technologies} />
      <HowItWorksSection steps={data.howItWorks} />
      <PricingSection plans={data.pricing} />
      <CaseStudiesSection caseStudies={data.caseStudies} />
      <TestimonialsSection testimonials={data.testimonials} />
      <FAQSection faq={data.faq} />
      <FinalCTASection data={data.finalCTA} />
      <RelatedServicesSection services={data.relatedServices} />
    </div>
  )
}
