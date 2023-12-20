import { About } from "@/sections/landing/about"
import { Header } from "@/sections/landing/header"
import { Portfolio } from "@/sections/landing/portfolio"
import { Services } from "@/sections/landing/services"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <Portfolio />
      </main>
    </>
  )
}
