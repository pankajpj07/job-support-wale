import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import {
  homePageMetaDescription,
  homePageMetaKeywords,
  homePageMetaTitle,
} from '@/constants/constants'
import Layout from '@/pages/Layout'
import MissionSection from '@/components/mission_section'
import FAQ from '@/components/faq'

export default function About() {
  return (
    <Layout
      metaTitle={`About us - ${homePageMetaTitle}`}
      metaDescription={homePageMetaDescription}
      metaKeywords={homePageMetaKeywords}
      pageHref="about-us"
    >
      <div className="bg-gray-100 py-12 px-4">
        <MissionSection />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            IndiaJobSupport is a leading provider of online job support services
            from India, staffed with certified professionals. We specialize in
            offering expert assistance for a wide range of technologies,
            including React, Angular, Java, .NET, Python, and more. Our mission
            is to empower individuals and organizations by providing reliable
            job support and proxy interview support services.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            At IndiaJobSupport, we understand the challenges faced by
            professionals in the IT industry. Whether it's a complex coding
            issue, troubleshooting a technical problem, or preparing for an
            important job interview, our team of experienced professionals is
            here to help. We offer flexible support options tailored to your
            specific needs, ensuring that you receive the guidance and
            assistance required to succeed.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our services are designed to bridge the gap between theoretical
            knowledge and real-world application. We provide practical
            solutions, best practices, and industry insights to help you excel
            in your career. With our job support services, you can gain hands-on
            experience, enhance your skills, and overcome any challenges you may
            face in your projects.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Whether you're an individual looking to enhance your technical
            skills or a company in need of expert guidance, IndiaJobSupport is
            your trusted partner. Our dedicated professionals are committed to
            delivering high-quality support and ensuring your success. Join us
            today and take your career to new heights.
          </p>
        </div>
      </div>
      <FAQ />
    </Layout>
  )
}
