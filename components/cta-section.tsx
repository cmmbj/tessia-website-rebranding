"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-navy overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo/5 blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-orange/3 blur-[100px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight text-balance leading-tight">
          Discutons de votre projet
        </h2>
        <p className="mt-4 text-lg font-medium text-primary-foreground/90">
          Vous avez un projet ?
        </p>
        <p className="mt-3 text-base text-slate-light max-w-xl mx-auto leading-relaxed">
          Nous serions ravis d'echanger sur vos besoins et de vous accompagner
          dans la mise en place de solutions IA adaptees a votre supply chain.
        </p>
        <div className="mt-10">
          <a
            href="mailto:contact@tessia.fr"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-indigo text-primary-foreground hover:bg-indigo/90 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo/30 hover:-translate-y-0.5"
          >
            Contactez-nous pour en savoir plus
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
