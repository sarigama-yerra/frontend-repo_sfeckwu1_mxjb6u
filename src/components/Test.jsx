import React from 'react'

export default function Test() {
  return (
    <div className="min-h-screen grid place-items-center bg-white text-slate-900 dark:bg-[#050816] dark:text-white">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow dark:border-blue-400/20 dark:bg-white/5 backdrop-blur">
        <div className="text-lg font-semibold">Test Route</div>
        <p className="text-sm opacity-80">Use / to view the portfolio. This route exists for router sanity check.</p>
      </div>
    </div>
  )
}
