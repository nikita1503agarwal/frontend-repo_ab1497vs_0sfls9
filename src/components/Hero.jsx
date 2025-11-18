import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[85vh] w-full bg-slate-950 text-slate-100 flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="w-20 h-20 rounded-full bg-slate-800/70 border border-slate-700 overflow-hidden mb-6">
            <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">Headshot</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Aditya S.
          </h1>
          <p className="mt-3 text-slate-300 text-sm">New York, New York, United States</p>
          <p className="mt-4 text-slate-300 max-w-2xl">
            MS Management & Analytics @ NYU | Aspiring Equity Research & Investment Banking Analyst
          </p>
          <p className="mt-2 text-slate-300 max-w-2xl">
            Financial modeling, valuation, and data-driven decision-making at the intersection of finance, analytics, and technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs">
            {['Equity Research Analysis','Financial Market Research','Consumer Analytics','Risk Analytics','Valuation'].map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200">{chip}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <a href="mailto:axs10415@nyu.edu" className="text-blue-300 hover:text-blue-200">axs10415@nyu.edu</a>
            <span className="text-slate-500">•</span>
            <a href="https://www.linkedin.com/in/adityasakhale" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">LinkedIn</a>
            <span className="text-slate-500">•</span>
            <a href="https://ravendise.com/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">Ravendise Studio</a>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">+1 929 683 3207</span>
          </div>
        </div>
      </div>
    </section>
  )
}
