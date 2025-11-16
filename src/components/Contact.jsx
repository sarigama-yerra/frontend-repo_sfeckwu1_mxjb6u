import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Instagram } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <section id="contact" className="relative bg-[#060b1a] py-20 text-blue-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-blue-200"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="space-y-4">
            {['name','email','message'].map((field) => (
              <div key={field}>
                <label className="mb-1 block text-sm text-blue-300/80 capitalize" htmlFor={field}>{field}</label>
                {field !== 'message' ? (
                  <input
                    id={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required
                    className="w-full rounded-xl border border-cyan-400/30 bg-white/5 px-4 py-3 text-blue-100 outline-none ring-0 backdrop-blur-md placeholder:text-blue-300/50 focus:border-cyan-400/60 focus:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                  />
                ) : (
                  <textarea
                    id={field}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-cyan-400/30 bg-white/5 px-4 py-3 text-blue-100 outline-none ring-0 backdrop-blur-md placeholder:text-blue-300/50 focus:border-cyan-400/60 focus:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                  />
                )}
              </div>
            ))}
            <button type="submit" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(56,189,248,0.35)]">
              {sent ? 'Sent ✓' : 'Send Message'}
            </button>
          </form>

          <div className="rounded-2xl border border-blue-400/20 bg-white/5 p-6 backdrop-blur-md">
            <div className="text-sm text-blue-300/80">Connect</div>
            <div className="mt-3 flex gap-3">
              <a href="https://www.linkedin.com" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-blue-400/30 px-4 py-2 text-blue-100 hover:border-cyan-400/50 hover:text-white">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://www.instagram.com" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-blue-400/30 px-4 py-2 text-blue-100 hover:border-cyan-400/50 hover:text-white">
                <Instagram size={18} /> Instagram
              </a>
            </div>
            <div className="mt-6 text-sm text-blue-300/70">
              Prefer email? Reach out at <span className="text-cyan-300">you@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
