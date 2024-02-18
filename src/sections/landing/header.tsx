import { GridBackgroundWrapper } from "@/components/grid-background-wrapper"
import { Iso } from "@/components/iso"
import { LetsChatButton } from "@/components/lets-chat-button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Logo } from "../../components/logo"
import { Menu } from "../../components/menu"
import { Navigation } from "../../components/navigation"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { H1, Paragraph, Small } from "../../components/ui/typography"

export function Header() {
  return (
    <header>
      <Navbar />
      <GridBackgroundWrapper>
        <div className="container mt-20 flex flex-col items-center justify-center gap-28 py-20 xl:flex-row">
          <Content />
          <Iso className="hidden max-w-md animate-draw [stroke-dasharray:1000] [stroke-dashoffset:1000] xl:block" />
        </div>
      </GridBackgroundWrapper>
    </header>
  )
}

function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full border-b bg-background/50 py-4 backdrop-blur">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <Navigation variant="navbar" />
        <Menu />
      </nav>
    </div>
  )
}

function Content() {
  return (
    <div className="space-y-6 text-center sm:max-w-lg md:max-w-xl xl:text-left">
      <Banner />
      <H1>
        Building Interfaces that <span className="text-primary">Inspire</span>.
      </H1>
      <Paragraph>
        Websites shouldn&apos;t snooze. I build powerful, dynamic experiences
        that tell your brand story like no other. Let&apos;s collaborate!
      </Paragraph>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center xl:justify-start">
        <LetsChatButton />
        <Button asChild variant="secondary">
          <a href="https://resume.carlosreyesweb.com">View Resume</a>
        </Button>
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
