"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const techLogos = [
  { name: "Google Cloud", short: "GCP", logo: "/tech-logos/gcp.png" },
  { name: "AWS", short: "AWS", logo: "/tech-logos/aws.png" },
  { name: "Azure", short: "Azure", logo: "/tech-logos/azure.png" },
  { name: "Airflow", short: "Airflow", logo: "/tech-logos/airflow.png" },
  { name: "TensorFlow", short: "TF", logo: "/tech-logos/tensorflow.png" },
  { name: "Keras", short: "Keras", logo: "/tech-logos/keras.png" },
  { name: "PyTorch", short: "PyTorch", logo: "/tech-logos/pytorch.png" },
  { name: "OpenCV", short: "OpenCV", logo: "/tech-logos/opencv.png" },
  { name: "Python", short: "Python", logo: "/tech-logos/python.png" },
  { name: "OpenAI", short: "OpenAI", logo: "/tech-logos/openai.png" },
  { name: "Meta AI", short: "Meta", logo: "/tech-logos/meta.png" },
  { name: "Mistral AI", short: "Mistral", logo: "/tech-logos/mistral.png" },
  { name: "Gemini", short: "Gemini", logo: "/tech-logos/gemini.png" },
  { name: "Claude", short: "Claude", logo: "/tech-logos/claude.png" },
]

function TechPill({
  tech,
  index,
  isVisible,
}: {
  tech: (typeof techLogos)[number]
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-secondary/80 hover:bg-indigo/5 border border-border/50 hover:border-indigo/20 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo/5 cursor-default ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {tech.logo ? (
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <img src={tech.logo} alt={tech.name} className="max-w-full max-h-full object-contain" />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-xs font-bold text-muted-foreground flex-shrink-0">
          {tech.short.slice(0, 2)}
        </div>
      )}
      <span className="text-sm font-medium text-foreground whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  )
}

export function Technologies() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({
    threshold: 0.05,
  })

  return (
    <section
      id="technologies"
      className="py-28 lg:py-36 bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo/10 text-xs font-medium text-indigo tracking-wide uppercase mb-6">
            Notre stack technique
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Nos Technologies
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Les technologies cles de l'IA pour concevoir des solutions robustes,
            evolutives et parfaitement integrees.
          </p>
        </div>

        {/* Tech grid */}
        <div
          ref={gridRef}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {techLogos.map((tech, i) => (
            <TechPill
              key={tech.name}
              tech={tech}
              index={i}
              isVisible={gridVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
