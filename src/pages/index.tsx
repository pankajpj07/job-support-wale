import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import HeroBanner from '@/components/hero'
import TrustBadges from '@/components/TrustBadges'
import MissionSection from '@/components/mission_section'
import { metricsData, homePageMetaKeywords, faqData } from '@/constants/constants'
import SEO from '@/components/SEO'
import { OrganizationSchema, FAQSchema } from '@/components/StructuredData'
import MetricsCard from '@/components/metrics_card'
import WhatsAppSticky from '@/components/whatsapp_sticky'

const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: true })
const ServiceCardsGrid = dynamic(() => import('@/components/ServiceCardsGrid'), { ssr: true })
const ServicesSection = dynamic(() => import('@/components/services_section'), { ssr: true })
const WhyChooseUsSection = dynamic(() => import('@/components/why_choose_us'), { ssr: true })
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true })
const FAQ = dynamic(() => import('@/components/faq'), { ssr: true })
const PricingCTA = dynamic(() => import('@/components/PricingCTA'), { ssr: true })

export default function Home() {
  return (
    <>
      <SEO
        title="Job Support from India | IT Job Support for US Developers – 50+ Technologies"
        description="Get job support and job support from India. Real-time help from top IT experts for React, Angular, Node.js, Python & 50+ technologies. Trusted by developers in USA, UK, Canada."
        keywords={homePageMetaKeywords}
        canonicalPath="/"
      />
      <Head>
        <OrganizationSchema />
        <FAQSchema faqs={faqData} />
      </Head>
      <Header />
      <main id="main-content">
        <HeroBanner />
        <TrustBadges />
        <MissionSection />
        <WhyChooseUsSection />
        <div className="bg-slate-100 py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
              Why developers choose us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
        </div>
        <HowItWorks />
        <ServiceCardsGrid />
        <ServicesSection />
        <Testimonials />
        <FAQ />
        <PricingCTA />
        {/* <ContactCTA /> */}
        <WhatsAppSticky />
        <Footer />
      </main>
    </>
  )
}
