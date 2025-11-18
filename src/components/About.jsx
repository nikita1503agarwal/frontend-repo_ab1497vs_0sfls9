import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I’m a graduate student at New York University pursuing an M.S. in Management & Analytics (Risk Analytics). I focus on financial modeling, valuation, and market research—bringing quantitative rigor and clear communication to investment questions.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Recent work spans equity research and private equity case studies, where I build theses with DCF, comps, and precedents. For my AI Liquidity Risk Monitoring Capstone with NextAML, I’m developing signals and an explainable triage flow aligned with SR 11-7 and BCBS 248.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            As Founder of Ravendise Studio, I shipped forecasting tools and dashboards that improved visibility and planning for global digital products. I enjoy problems that demand both quantitative precision and narrative clarity.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="font-semibold text-white">Core Skills</h3>
          <ul className="mt-3 space-y-2 text-slate-300 text-sm">
            <li>Financial Modeling (DCF, Comps, Precedents)</li>
            <li>Valuation • Equity Research • Corporate Finance</li>
            <li>Risk Analytics • Portfolio Insights</li>
            <li>Excel • PowerPoint • Python • SQL • Tableau</li>
            <li>Bloomberg Terminal • Market & Sector Research</li>
          </ul>
          <h3 className="mt-6 font-semibold text-white">Certifications</h3>
          <ul className="mt-3 space-y-2 text-slate-300 text-sm">
            <li>Deloitte — Data Analytics Certification</li>
            <li>Verified International Academic Qualifications</li>
            <li>BCG — Data Science Certification</li>
            <li>Project Management: Technical</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
