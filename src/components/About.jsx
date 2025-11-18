import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I like building things that matter. My work sits at the intersection of leadership and analytics—turning messy, real-world problems into clear decisions. I enjoy connecting students with employers, building practical AI-powered tools, and working with teams on consulting, case competitions, and hackathons. I believe in simple systems, measurable outcomes, and steady progress.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            At NYU SPS, I focus on management and analytics with an emphasis on finance and risk. I’m comfortable moving between data, strategy, and execution—whether it’s validating models, structuring research, or shipping a small MVP to test an idea.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <ul className="space-y-3 text-slate-300">
            <li>• President of the Management and Analytics Professional Society</li>
            <li>• Founder of the Employer Relations and Recruitment Committee</li>
            <li>• Graduate student at NYU SPS, Management and Analytics</li>
            <li>• Focus areas: finance, risk analytics, data science, AI</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
