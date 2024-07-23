import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import HeroBanner from '@/components/hero'
import MissionSection from '@/components/mission_section'
import ServicesSection from '@/components/services_section'
import WhatsAppSticky from '@/components/whatsapp_sticky'
import JoinOurTeam from '@/components/join_our_team'
import WhyChooseUsSection from '@/components/why_choose_us'
import MetricsCard from '@/components/metrics_card'
import { metricsData } from '@/constants/constants'
import FAQ from '@/components/faq'

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.indiajobsupport.in"
          key="canonical"
        />
      </Head>
      <div>
        <Header />
        <HeroBanner />
        <MissionSection />
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
        <ServicesSection />
        <FAQ />
        <JoinOurTeam />
        <WhatsAppSticky />
        <Footer />
      </div>
    </>
  )
}
