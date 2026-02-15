import { emptyContactFormData } from '@/constants/constants'
import writeToSheet from '@/lib/googleSheetsAPI'
import { FormData } from '@/types/types'
import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'

const JoinOurTeam = () => {
  const [formData, setFormData] = useState<FormData>(emptyContactFormData)
  const [error, setError] = useState<string>('')
  const router = useRouter()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    try {
      // Perform form submission logic here
      await writeToSheet(formData, 'contact')
      // Reset form fields
      setFormData(emptyContactFormData)
      // push to thankyou page
      router.push('/thankyou')
    } catch (error) {
      console.log('error occurred in bjoin our team form', error)
      setError('An error occurred. Please try again.')
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <section id="join-our-team" className="pb-16 px-4 md:px-8 bg-slate-100 pt-24">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
          Get in touch
        </h2>
        <p className="text-slate-600 text-center mb-8">
          Tell us your tech stack and we’ll match you with an expert within 24 hours.
        </p>
        <form onSubmit={(e) => handleSubmit(e)} className="max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-1">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="johndoe@gmail.com"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="country" className="block font-semibold mb-2">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                placeholder="Country"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder="+XX-XXXXXXXXXX"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="query" className="block font-semibold mb-2">
                Type Your Skills Below
              </label>
              <textarea
                id="query"
                name="query"
                value={formData.query}
                placeholder="I am an expert in JavaScript, ReactJs, Java"
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 text-white font-semibold bg-indigo-700 hover:bg-indigo-600 rounded-md transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default JoinOurTeam
