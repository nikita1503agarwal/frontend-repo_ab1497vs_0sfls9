import React from 'react'

const experiences = [
  {
    role: 'President',
    org: 'MAPS (Management & Analytics Professional Society)',
    time: '2025 – Present',
    location: 'New York, NY',
    bullets: [
      'Lead programming, partnerships, and student opportunities with a steady operating cadence.',
      'Host speakers and workshops that turn coursework into applied practice.',
      'Keep budgets clear and reporting simple.'
    ]
  },
  {
    role: 'Founder',
    org: 'ERRC — Economics, Research & Risk Collective',
    time: '2025 – Present',
    location: 'New York, NY',
    bullets: [
      'Build a small, focused space to practice equity notes and risk thinking.',
      'Standardize templates for research briefs and review cycles.'
    ]
  },
  {
    role: 'Risk & Analytics Work',
    org: 'Projects and case work',
    time: 'Ongoing',
    location: 'New York, NY',
    bullets: [
      'Liquidity risk monitoring MVP for a fintech partner.',
      'Academic projects across regression, forecasting, and dashboards.',
      'Case practice for valuation and market sizing.'
    ]
  },
  {
    role: 'Student Engagement & Events',
    org: 'NYU SPS',
    time: '2024 – Present',
    location: 'New York, NY',
    bullets: [
      'Design and run events with clear outcomes for employers and students.',
      'Connect teams to mentors and hiring partners.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-800/70" aria-hidden></div>
          <ol className="space-y-8">
            {experiences.map((e) => (
              <li key={e.role+e.org} className="relative pl-12">
                <span className="absolute left-2 top-2 h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border border-slate-900" />
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-white">{e.role}</h3>
                      <p className="text-slate-300">{e.org}</p>
                    </div>
                    <div className="text-xs text-right text-slate-400">
                      <div>{e.time}</div>
                      <div>{e.location}</div>
                    </div>
                  </div>
                  <ul className="mt-4 text-slate-300 text-sm space-y-2 list-disc pl-5">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
