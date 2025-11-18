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
            Aditya Sakhale
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl">
            President, Management and Analytics Professional Society • Founder, Employer Relations and Recruitment Committee • Graduate student at NYU SPS, Management and Analytics
          </p>
          <p className="mt-6 text-lg text-blue-200">Analytics, Strategy, and Real World Impact.</p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs">
            {['Finance','Risk Analytics','Data Science','AI-driven Problem Solving'].map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200">{chip}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
