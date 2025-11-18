import React from 'react'

const skills = [
  {
    title: 'Analytics & Risk',
    items: ['Analytics workflows', 'Risk thinking', 'Measurement and reporting']
  },
  {
    title: 'Data & Tools',
    items: ['Python', 'SQL', 'Excel modeling', 'Dashboard tools']
  },
  {
    title: 'Communication',
    items: ['Clear writing', 'Facilitation', 'Stakeholder updates']
  },
  {
    title: 'Leadership',
    items: ['Team operating cadence', 'Events & employer engagement', 'Program design']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div key={group.title} className="relative rounded-xl border border-slate-800 bg-slate-900 p-6 overflow-hidden">
              <div className="absolute -top-20 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />
              <h3 className="font-semibold text-white">{group.title}</h3>
              <ul className="mt-3 text-slate-300 text-sm space-y-1">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
