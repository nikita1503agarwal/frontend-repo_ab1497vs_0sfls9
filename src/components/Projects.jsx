import React from 'react'

const projects = [
  {
    title: 'AI Liquidity Risk Monitoring — NextAML Capstone',
    description: 'An intelligent framework for anomaly detection in digital-asset portfolios, aligned to SR 11-7 and BCBS 248. Built feature sets, signals, and an explainable triage flow for risk teams.',
    tools: ['Python', 'Pandas', 'scikit-learn', 'FastAPI'],
    outcome: 'Improved monitoring cadence and explainability for model risk reviews.'
  },
  {
    title: 'Private Equity Program — Summer 2025',
    description: 'Live case work: investment memos, sector screens, and valuation across tech/consumer. Focus on DCF, comps, and strategic fit.',
    tools: ['Excel', 'Comps', 'DCF', 'Precedents'],
    outcome: 'Sharper thesis articulation and standardized screening templates.'
  },
  {
    title: 'NASA Space Apps — Best Use of Data',
    description: 'Open-data pipeline turning geospatial datasets into actionable insights; recognized for clarity and practicality.',
    tools: ['Python', 'Jupyter', 'GeoJSON', 'APIs'],
    outcome: 'Awarded “Best Use of Data” mention in local hack.'
  },
  {
    title: 'Women’s World Banking — Financial Inclusion Concept',
    description: 'Mobile-first savings/credit journeys with behavioral design and transparent feedback loops.',
    tools: ['User Research', 'Figma', 'Behavioral Design'],
    outcome: 'Outlined adoption path and measurement plan for pilot.'
  },
  {
    title: 'Ravendise Studio — Forecasting & Dashboards',
    description: 'Built cash-flow models and automated BI for global digital products.',
    tools: ['Python', 'SQL', 'Excel', 'Tableau'],
    outcome: '+15% forecast accuracy and improved liquidity tracking.'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Selected Projects</h2>
          <a href="https://www.linkedin.com/in/adityasakhale/details/projects/" target="_blank" rel="noreferrer" className="hidden md:inline-flex text-sm text-blue-300 hover:text-blue-200">See more →</a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/0 via-slate-900/0 to-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-6 flex flex-col min-h-[220px]">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded border border-slate-700 bg-slate-800 text-slate-200">{t}</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-400">Outcome: {p.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
