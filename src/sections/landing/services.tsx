import { LinkButton } from "@/components/link-button"
import { SectionSubHeading } from "@/components/section-subheading"
import { SectionTitle } from "@/components/section-title"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Paragraph } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  Globe,
  LayoutDashboard,
  LucideIcon,
  Plane,
} from "lucide-react"
import { ReactNode } from "react"
import Tilt from "react-parallax-tilt"

export function Services() {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-y-8">
        <Header />
        <ServicesGrid />
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="text-center lg:text-left">
      <SectionTitle id="services">Services</SectionTitle>
      <SectionSubHeading>
        Custom Solutions for Your Unique Challenges.
      </SectionSubHeading>
    </header>
  )
}

function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Service
        title="Web Applications"
        description="Best suited for complex applications that require a lot of interactivity and real-time updates."
        icon={LayoutDashboard}
      >
        <Paragraph>
          A web application is a website that behaves like a native application.
          It can be a single page application (SPA), a multi-page application
          (MPA) or a progressive web application (PWA). Each one has its own
          advantages and disadvantages. I can help you choose the right one for
          your needs.
        </Paragraph>
      </Service>
      <Service
        title="Websites"
        description="Best overall for most use cases. It's the most common type of website."
        icon={Globe}
      >
        <Paragraph>
          A website is a collection of web pages that are linked together.
          It&apos;s the most common type of website. This is the best choice for
          everything that is content-driven, like a blog or a portfolio.
          It&apos;s also the best choice if you want to rank high on search
          engines.
        </Paragraph>
      </Service>
      <Service
        title="Landing Pages"
        description="Perfect for marketing campaigns, a landing page is a single page website that is designed to convert visitors into leads."
        icon={Plane}
      >
        <Paragraph>
          A landing page is a single page website that is designed to grab the
          visitor&apos;s attention and convert them into leads. Give me your
          design, and I will turn it into an effective landing page that will
          make your business grow in almost no time.
        </Paragraph>
      </Service>
    </div>
  )
}

interface ServiceProps {
  className?: string
  title: string
  icon?: LucideIcon
  description: string
  children?: ReactNode
}
function Service({
  className,
  title,
  description,
  children,
  icon: Icon,
}: ServiceProps) {
  return (
    <Tilt
      className={cn("", className)}
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      glareEnable
      glareColor="#33DFBD"
      glareMaxOpacity={0.2}
      glarePosition="all"
    >
      <Card className="grid h-full grid-rows-[auto_1fr_auto] bg-secondary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            {Icon && <Icon className="h-8 w-8 text-primary" />}
            <span>{title}</span>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="justify-end">
          <LinkButton href="/#contact">
            <span>I want this!</span>
            <ArrowRight className="ml-1 h-5 w-5" />
          </LinkButton>
        </CardFooter>
      </Card>
    </Tilt>
  )
}
