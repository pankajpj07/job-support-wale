import { MouseEventHandler, useState, useRef, useEffect } from 'react'
import { logoPath } from '@/constants/constants'
import Link from 'next/link'
import Image from 'next/image'
import BookDemoModal from './book_demo_modal'

const serviceLinks = [
  { name: 'All Services', href: '/services' },
  { name: 'React Job Support', href: '/services/react-job-support' },
  { name: 'Angular Job Support', href: '/services/angular-job-support' },
  { name: 'Node.js Job Support', href: '/services/nodejs-job-support' },
  { name: 'Python Job Support', href: '/services/python-job-support' },
  { name: 'Java Job Support', href: '/services/java-job-support' },
  { name: 'Frontend Support', href: '/india-job-support/frontend-support' },
  { name: 'Backend Support', href: '/india-job-support/backend-support' },
  { name: 'Full Stack Support', href: '/india-job-support/full-stack-support' },
  { name: 'DevOps Support', href: '/india-job-support/devops-support' },
  { name: '.NET Support', href: '/india-job-support/dotnet-support' },
  { name: 'All Technologies', href: '/job-support' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleModal: MouseEventHandler<HTMLButtonElement> = () => setIsModalOpen(!isModalOpen)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-white py-4 md:py-5 px-4 md:px-12 shadow-sm sticky top-0 w-full z-20 border-b border-slate-200">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex-shrink-0">
          <Image src={logoPath} alt="IndiaJobSupport" height={80} width={200} className="h-10 w-auto md:h-12" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link href="/" className="px-3 py-2 text-slate-700 font-medium hover:text-slate-900 rounded-lg">
            Home
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 px-3 py-2 text-slate-700 font-medium hover:text-slate-900 rounded-lg"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 py-2 bg-white rounded-lg shadow-lg border border-slate-200">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    onClick={() => setServicesOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/how-it-works" className="px-3 py-2 text-slate-700 font-medium hover:text-slate-900 rounded-lg">
            How It Works
          </Link>
          <Link href="/pricing" className="px-3 py-2 text-slate-700 font-medium hover:text-slate-900 rounded-lg">
            Pricing
          </Link>
          <Link href="/about-us" className="px-3 py-2 text-slate-700 font-medium hover:text-slate-900 rounded-lg">
            About
          </Link>
          <Link href="/case-studies" className="px-3 py-2 text-slate-700 font-medium hover:text-slate-900 rounded-lg">
            Case Studies
          </Link>
          <Link href="/join-our-team" className="px-3 py-2 text-slate-700 font-medium hover:text-slate-900 rounded-lg">
            Contact
          </Link>
          <button
            type="button"
            onClick={toggleModal}
            className="ml-2 px-5 py-2.5 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 font-medium transition-colors"
          >
            Book a Demo
          </button>
        </nav>

        {/* Mobile: hamburger + CTA */}
        <div className="flex md:hidden items-center gap-2">
          <a href="tel:+918010592093" className="p-2 text-slate-600" aria-label="Call us">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
          </a>
          <button
            type="button"
            className="p-2 text-slate-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-200 ${isMenuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-4 py-4 border-t border-slate-100 space-y-1">
          <Link href="/" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>Home</Link>
          <div>
            <button
              type="button"
              onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
              className="flex items-center justify-between w-full py-2.5 text-slate-700 font-medium"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {servicesMobileOpen && (
              <div className="pl-3 space-y-1">
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block py-2 text-sm text-slate-600" onClick={toggleMenu}>{link.name}</Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/how-it-works" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>How It Works</Link>
          <Link href="/pricing" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>Pricing</Link>
          <Link href="/about-us" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>About</Link>
          <Link href="/case-studies" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>Case Studies</Link>
          <Link href="/join-our-team" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>Contact</Link>
          <button
            type="button"
            onClick={toggleModal}
            className="w-full mt-2 py-3 text-white bg-indigo-600 rounded-lg font-medium"
          >
            Book a Demo
          </button>
        </nav>
      </div>

      {isModalOpen && <BookDemoModal isOpen={isModalOpen} toggleModal={toggleModal} />}
    </header>
  )
}

export default Header
