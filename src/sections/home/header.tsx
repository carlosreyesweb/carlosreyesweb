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
        Crafting <span className="text-primary">Inspiring</span> Digital
        Interfaces
      </H1>
      <Paragraph>
        Experience dynamic, powerful websites that narrate your unique brand
        story. Let&apos;s collaborate and create magic!
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
