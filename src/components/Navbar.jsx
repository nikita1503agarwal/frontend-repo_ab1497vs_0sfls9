import React from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="text-slate-100 font-semibold tracking-tight">Aditya Sakhale</a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
