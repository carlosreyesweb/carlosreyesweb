import { LinkButton } from "@/components/link-button"
import { SectionSubHeading } from "@/components/section-subheading"
import { SectionTitle } from "@/components/section-title"
import { Paragraph } from "@/components/ui/typography"
import { MessagesSquare } from "lucide-react"
import Image from "next/image"
import me from "../../../public/me.png"

export function About() {
  return (
    <section id="about" className="scroll-m-20 py-20">
      <div className="container flex flex-col justify-center gap-x-24 gap-y-12 lg:flex-row lg:items-center">
        <Content />
        <Picture />
      </div>
    </section>
  )
}

function Content() {
  return (
    <div className="relative mx-auto max-w-lg text-center lg:mx-0 lg:rounded-lg lg:border lg:bg-gradient-to-b lg:from-secondary/50 lg:to-background lg:p-8 lg:text-left">
      <header>
        <SectionTitle>About me</SectionTitle>
        <SectionSubHeading>
          Beyond the Code: The Human Behind the Pixels.
        </SectionSubHeading>
      </header>
      <Paragraph>
        At 23, with roots in Venezuela and a passion for making lives easier,
        I&apos;ve helped build over 8 products used by people every day. As a
        3-year frontend developer, I&apos;m always pushing boundaries and
        embracing new technologies, fueled by curiosity and a love for
        beautiful, accessible web experiences.
      </Paragraph>
      <div className="mt-6">
        <LinkButton href="/#contact">
          <MessagesSquare className="mr-2 h-5 w-5" />
          <span>Let&apos;s chat!</span>
        </LinkButton>
      </div>
    </div>
  )
}

function Picture() {
  return (
    <div className="relative mx-auto flex max-w-lg justify-center before:absolute before:bottom-0 before:top-1/4 before:h-1/2 before:w-1/2 before:rounded-full before:bg-gradient-to-t before:from-transparent before:to-primary before:blur-3xl after:absolute after:h-full after:w-full after:bg-gradient-to-b after:from-transparent after:from-50% after:to-background lg:mx-0">
      <Image
        src={me}
        alt="Carlos Reyes, Frontend Developer"
        className="h-full w-full object-cover contrast-125"
      />
    </div>
  )
}
