import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | IndiaJobSupport</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />
      <div className="relative overflow-hidden bg-ink-900 min-h-[60vh] flex flex-col items-center justify-center px-5 py-20">
        <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
        <div className="glow-blob left-1/3 top-10 h-64 w-64 bg-primary-600/40 animate-float" aria-hidden />
        <div className="glow-blob right-1/3 bottom-10 h-72 w-72 bg-accent-500/30 animate-float-slow" aria-hidden />
        <div className="relative z-10 flex flex-col items-center">
          <span className="mb-4 font-mono text-6xl md:text-7xl font-bold text-gradient">404</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
            Page not found
          </h1>
          <p className="text-lg text-slate-300 text-center mb-8 max-w-md">
            The page you’re looking for doesn’t exist or was moved.
          </p>
          <Link href="/" className="glow-cta !px-8 !py-4">
            Back to home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
