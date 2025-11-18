import React from 'react'

export default function Hero() {
  return (
    <section id="top" className="relative w-full bg-slate-950 text-slate-100 border-b border-slate-900/60">
      <div className="relative mx-auto w-full max-w-6xl px-4 pt-36 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-slate-800/70 border border-slate-700">
              {/* Headshot placeholder */}
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-slate-400">
                <circle cx="12" cy="8" r="3" fill="currentColor" />
                <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" fill="currentColor" opacity=".35" />
              </svg>
            </span>
            <div className="text-xs text-slate-400">New York, NY</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            President of MAPS, Founder of the ERRC, and graduate student in Management and Analytics at NYU SPS.
          </h1>
          <p className="mt-4 text-slate-300/95 max-w-2xl text-lg">
            Turning data, strategy, and leadership into real outcomes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <a href="mailto:axs10415@nyu.edu" className="text-blue-300 hover:text-blue-200">axs10415@nyu.edu</a>
            <span className="text-slate-500">•</span>
            <a href="https://www.linkedin.com/in/adityasakhale" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">LinkedIn</a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 backdrop-blur p-6">
            <h3 className="text-white font-semibold">Snapshot</h3>
            <ul className="mt-3 text-sm text-slate-300 space-y-2">
              <li>• Built and led student programs that connect coursework to real industry work.</li>
              <li>• Developing analytics projects that combine risk thinking with practical tools.</li>
              <li>• Focused on clear decisions, measurable outcomes, and well-run teams.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
