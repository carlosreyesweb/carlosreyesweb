import { ContactMeButton } from "@/components/contact-me-button"
import { SectionSubHeading } from "@/components/section-subheading"
import { SectionTitle } from "@/components/section-title"
import { Paragraph } from "@/components/ui/typography"
import Image from "next/image"
import me from "../../../public/me.png"

export function About() {
  return (
    <section className="py-20">
      <div className="container flex flex-col justify-center gap-x-24 gap-y-12 rounded-lg border-l border-r lg:flex-row lg:items-center">
        <Content />
        <Picture />
      </div>
    </section>
  )
}

function Content() {
  return (
    <div className="relative mx-auto max-w-lg text-center lg:mx-0 lg:text-left xl:rounded-xl xl:border xl:bg-gradient-to-b xl:from-secondary/50 xl:to-background xl:p-8">
      <header>
        <SectionTitle id="about">About me</SectionTitle>
        <SectionSubHeading>
          The Full-Fledged Professional You Need
        </SectionSubHeading>
      </header>
      <Paragraph>
        23 years old, born and raised in Venezuela, I have delivered more than
        8+ products that have helped people in their daily lives. I am a
        software developer with 3 years of experience in the field, I have
        worked with different technologies and I am always looking to learn
        more.
      </Paragraph>
      <div className="mt-6">
        <ContactMeButton />
      </div>
    </div>
  )
}

function Picture() {
  return (
    <div className="relative mx-auto flex max-w-lg justify-center before:absolute before:bottom-0 before:top-1/4 before:h-1/2 before:w-1/2 before:rounded-full before:bg-gradient-to-t before:from-transparent before:to-primary before:blur-3xl after:absolute after:h-full after:w-full after:bg-gradient-to-b after:from-transparent after:from-50% after:to-background lg:mx-0">
      <Image
        src={me}
        alt="Carlos Reyes, Software Developer"
        className="h-full w-full object-cover contrast-125"
      />
    </div>
  )
}
