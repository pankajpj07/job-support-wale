import React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const trustItems = [
  '1,000+ developers helped worldwide',
  '50+ technologies supported',
  '4+ years of experience',
  '4.8/5 average rating',
]

const HeroBanner = () => {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-ink-900"
      aria-label="Hero"
    >
      {/* Animated grid + glow background */}
      <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/60 to-ink-900" aria-hidden />
      <div className="glow-blob left-1/4 top-10 h-72 w-72 bg-primary-600/40 animate-float" aria-hidden />
      <div className="glow-blob right-1/4 bottom-10 h-80 w-80 bg-accent-500/30 animate-float-slow" aria-hidden />

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center text-white py-14 md:py-16">
        <span className="mb-5 md:mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] md:text-sm text-accent-300 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-glow" />
          Real-time IT job support
        </span>
        <h1 className="text-[2rem] leading-[1.15] md:text-5xl lg:text-6xl font-bold md:leading-tight mb-5 md:mb-6">
          Professional job support from India&apos;s top{' '}
          <span className="text-gradient">IT experts</span>
        </h1>
        <p className="text-base md:text-xl text-slate-300 mb-7 md:mb-8 max-w-2xl mx-auto">
          IT job support from India and online job support from India for 50+
          technologies. Real-time help Monday–Friday, 2–4 hours daily. Trusted by
          developers and Indian IT professionals in the USA, UK, and Canada.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 md:mb-10">
          <Link
            href="https://wa.link/ddu8hq"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-cta w-full sm:w-auto sm:min-w-[200px] min-h-[52px] !px-8 !py-4"
          >
            Book free consultation
          </Link>
          <Link
            href="#technologies"
            className="glow-cta-outline w-full sm:w-auto sm:min-w-[200px] min-h-[52px] !px-8 !py-4"
          >
            View technologies
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-base">
          {trustItems.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 md:gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 md:px-4 md:py-2 text-slate-200 backdrop-blur-md"
            >
              <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent-400 flex-shrink-0" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HeroBanner
