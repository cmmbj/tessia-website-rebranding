import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Technologies } from "@/components/technologies"
import { Method } from "@/components/method"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <Method />
      <CTASection />
      <Footer />
    </main>
  )
}
