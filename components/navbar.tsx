"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Nos Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Notre Methode", href: "#methode" },
  { label: "L'Equipe", href: "#equipe" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-xl border-b border-indigo/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-9 h-9">
            <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
              <circle cx="18" cy="18" r="16" className="fill-indigo" />
              <path
                d="M12 18C12 14 14.5 11 18 11C21.5 11 24 14 24 18"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-300 group-hover:stroke-[3]"
              />
              <circle cx="14" cy="22" r="2.5" fill="white" />
              <circle cx="22" cy="22" r="2.5" fill="white" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-primary-foreground">
            tessia
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-indigo-light/80 hover:text-primary-foreground transition-colors duration-300 rounded-lg hover:bg-indigo/10"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-full bg-orange text-accent-foreground hover:bg-orange-light transition-all duration-300 hover:shadow-lg hover:shadow-orange/25 hover:-translate-y-0.5"
          >
            Contactez-Nous
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-primary-foreground"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-6 mt-4 pb-6 flex flex-col gap-2 border-t border-indigo/10 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium text-indigo-light/80 hover:text-primary-foreground transition-colors rounded-lg hover:bg-indigo/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-full bg-orange text-accent-foreground"
          >
            Contactez-Nous
          </a>
        </div>
      </div>
    </header>
  )
}
