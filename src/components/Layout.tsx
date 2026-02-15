import Footer from './footer'
import Head from 'next/head'
import Header from './header'
import { LayoutProps } from '@/types/types'
import WhatsAppSticky from './whatsapp_sticky'
import ErrorBoundary from './ErrorBoundary'
import {
  homePageMetaDescription,
  homePageMetaKeywords,
} from '@/constants/constants'

const Layout = ({ metaTitle = '', pageHref = '', children }: LayoutProps) => {
  return (
    <ErrorBoundary>
      <Head>
        <title>{metaTitle}</title>
        <link
          rel="canonical"
          href={`https://www.indiajobsupport.in/${pageHref}`}
          key="canonical"
        />
        <meta name="description" content={homePageMetaDescription} />
        <meta name="keywords" content={homePageMetaKeywords} />
      </Head>
      <Header />
      <main id="main-content">{children}</main>
      <WhatsAppSticky />
      <Footer />
    </ErrorBoundary>
  )
}

export default Layout
