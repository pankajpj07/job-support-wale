import React from 'react'
import { ShieldCheck, Star, Lock, Users } from 'lucide-react'

const badges = [
  { label: 'Trusted by 1,000+ developers', Icon: Users, color: 'bg-blue-50 text-blue-600' },
  { label: '4.8/5 average rating', Icon: Star, color: 'bg-amber-50 text-amber-500' },
  { label: 'Secure payment', Icon: Lock, color: 'bg-emerald-50 text-emerald-600' },
  { label: '100% confidential', Icon: ShieldCheck, color: 'bg-indigo-50 text-indigo-600' },
]

export default function TrustBadges() {
  return (
    <section className="py-8 md:py-10 px-4 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-slate-600 text-sm md:text-base">
          {badges.map((b, i) => (
            <span key={i} className="inline-flex items-center gap-2 font-medium">
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${b.color}`}>
                <b.Icon className="h-4 w-4" aria-hidden />
              </span>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
