import React from 'react'
import Link from 'next/link'

const nextSteps = [
  'Check your email for confirmation',
  "We'll review your requirements",
  'Expect a call or message within 24 hours',
]

const ThankYouPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6" aria-hidden>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Thank you!</h1>
        <p className="text-slate-600 mb-8">
          We&apos;ve received your request. Our team will contact you within 24 hours.
        </p>
        <ul className="text-left bg-slate-50 rounded-xl p-6 mb-8 space-y-3">
          <li className="font-medium text-slate-900">What happens next:</li>
          {nextSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-700">
              <span className="text-emerald-500 mt-0.5">✓</span>
              {step}
            </li>
          ))}
        </ul>
        <a
          href="https://wa.link/zwq1xp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-emerald-600 font-medium hover:underline mb-6"
        >
          Chat with us on WhatsApp for instant response →
        </a>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default ThankYouPage
