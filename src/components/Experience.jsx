import React from 'react'

const experiences = [
  {
    role: 'President',
    org: 'NYU SPS Management & Systems Student Association (MSSA)',
    time: 'Oct 2025 – Present',
    location: 'New York, United States',
    bullets: [
      'Lead a graduate student organization with 200+ active members',
      'Organize guest speaker sessions, analytics workshops, and industry panels',
      'Own transparent reporting, budgeting, and resource allocation'
    ]
  },
  {
    role: 'Treasurer',
    org: 'NYU SPS Management & Systems Student Association (MSSA)',
    time: 'May 2025 – Oct 2025',
    location: 'New York, United States',
    bullets: [
      'Managed financial planning, budgeting, and expense tracking',
      'Coordinated academic and networking events to support the community'
    ]
  },
  {
    role: 'Equity Research Intern',
    org: 'Project Destined',
    time: 'Jul 2025 – Present',
    location: 'New York, United States',
    bullets: [
      'Built Excel-based investment models and IRR scenarios for potential acquisitions',
      'Produced investment memos and insights to refine portfolio strategy',
      'Conducted daily market research and summarized findings for senior analysts'
    ]
  },
  {
    role: 'Data Scientist Extern',
    org: 'Amazon (Externship)',
    time: 'Jun 2025 – Aug 2025',
    location: 'Washington, United States',
    bullets: [
      'Analyzed 500+ internal documents (~20+ GB) using NLP to surface attrition risks and productivity barriers',
      'Created 4 segmented employee cohorts and identified 8 role-specific issues informing 10 interventions',
      'Generated briefing notes and executive decks influencing workforce strategy; projected +15% efficiency and -12% attrition'
    ]
  },
  {
    role: 'Equity Research Extern',
    org: 'Externship',
    time: 'Feb 2025 – May 2025',
    location: 'United States',
    bullets: [
      'Performed deep company analysis (10-K, financials, market position, macro trends) to build investment thesis',
      'Built DCF, comps, and precedents to estimate intrinsic value',
      'Drafted a professional investment memo with valuation outcomes and risks'
    ]
  },
  {
    role: 'Founder | Analyst',
    org: 'Ravendise',
    time: 'Mar 2021 – Aug 2024',
    location: 'Pune, India',
    bullets: [
      'Built revenue forecasting models and simulated cash flow scenarios to evaluate pricing and ROI',
      'Designed automated analytics dashboards tracking performance, liquidity, and churn (200K+ users)',
      'Audited payment systems and ad-revenue pipelines to identify leakage and compliance gaps; improved forecast accuracy by 15%'
    ]
  },
  {
    role: 'Co-Founder | Business Analyst',
    org: 'Vizart School of Art & Design',
    time: 'Jan 2022 – Jul 2024',
    location: 'Pune, India',
    bullets: [
      'Designed industry-focused curricula leading to +25% enrollment and +40% retention',
      'Organized career fairs/workshops across 10+ institutions; placed 40+ students in top firms',
      'Launched targeted campaigns raising program awareness by 30%'
    ]
  },
  {
    role: 'Project Management Intern',
    org: 'Repsoft Consultancy Services',
    time: 'Oct 2021 – Jan 2022',
    location: 'Hyderabad, India',
    bullets: [
      'Gathered requirements via stakeholder interviews to deliver user-friendly applications (+20% engagement)',
      'Led usability testing and iterative improvements aligned with objectives',
      'Documented workflows, tracked KPIs, and reduced turnaround time by 10%'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-10 relative">
          {/* timeline rail */}
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
