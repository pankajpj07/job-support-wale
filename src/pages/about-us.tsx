import { aboutPageMeta } from '@/constants/constants'
import Layout from '@/components/Layout'
import MissionSection from '@/components/mission_section'
import FAQ from '@/components/faq'
import { consultantProfiles } from '@/constants/teamData'

export default function About() {
  return (
    <Layout
      metaTitle={aboutPageMeta.title}
      pageHref="about-us"
      metaDescription={aboutPageMeta.description}
      metaKeywords={aboutPageMeta.keywords}
    >
      <div className="bg-gray-100 py-12 px-4">
        <MissionSection />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            IndiaJobSupport is a leading provider of job support services from
            India and IT job support from India, staffed with certified
            professionals. We offer online job support from India for a wide
            range of technologies—including React, Angular, Java, .NET, Python,
            DevOps, and data science—and are trusted by Indian IT professionals
            in the USA, UK, Canada, and beyond. Our mission is to empower
            individuals and organizations with reliable job support services.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            At IndiaJobSupport, we understand the challenges faced by
            professionals in the IT industry. Whether it&apos;s a complex coding
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
            Whether you&apos;re an individual looking to enhance your technical
            skills or a company in need of expert guidance, IndiaJobSupport is
            your trusted partner. Our dedicated professionals are committed to
            delivering high-quality support and ensuring your success. Join us
            today and take your career to new heights.
          </p>
        </div>

        {/* Consultant profiles */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Our consultants
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl">
            You&apos;ll be matched with a consultant who has deep experience in
            your technology stack. Here&apos;s a snapshot of the expertise on our
            team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {consultantProfiles.map((profile, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-lg mb-4">
                  {profile.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {profile.name}
                </h3>
                <p className="text-sm text-primary-600 font-medium mb-2">
                  {profile.title}
                </p>
                <p className="text-xs text-slate-500 mb-3">
                  {profile.experience} experience
                </p>
                <p className="text-slate-600 text-sm mb-3">{profile.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {profile.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQ />
    </Layout>
  )
}
