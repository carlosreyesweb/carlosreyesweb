import { clientEnvironment } from "@/config/environment"
import { About } from "@/sections/home/about"
import { CallToAction } from "@/sections/home/call-to-action"
import { CaseStudies } from "@/sections/home/case-studies"
import { Header } from "@/sections/home/header"
import { Testimonials } from "@/sections/home/testimonials"
import { NextSeo } from "next-seo"

export default function Home() {
  return (
    <>
      <NextSeo canonical={clientEnvironment.NEXT_PUBLIC_HOST + "/"} />
      <Header />
      <main>
        <About />
        <CaseStudies />
        <Testimonials />
        <CallToAction />
      </main>
    </>
  )
}
