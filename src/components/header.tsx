import { MouseEventHandler, useState, useRef, useEffect } from 'react'
import { logoPath } from '@/constants/constants'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'
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

const navLinkClass =
  'relative px-3 py-2 text-slate-700 font-medium rounded-lg transition-colors hover:text-primary-600 after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-primary-500 after:to-accent-400 after:transition-transform hover:after:scale-x-100'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 w-full z-30 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-slate-200 shadow-sm'
          : 'bg-white/60 backdrop-blur-md border-transparent'
      } py-4 md:py-5 px-4 md:px-12`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex-shrink-0">
          <Image src={logoPath} alt="IndiaJobSupport" height={80} width={200} className="h-10 w-auto md:h-12" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 px-3 py-2 text-slate-700 font-medium rounded-lg transition-colors hover:text-primary-600"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 py-2 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-200 ring-1 ring-black/5">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                    onClick={() => setServicesOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/how-it-works" className={navLinkClass}>
            How It Works
          </Link>
          <Link href="/pricing" className={navLinkClass}>
            Pricing
          </Link>
          <Link href="/about-us" className={navLinkClass}>
            About
          </Link>
          <Link href="/blog" className={navLinkClass}>
            Blog
          </Link>
          <Link href="/case-studies" className={navLinkClass}>
            Case Studies
          </Link>
          <Link href="/join-our-team" className={navLinkClass}>
            Contact
          </Link>
          <button type="button" onClick={toggleModal} className="ml-2 glow-cta !px-5 !py-2.5">
            Book a Demo
          </button>
        </nav>

        {/* Mobile: hamburger + CTA */}
        <div className="flex md:hidden items-center gap-2">
          <a href="tel:+918010592093" className="p-2 text-slate-600" aria-label="Call us">
            <Phone className="w-5 h-5" />
          </a>
          <button
            type="button"
            className="p-2 text-slate-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-4 py-4 border-t border-slate-100 space-y-1 overflow-y-auto max-h-[85vh]">
          <Link href="/" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>Home</Link>
          <div>
            <button
              type="button"
              onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
              className="flex items-center justify-between w-full py-2.5 text-slate-700 font-medium"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesMobileOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesMobileOpen && (
              <div className="pl-3 space-y-1">
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block py-2 text-sm text-slate-600 hover:text-primary-600" onClick={toggleMenu}>{link.name}</Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/how-it-works" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>How It Works</Link>
          <Link href="/pricing" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>Pricing</Link>
          <Link href="/about-us" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>About</Link>
          <Link href="/blog" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>Blog</Link>
          <Link href="/case-studies" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>Case Studies</Link>
          <Link href="/join-our-team" className="block py-2.5 text-slate-700 font-medium" onClick={toggleMenu}>Contact</Link>
          <button type="button" onClick={toggleModal} className="w-full mt-2 glow-cta">
            Book a Demo
          </button>
        </nav>
      </div>

      {isModalOpen && <BookDemoModal isOpen={isModalOpen} toggleModal={toggleModal} />}
    </header>
  )
}

export default Header
