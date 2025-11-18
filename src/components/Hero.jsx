import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full bg-slate-950 text-slate-100 flex items-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),rgba(2,6,23,0))]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-32 pb-16 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-slate-300 text-sm font-semibold">AS</span>
            <div className="text-xs text-slate-400">New York, NY • Open to Equity Research & IB Analyst roles</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Aditya Sakhale
          </h1>
          <p className="mt-3 text-slate-300 text-sm">MS Management & Analytics, NYU (Risk Analytics)</p>
          <p className="mt-4 text-slate-300/95 max-w-2xl">
            Financial modeling, valuation, and market research — translating data into clear investment theses.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {['Equity Research','Valuation (DCF • Comps • Precedents)','Risk Analytics','Portfolio Insights','Consumer & Tech Sectors'].map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200">{chip}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <a href="mailto:axs10415@nyu.edu" className="text-blue-300 hover:text-blue-200">axs10415@nyu.edu</a>
            <span className="text-slate-500">•</span>
            <a href="https://www.linkedin.com/in/adityasakhale" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">LinkedIn</a>
            <span className="text-slate-500">•</span>
            <a href="https://ravendise.com/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">Ravendise Studio</a>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">+1 929 683 3207</span>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-slate-800/70 bg-slate-900/70 backdrop-blur p-6">
            <h3 className="text-white font-semibold">Snapshot</h3>
            <ul className="mt-3 text-sm text-slate-300 space-y-2">
              <li>• AI Liquidity Risk Monitoring Capstone (NextAML): anomaly detection aligned to SR 11-07 & BCBS 248</li>
              <li>• Equity Research & PE projects: investment memos, sector theses, and valuation models</li>
              <li>• Founder, Ravendise: dashboards and forecasting improving accuracy by 15%</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
