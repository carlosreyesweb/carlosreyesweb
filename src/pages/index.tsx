import { About } from "@/sections/home/about"
import { CallToAction } from "@/sections/home/call-to-action"
import { CaseStudies } from "@/sections/home/case-studies"
import { Header } from "@/sections/home/header"
import { Services } from "@/sections/home/services"
import { Testimonials } from "@/sections/home/testimonials"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <CaseStudies />
        <Testimonials />
        <CallToAction />
      </main>
    </>
  )
}
