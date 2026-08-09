import React, { useState } from 'react'
import { Mail } from 'lucide-react'

interface NewsletterSignupProps {
  title?: string
  description?: string
  className?: string
}

export default function NewsletterSignup({
  title = 'Get job support tips in your inbox',
  description = 'Practical advice on choosing providers, tech stacks, and getting the most from job support. No spam.',
  className = '',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus('success')
        setMessage(data.message || 'Thanks! Check your inbox to confirm.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section
      className={`glass-card-light p-6 md:p-8 ${className}`}
      aria-labelledby="newsletter-heading"
    >
      <h2 id="newsletter-heading" className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-2">
        <Mail className="h-5 w-5 text-primary-600" aria-hidden />
        {title}
      </h2>
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      {status === 'success' ? (
        <p className="text-green-700 text-sm font-medium">{message}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            disabled={status === 'loading'}
            className="flex-1 min-w-0 px-4 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="glow-cta !px-6 !py-2.5 disabled:opacity-70"
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && message && (
        <p className="mt-2 text-red-600 text-sm">{message}</p>
      )}
    </section>
  )
}
