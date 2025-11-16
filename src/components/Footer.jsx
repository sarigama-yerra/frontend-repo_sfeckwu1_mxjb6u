import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-[#050816] py-10 text-blue-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm">© {new Date().getFullYear()} [Nama Kamu]. All rights reserved.</div>
          <div className="text-sm">Built with a futuristic blue aesthetic.</div>
        </div>
      </div>
    </footer>
  )
}
