import { LetsChatButton } from "@/components/lets-chat-button"
import { SectionTitle } from "@/components/section-title"
import { Paragraph } from "@/components/ui/typography"
import Image from "next/image"
import me from "../../../public/me.png"

export function About() {
  return (
    <section className="container flex flex-col items-center justify-center gap-x-24 gap-y-12 py-20 lg:flex-row">
      <Content />
      <Picture />
    </section>
  )
}

function Content() {
  return (
    <div className="max-w-lg space-y-6 text-center lg:border lg:bg-secondary/30 lg:p-8 lg:text-left">
      <SectionTitle id="about">The Story Behind the Code</SectionTitle>
      <Paragraph>
        My web development journey began in 2020 amidst the challenges of the
        pandemic. Over the past three years, I&apos;ve honed my skills as a Web
        Developer with a focus on front-end design, but my curiosity and
        eagerness to learn have driven me to explore backend development as
        well. I&apos;ve tackled projects of varying scales, delivering solutions
        that have made a significant impact on both companies and end users.
        Each project is a new opportunity to blend creativity with technical
        expertise, and I&apos;m passionate about crafting experiences that
        resonate.
      </Paragraph>
      <LetsChatButton />
    </div>
  )
}

function Picture() {
  return (
    <div className="relative flex max-w-md items-center justify-center lg:mx-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_35%,_#0a0a0a),_linear-gradient(to_right,rgba(0,0,0,0)_80%,_#0a0a0a_100%),_linear-gradient(to_bottom,rgba(0,0,0,0)_80%,_#0a0a0a_100%),_linear-gradient(to_bottom_right,rgba(0,0,0,0)_60%,_#0a0a0a_100%)]"></div>
      <Image
        src={me}
        alt="Carlos Reyes, Web Developer"
        className="h-full w-full object-cover"
      />
    </div>
  )
}
