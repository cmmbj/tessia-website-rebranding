"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const advantages = [
    {
        title: "Des POCs rapides pour tester avant d'investir",
        description: "Nous développons des POCs concrets en quelques semaines pour valider la faisabilité et l'impact de votre solution IA, sur vos données réelles et dans votre environnement métier.",
        imageGradient: "from-blue-600 to-indigo-900 border-indigo/20",
        glow: "bg-indigo-500",
    },
    {
        title: "Une méthode agile et itérative pour plus de flexibilité",
        description: "Nos projets avancent par sprints courts avec des livraisons régulières. Cette approche favorise l'adaptation continue aux besoins métier et une meilleure réactivité face aux imprévus.",
        imageGradient: "from-fuchsia-600 to-purple-900 border-purple/20",
        glow: "bg-fuchsia-500",
    },
    {
        title: "Une intégration fluide avec vos systèmes existants",
        description: "Nos solutions s'intègrent naturellement à vos systèmes (ERP, WMS, TMS) et à vos infrastructures IT (cloud, on-premise ou hybride), sans rupture dans vos opérations.",
        imageGradient: "from-emerald-500 to-teal-900 border-teal/20",
        glow: "bg-emerald-500",
    },
    {
        title: "L'IA appliquée à la supply chain, avec un ROI mesurable",
        description: "Nous concevons des solutions IA orientées performance, avec des gains concrets en visibilité, automatisation et réduction des coûts sur l'ensemble de votre chaîne logistique.",
        imageGradient: "from-orange to-red-900 border-orange/20",
        glow: "bg-orange",
    }
]

export function Advantages() {
    const { ref: sectionRef, isVisible } = useScrollAnimation()

    return (
        <section id="atouts" className="py-24 lg:py-32 bg-[#0B0F19] relative overflow-hidden" ref={sectionRef}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className={`text-center mb-16 lg:mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
                        Les atouts de notre approche
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className={`group relative bg-navy/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-700 hover:bg-navy/80 hover:border-white/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Image Placeholder with Gradients */}
                            <div className="w-full h-48 sm:h-64 relative overflow-hidden p-4">
                                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.imageGradient} opacity-30 mix-blend-overlay`} />

                                {/* Abstract geometric shapes to simulate tech thumbnails */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/90 to-transparent z-10" />

                                <div className="w-full h-full relative z-0 border border-white/10 rounded-xl overflow-hidden bg-navy/30 backdrop-blur-sm">
                                    {/* Techy background patterns abstract */}
                                    <div className={`absolute -inset-10 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${advantage.imageGradient} pointer-events-none`} />

                                    {/* Node points simulation */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-plus-lighter">
                                        <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                                    </div>

                                    {/* Pulsing Glow */}
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 ${advantage.glow}`} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 sm:p-10 relative z-20">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-indigo-light transition-colors duration-300">
                                    {advantage.title}
                                </h3>
                                <p className="text-slate-light/90 leading-relaxed text-sm sm:text-base">
                                    {advantage.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
