import { About } from "@/sections/landing/about"
import { CaseStudies } from "@/sections/landing/case-studies"
import { Header } from "@/sections/landing/header"
import { Services } from "@/sections/landing/services"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <CaseStudies />
      </main>
    </>
  )
}
