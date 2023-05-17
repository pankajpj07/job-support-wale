import React, { FormEvent, useState } from 'react'

const GetInTouch = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [phone, setPhone] = useState('')
  const [query, setQuery] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    // You can access the form field values using the state variables (name, email, country, phone, query)
  }

  return (
    <section id="contact-us" className="pb-12 px-5 bg-gray-100 pt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <form onSubmit={(e) => handleSubmit(e)} className="max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-1">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                placeholder="johndoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
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
                value={country}
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
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
                value={phone}
                placeholder="+XX-XXXXXXXXXX"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="query" className="block font-semibold mb-2">
                Enter Your Message
              </label>
              <textarea
                id="query"
                value={query}
                placeholder="Type your message here"
                onChange={(e) => setQuery(e.target.value)}
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

export default GetInTouch
