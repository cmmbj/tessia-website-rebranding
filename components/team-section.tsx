"use client"

import * as React from "react"
import { Linkedin, ArrowRight } from "lucide-react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const getAvatarGradient = (name: string) => {
    const gradients = [
        "from-indigo to-cyan-500",
        "from-orange to-amber-500",
        "from-indigo-light to-blue-500",
        "from-slate-500 to-slate-700",
    ]
    const idx = name.length % gradients.length
    return gradients[idx]
}

type TeamMember = {
    name: string
    role: string
    bio: string
    linkedin: string
    image?: string
}

const ceo: TeamMember = {
    name: "Mikael",
    role: "CEO",
    bio: "Visionnaire et leader, Mikael guide Tessia vers l'excellence en alliant data science et logistique pour revolutionner la supply chain.",
    linkedin: "https://linkedin.com",
    image: "/team-photos/mikael.jpg"
}

const teamMembers: TeamMember[] = [
    { name: "Thomas", role: "Sales Manager", bio: "Specialiste en developpement commercial B2B, Thomas accompagne les entreprises dans l'adoption de nos solutions IA innovantes.", linkedin: "https://linkedin.com", image: "/team-photos/thomas.jpeg" },
    { name: "Dimitri", role: "Project Manager", bio: "Expert en pilotage de projets tech, Dimitri s'assure de la bonne livraison des solutions tout en respectant l'agilite et les delais.", linkedin: "https://linkedin.com", image: "/team-photos/dimitri.jpeg" },
    { name: "Donatien", role: "Product Manager", bio: "Au croisement des besoins utilisateurs et de la tech, Donatien concoit des produits intuitifs et performants.", linkedin: "https://linkedin.com", image: "/team-photos/donatien.png" },
    { name: "Maxence", role: "Lead Developer", bio: "Architecte logiciel passionne, Maxence orchestre l'equipe tech et s'assure de la robustesse des solutions de Tessia.", linkedin: "https://linkedin.com", image: "/team-photos/maxence.png" },
    { name: "Tom", role: "Full Stack Developer", bio: "Developpeur polyvalent, Tom intervient aussi bien sur la creation d'interfaces fluides que sur la conception back-end.", linkedin: "https://linkedin.com", image: "/team-photos/tom.jpeg" },
    { name: "Axel", role: "Data Scientist", bio: "Genie de la donnee, Axel elabore et entraine les modeles de machine learning qui offrent une intelligence predictive inegalee.", linkedin: "https://linkedin.com", image: "/team-photos/axel.png" },
    { name: "Jules", role: "Full Stack Developer", bio: "Createur de solutions web, Jules transforme des architectures complexes en applications rapides et securisees.", linkedin: "https://linkedin.com", image: "/team-photos/jules.jpeg" },
    { name: "Nicolas", role: "Cybersecurity Analyst", bio: "Gardien de l'infrastructure, Nicolas met en place les meilleures pratiques pour proteger nos environnements et vos donnees.", linkedin: "https://linkedin.com", image: "/team-photos/nicolas.jpeg" },
    { name: "Louis", role: "Account Executive", bio: "Point de contact privilegie de nos clients, Louis veille a la reussite de nos partenariats sur le long terme.", linkedin: "https://linkedin.com", image: "/team-photos/louis.jpeg" },
]

function MemberCard({ member, isCeo = false }: { member: TeamMember; isCeo?: boolean }) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <div
                    className={`group flex items-center justify-center cursor-pointer transition-all duration-500`}
                >
                    <div className={`relative overflow-hidden bg-navy/50 backdrop-blur-sm border border-indigo/10 flex flex-col items-center justify-center p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo/20 ${isCeo ? 'rounded-[3rem] w-full max-w-sm' : 'rounded-3xl w-full aspect-square'}`}>

                        {/* Visual Placeholder or Real Photo */}
                        <div className={`relative mb-6 flex items-center justify-center bg-gradient-to-br ${getAvatarGradient(member.name)} rounded-[2rem] shadow-inner overflow-hidden ${isCeo ? 'w-40 h-40' : 'w-32 h-32'}`}>
                            {member.image ? (
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                                    <span className={`font-black text-white/90 uppercase tracking-tighter ${isCeo ? 'text-6xl' : 'text-5xl'}`}>
                                        {member.name.charAt(0)}
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Info */}
                        <div className="text-center">
                            <h3 className={`font-bold text-foreground mb-1 group-hover:text-indigo-light transition-colors ${isCeo ? 'text-3xl' : 'text-xl'}`}>{member.name}</h3>
                            <p className={`font-medium ${isCeo ? 'text-indigo text-lg' : 'text-muted-foreground text-sm'}`}>{member.role}</p>
                        </div>

                        {/* Hover indication */}
                        <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 text-xs font-semibold text-indigo tracking-widest uppercase flex items-center gap-1">
                            En savoir plus <ArrowRight size={14} />
                        </div>
                    </div>
                </div>
            </SheetTrigger>

            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-indigo/10 sm:max-w-md w-full">
                <SheetHeader className="mt-8 text-left">
                    <div className={`w-24 h-24 mb-6 flex items-center justify-center bg-gradient-to-br flex-shrink-0 ${getAvatarGradient(member.name)} overflow-hidden rounded-2xl shadow-lg`}>
                        {member.image ? (
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-4xl font-black text-white/90 uppercase">{member.name.charAt(0)}</span>
                        )}
                    </div>
                    <SheetTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo via-indigo-light to-white mb-2">{member.name}</SheetTitle>
                    <SheetDescription className="text-lg font-medium text-orange mb-8">
                        {member.role}
                    </SheetDescription>

                    <div className="prose prose-invert border-t border-indigo/10 pt-8">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">A propos</h4>
                        <p className="text-slate-light leading-relaxed">{member.bio}</p>
                    </div>

                    <div className="mt-12 flex gap-4">
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-indigo/10 hover:bg-indigo/20 text-indigo-light px-6 py-3 rounded-full font-semibold transition-colors"
                        >
                            <Linkedin size={20} />
                            Voir le profil
                        </a>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export function TeamSection() {
    const [api, setApi] = React.useState<CarouselApi>()

    // Auto-play the carousel smoothly
    React.useEffect(() => {
        if (!api) return

        const intervalId = setInterval(() => {
            if (api.canScrollNext()) {
                api.scrollNext()
            } else {
                api.scrollTo(0)
            }
        }, 4000)

        return () => clearInterval(intervalId)
    }, [api])

    return (
        <section className="py-28 lg:py-36 bg-background overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo/10 text-xs font-medium text-indigo tracking-wide uppercase mb-6">
                        Les visages de l'innovation
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight text-balance mb-6">
                        L'Equipe <span className="text-indigo-light">Tessia</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                        Chez Tessia, chaque projet est porte par une equipe resserree,
                        experimentee et specialisee a la fois en data science et en logistique.
                        Nos profils allient expertise technique et connaissance approfondie du secteur.
                    </p>
                </div>

                {/* CEO Section */}
                <div className="mb-24 flex justify-center">
                    <MemberCard member={ceo} isCeo={true} />
                </div>

                {/* Carousel Section */}
                <div className="relative">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 md:-ml-6">
                            {teamMembers.map((member, index) => (
                                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className="p-1">
                                        <MemberCard member={member} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Controls */}
                        <div className="flex justify-center gap-4 mt-12">
                            <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0 h-14 w-14 bg-navy hover:bg-navy/80 border-indigo/20 text-indigo-light hover:text-white" />
                            <CarouselNext className="relative inset-auto translate-x-0 translate-y-0 h-14 w-14 bg-navy hover:bg-navy/80 border-indigo/20 text-indigo-light hover:text-white" />
                        </div>
                    </Carousel>
                </div>

            </div>
        </section>
    )
}
