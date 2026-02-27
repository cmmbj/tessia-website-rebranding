"use client"

import * as React from "react"
import { useRef } from "react"
import { Linkedin, Twitter, Dribbble, ArrowRight, Mail } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type TeamMember = {
    name: string
    role: string
    bio: string
    linkedin: string
    twitter?: string
    dribbble?: string
    image?: string
}

const ceo: TeamMember = {
    name: "Mikael",
    role: "CEO",
    bio: "Fondateur visionnaire, Mikael guide Tessia avec une passion inébranlable pour l'innovation technologique et l'excellence.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    dribbble: "https://dribbble.com",
    image: "/team-photos/mikael.jpg"
}

const teamMembers: TeamMember[] = [
    { name: "Thomas", role: "Sales Manager", bio: "Expert en relations clientes, Thomas assure le pont entre les besoins techniques et nos solutions sur mesure.", linkedin: "https://linkedin.com", twitter: "https://twitter.com", image: "/team-photos/thomas.jpeg" },
    { name: "Dimitri", role: "Project Manager", bio: "Pilote aguerri de projets complexes, Dimitri garantit des livraisons toujours à l'heure et fluides.", linkedin: "https://linkedin.com", twitter: "https://twitter.com", dribbble: "https://dribbble.com", image: "/team-photos/dimitri.jpeg" },
    { name: "Donatien", role: "Product Manager", bio: "Architecte fonctionnel, Donatien façonne des produits performants adoptés par des milliers d'utilisateurs.", linkedin: "https://linkedin.com", image: "/team-photos/donatien.png" },
    { name: "Maxence", role: "Lead Developer", bio: "Développeur full-stack passionné par les technologies émergentes et l'excellence du code.", linkedin: "https://linkedin.com", twitter: "https://twitter.com", image: "/team-photos/maxence.png" },
    { name: "Tom", role: "Full Stack Developer", bio: "Spécialiste de la performance et de l'expérience utilisateur, Tom transforme les idées en réalité interactive.", linkedin: "https://linkedin.com", dribbble: "https://dribbble.com", image: "/team-photos/tom.jpeg" },
    { name: "Axel", role: "Data Scientist", bio: "Maitre des algorithmes et du Machine Learning, Axel extrait l'intelligence cachée de vos données.", linkedin: "https://linkedin.com", twitter: "https://twitter.com", image: "/team-photos/axel.png" },
    { name: "Jules", role: "Full Stack Developer", bio: "Passionné par l'architecture logicielle novatrice et robuste pour résoudre les problèmes complexes.", linkedin: "https://linkedin.com", image: "/team-photos/jules.jpeg" },
    { name: "Nicolas", role: "Cybersecurity Analyst", bio: "Gardien de l'intégrité de nos systèmes, Nicolas protège activement toutes les infrastructures.", linkedin: "https://linkedin.com", twitter: "https://twitter.com", image: "/team-photos/nicolas.jpeg" },
    { name: "Louis", role: "Account Executive", bio: "Garant du succès de vos projets à long terme, Louis développe des stratégies de croissance ambitieuses.", linkedin: "https://linkedin.com", image: "/team-photos/louis.jpeg" },
]

export function TeamSection() {
    const allMembers = [ceo, ...teamMembers]

    const sectionRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLUListElement>(null)
    const slidesRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!sectionRef.current || !listRef.current || !slidesRef.current || !containerRef.current) return;

        const listItems = gsap.utils.toArray('li', listRef.current) as HTMLElement[]
        const slides = gsap.utils.toArray('.slide', slidesRef.current) as HTMLElement[]

        // Setup Slides 3D Initial State - All incoming from the right & pushed back
        gsap.set(slides, {
            xPercent: 120,
            opacity: 0,
            rotationY: 45,
            rotationX: -10,
            z: -500,
            transformPerspective: 1500,
            transformOrigin: "left center",
            autoAlpha: 0
        });

        // Setup List Items Initial State
        gsap.set(listItems, {
            opacity: 0.2,
            x: 0,
            color: "#94a3b8" // slate-400
        });

        // Setup First Item as completely visible and active
        gsap.set(slides[0], { xPercent: 0, z: 0, rotationY: 0, rotationX: 0, opacity: 1, autoAlpha: 1 });
        gsap.set(listItems[0], { opacity: 1, x: 30, scale: 1.1, color: "#4f46e5", transformOrigin: "left center" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${listItems.length * 90}%`,
                pin: true,
                scrub: 1.5, // extremely smooth scrub
            }
        });

        listItems.forEach((item, i) => {
            if (i === 0) return; // Skip first because it's already visible

            const previousItem = listItems[i - 1];
            const currentSlide = slides[i];
            const previousSlide = slides[i - 1];

            tl.addLabel(`step${i}`, "+=0.3")

            // --- List Item Left Animation ---
            tl.to(item, {
                opacity: 1,
                x: 30,
                scale: 1.1,
                color: "#4f46e5",
                duration: 1,
                ease: "power2.out"
            }, `step${i}`)

            tl.to(previousItem, {
                opacity: 0.2,
                x: 0,
                scale: 1,
                color: "#94a3b8",
                duration: 1,
                ease: "power2.inOut"
            }, `step${i}`)

            // --- 3D Slide Right Animation ---
            // Incoming Card (flies in from right front)
            tl.to(currentSlide, {
                xPercent: 0,
                z: 0,
                rotationY: 0,
                rotationX: 0,
                opacity: 1,
                autoAlpha: 1,
                duration: 1.5,
                ease: "power3.out"
            }, `step${i}`)

            // Outgoing Card (pushes back to left)
            tl.to(previousSlide, {
                xPercent: -100,
                z: -400,
                rotationY: -35,
                rotationX: 10,
                opacity: 0,
                autoAlpha: 0,
                duration: 1.5,
                ease: "power3.in"
            }, `step${i}`)
        });

        // Buffer space at end of timeline
        tl.to({}, { duration: 0.5 });

        // --- Click to Scroll Interaction ---
        listItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                const st = tl.scrollTrigger;
                if (!st) return;

                // Calculate progress: 0 for first, mapped value for others
                const progress = i === 0 ? 0 : tl.labels[`step${i}`] / tl.duration();
                const targetScroll = st.start + (st.end - st.start) * progress;

                // Smoothly animate window scroll
                const scrollProxy = { y: window.scrollY };
                gsap.to(scrollProxy, {
                    y: targetScroll,
                    duration: 1.2,
                    ease: "power3.inOut",
                    onUpdate: () => window.scrollTo(0, scrollProxy.y)
                });
            });
        });

        // --- Interactive Parallax based on Mouse Movement ---
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 35; // 35 deg max tilt
            const y = (clientY / window.innerHeight - 0.5) * 35;

            // Animate the container holding the cards
            gsap.to(containerRef.current, {
                rotationY: x,
                rotationX: -y,
                transformPerspective: 1200,
                duration: 1,
                ease: "power2.out"
            });
        };

        const currentRef = sectionRef.current;
        currentRef.addEventListener('mousemove', handleMouseMove);
        return () => currentRef.removeEventListener('mousemove', handleMouseMove);

    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="bg-[#FAFAFA] relative font-sans text-slate-900 overflow-hidden min-h-screen">

            {/* Ambient Lighting Gradient for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full z-0 pointer-events-none" />

            {/* Header Area */}
            <div className="absolute top-0 w-full pt-16 sm:pt-24 px-4 sm:px-6 z-20 pointer-events-none">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-100 bg-white/80 shadow-sm mb-6 backdrop-blur-md pointer-events-auto hover:scale-105 transition-transform cursor-pointer">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">L'équipe</span>
                    </div>

                    <h2 className="text-5xl sm:text-6xl font-black tracking-tighter mb-4">
                        Des experts dédiés à votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">réussite</span>.
                    </h2>
                </div>
            </div>

            {/* Main Interactive Stage */}
            <div className="w-full h-screen flex justify-center items-center relative z-10 pt-40 lg:pt-48">
                <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row px-6 lg:px-12 h-[75vh] relative items-center">

                    {/* Left side: The Interactive List */}
                    <div className="w-full md:w-5/12 flex items-center relative pr-8 h-full z-20">
                        <ul ref={listRef} className="m-0 p-0 pl-4 list-none space-y-5 lg:space-y-6 w-full max-h-[60vh] overflow-hidden flex flex-col justify-center">
                            {allMembers.map((member, index) => (
                                <li key={index} className="text-3xl lg:text-5xl font-black tracking-tight flex items-center gap-6 cursor-pointer hover:opacity-75 transition-opacity">
                                    <span>{member.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right side: The 3D Cards container */}
                    <div className="w-full md:w-7/12 relative flex items-center justify-center h-full perspective-[1500px]">

                        {/* Parent container for Mouse parallax rotation */}
                        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center transform-style-3d">

                            {/* Slide Wrapper ensuring they stack precisely in center */}
                            <div ref={slidesRef} className="relative w-full max-w-[420px] aspect-[4/5] transform-style-3d">

                                {allMembers.map((member, index) => (
                                    <div key={index} className="slide absolute inset-0 rounded-[32px] bg-white p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col will-change-transform">

                                        {/* Inner Card Frame */}
                                        <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-50 group">

                                            {/* Photo with subtle zoom effect */}
                                            {member.image ? (
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-indigo-50">
                                                    <span className="font-black text-indigo-200 uppercase tracking-tighter text-9xl">
                                                        {member.name.charAt(0)}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Minimal Info Overlay */}
                                            <div className="absolute inset-x-0 bottom-0 p-8 pt-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <h3 className="font-bold text-white text-3xl tracking-tight mb-1 drop-shadow-md">
                                                    {member.name}
                                                </h3>
                                                <p className="font-semibold text-indigo-300 text-sm tracking-widest uppercase drop-shadow-md">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Call to Action block */}
            <div className="py-24 w-full text-center relative z-20 border-t border-slate-200/60 bg-white mt-12">
                <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Envie de faire partie de l'équipe ?</h2>
                <p className="text-slate-500 font-medium mb-8 max-w-xl mx-auto">
                    Nous recherchons des talents passionnés. Explorez nos opportunités et venez construire l'avenir avec nous.
                </p>
                <a href="https://www.welcometothejungle.com/fr/companies/tessia/jobs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all font-semibold text-lg shadow-[0_10px_20px_rgba(99,102,241,0.3)] hover:-translate-y-1">
                    Voir les offres d'emploi <ArrowRight size={20} className="ml-2" />
                </a>
            </div>

        </section>
    )
}
