"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Search,
  Lightbulb,
  FlaskConical,
  Rocket,
  RefreshCw,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Comprendre vos enjeux",
    description: [
      "Audit des donnees et des processus logistiques",
      "Definition des objectifs et identification des contraintes",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Concevoir la meilleure solution",
    description: [
      "Selection des technologies IA adaptees: LLMs, series temporelles, computer vision, digital twin",
      "Conception d'une architecture data robuste",
    ],
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Valider avec un POC",
    description: [
      "Realisation d'un Proof of Concept pour tester et valider les performances avant deploiement",
      "Tests sur donnees reelles pour garantir la faisabilite et l'impact",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Developper en mode agile",
    description: [
      "Approche iterative et livraison par sprints hebdomadaires",
      "Echanges frequents avec vos equipes pour ajuster en temps reel",
    ],
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Deploiement et amelioration continue",
    description: [
      "Mise en production fluide et securisee",
      "Optimisation continue des modeles en fonction des nouveaux flux",
      "Formation et accompagnement de vos equipes",
    ],
  },
]

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const Icon = step.icon
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute left-1/2 -translate-x-px top-full w-px h-12 bg-gradient-to-b from-indigo/30 to-transparent" />
      )}

      <div
        className={`group relative overflow-hidden rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
          isEven
            ? "bg-secondary hover:shadow-indigo/5"
            : "bg-navy hover:shadow-indigo/10"
        }`}
      >
        {/* Background glow on hover */}
        <div
          className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${
            isEven ? "bg-indigo" : "bg-orange"
          }`}
        />

        <div className="relative z-10 flex flex-col lg:flex-row gap-6 items-start">
          {/* Number + Icon */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <span
              className={`text-5xl font-black tracking-tighter ${
                isEven
                  ? "text-indigo/20"
                  : "text-indigo-light/20"
              }`}
            >
              {step.number}
            </span>
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                isEven
                  ? "bg-indigo/10 text-indigo"
                  : "bg-indigo/20 text-indigo-light"
              }`}
            >
              <Icon size={24} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3
              className={`text-xl font-bold mb-3 ${
                isEven ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {step.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {step.description.map((desc, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 text-sm leading-relaxed ${
                    isEven
                      ? "text-muted-foreground"
                      : "text-slate-light"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 mt-2 w-1 h-1 rounded-full ${
                      isEven ? "bg-indigo" : "bg-orange"
                    }`}
                  />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Method() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="methode" className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
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
            Notre approche
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Notre Methode
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une approche structuree et agile pour garantir le succes
            de vos projets IA.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
