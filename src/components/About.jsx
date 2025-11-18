import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I care about work that is useful and steady. My background blends analytics with organizing teams and building programs that give students real chances to learn on the job. I like problems that involve data, clear thinking, and people.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            At NYU SPS, I focus on management and analytics with a practical lens: how to gather the right information, make a call, and explain it simply. I use AI tools when they help, and I value structure—risk thinking, good documentation, and consistent follow‑through.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I’m also committed to employer partnerships and to building bridges between classrooms and real work. The goal is always the same: useful outcomes, delivered by a team that feels supported and trusted.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="font-semibold text-white">Core Skills</h3>
          <ul className="mt-3 space-y-2 text-slate-300 text-sm">
            <li>Analytics and decision support</li>
            <li>Risk thinking and structured problem solving</li>
            <li>Program design and employer engagement</li>
            <li>Python • SQL • Excel modeling • Dashboard tools</li>
            <li>Clear writing, facilitation, and stakeholder communication</li>
          </ul>
          <h3 className="mt-6 font-semibold text-white">Certifications</h3>
          <ul className="mt-3 space-y-2 text-slate-300 text-sm">
            <li>Deloitte — Data Analytics Certification</li>
            <li>BCG — Data Science Certification</li>
            <li>Verified International Academic Qualifications</li>
            <li>Project Management: Technical</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
