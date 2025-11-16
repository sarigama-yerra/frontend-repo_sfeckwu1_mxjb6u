import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'HRIS Applications',
    desc: 'Design and implementation of HRIS modules for payroll, attendance, and employee lifecycle.',
    tools: ['Laravel','PostgreSQL','CI3','PHP'],
  },
  {
    title: 'Thesis Research Summary',
    desc: 'A condensed research overview with methodology, findings, and practical implications.',
    tools: ['Python','Tableau','Excel'],
  },
  {
    title: 'Analytics Dashboards',
    desc: 'Interactive dashboards for people analytics and business KPIs.',
    tools: ['Tableau','Python','PostgreSQL'],
  },
  {
    title: 'Community Projects',
    desc: 'KKN and community education initiatives, focusing on digital literacy and HR awareness.',
    tools: ['Communication','Leadership','Project Mgmt'],
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-[#060b1a] py-20 text-blue-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-blue-200"
        >
          Portfolio
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-white/5 p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_4px_rgba(56,189,248,0.25)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-blue-100">{p.title}</div>
                  <p className="mt-1 text-sm text-blue-100/80">{p.desc}</p>
                </div>
                <a href="#contact" className="rounded-lg border border-cyan-400/40 px-3 py-2 text-xs text-cyan-200 hover:bg-cyan-500/10">Details</a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-full border border-blue-400/30 bg-white/5 px-3 py-1 text-xs text-blue-200/90">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.15), transparent 40%)'}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
