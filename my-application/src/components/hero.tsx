import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { heroImage } from '@/constants/constants'

const HeroBanner = () => {
  return (
    <div className="relative h-screen -mt-11">
      <Image
        src={heroImage}
        alt="Hero Image"
        fill
        quality={100}
        className="object-cover opacity-80"
      />
      <div className="bg-black bg-opacity-70 md:bg-opacity-60 absolute inset-0"></div>{' '}
      {/* Dark overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5 md:p-0">
        <h1 className="text-4xl font-bold mb-10">
          GET JOB SUPPORT FROM INDIA BY EXPERIENCED PROFESSIONALS
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          <Button href="/frontend-support" title="Frontend Job Support" />
          <Button href="/backend-support" title="Backend Job Support" />
          <Button href="/full-stack-support" title="Full Stack Job Support" />
          <Button href="/devops-support" title="DevOps Job Support" />
          <Button href="/operation-support" title="Operation Job Support" />
          <Button href="/task-based-support" title="Task Based Support" />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
