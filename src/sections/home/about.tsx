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
      <SectionTitle id="about">
        The Digital Artisan Behind The Pixels
      </SectionTitle>
      <Paragraph>
        At age 23, with my roots in Venezuela and a passion for simplifying
        lives, I&apos;ve contributed to the creation of over 8 daily-use
        products. As a seasoned frontend developer for 3 years, I consistently
        break boundaries and adopt new technologies, driven by curiosity and a
        love for aesthetically pleasing, accessible web experiences.
      </Paragraph>
      <LetsChatButton />
    </div>
  )
}

function Picture() {
  return (
    <div className="relative flex max-w-lg justify-center before:absolute before:bottom-0 before:top-1/4 before:h-1/2 before:w-1/2 before:rounded-full before:bg-gradient-to-t before:from-transparent before:to-primary before:blur-3xl after:absolute after:h-full after:w-full after:bg-gradient-to-b after:from-transparent after:from-50% after:to-background lg:mx-0">
      <Image
        src={me}
        alt="Carlos Reyes, Frontend Developer"
        className="h-full w-full object-cover contrast-125"
      />
    </div>
  )
}
