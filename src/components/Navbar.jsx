import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-blue-400/20 bg-[#060b1a]/80 px-4 py-3 backdrop-blur-xl">
          <a href="#home" className="text-sm font-semibold tracking-wide text-blue-200">
            [Nama Kamu]
          </a>
          <nav className="hidden gap-6 text-sm text-blue-200/90 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#journey" className="hover:text-white">Journey</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-xs font-medium text-white shadow-[0_0_20px_rgba(56,189,248,0.35)]">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}
