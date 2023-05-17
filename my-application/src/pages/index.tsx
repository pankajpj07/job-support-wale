import React from 'react'
import Download from '../components/download'
import Header from '../components/header'
import HowToDownload from '../components/howtodownload'
import Specs from '../components/specs'
import Footer from '../components/footer'
import Head from 'next/head'
import HeroBanner from '@/components/hero'

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
        <Header />
        <HeroBanner />
        <Footer />
      </div>
    </>
  )
}
