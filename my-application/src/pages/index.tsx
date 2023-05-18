import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import HeroBanner from '@/components/hero'
import MissionSection from '@/components/mission_section'
import ServicesSection from '@/components/services_section'
import WhatsAppSticky from '@/components/whatsapp_sticky'
import JoinOurTeam from '@/components/join_our_team'

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.indiajobsupport.com"
          key="canonical"
        />
      </Head>
      <div>
        <Header isJoinOurTeam />
        <HeroBanner />
        <MissionSection />
        <ServicesSection />
        <JoinOurTeam />
        <WhatsAppSticky />
        <Footer />
      </div>
    </>
  )
}
