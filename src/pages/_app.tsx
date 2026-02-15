import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Script from 'next/script'
import { AppProps } from 'next/app'
import * as gtag from '../lib/gtag'

import {
  favicon,
  homePageMetaDescription,
  homePageMetaKeywords,
  homePageMetaTitle,
} from '../constants/constants'
import { Analytics } from '@vercel/analytics/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta
          name="google-site-verification"
          content="gtnv05yQdxw8nDZ2GPZytDTzmTxGnO29cR5BZ82AwvQ"
        />
        <meta name="description" content={homePageMetaDescription} />
        <meta name="keywords" content={homePageMetaKeywords} />
        <title>{homePageMetaTitle}</title>
        <link
          rel="manifest"
          href="/manifest.json"
          crossOrigin="use-credentials"
        />
        <link href={favicon} rel="icon" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#317EFB" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;`,
          }}
        />
      </Head>
      <Script
        id="gtag-js"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        onLoad={() => {
          const w = window as unknown as { gtag?: (...a: unknown[]) => void }
          if (typeof w.gtag === 'function') {
            w.gtag('js', new Date())
            w.gtag('config', gtag.GA_TRACKING_ID, { page_path: window.location.pathname })
          }
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default App
