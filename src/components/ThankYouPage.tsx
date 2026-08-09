import React from 'react'
import Link from 'next/link'
import { CheckCircle2, Check } from 'lucide-react'

const nextSteps = [
  'Check your email for confirmation',
  "We'll review your requirements",
  'Expect a call or message within 24 hours',
]

const ThankYouPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg mb-6" aria-hidden>
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Thank you!</h1>
        <p className="text-slate-600 mb-8">
          We&apos;ve received your request. Our team will contact you within 24 hours.
        </p>
        <ul className="text-left glass-card-light p-6 mb-8 space-y-3">
          <li className="font-medium text-slate-900">What happens next:</li>
          {nextSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-700">
              <span className="mt-0.5 text-accent-500"><Check className="h-5 w-5" aria-hidden /></span>
              {step}
            </li>
          ))}
        </ul>
        <a
          href="https://wa.link/ddu8hq"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-green-600 font-medium hover:underline mb-6"
        >
          Chat with us on WhatsApp for instant response →
        </a>
        <div>
          <Link href="/" className="glow-cta">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage
