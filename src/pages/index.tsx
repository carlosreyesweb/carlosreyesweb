import { Skills } from "@/components/skills"
import { clientEnvironment } from "@/config/environment"
import { CallToAction } from "@/sections/home/call-to-action"
import { Header } from "@/sections/home/header"
import { Showcase } from "@/sections/home/showcase"
import { WorkExperience } from "@/sections/home/work-experience"
import { NextSeo } from "next-seo"

export default function Home() {
  return (
    <>
      <NextSeo canonical={clientEnvironment.NEXT_PUBLIC_HOST + "/"} />
      <Header />
      <Skills />
      <main className="my-32 space-y-32">
        <Showcase />
        <WorkExperience />
        <CallToAction />
      </main>
    </>
  )
}
