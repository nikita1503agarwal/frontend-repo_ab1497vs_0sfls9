import React from 'react'

const experiences = [
  {
    role: 'President',
    org: 'Management and Analytics Professional Society',
    summary: 'Lead a community focused on practical analytics, industry connections, and hands-on projects.'
  },
  {
    role: 'Founder',
    org: 'Employer Relations and Recruitment Committee',
    summary: 'Built a channel to connect students and employers; coordinated outreach and events.'
  },
  {
    role: 'Risk & Analytics Projects',
    org: 'Various',
    summary: 'Work spanning liquidity and operational risk, research, and decision support tooling.'
  },
  {
    role: 'Graduate Student',
    org: 'NYU SPS — Management and Analytics',
    summary: 'Coursework in analytics, forecasting, data strategy, and AI.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {experiences.map((e) => (
            <div key={e.role+e.org} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="font-semibold text-white">{e.role}</h3>
              <p className="text-slate-300">{e.org}</p>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{e.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
