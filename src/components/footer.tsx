import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react'
import { logoPath } from '@/constants/constants'

const socialClass =
  'flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:text-accent-300 hover:border-accent-400/40 hover:bg-white/10'
const linkClass = 'text-slate-300 transition-colors hover:text-accent-300'

const Footer = () => {
  return (
    <footer>
      <div className="relative overflow-hidden bg-ink-900 text-white pt-20 pb-16 px-6 md:px-10">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="glow-blob -top-24 -left-24 h-72 w-72 bg-primary-600/30" aria-hidden />
        <div className="glow-blob -bottom-24 right-0 h-72 w-72 bg-accent-500/20" aria-hidden />
        <div className="container relative mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div>
              <div className="flex items-center mb-4">
                <Image src={logoPath} alt="Logo" height={100} width={250} className="h-auto w-auto brightness-0 invert" />
              </div>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialClass}>
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={socialClass}>
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialClass}>
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Column 2 */}
            <div>
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>
              <div className="flex items-center mb-3">
                <span className="mr-3 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent-300">
                  <Phone className="w-4 h-4" />
                </span>
                <a href="tel:+918010592093" className={linkClass}>
                  +91-8010592093
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent-300">
                  <Mail className="w-4 h-4" />
                </span>
                <a href="mailto:pankaj.jobs247@gmail.com" className={linkClass}>
                  pankaj.jobs247@gmail.com
                </a>
              </div>
            </div>
            {/* Column 3 */}
            <div>
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li><Link href="/services" className={linkClass}>Services</Link></li>
                <li><Link href="/blog" className={linkClass}>Blog</Link></li>
                <li><Link href="/pricing" className={linkClass}>Pricing</Link></li>
                <li><Link href="/how-it-works" className={linkClass}>How It Works</Link></li>
                <li><Link href="/case-studies" className={linkClass}>Case Studies</Link></li>
                <li><Link href="/about-us" className={linkClass}>About Us</Link></li>
                <li><Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className={linkClass}>Terms and Conditions</Link></li>
                <li className="pt-3 mt-3 border-t border-white/10">
                  <span className="text-slate-400 text-sm">Serving:</span>
                  <span className="ml-2">
                    <Link href="/locations/usa" className={linkClass}>USA</Link>
                    {' · '}
                    <Link href="/locations/uk" className={linkClass}>UK</Link>
                    {' · '}
                    <Link href="/locations/canada" className={linkClass}>Canada</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ink-950 text-slate-400 text-sm text-center p-4">
        © IndiaJobSupport 2026. All rights reserved
      </div>
    </footer>
  )
}

export default Footer
