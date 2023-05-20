import React from 'react'
import Link from 'next/link'

const ThankYouPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-10">
      <h1 className="text-5xl font-bold mb-6">Thank You!</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 text-green-500 mb-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <p className="text-lg text-center mb-6">
        We have received your details successfully. Please check your email for
        more info.
      </p>
      <a href="https://wa.link/zwq1xp">
        <div className="text-blue-500 mb-6">
          Click here to instantly book a demo with us
        </div>
      </a>
      <Link href="/">
        <span className="bg-blue-500 text-white py-2 px-4 rounded mt-5">
          Back to Home
        </span>
      </Link>
    </div>
  )
}

export default ThankYouPage
