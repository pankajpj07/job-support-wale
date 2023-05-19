import Link from 'next/link'
import Footer from './footer'
import Head from 'next/head'
import Header from './header'
import { LayoutProps } from '@/types/types'
import WhatsAppSticky from './whatsapp_sticky'

const Layout = ({
  metaTitle = '',
  pageHref = '',
  children,
}: LayoutProps) => {
  console.log('metaTitle', pageHref)
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <Link
          rel="canonical"
          href={`https://www.indiajobsupport.com/${pageHref}`}
          key="canonical"
        />
      </Head>
      <Header />
      {children}
      <WhatsAppSticky />
      <Footer />
    </>
  )
}

export default Layout
