import { ContactButton } from "@/components/contact-button"
import { Iso } from "@/components/iso"
import { SocialLinks } from "@/components/social-links"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { H1, Paragraph, Small } from "@/components/ui/typography"
import { differenceInYears } from "date-fns"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import me from "../../../public/me.png"
import { JOBS } from "./work-experience"

const START_DATE = JOBS.at(-1)?.startDate ?? new Date("2020-03-01")

export function Header() {
  return (
    <header className="container mt-20 flex flex-col items-center justify-center gap-28 py-20 xl:flex-row">
      <div className="space-y-6 text-center sm:max-w-lg md:max-w-xl xl:text-left">
        <Button asChild variant="secondary" className="px-4" size="sm">
          <a href="https://www.esquinadelcodigo.com" target="_blank">
            <Badge>New!</Badge>
            <Small className="ml-2 mr-1">My blog is now live!</Small>
            <ArrowUpRight className="w-5" />
          </a>
        </Button>
        <H1>
          Crafting <span className="text-primary">Modern Web Experiences</span>
        </H1>
        <Paragraph>
          Hi, I&apos;m <strong>Carlos Reyes</strong>, a Full Stack Web Developer
          with{" "}
          <strong className="text-primary">
            {differenceInYears(new Date(), START_DATE)} years of experience
          </strong>{" "}
          specializing in sleek, responsive front-end designs and robust
          back-end solutions. I bring your vision to life with clean code and
          seamless user experiences.
        </Paragraph>
        <div className="flex flex-wrap items-center justify-center gap-2 xl:justify-start">
          <ContactButton />
          <SocialLinks />
        </div>
      </div>
      <div className="relative hidden w-full max-w-md xl:block">
        <Iso className="absolute inset-0 animate-draw stroke-primary [stroke-dasharray:1000]" />
        <Image
          src={me}
          alt="Carlos Reyes"
          className="relative h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_35%,_#0a0a0a),_linear-gradient(to_right,rgba(0,0,0,0)_80%,_#0a0a0a_100%),_linear-gradient(to_bottom,rgba(0,0,0,0)_80%,_#0a0a0a_100%),_linear-gradient(to_bottom_right,rgba(0,0,0,0)_60%,_#0a0a0a_100%)]" />
      </div>
    </header>
  )
}
