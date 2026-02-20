import { Hero } from "@/components/hero"
import { CTASection } from "@/components/cta-section"
import { UseCases } from "@/components/use-cases"
import { Advantages } from "@/components/advantages"

export default function Home() {
  return (
    <main>
      <Hero />
      <UseCases />
      <Advantages />
      <CTASection />
    </main>
  )
}
