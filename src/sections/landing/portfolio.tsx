import { LinkButton } from "@/components/link-button"
import { SectionSubHeading } from "@/components/section-subheading"
import { SectionTitle } from "@/components/section-title"
import { H3 } from "@/components/ui/typography"
import { ArrowUpRight, MessagesSquare } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import laEsquinaDelCodigoCover from "../../../public/projects/la-esquina-del-codigo.png"
import radarCiudadCaracasCover from "../../../public/projects/radar-ciudad-caracas.png"

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-m-20 py-20">
      <div className="container flex flex-col gap-y-8">
        <Header />
        <ProjectsShowcase />
        <CallToAction />
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="text-center">
      <SectionTitle>Portfolio</SectionTitle>
      <SectionSubHeading>
        My Digital Canvas: A Gallery of Interactive Masterpieces.
      </SectionSubHeading>
    </header>
  )
}

function ProjectsShowcase() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ProjectCard
        title="Radar Ciudad Caracas"
        description="Web Application to report incidents in Caracas"
        coverImage={radarCiudadCaracasCover}
        url="https://radarciudad.info"
      />
      <ProjectCard
        title="La Esquina del Código"
        description="Personal Blog about Web Development"
        coverImage={laEsquinaDelCodigoCover}
        url="https://www.esquinadelcodigo.com"
      />
    </ul>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  coverImage: string | StaticImageData
  url: string
}
function ProjectCard({
  title,
  description,
  coverImage,
  url,
}: ProjectCardProps) {
  return (
    <li>
      <figure className="group relative overflow-hidden rounded-lg border focus-within:ring focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
        <Image
          src={coverImage}
          alt={title}
          className="object-cover object-top"
        />
        <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background to-transparent p-6">
          <h3 className="text-lg font-bold">
            <a
              href={url}
              target="_blank"
              className="inline-flex items-center gap-x-1 focus:outline-none group-focus-within:text-primary group-hover:text-primary"
            >
              <span className="absolute inset-0"></span>
              <span>{title}</span>
              <ArrowUpRight className="h-6 w-6" />
            </a>
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </figcaption>
      </figure>
    </li>
  )
}

function CallToAction() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <H3 className="text-center">
        Find out what I can do for you or your business.
      </H3>
      <LinkButton href="/#contact" className="scale-110">
        <MessagesSquare className="mr-2 h-5 w-5" />
        <span>Let&apos;s talk!</span>
      </LinkButton>
    </div>
  )
}
