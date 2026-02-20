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
              <div className="relative flex items-center justify-center w-7 h-7">
                <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
                  <circle cx="18" cy="18" r="16" className="fill-indigo" />
                  <path
                    d="M12 18C12 14 14.5 11 18 11C21.5 11 24 14 24 18"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="14" cy="22" r="2.5" fill="white" />
                  <circle cx="22" cy="22" r="2.5" fill="white" />
                </svg>
              </div>
              <span className="text-base font-bold text-primary-foreground">tessia</span>
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
