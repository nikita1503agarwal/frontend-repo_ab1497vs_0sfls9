import React from 'react'

const projects = [
  {
    title: 'Liquidity Risk Monitoring MVP — NextAML',
    description: 'A lightweight monitoring MVP that flags unusual liquidity patterns and supports triage for risk teams.',
    tools: ['Python', 'Pandas', 'scikit-learn', 'FastAPI'],
    outcome: 'Faster reviews and clearer rationales for alerts.'
  },
  {
    title: 'NASA Space Apps — Best Use of Data',
    description: 'Open‑data pipeline and analysis workflow that turned raw datasets into clear, usable outputs.',
    tools: ['Python', 'Jupyter', 'GeoJSON', 'APIs'],
    outcome: 'Recognized for clarity and practicality in judging.'
  },
  {
    title: 'Women’s World Banking — AI concept',
    description: 'Mobile journeys for savings/credit with transparent feedback and simple language.',
    tools: ['User research', 'Figma', 'Prototyping'],
    outcome: 'Defined a pilot path and success measures.'
  },
  {
    title: 'St. Francis Winery — Experiential Challenge',
    description: 'A concise field plan to grow tastings and membership through guided events.',
    tools: ['Planning', 'Customer mapping', 'Measurement'],
    outcome: 'Clear activities, timelines, and KPIs to test.'
  },
  {
    title: 'Academic analytics projects',
    description: 'Hands‑on work across regression, forecasting, dashboards, and basic optimization.',
    tools: ['Python', 'SQL', 'Excel', 'Tableau'],
    outcome: 'Consistent practice turning questions into simple, honest outputs.'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
          <a href="https://www.linkedin.com/in/adityasakhale/details/projects/" target="_blank" rel="noreferrer" className="hidden md:inline-flex text-sm text-blue-300 hover:text-blue-200">See more →</a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">
              <div className="p-6 flex flex-col min-h-[240px]">
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
