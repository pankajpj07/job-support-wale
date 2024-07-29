import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { heroImage } from '@/constants/constants'

// Define an array of button links and titles
const buttonData = [
  { href: "/india-job-support/frontend-support", title: "Frontend Support" },
  { href: "/india-job-support/backend-support", title: "Backend Support" },
  { href: "/india-job-support/full-stack-support", title: "FullStack Support" },
  { href: "/india-job-support/devops-support", title: "DevOps Support" },
  { href: "/india-job-support/dotnet-support", title: "Dotnet Support" },
  { href: "/job-support", title: "Other Job Support" }
];

const HeroBanner = () => {
  return (
    <div className="relative h-70vh md:h-screen -mt-11">
      <Image
        src={heroImage}
        alt="Hero Image"
        fill
        quality={100}
        className="object-cover opacity-80"
      />
      <div className="bg-black bg-opacity-70 absolute inset-0"></div> {/* Dark overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5 md:p-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-5 md:mb-10 text-center">
          GET JOB SUPPORT FROM INDIA BY EXPERIENCED PROFESSIONALS
        </h1>
        <div className="flex flex-wrap justify-center w-full max-w-screen-md px-5">
          {buttonData.map((button, index) => (
            <div key={index} className="w-1/2 sm:w-1/2 md:w-1/3 p-2">
              <Button
                href={button.href}
                title={button.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
