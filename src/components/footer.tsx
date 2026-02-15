import Image from 'next/image'
import Link from 'next/link'
import { Phone, Email, Facebook, Twitter, Instagram } from '@mui/icons-material'
import { logoPath } from '@/constants/constants'

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
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="text-white" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="text-white" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="text-white" />
                </a>
              </div>
            </div>
            {/* Column 2 */}
            <div>
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>
              <div className="flex items-center mb-2">
                <Phone className="text-white mr-2" />
                <a href="tel:+918010592093" className="text-white">
                  +91-8010592093
                </a>
              </div>
              <div className="flex items-center">
                <Email className="text-white mr-2" />
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
