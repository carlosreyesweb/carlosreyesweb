import { ContactMeButton } from "@/components/contact-me-button"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Css3Original,
  Html5Original,
  JavascriptOriginal,
  NextjsLine,
  ReactOriginal,
  TailwindcssPlain,
  TypescriptOriginal,
} from "devicons-react"
import { ArrowUpRight, MessageCircleHeart } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"
import { Logo } from "../../components/logo"
import { Menu } from "../../components/menu"
import { Navigation } from "../../components/navigation"
import { SocialLinks } from "../../components/social-links"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { H1, Paragraph, Small } from "../../components/ui/typography"

export function Header() {
  return (
    <header className="pb-20">
      <Navbar />
      <DotGridWrapper>
        <div className="container flex flex-col items-center gap-y-8 py-24 duration-1000 ease-out animate-in fade-in slide-in-from-bottom-10 md:py-28">
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
  const isDesktop = useMediaQuery("lg")

  return (
    <div className="sticky top-0 z-50 border-b bg-background py-4">
      <div className="container flex items-center justify-between">
        <nav className="flex items-end gap-x-6">
          <Link href="/">
            <Logo />
          </Link>
          <Navigation variant="navbar" />
        </nav>
        <SocialLinks className="sr-only lg:not-sr-only" />
        {isDesktop ? null : <Menu />}
      </div>
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
    <Button asChild variant="secondary" className="rounded-full">
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
      <H1 className="xl:text-6xl 2xl:text-7xl">
        Building Interfaces that <span className="text-primary">Inspire</span>.
      </H1>
      <Paragraph className="lg:text-xl">
        Websites shouldn&apos;t be boring. They should be powerful, interactive,
        and unforgettable. As a Frontend Developer, I bring your vision to life
        with flawless functionality and user-centric design. Let&apos;s break
        the mold and build something extraordinary.
      </Paragraph>
    </div>
  )
}

function CallToActionButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <ContactMeButton />
      <Button asChild variant="secondary" className="space-x-2">
        <Link href="https://forms.gle/d8ewgp7sd5TJEKdT6" target="_blank">
          <MessageCircleHeart className="w-5" />
          <span>Leave Feedback</span>
        </Link>
      </Button>
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
      <div className="relative w-full overflow-hidden before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-1/2 before:bg-gradient-to-r before:from-background before:to-transparent after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-1/2 after:bg-gradient-to-l after:from-background after:to-transparent">
        <ul className="flex animate-slide space-x-10">
          {dupedSkills.map(({ name, icon: Icon }, key) => (
            <li
              key={key}
              title={name}
              className="flex flex-col items-center gap-y-2"
            >
              <Icon size="45" color="white" />
              <span className="text-sm font-medium">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
