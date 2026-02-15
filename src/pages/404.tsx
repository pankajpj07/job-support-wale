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
      <div className="bg-slate-50 min-h-[60vh] flex flex-col items-center justify-center px-5 py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-4">
          Page not found
        </h1>
        <p className="text-lg text-slate-600 text-center mb-8 max-w-md">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Back to home
        </Link>
      </div>
      <Footer />
    </>
  )
}
