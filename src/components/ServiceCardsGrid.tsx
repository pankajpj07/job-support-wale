import React from 'react'
import Link from 'next/link'
import { Layout, Server, Layers, Cloud, Hexagon, ArrowRight } from 'lucide-react'

const services = [
  {
    name: 'Frontend Support',
    href: '/india-job-support/frontend-support',
    Icon: Layout,
    color: 'text-sky-600',
    hover: 'group-hover:from-sky-500 group-hover:to-blue-600',
    tech: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript'],
  },
  {
    name: 'Backend Support',
    href: '/india-job-support/backend-support',
    Icon: Server,
    color: 'text-emerald-600',
    hover: 'group-hover:from-emerald-500 group-hover:to-teal-600',
    tech: ['Node.js', 'Python', 'Java', 'PHP', 'Ruby on Rails'],
  },
  {
    name: 'Full Stack Support',
    href: '/india-job-support/full-stack-support',
    Icon: Layers,
    color: 'text-violet-600',
    hover: 'group-hover:from-violet-500 group-hover:to-purple-600',
    tech: ['React + Node', 'MERN', 'MEAN', 'Full stack'],
  },
  {
    name: 'DevOps Support',
    href: '/india-job-support/devops-support',
    Icon: Cloud,
    color: 'text-orange-500',
    hover: 'group-hover:from-orange-500 group-hover:to-amber-600',
    tech: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    name: '.NET Support',
    href: '/india-job-support/dotnet-support',
    Icon: Hexagon,
    color: 'text-indigo-600',
    hover: 'group-hover:from-indigo-500 group-hover:to-purple-600',
    tech: ['C#', 'ASP.NET', '.NET Core', 'Azure'],
  },
]

export default function ServiceCardsGrid() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-slate-50" id="technologies">
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
              className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-glow-sm"
            >
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 ${s.color} transition-colors ${s.hover} group-hover:text-white`}>
                <s.Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-primary-700">
                {s.name}
              </h3>
              <ul className="text-sm text-slate-600 space-y-1">
                {s.tech.map((t) => (
                  <li key={t} className="font-mono text-xs text-slate-500">{t}</li>
                ))}
              </ul>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
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
