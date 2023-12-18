import { Download, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { H1, Paragraph } from "../ui/typography"
import { ChangelogCTA } from "./changelog-cta"
import { Navbar } from "./navbar"
import { SkillsShowcase } from "./skills-showcase"

export function Header() {
  return (
    <header className="pb-20">
      <Navbar />
      <div className="bg-[radial-gradient(circle,_#2B2B2B_3px,_rgba(0,_0,_0,_0)_1px)] bg-[size:40px_40px]">
        <div className="bg-gradient-to-br from-transparent to-background">
          <div className="container flex flex-col items-center gap-y-8 py-24 duration-1000 ease-out animate-in fade-in slide-in-from-bottom-10 md:py-28">
            <ChangelogCTA redirectTo="https://www.esquinadelcodigo.com">
              My blog is now live!
            </ChangelogCTA>
            <div className="text-center sm:max-w-lg md:max-w-xl xl:max-w-3xl">
              <H1 className="xl:text-6xl 2xl:text-7xl">
                An Expert Software Developer for Your Next{" "}
                <span className="text-primary before:content-['<'] after:content-['_/>']">
                  Project
                </span>
              </H1>
              <Paragraph className="lg:text-xl">
                Hi! I&apos;m <strong>Carlos Reyes</strong>, a Software Developer
                with 3+ years of experience building websites and web
                applications. I specialize in JavaScript and TypeScript, and I
                have professional experience working with React.
              </Paragraph>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild className="space-x-2">
                <Link href="/#contact">
                  <Mail className="w-5" />
                  <span>Contact me</span>
                </Link>
              </Button>
              <Button asChild variant="secondary" className="space-x-2">
                <Link href="/">
                  <Download className="w-5" />
                  <span>Download CV</span>
                </Link>
              </Button>
            </div>
          </div>
          <SkillsShowcase />
        </div>
      </div>
    </header>
  )
}
