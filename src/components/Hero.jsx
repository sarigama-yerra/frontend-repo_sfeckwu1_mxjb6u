import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#050816] text-white">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[36rem] w-[36rem] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 pt-24 md:flex-row md:gap-14 md:pt-28">
        {/* Left: Copy */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_12px_2px_rgba(56,189,248,0.8)]" />
              <span className="text-xs tracking-widest text-blue-200">FUTURISTIC PORTFOLIO</span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              <span className="text-blue-300">[Nama Kamu]</span>
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent">
                HRIS | Business Management | Data & People Enthusiast
              </span>
            </h1>

            <p className="max-w-xl text-blue-100/90">
              A personal digital space to showcase my portfolio, achievements, and professional journey.
            </p>

            {/* Mini profile row */}
            <div className="mt-4 flex items-center gap-4">
              <div className="relative grid h-14 w-14 place-items-center rounded-xl bg-white/5 backdrop-blur-md">
                {/* Minimal avatar outline */}
                <div className="relative h-10 w-10 rounded-full border border-blue-300/50">
                  <div className="absolute -bottom-1 left-1/2 h-4 w-6 -translate-x-1/2 rounded-t-[10px] border border-blue-300/50" />
                </div>
                <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-blue-400/30 shadow-[0_0_30px_rgba(56,189,248,0.25)]" />
              </div>
              <div className="text-sm text-blue-100/90">
                <div className="font-medium text-blue-200">Digital Identity</div>
                <div className="text-blue-300/70">Clean • Elegant • Professional</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#portfolio" className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-transform hover:-translate-y-0.5">
                <span>View Portfolio</span>
              </a>
              <a href="#contact" className="relative inline-flex items-center gap-2 rounded-xl border border-blue-400/40 bg-white/5 px-5 py-3 text-sm font-medium text-blue-100 backdrop-blur-md hover:border-cyan-400/60 hover:text-white">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Spline 3D asset */}
        <div className="relative flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[380px] w-full sm:h-[460px] md:h-[520px]"
          >
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Soft glow edge */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-blue-300/20 shadow-[0_0_60px_10px_rgba(56,189,248,0.25)]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
