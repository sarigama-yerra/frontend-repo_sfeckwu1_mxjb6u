import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { year: '2020', role: 'HRIS Intern', desc: 'Supported HR data migration and system configuration.' },
  { year: '2021', role: 'HR Analyst', desc: 'Built dashboards and automated HR reporting pipelines.' },
  { year: '2022', role: 'Project Lead', desc: 'Led HR Tech implementation across multiple departments.' },
  { year: '2023', role: 'Business Management', desc: 'Optimized processes and aligned HR strategy with business outcomes.' },
]

export default function Timeline() {
  return (
    <section id="journey" className="relative bg-[#050816] py-20 text-blue-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax pointer-events-none absolute left-1/2 top-0 h-[150%] w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-blue-200"
        >
          Career Journey
        </motion.h2>

        <div className="mt-10 grid gap-10">
          {items.map((it, idx) => (
            <motion.div
              key={it.year}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative flex items-start gap-6"
            >
              <div className="relative mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-cyan-400 shadow-[0_0_20px_6px_rgba(34,211,238,0.45)] ring-4 ring-[#0b1224]" />
              <div className="flex-1 rounded-2xl border border-blue-400/20 bg-white/5 p-5 backdrop-blur-md">
                <div className="text-sm text-blue-300/80">{it.year}</div>
                <div className="text-lg font-semibold text-blue-100">{it.role}</div>
                <p className="mt-1 text-blue-100/80">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
