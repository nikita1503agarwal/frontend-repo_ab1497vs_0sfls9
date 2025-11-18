import React from 'react'

const projects = [
  {
    title: 'Liquidity Risk Monitoring MVP for NextAML',
    description: 'A lean prototype to track liquidity indicators and flag anomalies for compliance teams. Built to test workflows and reporting cadence.',
    tools: ['Python', 'Pandas', 'Plotly', 'FastAPI'],
    outcome: 'Supported early conversations on monitoring design and stakeholder reporting.'
  },
  {
    title: 'NASA Space Apps — Best Use of Data',
    description: 'Data pipeline and analysis for a challenge focused on extracting useful signals from open datasets.',
    tools: ['Python', 'Jupyter', 'GeoJSON', 'APIs'],
    outcome: 'Recognized for clarity of approach and practical insights.'
  },
  {
    title: 'Women’s World Banking — Financial Inclusion Concept',
    description: 'Conceptual framework for simple, mobile-first savings and credit journeys, designed for trust and usability.',
    tools: ['User Research', 'Figma', 'Behavioral Design'],
    outcome: 'Highlighted pathways to engagement and adoption.'
  },
  {
    title: 'St. Francis Winery — Experiential Marketing Challenge',
    description: 'Structured a calm, premium tasting-room and digital experience concept that balanced story with conversion.',
    tools: ['Journey Mapping', 'Messaging', 'Presentation'],
    outcome: 'Clear recommendations for event strategy and KPIs.'
  },
  {
    title: 'Coursework & Technical Projects',
    description: 'Hands-on work in analytics, forecasting, and AI — from time series models to prompt-driven tools.',
    tools: ['Python', 'SQL', 'Excel', 'scikit-learn'],
    outcome: 'Sharpened fundamentals, documentation, and reproducibility.'
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
