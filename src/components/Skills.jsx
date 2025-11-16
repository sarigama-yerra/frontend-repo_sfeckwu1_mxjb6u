import React from 'react'
import { motion } from 'framer-motion'

const hard = ['Laravel','PostgreSQL','HRIS','Python','Tableau','Excel']
const soft = ['Leadership','HR Strategy','Communication','Problem-Solving']

function Badge({ label }) {
  return (
    <span className="rounded-full border border-blue-400/30 bg-white/5 px-4 py-2 text-sm text-blue-100/90 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#050816] py-20 text-blue-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-10 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-blue-200"
        >
          Skills
        </motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <div className="mb-3 text-sm uppercase tracking-wider text-blue-300/70">Technical</div>
            <div className="flex flex-wrap gap-3">
              {hard.map((i) => (
                <Badge key={i} label={i} />
              ))}
            </div>
          </div>
          <div>
            <div className="mb-3 text-sm uppercase tracking-wider text-blue-300/70">Soft</div>
            <div className="flex flex-wrap gap-3">
              {soft.map((i) => (
                <Badge key={i} label={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
