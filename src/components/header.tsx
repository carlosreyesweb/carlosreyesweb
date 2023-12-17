import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import {
  AngularjsOriginal,
  Css3Original,
  Html5Original,
  JavascriptOriginal,
  NextjsLine,
  ReactOriginal,
  TailwindcssPlain,
  TypescriptOriginal,
} from "devicons-react";
import { ArrowUpRight, Download, Mail, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef, useState } from "react";
import logo from "../../public/logo.svg";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { H1, H3, Paragraph, Small } from "./ui/typography";

export function Header() {
  return (
    <header>
      <Navbar />
      <div className="bg-[radial-gradient(circle,_#2B2B2B_1px,_rgba(0,_0,_0,_0)_1px)] bg-[size:40px_40px]">
        <div className="bg-gradient-to-br from-transparent to-background">
          <div className="container flex flex-col items-center gap-y-8 py-24 duration-1000 ease-out animate-in fade-in slide-in-from-bottom-10 sm:py-36">
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
            <SkillsShowcase />
          </div>
        </div>
      </div>
    </header>
  );
}

function LogoLink() {
  return (
    <Link href="/">
      <Image src={logo} alt="Carlos Reyes" className="w-28" priority />
    </Link>
  );
}

function Navbar() {
  const isDesktop = useMediaQuery("lg");

  return (
    <div className="sticky top-0 border-b bg-background py-4">
      <div className="container flex items-center justify-between">
        <LogoLink />
        <DesktopNavigation />
        {isDesktop || <MobileNavigation />}
      </div>
    </div>
  );
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
];

function DesktopNavigation() {
  return (
    <nav className="max-lg:sr-only">
      <ul className="flex items-center">
        {navigation.map((item) => (
          <li key={item.path}>
            <Button asChild variant="link">
              <Link href={item.path}>{item.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavigation() {
  const [open, setOpen] = useState(false);

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
        <nav className="grid gap-y-5 py-5">
          <H3 className="border-b pb-1">Navigation</H3>
          <ul>
            {navigation.map((item) => (
              <li key={item.path}>
                <Button
                  asChild
                  variant="link"
                  className="w-full justify-start p-0"
                >
                  <Link href={item.path} onClick={() => setOpen(false)}>
                    {item.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

interface ChangelogCTAProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href" | "target"> {
  redirectTo: string;
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
  );
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
    name: "TailwindCSS",
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
];

function SkillsShowcase() {
  return (
    <div className="mt-4 flex max-w-md flex-col items-center space-y-6">
      <Small>
        Currently working with <strong>these technologies:</strong>
      </Small>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {skills.map(({ name, icon: Icon }) => (
          <TooltipProvider key={name} delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Icon size="35" color="white" />
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={10}>
                {name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
