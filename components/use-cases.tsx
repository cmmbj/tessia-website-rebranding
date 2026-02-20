"use client"

import { useState, useRef, useEffect } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Check } from "lucide-react"

const useCases = [
    {
        id: "ia-generative",
        title: "IA Générative pour la logistique",
        descriptions: [
            "Nous intégrons des modèles de génération de langage avancés pour automatiser l'analyse, l'aide à la décision et l'optimisation des processus logistiques.",
            "Grâce à des Large Language Models comme GPT, Llama ou Claude, nous améliorons la réactivité et l'intelligence opérationnelle des entreprises du secteur."
        ],
        features: [
            "Génération automatique de rapports et d'analyses à partir des données logistiques pour simplifier le suivi des performances et accélérer la prise de décision.",
            "Création d'assistants IA dédiés aux responsables supply chain, capables de répondre en langage naturel aux questions sur les flux, les stocks ou les incidents en cours.",
            "Automatisation des prévisions de demande en combinant les données internes et les tendances du marché, avec des recommandations adaptées en temps réel.",
            "Analyse et extraction d'informations clés depuis des documents logistiques, e-mails ou rapports, facilitant la gestion documentaire et le traitement des anomalies.",
            "Optimisation de la communication entre les parties prenantes grâce à des résumés intelligents des échanges et des recommandations d'actions basées sur l'historique des décisions."
        ],
        gradient: "from-indigo/20 via-purple-500/10 to-transparent"
    },
    {
        id: "systemes-predictifs",
        title: "Systèmes prédictifs avancés",
        descriptions: [
            "Nous développons des modèles de machine learning capables d'anticiper les fluctuations logistiques et d'optimiser la gestion des stocks, des flux et des ressources.",
            "En s'appuyant sur des techniques avancées comme les réseaux de neurones, les arbres de décision, les modèles de séries temporelles et le clustering, nous permettons une prise de décision plus proactive et efficace."
        ],
        features: [
            "Prévision de la demande avec des modèles de séries temporelles comme Prophet, SARIMA ou LSTM, pour réduire les surstocks et éviter les ruptures.",
            "Optimisation dynamique des niveaux de stock grâce à l'apprentissage automatique, ajustant en temps réel les quantités à commander en fonction des tendances et des événements imprévus.",
            "Prédiction des retards et perturbations de transport en combinant des données historiques et des signaux en temps réel, afin d'anticiper les impacts sur la chaîne logistique.",
            "Détection des anomalies dans les flux logistiques avec des modèles de clustering comme DBSCAN ou K-Means, permettant d'identifier les comportements inhabituels et de prévenir les incidents.",
            "Estimation des délais de livraison en analysant les variations du trafic, les conditions météorologiques et les capacités des transporteurs, pour une meilleure planification et communication avec les clients."
        ],
        gradient: "from-blue-500/20 via-indigo/10 to-transparent"
    },
    {
        id: "jumeaux-numeriques",
        title: "Jumeaux numériques pour une supply chain augmentée",
        descriptions: [
            "Nous développons des jumeaux numériques capables de modéliser, simuler et optimiser la supply chain en temps réel.",
            "En intégrant des technologies avancées comme la simulation multi-agents, le machine learning et l'analyse prédictive, nous permettons aux entreprises d'anticiper les risques et d'améliorer la performance de leurs opérations."
        ],
        features: [
            "Simulation des flux logistiques pour tester différentes configurations d'approvisionnement, de transport et de stockage avant leur mise en œuvre.",
            "Anticipation des risques et gestion proactive des crises en modélisant des scénarios tels que des ruptures d'approvisionnement, des congestions de transport ou des fluctuations de la demande.",
            "Optimisation dynamique des itinéraires de transport et des capacités de stockage grâce à l'apprentissage automatique et aux modèles de graphes.",
            "Réduction des coûts et amélioration de la résilience en identifiant les leviers d'optimisation à travers des analyses de scénarios complexes.",
            "Suivi en temps réel des performances de la supply chain avec une visualisation interactive des opérations et des indicateurs clés."
        ],
        gradient: "from-orange/20 via-rose-500/10 to-transparent"
    },
    {
        id: "vision-ordinateur",
        title: "Vision par ordinateur appliquée à la logistique",
        descriptions: [
            "Nous exploitons les dernières avancées en computer vision pour automatiser et fiabiliser les opérations logistiques.",
            "Grâce à des modèles de deep learning comme ResNet, EfficientNet et YOLO, nos solutions analysent en temps réel les flux de marchandises et optimisent la traçabilité."
        ],
        features: [
            "Identification et comptage automatique des articles en entrepôt : suivi des stocks sans intervention humaine grâce à des caméras fixes et des drones équipés de vision par ordinateur, couplés à des algorithmes de reconnaissance d'objets comme YOLO ou Mask R-CNN.",
            "OCR avancée pour l'extraction automatique d'informations à partir de documents logistiques, étiquettes et bons de livraison.",
            "Vérification de l'état des colis : détection des emballages endommagés ou mal scellés à l'aide de caméras haute résolution et capteurs 3D, avec identification automatique des défauts comme les fissures, bosses ou colis ouverts.",
            "Lecture automatique des plaques d'immatriculation : automatisation de l'enregistrement des véhicules entrants et sortants grâce à des caméras LPR et des algorithmes OCR, permettant un suivi en temps réel des flux logistiques."
        ],
        gradient: "from-emerald-500/20 via-teal-500/10 to-transparent"
    },
    {
        id: "infrastructures-data",
        title: "Infrastructures data pour une supply chain connectée et sécurisée",
        descriptions: [
            "Nous déployons des infrastructures data scalables et sécurisées, adaptées aux besoins et contraintes des entreprises, qu'elles soient dans le cloud (AWS, Azure, Google Cloud) ou on-premise pour les secteurs sensibles comme l'aéronautique et la défense."
        ],
        features: [
            "Déploiement flexible : solutions cloud, hybrides ou entièrement locales selon vos exigences de sécurité et de souveraineté des données.",
            "Intégration fluide avec vos systèmes (ERP, WMS, TMS) et compatibilité avec vos infrastructures existantes.",
            "Traitement des données en temps réel pour une supply chain plus réactive et performante.",
            "Conformité aux standards de cybersécurité pour garantir la protection et la maîtrise de vos données."
        ],
        gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent"
    }
]

export function UseCases() {
    const { ref: sectionRef, isVisible } = useScrollAnimation()
    const [activeTab, setActiveTab] = useState(useCases[0].id)

    // Create refs for each section to handle intersection observer for scroll spy
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Find the most visible entry
                let maxIntersectionRatio = 0
                let mostVisibleId = activeTab

                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
                        maxIntersectionRatio = entry.intersectionRatio
                        mostVisibleId = entry.target.id
                    }
                })

                if (maxIntersectionRatio > 0.2) {
                    setActiveTab(mostVisibleId)
                }
            },
            {
                root: null,
                rootMargin: "-20% 0px -60% 0px", // adjust active area to center-top
                threshold: [0.1, 0.2, 0.4, 0.6, 0.8, 1.0]
            }
        )

        const currentRefs = itemRefs.current
        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref)
            })
        }
    }, [activeTab])

    const scrollToUseCase = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            // Offset for sticky header
            const y = element.getBoundingClientRect().top + window.scrollY - 120
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <section id="solutions" className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={sectionRef}>
            {/* Background decoration */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo/20 to-transparent" />
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px] translate-x-1/2 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className={`text-center mb-16 lg:mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo/10 text-xs font-medium text-indigo tracking-wide uppercase mb-6">
                        Cas d'usage
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
                        Nos Solutions IA pour la Supply Chain
                    </h2>
                    <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Revolutonnez vos operations logistiques avec nos technologies avancees.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">

                    {/* Navigation Sidebar (Sticky) */}
                    <div className="hidden lg:block lg:w-1/3 sticky top-32 flex-shrink-0">
                        <div className="flex flex-col gap-3">
                            {useCases.map((useCase) => (
                                <button
                                    key={useCase.id}
                                    onClick={() => scrollToUseCase(useCase.id)}
                                    className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 font-medium text-sm border ${activeTab === useCase.id
                                            ? "bg-navy/80 border-indigo/20 text-indigo-light shadow-lg shadow-indigo/5 scale-105"
                                            : "bg-transparent border-transparent text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                                        }`}
                                >
                                    {useCase.title}
                                </button>
                            ))}
                        </div>

                        {/* Visual indicator line connecting buttons */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-indigo/10 -z-10 translate-x-3" />
                    </div>

                    {/* Cards Content */}
                    <div className="lg:w-2/3 flex flex-col gap-16 lg:gap-32 w-full">
                        {useCases.map((useCase, index) => (
                            <div
                                key={useCase.id}
                                id={useCase.id}
                                ref={(el) => { itemRefs.current[index] = el }}
                                className="scroll-mt-32"
                            >
                                <div className={`relative overflow-hidden rounded-[2rem] bg-navy border border-white/5 transition-all duration-700 p-8 sm:p-10 lg:p-12 hover:border-indigo/20 group`}>

                                    {/* Subtle Background Mesh/Gradient in Card */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-40 transition-opacity duration-500 group-hover:opacity-70`} />

                                    <div className="relative z-10">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-6">
                                            {useCase.title}
                                        </h3>

                                        <div className="space-y-4 mb-10">
                                            {useCase.descriptions.map((desc, i) => (
                                                <p key={i} className="text-slate-light leading-relaxed text-base sm:text-lg">
                                                    {desc}
                                                </p>
                                            ))}
                                        </div>

                                        <ul className="space-y-4">
                                            {useCase.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                                    <div className="flex-shrink-0 mt-0.5">
                                                        <div className="w-5 h-5 rounded-full bg-indigo/20 flex items-center justify-center text-indigo-light">
                                                            <Check strokeWidth={3} className="w-3 h-3" />
                                                        </div>
                                                    </div>
                                                    <span className="text-sm sm:text-base text-slate-light/90 leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
