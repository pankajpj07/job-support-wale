import React from 'react'
import Layout from '@/components/Layout'
import ContactForm from '@/components/ContactForm'
import SEO from '@/components/SEO'

export default function JoinOurTeamPage() {
  return (
    <>
      <SEO
        title="Get in touch – Request job support"
        description="Request professional IT job support. Tell us your tech stack and we’ll match you with an expert within 24 hours. Free consultation."
        canonicalPath="/join-our-team"
      />
      <Layout metaTitle="Get in touch | IndiaJobSupport" pageHref="join-our-team">
        <section className="py-12 md:py-20 px-4 md:px-8 bg-slate-50 min-h-[70vh]">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
              Request job support
            </h1>
            <p className="text-slate-600 text-center mb-10">
              Fill in your details and we’ll get back within 24 hours with a matched expert.
            </p>
            <ContactForm />
          </div>
        </section>
      </Layout>
    </>
  )
}
