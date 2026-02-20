"use client"

import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy border-t border-indigo/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-primary-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a href="#" className="flex items-center gap-2">
              <img src="/logo-tessia.svg" alt="Tessia" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm text-slate-light hover:text-primary-foreground transition-colors duration-300"
            >
              Mentions Legales
            </a>
            <span className="text-sm text-slate-light/60">
              Copyright Tessia 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
