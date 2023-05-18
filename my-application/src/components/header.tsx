import { MouseEventHandler, useState } from 'react'
import { logoPath } from '@/constants/constants'
import Link from 'next/link'
import Image from 'next/image'
import { NavLink, NavLinkMobile } from './NavLinks'
import BookDemoModal from './book_demo_modal'

const Header = ({ isJoinOurTeam = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleModal: MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <header className="bg-white py-6 px-6 md:px-20 shadow sticky top-0 w-full z-1">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <span>
              <Image src={logoPath} alt="Logo" height={100} width={250} />
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className={`flex items-center space-x-6  md:block`}>
            <NavLink href="/" text="Home" />
            <NavLink href="/job-support" text="Job Support" />
            {isJoinOurTeam && (
              <NavLink href="#join-our-team" text="Join Our Team" />
            )}
            <button onClick={toggleModal}>
              <span className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800">
                Book a Demo
              </span>
            </button>
          </div>
        </div>
        <div className="sm:hidden">
          <button
            className="text-black hover:text-gray-500 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Collapsible Menu */}
      <div className={`mt-4 sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <NavLinkMobile href="/" text="Home" />
        <NavLinkMobile href="/job-support" text="Job Support" />
        {isJoinOurTeam && (
          <NavLinkMobile href="#join-our-team" text="Join Our Team" />
        )}
        <button onClick={toggleModal}>
          <span className="block py-2 px-4 mt-2 text-white bg-black rounded-md hover:bg-gray-800">
            Book a Demo
          </span>
        </button>
      </div>
      {isModalOpen && (
        <BookDemoModal isOpen={isModalOpen} toggleModal={toggleModal} />
      )}
    </header>
  )
}

export default Header
