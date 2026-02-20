"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  BarChart3,
  Brain,
  Cog,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Audit Data & IA pour la Supply Chain",
    description:
      "Nous analysons en profondeur vos processus logistiques de bout en bout pour identifier les axes d'amelioration grace a l'IA et vos donnees.",
    features: [
      "Identification proactive des flux cles",
      "Amelioration de l'efficacite et des mesures logistiques en temps reel",
      "Evaluation de la resilience et des capacites d'adaptation logistiques",
    ],
    accent: "indigo",
  },
  {
    icon: Brain,
    title: "Developpement d'applications IA dediees",
    description:
      "Nous concevons et integrons des solutions IA sur mesure pour automatiser vos operations et ameliorer la performance.",
    features: [
      "Systemes de gestion intelligents augmentes par l'IA",
      "Optimisation en temps reel des chaines de transport et des tournees",
      "Automatisation des chaines d'approvisionnement et de gestion des stocks",
    ],
    accent: "orange",
  },
  {
    icon: Cog,
    title: "Automatisation des processus supply chain avec IA",
    description:
      "Nous exploitons l'IA pour accelerer et fiabiliser vos operations logistiques.",
    features: [
      "Automatisation des previsions en amont et ajustement dynamique des stocks",
      "Detection et gestion des goulets d'etranglement en temps reel",
      "Routage intelligent et adaptif de votre reseau logistique",
    ],
    accent: "indigo",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  const Icon = service.icon
  const isOrange = service.accent === "orange"

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background */}
      <div
        className={`relative p-8 lg:p-10 h-full ${
          isOrange
            ? "bg-navy text-primary-foreground"
            : "bg-secondary text-secondary-foreground"
        }`}
      >
        {/* Subtle gradient accent */}
        <div
          className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${
            isOrange ? "bg-orange" : "bg-indigo"
          }`}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
              isOrange
                ? "bg-orange/20 text-orange"
                : "bg-indigo/10 text-indigo"
            }`}
          >
            <Icon size={28} />
          </div>

          {/* Title */}
          <h3
            className={`text-2xl font-bold mb-4 leading-tight ${
              isOrange ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className={`text-sm leading-relaxed mb-6 ${
              isOrange ? "text-slate-light" : "text-muted-foreground"
            }`}
          >
            {service.description}
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={16}
                  className={`flex-shrink-0 mt-0.5 ${
                    isOrange ? "text-orange" : "text-indigo"
                  }`}
                />
                <span
                  className={`text-sm leading-relaxed ${
                    isOrange ? "text-slate-light/90" : "text-muted-foreground"
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Hover arrow */}
          <div
            className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${
              isOrange ? "text-orange" : "text-indigo"
            }`}
          >
            En savoir plus
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="services" className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo/10 text-xs font-medium text-indigo tracking-wide uppercase mb-6">
            Ce que nous faisons
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Nos Services
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Des solutions IA specialisees pour votre supply chain, intelligentes,
            rapides et efficaces.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
