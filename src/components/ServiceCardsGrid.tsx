import React from 'react'
import Link from 'next/link'

const services = [
  {
    name: 'Frontend Support',
    href: '/india-job-support/frontend-support',
    tech: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript'],
  },
  {
    name: 'Backend Support',
    href: '/india-job-support/backend-support',
    tech: ['Node.js', 'Python', 'Java', 'PHP', 'Ruby on Rails'],
  },
  {
    name: 'Full Stack Support',
    href: '/india-job-support/full-stack-support',
    tech: ['React + Node', 'MERN', 'MEAN', 'Full stack'],
  },
  {
    name: 'DevOps Support',
    href: '/india-job-support/devops-support',
    tech: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    name: '.NET Support',
    href: '/india-job-support/dotnet-support',
    tech: ['C#', 'ASP.NET', '.NET Core', 'Azure'],
  },
]

export default function ServiceCardsGrid() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white" id="technologies">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Technologies we support
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          50+ technologies. Frontend, backend, DevOps, and more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block p-5 md:p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-primary-300 hover:bg-primary-50/50 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-primary-700">
                {s.name}
              </h3>
              <ul className="text-sm text-slate-600 space-y-1">
                {s.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <span className="inline-block mt-3 text-sm font-medium text-primary-600 group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
        <p className="text-center mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="text-primary-600 font-medium hover:underline"
          >
            Technology-specific support (React, Angular, Node.js, more) →
          </Link>
          <Link
            href="/job-support"
            className="text-primary-600 font-medium hover:underline"
          >
            View all job support options →
          </Link>
        </p>
      </div>
    </section>
  )
}
