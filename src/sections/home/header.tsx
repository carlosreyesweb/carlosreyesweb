import { Iso } from "@/components/iso"
import { LetsChatButton } from "@/components/lets-chat-button"
import { SocialLinks } from "@/components/social-links"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { H1, Paragraph, Small } from "../../components/ui/typography"

export function Header() {
  return (
    <header className="container mt-20 flex flex-col items-center justify-center gap-28 py-20 xl:flex-row">
      <Content />
      <Iso className="hidden max-w-md animate-draw [stroke-dasharray:1000] xl:block" />
    </header>
  )
}

function Content() {
  return (
    <div className="space-y-6 text-center sm:max-w-lg md:max-w-xl xl:text-left">
      <Banner />
      <H1>
        Front-End Focused.{" "}
        <span className="text-primary">Full-Stack Ready.</span>
      </H1>
      <Paragraph>
        I&apos;m a Web Developer specializing in sleek, responsive front-end
        designs, with the versatility to handle the full stack. I bring your
        vision to life with clean code and seamless user experiences.
      </Paragraph>
      <div className="flex flex-wrap items-center justify-center gap-2 xl:justify-start">
        <LetsChatButton />
        <SocialLinks />
      </div>
    </div>
  )
}

function Banner() {
  return (
    <Button asChild variant="secondary" className="px-4" size="sm">
      <a href="https://www.esquinadelcodigo.com" target="_blank">
        <Badge>New!</Badge>
        <Small className="ml-2 mr-1">My blog is now live!</Small>
        <ArrowUpRight className="w-5" />
      </a>
    </Button>
  )
}
