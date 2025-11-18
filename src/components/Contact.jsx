import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks — your message has been captured as a placeholder. Connect via LinkedIn or email below.')
  }

  return (
    <section id="contact" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input required type="text" className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input required type="email" className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea required rows="4" className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 transition-colors text-white px-4 py-2 text-sm">
                Send
              </button>
              {status && <p className="text-sm text-slate-300">{status}</p>}
            </div>
          </form>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 flex flex-col justify-between">
            <div>
              <p className="text-slate-300">Prefer a quick note? Reach out here:</p>
              <div className="mt-4 space-y-2">
                <a href="mailto:axs10415@nyu.edu" className="text-blue-300 hover:text-blue-200">axs10415@nyu.edu</a>
                <div>
                  <a href="https://www.linkedin.com/in/adityasakhale" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">LinkedIn</a>
                </div>
                <div>
                  <a href="https://ravendise.com/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">ravendise.com</a>
                </div>
                <div className="text-slate-300">+1 929 683 3207</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6">This form is a front-end only placeholder. Hook it to an API to receive messages.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
