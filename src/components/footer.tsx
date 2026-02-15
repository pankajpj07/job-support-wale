import Image from 'next/image'
import Link from 'next/link'
import { logoPath } from '@/constants/constants'

const iconClass = 'w-5 h-5 text-white'

const PhoneIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
)
const EmailIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)
const FacebookIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)
const TwitterIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const InstagramIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white pt-20 pb-16 px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div>
              <div className="flex items-center mb-4">
                <Image src={logoPath} alt="Logo" height={100} width={250} />
              </div>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <TwitterIcon />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>
            {/* Column 2 */}
            <div>
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>
              <div className="flex items-center mb-2">
                <span className="mr-2 flex-shrink-0"><PhoneIcon /></span>
                <a href="tel:+918010592093" className="text-white">
                  +91-8010592093
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2 flex-shrink-0"><EmailIcon /></span>
                <a
                  href="mailto:pankaj.jobs247@gmail.com"
                  className="text-white"
                >
                  pankaj.jobs247@gmail.com
                </a>
              </div>
            </div>
            {/* Column 3 */}
            <div>
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/services">
                    <span className="text-white hover:text-gray-500">
                      Services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <span className="text-white hover:text-gray-500">
                      Blog
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <span className="text-white hover:text-gray-500">
                      Pricing
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works">
                    <span className="text-white hover:text-gray-500">
                      How It Works
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies">
                    <span className="text-white hover:text-gray-500">
                      Case Studies
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us">
                    <span className="text-white hover:text-gray-500">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <span className="text-white hover:text-gray-500">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">
                    <span className="text-white hover:text-gray-500">
                      Terms and Conditions
                    </span>
                  </Link>
                </li>
                <li className="pt-2 mt-2 border-t border-gray-700">
                  <span className="text-gray-400 text-sm">Serving:</span>
                  <span className="ml-2">
                    <Link href="/locations/usa" className="text-white hover:text-gray-500">USA</Link>
                    {' · '}
                    <Link href="/locations/uk" className="text-white hover:text-gray-500">UK</Link>
                    {' · '}
                    <Link href="/locations/canada" className="text-white hover:text-gray-500">Canada</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-sm text-center p-3">
        © IndiaJobSupport 2026. All rights reserved
      </div>
    </footer>
  )
}

export default Footer
