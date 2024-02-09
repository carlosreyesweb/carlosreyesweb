import { About } from "@/sections/landing/about"
import { CaseStudies } from "@/sections/landing/case-studies"
import { Contact } from "@/sections/landing/contact"
import { Header } from "@/sections/landing/header"
import { Services } from "@/sections/landing/services"
import { Testimonials } from "@/sections/landing/testimonials"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
