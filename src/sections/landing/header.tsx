import { LetsChatButton } from "@/components/lets-chat-button"
import { LinkButton } from "@/components/link-button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Css3Original,
  Html5Original,
  JavascriptOriginal,
  NextjsLine,
  ReactOriginal,
  TailwindcssPlain,
  TypescriptOriginal,
} from "devicons-react"
import AutoPlay from "embla-carousel-autoplay"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"
import { Logo } from "../../components/logo"
import { Menu } from "../../components/menu"
import { Navigation } from "../../components/navigation"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { H1, Paragraph, Small } from "../../components/ui/typography"

export function Header() {
  return (
    <header className="mt-20 pb-20">
      <Navbar />
      <DotGridWrapper>
        <div className="container flex flex-col items-center space-y-8 py-28 duration-1000 ease-out animate-in fade-in slide-in-from-bottom-10">
          <NewCallout />
          <HeadlineAndSupportingText />
          <CallToActionButtons />
        </div>
        <SkillsShowcase />
      </DotGridWrapper>
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

function DotGridWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[radial-gradient(circle,_#2B2B2B_3px,_rgba(0,_0,_0,_0)_1px)] bg-[size:40px_40px]">
      <div className="bg-gradient-to-br from-transparent to-background">
        {children}
      </div>
    </div>
  )
}

function NewCallout() {
  return (
    <Button asChild variant="secondary" className="rounded-full px-4" size="sm">
      <a href="https://www.esquinadelcodigo.com" target="_blank">
        <Badge>New!</Badge>
        <Small className="ml-2 mr-1">My blog is now live!</Small>
        <ArrowUpRight className="w-5" />
      </a>
    </Button>
  )
}

function HeadlineAndSupportingText() {
  return (
    <div className="text-center sm:max-w-lg md:max-w-xl xl:max-w-3xl">
      <H1>
        Building Interfaces that <span className="text-primary">Inspire</span>.
      </H1>
      <Paragraph>
        Websites shouldn&apos;t snooze. I build powerful, dynamic experiences
        that tell your brand story like no other. Let&apos;s collaborate!
      </Paragraph>
    </div>
  )
}

function CallToActionButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <LetsChatButton />
      <LinkButton
        variant="secondary"
        href="https://forms.gle/NTyPaBZaXGofPnCm9"
        target="_blank"
      >
        Leave feedback
      </LinkButton>
    </div>
  )
}

const skills = [
  {
    name: "Next.js",
    icon: NextjsLine,
  },
  {
    name: "React",
    icon: ReactOriginal,
  },
  {
    name: "Tailwind",
    icon: TailwindcssPlain,
  },
  {
    name: "TypeScript",
    icon: TypescriptOriginal,
  },
  {
    name: "JavaScript",
    icon: JavascriptOriginal,
  },
  {
    name: "HTML5",
    icon: Html5Original,
  },
  {
    name: "CSS3",
    icon: Css3Original,
  },
]
const dupedSkills = skills.concat(skills).concat(skills).concat(skills)

function SkillsShowcase() {
  return (
    <div className="container flex w-full flex-col items-center space-y-6">
      <Small className="text-center">
        Currently working with <strong>these technologies:</strong>
      </Small>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[AutoPlay({ delay: 1000, stopOnInteraction: false })]}
        className="w-full before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-1/2 before:bg-gradient-to-r before:from-background before:to-transparent after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-1/2 after:bg-gradient-to-l after:from-background after:to-transparent"
      >
        <CarouselContent>
          {dupedSkills.map(({ name, icon: Icon }, index) => (
            <CarouselItem
              key={index}
              className="basis-1/4 md:basis-1/6 lg:basis-1/12"
            >
              <div className="flex flex-col items-center gap-y-2">
                <Icon size="45" color="white" />
                <span className="text-sm font-medium">{name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
