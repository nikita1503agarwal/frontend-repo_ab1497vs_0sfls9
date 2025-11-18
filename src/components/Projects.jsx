import React from 'react'

const projects = [
  {
    title: 'AI Liquidity Risk Monitoring — NextAML Capstone',
    description: 'An intelligent framework for anomaly detection in digital-asset portfolios, aligning with SR 11-07 and BCBS 248 guidance.',
    tools: ['Python', 'Pandas', 'scikit-learn', 'FastAPI'],
    outcome: 'Proposed indicators and workflows for risk teams; improved explainability and reporting cadence.'
  },
  {
    title: 'Summer 2025 Private Equity Internship Program',
    description: 'Hands-on modeling and investment memo practice across live deal case studies and sector reviews.',
    tools: ['Excel', 'Comps', 'DCF', 'Precedents'],
    outcome: 'Sharpened thesis writing and valuation rigor; accelerated screening templates.'
  },
  {
    title: 'NASA Space Apps — Best Use of Data',
    description: 'Open-data pipeline and analysis extracting actionable signals from large geospatial datasets.',
    tools: ['Python', 'Jupyter', 'GeoJSON', 'APIs'],
    outcome: 'Recognized for clarity of approach and practical insights.'
  },
  {
    title: 'Women’s World Banking — Financial Inclusion Concept',
    description: 'Mobile-first savings/credit journeys emphasizing trust, usability, and clear feedback loops.',
    tools: ['User Research', 'Figma', 'Behavioral Design'],
    outcome: 'Outlined adoption pathways and measurement plan.'
  },
  {
    title: 'Ravendise Studio — Revenue Forecasting & Dashboards',
    description: 'Built cash-flow models and automated BI to improve performance visibility across global digital products.',
    tools: ['Python', 'SQL', 'Excel', 'Tableau'],
    outcome: '+15% forecast accuracy and improved liquidity monitoring.'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Selected Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded border border-slate-700 bg-slate-800 text-slate-200">{t}</span>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-400">Outcome: {p.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
