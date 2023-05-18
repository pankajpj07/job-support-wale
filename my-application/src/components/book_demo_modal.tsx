import { emptyDemoFormData } from '@/constants/constants'
import writeToSheet from '@/lib/googleSheetsAPI'
import { FormData, ModalProps } from '@/types/types'
import { useState, ChangeEvent, FormEvent } from 'react'

const BookDemoModal = ({ isOpen, toggleModal }: ModalProps) => {
  const [formData, setFormData] = useState<FormData>(emptyDemoFormData)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Perform form submission logic here
    writeToSheet(formData, 'demo')
    // Reset form fields
    setFormData(emptyDemoFormData)
    // Close the modal
    toggleModal()
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Book a Demo with Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 font-bold" htmlFor="phone">
                    Mobile Number
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-bold" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="technology">
                  Technology
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  id="technology"
                  name="technology"
                  value={formData.technology}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Technology</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="fullstack">Full Stack</option>
                  <option value="devops">DevOps</option>
                  <option value="dotnet">Dotnet</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {formData.technology === 'other' && (
                <div className="mb-4">
                  <label
                    className="block mb-2 font-bold"
                    htmlFor="otherTechnology"
                  >
                    Other Technology
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="text"
                    id="otherTechnology"
                    name="otherTechnology"
                    value={formData.otherTechnology}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 font-bold" htmlFor="country">
                    Country
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 font-bold"
                    htmlFor="preferredDate"
                  >
                    Preferred Demo Date
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 mr-2"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="px-4 py-2 text-gray-500 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={(e) => toggleModal()}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookDemoModal
