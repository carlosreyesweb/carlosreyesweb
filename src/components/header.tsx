import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import {
  AngularjsOriginal,
  Css3Original,
  Html5Original,
  JavascriptOriginal,
  NextjsLine,
  ReactOriginal,
  TailwindcssPlain,
  TypescriptOriginal,
} from "devicons-react"
import {
  ArrowUpRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Rss,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ComponentPropsWithoutRef, useState } from "react"
import logo from "../../public/logo.svg"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { H1, H3, Paragraph, Small } from "./ui/typography"

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
                An Expert Frontend Developer for Your Next{" "}
                <span className="text-primary">&lt;Project /&gt;</span>
                <span className="animate-ping duration-300 direction-alternate">
                  _
                </span>
              </H1>
              <Paragraph className="lg:text-xl">
                Hi! I&apos;m <strong>Carlos Reyes</strong>, a Frontend Developer
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

function LogoLink() {
  return (
    <Link href="/">
      <Image src={logo} alt="Carlos Reyes" className="w-24" priority />
    </Link>
  )
}

function Navbar() {
  const isDesktop = useMediaQuery("lg")

  return (
    <div className="sticky top-0 border-b bg-background py-4">
      <div className="container flex items-center justify-between">
        <DesktopNavigation />
        <SocialLinks />
        {isDesktop || <MobileNavigation />}
      </div>
    </div>
  )
}

const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Services",
    path: "/#services",
  },
  {
    name: "Portfolio",
    path: "/#portfolio",
  },
  {
    name: "Testimonials",
    path: "/#testimonials",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
]

const socialLinks = [
  {
    name: "Blog",
    link: "https://www.esquinadelcodigo.com",
    icon: Rss,
  },
  {
    name: "GitHub",
    link: "https://github.com/carlosreyesweb",
    icon: Github,
  },

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/carlosreyesweb",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/carlosreyesweb",
    icon: Instagram,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/carlosreyesweb",
    icon: Twitter,
  },
]

function SocialLinks() {
  return (
    <ul className="sr-only flex items-center lg:not-sr-only">
      {socialLinks.map(({ name, link, icon: Icon }) => (
        <li key={name}>
          <Button asChild variant="ghost" size="icon">
            <a href={link} target="_blank" title={name}>
              <Icon className="w-5" />
            </a>
          </Button>
        </li>
      ))}
    </ul>
  )
}

function DesktopNavigation() {
  return (
    <nav className="flex items-end gap-x-6">
      <LogoLink />
      <ul className="sr-only flex items-center lg:not-sr-only">
        {navigation.map((item) => (
          <li key={item.name}>
            <Button asChild variant="link">
              <Link href={item.path}>{item.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="text-left">
          <LogoLink />
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 py-5">
          <div className="space-y-2">
            <H3 className="border-b pb-1">Navigation</H3>
            <ul>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Button asChild variant="link" className="p-0">
                    <Link href={item.path} onClick={() => setOpen(false)}>
                      {item.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <H3 className="border-b pb-1">Social</H3>
            <ul>
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <Button asChild variant="link" className="p-0">
                    <Link
                      href={item.link}
                      target="_blank"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface ChangelogCTAProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href" | "target"> {
  redirectTo: string
}
function ChangelogCTA({
  redirectTo,
  children,
  className,
  ...props
}: ChangelogCTAProps) {
  return (
    <Button
      asChild
      variant="secondary"
      className={cn("rounded-full", className)}
    >
      <a href={redirectTo} target="_blank" {...props}>
        <Badge>New!</Badge>
        <Small className="ml-2 mr-1">{children}</Small>
        <ArrowUpRight className="w-5" />
      </a>
    </Button>
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
    name: "Angular",
    icon: AngularjsOriginal,
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

function SkillsShowcase() {
  return (
    <div className="container flex w-full flex-col items-center space-y-6">
      <Small className="text-center">
        Currently working with <strong>these technologies:</strong>
      </Small>
      <div className="relative w-full overflow-hidden">
        <div
          role="presentation"
          className="absolute left-0 top-0 z-10 h-full w-1/2 bg-gradient-to-r from-background to-transparent"
        />
        <ul className="flex animate-slide space-x-10">
          {skills
            .concat(skills)
            .concat(skills)
            .concat(skills)
            .map(({ name, icon: Icon }, key) => (
              <li
                key={key}
                title={name}
                className="flex items-center justify-center"
              >
                <Icon size="45" color="white" />
                <span className="sr-only">{name}</span>
              </li>
            ))}
        </ul>
        <div
          role="presentation"
          className="absolute right-0 top-0 z-10 h-full w-1/2 bg-gradient-to-l from-background to-transparent"
        />
      </div>
    </div>
  )
}
