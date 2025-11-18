import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I’m a graduate student at New York University pursuing an M.S. in Management & Analytics (Risk Analytics) with a focus on financial modeling, valuation, and data-driven decision-making. I’m passionate about uncovering insights at the intersection of finance, analytics, and technology to help firms make smarter, evidence-based investment and risk decisions.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            My experience spans equity research, private equity, and financial consulting. At Project Destined, I built valuation models and assessed investment opportunities across technology and consumer sectors. Through my AI Liquidity Risk Monitoring Capstone with NextAML, I’m developing an intelligent framework for anomaly detection in digital-asset portfolios—combining regulatory understanding (SR 11-07, BCBS 248) with applied machine learning.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            As Founder of Ravendise Studio, I created analytics dashboards and financial forecasting tools that improved performance visibility and revenue accuracy across global digital products. I enjoy problems that demand both quantitative precision and creative thinking—whether stress-testing a portfolio, explaining complex metrics to clients, or writing research that connects data to story.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="font-semibold text-white">Core Skills</h3>
          <ul className="mt-3 space-y-2 text-slate-300 text-sm">
            <li>Financial Modeling (DCF, Comps, Precedents)</li>
            <li>Valuation Analysis • Equity Research • Corporate Finance</li>
            <li>Risk Analytics • Portfolio Optimization</li>
            <li>Excel • PowerPoint • Python • SQL • Tableau • Data Visualization</li>
            <li>Bloomberg Terminal • Market & Sector Research</li>
          </ul>
          <h3 className="mt-6 font-semibold text-white">Top Skills</h3>
          <ul className="mt-3 space-y-2 text-slate-300 text-sm">
            <li>Equity Research Analysis</li>
            <li>Financial Market Research</li>
            <li>Consumer Analytics</li>
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
