import { emptyContactFormData } from '@/constants/constants'
import writeToSheet from '@/lib/googleSheetsAPI'
import { FormData } from '@/types/types'
import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'

const COUNTRIES = ['USA', 'UK', 'Canada', 'Australia', 'UAE', 'India', 'Other']

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(emptyContactFormData)
  const [error, setError] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)
    try {
      await writeToSheet(formData, 'contact')
      try {
        await fetch('/api/send-confirmation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to: formData.email, type: 'contact', name: formData.name }),
        })
      } catch (_) { /* ignore */ }
      setFormData(emptyContactFormData)
      router.push('/thankyou')
    } catch (err) {
      setError('Something went wrong. Please try again or contact us on WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const inputClass = (name: string) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent min-h-[44px] ${
      touched[name] && !formData[name as keyof FormData] ? 'border-red-300' : 'border-slate-300'
    }`

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="p-4 rounded-lg bg-red-50 text-red-700 text-sm" role="alert">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block font-medium text-slate-700 mb-1">
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="John Doe"
          className={inputClass('name')}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium text-slate-700 mb-1">
          Work email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="john@company.com"
          className={inputClass('email')}
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block font-medium text-slate-700 mb-1">
          Phone (with country code) <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="+1 (555) 123-4567"
          className={inputClass('phone')}
          required
        />
      </div>
      <div>
        <label htmlFor="country" className="block font-medium text-slate-700 mb-1">
          Country <span className="text-red-500">*</span>
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass('country')}
          required
        >
          <option value="">Select country</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="query" className="block font-medium text-slate-700 mb-1">
          Tech stack / project description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="query"
          name="query"
          value={formData.query || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g. React, Node.js – need help with hooks and API design"
          className={`${inputClass('query')} min-h-[100px]`}
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
