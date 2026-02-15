import { emptyDemoFormData } from '@/constants/constants'
import writeToSheet from '@/lib/googleSheetsAPI'
import { FormData, ModalProps } from '@/types/types'
import { useState, useRef, useEffect, useCallback, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/router'

const COUNTRIES = ['USA', 'UK', 'Canada', 'Australia', 'UAE', 'India', 'Other']
const URGENCY_OPTIONS = ['Immediately', 'Within 1 week', 'Within 1 month', 'Just exploring']

const BookDemoModal = ({ isOpen, toggleModal }: ModalProps) => {
  const [formData, setFormData] = useState<FormData>(emptyDemoFormData)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const handleClose = useCallback(() => {
    if (isSubmitting) return
    toggleModal({} as any)
  }, [toggleModal, isSubmitting])

  useEffect(() => {
    if (!isOpen) return
    closeButtonRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleClose])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)
    try {
      await writeToSheet(formData, 'demo')
      try {
        await fetch('/api/send-confirmation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to: formData.email, type: 'demo', name: formData.name }),
        })
      } catch (_) { /* ignore */ }
      setFormData(emptyDemoFormData)
      handleClose()
      router.push('/thankyou')
    } catch (err) {
      setError('Something went wrong. Please try again or contact us on WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  const inputClass =
    'w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[44px] text-slate-900'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-demo-title"
      aria-describedby="book-demo-desc"
    >
      <div
        className="absolute inset-0 bg-slate-900/70"
        aria-hidden="true"
        onClick={handleClose}
      />
      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-lg max-h-[90vh] flex flex-col bg-white rounded-xl shadow-2xl"
      >
        <div className="flex shrink-0 justify-between items-center gap-4 p-4 md:p-6 border-b border-slate-200">
          <h2 id="book-demo-title" className="text-xl font-bold text-slate-900">
            Book a free consultation
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            className="shrink-0 p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-4 md:p-6">
          <p id="book-demo-desc" className="sr-only">
            Fill in your details to request a free consultation. We will get back to you within 24 hours.
          </p>
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="demo-name" className="block font-medium text-slate-700 mb-1">
                Full name <span className="text-red-600" aria-hidden>*</span>
              </label>
              <input
                type="text"
                id="demo-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className={inputClass}
                required
                autoComplete="name"
                aria-required="true"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="demo-email" className="block font-medium text-slate-700 mb-1">
                  Work email <span className="text-red-600" aria-hidden>*</span>
                </label>
                <input
                  type="email"
                  id="demo-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  className={inputClass}
                  required
                  autoComplete="email"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="demo-phone" className="block font-medium text-slate-700 mb-1">
                  Phone with country code <span className="text-red-600" aria-hidden>*</span>
                </label>
                <input
                  type="tel"
                  id="demo-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 555 123 4567"
                  className={inputClass}
                  required
                  autoComplete="tel"
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <label htmlFor="demo-country" className="block font-medium text-slate-700 mb-1">
                Country <span className="text-red-600" aria-hidden>*</span>
              </label>
              <select
                id="demo-country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={inputClass}
                required
                aria-required="true"
              >
                <option value="">Select country</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="demo-technology" className="block font-medium text-slate-700 mb-1">
                Primary technology <span className="text-red-600" aria-hidden>*</span>
              </label>
              <select
                id="demo-technology"
                name="technology"
                value={formData.technology}
                onChange={handleInputChange}
                className={inputClass}
                required
                aria-required="true"
              >
                <option value="">Select technology</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Node.js">Node.js</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value=".NET">.NET</option>
                <option value="other">Other</option>
              </select>
            </div>
            {formData.technology === 'other' && (
              <div>
                <label htmlFor="demo-otherTech" className="block font-medium text-slate-700 mb-1">
                  Other technology
                </label>
                <input
                  type="text"
                  id="demo-otherTech"
                  name="otherTechnology"
                  value={formData.otherTechnology || ''}
                  onChange={handleInputChange}
                  placeholder="e.g. Go, Rust"
                  className={inputClass}
                  autoComplete="off"
                />
              </div>
            )}
            <div>
              <label htmlFor="demo-description" className="block font-medium text-slate-700 mb-1">
                Brief project description <span className="text-red-600" aria-hidden>*</span>
              </label>
              <textarea
                id="demo-description"
                name="projectDescription"
                value={formData.projectDescription || ''}
                onChange={handleInputChange}
                placeholder="Tell us about your project and what kind of support you need."
                className={`${inputClass} min-h-[100px] resize-y`}
                rows={3}
                maxLength={500}
                required
                aria-required="true"
              />
              <span className="block mt-1 text-sm text-slate-500">{(formData.projectDescription || '').length}/500</span>
            </div>
            <fieldset>
              <legend id="demo-urgency-legend" className="block font-medium text-slate-700 mb-2">
                When do you need support? <span className="text-red-600" aria-hidden>*</span>
              </legend>
              <div className="space-y-2" role="radiogroup" aria-labelledby="demo-urgency-legend" aria-required="true">
                {URGENCY_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer py-1">
                    <input
                      type="radio"
                      name="urgency"
                      value={opt}
                      checked={formData.urgency === opt}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                      required
                    />
                    <span className="text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor="demo-date" className="block font-medium text-slate-700 mb-1">
                Preferred demo date
              </label>
              <input
                type="date"
                id="demo-date"
                name="preferredDate"
                value={formData.preferredDate || ''}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className={inputClass}
                aria-describedby="demo-date-hint"
              />
              <span id="demo-date-hint" className="sr-only">Optional. Format: day, month, year.</span>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
              >
                {isSubmitting ? 'Sending…' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="px-4 py-3 text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 disabled:opacity-60 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookDemoModal
