import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const initial = stored || 'dark'
      setTheme(initial)
    } catch (_) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try { localStorage.setItem('theme', theme) } catch (_) {}
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3 backdrop-blur-xl shadow-sm dark:border-blue-400/20 dark:bg-[#060b1a]/80">
          <a href="#home" className="text-sm font-semibold tracking-wide text-slate-800 dark:text-blue-200">
            [Nama Kamu]
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 dark:text-blue-200/90 sm:flex">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
            <a href="#journey" className="hover:text-slate-900 dark:hover:text-white">Journey</a>
            <a href="#portfolio" className="hover:text-slate-900 dark:hover:text-white">Portfolio</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={toggleTheme} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/60 bg-white/80 text-slate-700 backdrop-blur-md hover:bg-white dark:border-blue-400/30 dark:bg-white/5 dark:text-blue-100">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href="#contact" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-xs font-medium text-white shadow-[0_0_20px_rgba(56,189,248,0.35)]">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
