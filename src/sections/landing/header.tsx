import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Css3Original,
  Html5Original,
  JavascriptOriginal,
  MysqlPlain,
  NestjsPlain,
  NextjsLine,
  NodejsOriginal,
  ReactOriginal,
  TailwindcssPlain,
  TypescriptOriginal,
} from "devicons-react"
import { ArrowUpRight, FileText, Mail } from "lucide-react"
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
    <div className="sticky top-0 border-b bg-background py-4">
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
        An Expert Software Developer for Your Next{" "}
        <span className="text-primary before:content-['<'] after:content-['_/>']">
          Project
        </span>
      </H1>
      <Paragraph className="lg:text-xl">
        Hi! I&apos;m <strong>Carlos Reyes</strong>, a Software Developer with 3+
        years of experience building websites and web applications. I specialize
        in JavaScript and TypeScript, and I have professional experience working
        with React.
      </Paragraph>
    </div>
  )
}

function CallToActionButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button asChild className="space-x-2">
        <Link href="/#contact">
          <Mail className="w-5" />
          <span>Contact me</span>
        </Link>
      </Button>
      <Button asChild variant="secondary" className="space-x-2">
        <a
          href="https://drive.google.com/file/d/14RmIdmUncGdnTZA2iwQPNquZJSS1kb8g/view?usp=sharing"
          target="_blank"
        >
          <FileText className="w-5" />
          <span>View resume</span>
        </a>
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
    name: "Nest.js",
    icon: NestjsPlain,
  },
  {
    name: "MySQL",
    icon: MysqlPlain,
  },
  {
    name: "Node.js",
    icon: NodejsOriginal,
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
      <div className="relative w-full overflow-hidden">
        <div
          role="presentation"
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1/2 bg-gradient-to-r from-background to-transparent"
        />
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
        <div
          role="presentation"
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/2 bg-gradient-to-l from-background to-transparent"
        />
      </div>
    </div>
  )
}
