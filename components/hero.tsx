"use client"

import { useEffect, useState } from "react"
import { Check, ArrowRight } from "lucide-react"

const highlights = [
  {
    bold: "Prediction de la demande",
    text: "et optimisation des stocks",
  },
  {
    bold: "Automatisation des decisions",
    text: "et gestion intelligente des flux",
  },
  {
    bold: "Jumeaux numeriques",
    text: "et simulation avancee E2E",
  },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo/8 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo/5 blur-[100px] animate-glow-pulse delay-700" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-orange/5 blur-[80px] animate-glow-pulse delay-300" />

        {/* Floating particles */}
        <div className="absolute top-20 right-40 w-2 h-2 rounded-full bg-indigo-light/30 animate-float" />
        <div className="absolute top-40 right-60 w-1.5 h-1.5 rounded-full bg-indigo/40 animate-float delay-200" />
        <div className="absolute bottom-40 right-20 w-1 h-1 rounded-full bg-orange/40 animate-float delay-500" />
        <div className="absolute top-60 left-40 w-2 h-2 rounded-full bg-indigo-light/20 animate-float delay-300" />
      </div>

      {/* Radial gradient overlay right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-indigo/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div
              className={`inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-indigo-light tracking-wide uppercase transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo animate-pulse" />
              Solutions IA pour la Supply Chain
            </div>

            {/* Heading */}
            <h1
              className={`transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-primary-foreground leading-[1.1]">
                {"L'ingenierie"}
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gradient-hero leading-[1.1] mt-1">
                Data & IA
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-primary-foreground leading-[1.1] mt-1">
                au service de la
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-primary-foreground leading-[1.1] mt-1">
                Supply Chain
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-base lg:text-lg leading-relaxed text-slate-light max-w-lg transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Tessia developpe des solutions IA sur mesure pour optimiser vos
              operations, anticiper les risques et renforcer la resilience de
              votre supply chain.
            </p>

            {/* Highlights */}
            <div
              className={`flex flex-col gap-4 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-indigo/20 flex items-center justify-center group-hover:bg-indigo/30 transition-colors duration-300">
                    <Check size={12} className="text-indigo-light" />
                  </div>
                  <p className="text-sm lg:text-base text-slate-light/90">
                    <strong className="text-primary-foreground font-semibold">{item.bold}</strong>{" "}
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 mt-2 transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full bg-orange text-accent-foreground hover:bg-orange-light transition-all duration-300 hover:shadow-xl hover:shadow-orange/20 hover:-translate-y-0.5"
              >
                Contactez-nous
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full glass text-primary-foreground hover:bg-indigo/10 transition-all duration-300"
              >
                Decouvrir nos services
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-95"
            }`}
          >
            <div className="relative w-full max-w-lg">
              {/* Central orb */}
              <div className="relative mx-auto w-72 h-72">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-indigo/20 animate-[spin_20s_linear_infinite]">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo" />
                </div>
                {/* Mid ring */}
                <div className="absolute inset-6 rounded-full border border-indigo/15 animate-[spin_30s_linear_infinite_reverse]">
                  <div className="absolute -bottom-1 right-4 w-2 h-2 rounded-full bg-orange" />
                </div>
                {/* Inner ring */}
                <div className="absolute inset-12 rounded-full border border-indigo/10 animate-[spin_15s_linear_infinite]">
                  <div className="absolute -top-1 left-6 w-2 h-2 rounded-full bg-indigo-light" />
                </div>
                {/* Core */}
                <div className="absolute inset-20 rounded-full bg-gradient-to-br from-indigo/30 to-indigo/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-indigo/50 animate-pulse" />
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-5 py-4 animate-float">
                <div className="text-xs font-medium text-indigo-light mb-1">Prediction IA</div>
                <div className="text-2xl font-bold text-primary-foreground">98.2%</div>
                <div className="text-xs text-slate-light">Precision</div>
              </div>

              <div className="absolute -bottom-2 -left-8 glass rounded-2xl px-5 py-4 animate-float delay-300">
                <div className="text-xs font-medium text-orange mb-1">Optimisation</div>
                <div className="text-2xl font-bold text-primary-foreground">-32%</div>
                <div className="text-xs text-slate-light">Couts logistiques</div>
              </div>

              <div className="absolute top-1/2 -right-12 glass rounded-2xl px-5 py-4 animate-float delay-600">
                <div className="text-xs font-medium text-indigo-light mb-1">Temps reel</div>
                <div className="flex gap-0.5 mt-1">
                  {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-full bg-indigo/60"
                      style={{ height: `${h * 0.3}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
