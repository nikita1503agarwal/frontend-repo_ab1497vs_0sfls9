import React from 'react'

const skills = [
  {
    title: 'Finance & Valuation',
    items: ['Financial Modeling (DCF, Comps, Precedents)', 'Valuation Analysis', 'Equity Research', 'Corporate Finance']
  },
  {
    title: 'Analytics & Data',
    items: ['Python', 'SQL', 'Excel', 'Tableau', 'Data Visualization', 'Portfolio Optimization']
  },
  {
    title: 'Risk & Frameworks',
    items: ['Liquidity & Operational Risk', 'SR 11-7', 'BCBS 239/248']
  },
  {
    title: 'Tools & Platforms',
    items: ['Bloomberg Terminal', 'PowerPoint', 'Jupyter', 'APIs']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div key={group.title} className="relative rounded-xl border border-slate-800 bg-slate-900 p-6 overflow-hidden">
              <div className="absolute -top-20 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />
              <h3 className="font-semibold text-white">{group.title}</h3>
              <ul className="mt-3 text-slate-300 text-sm space-y-1">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
