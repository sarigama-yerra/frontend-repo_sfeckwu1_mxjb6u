import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#060b1a] py-20 text-blue-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-blue-200"
        >
          About Me
        </motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="leading-relaxed text-blue-100/90"
          >
            I am a results-driven professional with a strong foundation in HRIS, HR Tech, and HR Analytics. Passionate about building systems that empower people and organizations, I combine business management, leadership, and project execution to deliver measurable impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-blue-400/20 bg-white/5 p-6 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.15)]"
          >
            <div className="grid grid-cols-2 gap-3 text-sm">
              {['HRIS','HR Tech','HR Analytics','Business Management','Leadership','Project Execution'].map((item)=> (
                <div key={item} className="rounded-lg border border-blue-400/20 bg-white/5 px-3 py-2 text-blue-200/90">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Glow divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      </div>
    </section>
  )
}
