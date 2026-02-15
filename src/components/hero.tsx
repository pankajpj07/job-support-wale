import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { heroImage } from '@/constants/constants'

const trustItems = [
  '1,000+ developers helped worldwide',
  '50+ technologies supported',
  '4+ years of experience',
  '4.8/5 average rating',
]

const HeroBanner = () => {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-black bg-center"
      aria-label="Hero"
    >
      {/* <Image
        src={heroImage}
        alt=""
        fill
        priority
        quality={90}
        className="object-cover"
        sizes="100vw"
      /> */}
      <div className="absolute inset-0 bg-slate-900/90" aria-hidden />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center text-white py-16">
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6), 0 0 24px rgba(0,0,0,0.4)' }}
        >
          Professional job support from India&apos;s top IT experts
        </h1>
        <p
          className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6), 0 0 24px rgba(0,0,0,0.4)' }}
        >
          Real-time technical assistance for 50+ technologies. Available
          Monday–Friday, 2–4 hours daily. Trusted by developers across the
          USA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link
            href="https://wa.link/zwq1xp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors shadow-lg min-w-[200px] min-h-[48px]"
          >
            Book free consultation
          </Link>
          <Link
            href="#technologies"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/15 text-white font-semibold rounded-lg border-2 border-white/50 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors min-w-[200px] min-h-[48px]"
          >
            View technologies
          </Link>
        </div>
        {/* <ul
          className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base text-white"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
        >
          {trustItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold" aria-hidden>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  )
}

export default HeroBanner
