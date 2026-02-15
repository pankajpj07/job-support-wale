import React from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'

const stepsDetail = [
  {
    step: 1,
    title: 'Schedule consultation',
    description:
      'Book a free 15-minute call. We discuss your project, technologies, and what kind of support you need. No commitment.',
    extra:
      'You can share your screen or just talk through the requirements. We’ll confirm if we can support you and suggest a plan.',
  },
  {
    step: 2,
    title: 'Get matched with an expert',
    description:
      'Within 24 hours we assign a consultant who matches your tech stack and project. You’ll get a short profile and availability.',
    extra:
      'If you have a preference (e.g. timezone overlap, specific framework experience), we take that into account.',
  },
  {
    step: 3,
    title: 'Start getting support',
    description:
      'Daily 2–4 hour sessions, Monday–Friday. We use screen sharing, code reviews, and pair programming so you’re never stuck alone.',
    extra:
      'Communication is via your choice: Zoom, Google Meet, Teams, or similar. You can also use WhatsApp or email for quick questions.',
  },
  {
    step: 4,
    title: 'Complete your project successfully',
    description:
      'We track progress with you and can adjust hours or focus as deadlines change. Weekend support is available for urgent deadlines.',
    extra:
      'Many clients stay with us for multiple projects or move to a different technology and continue with a new consultant.',
  },
]

const howItWorksMeta = {
  title: 'How It Works | From First Call to Daily Job Support',
  description:
    'Four simple steps: schedule a free consultation, get matched with an expert within 24 hours, start daily support, and deliver your project on time.',
  keywords:
    'how job support works, job support process, book job support, IT support consultation',
}

export default function HowItWorksPage() {
  return (
    <>
      <SEO
        title={howItWorksMeta.title}
        description={howItWorksMeta.description}
        keywords={howItWorksMeta.keywords}
        canonicalPath="/how-it-works"
      />
      <Layout metaTitle={howItWorksMeta.title} pageHref="how-it-works">
        {/* Hero */}
        <section className="bg-slate-900 text-black py-8 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How it works
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              From first call to daily support in four simple steps. No
              long-term contract—just real help when you need it.
            </p>
          </div>
        </section>

        {/* Detailed steps */}
        <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto space-y-12">
            {stepsDetail.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center text-lg">
                  {item.step}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-slate-700 mb-2">{item.description}</p>
                  <p className="text-slate-600 text-sm">{item.extra}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Communication tools */}
        <section className="py-8 md:py-16 px-4 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              How we work with you
            </h2>
            <p className="text-slate-600 mb-8">
              We use the tools you already use: Zoom, Google Meet, Microsoft
              Teams, or any video call platform. For quick questions between
              sessions, WhatsApp, Slack, or email works. Your consultant will
              share their availability and preferred contact method.
            </p>
            <Link
              href="https://wa.link/zwq1xp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Book free consultation
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}
