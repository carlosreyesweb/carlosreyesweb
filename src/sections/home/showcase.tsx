import {
  BentoCard,
  BentoCardProps,
  BentoGrid,
} from "@/components/ui/bento-grid"
import { H2, Paragraph } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import { Radar } from "lucide-react"
import Image, { ImageProps } from "next/image"
import esquinaDelCodigoIcon from "../../../public/projects/esquina-del-codigo-icon.ico"
import esquinaDelCodigo from "../../../public/projects/esquina-del-codigo.png"
import radarCiudadCaracas from "../../../public/projects/radar-ciudad-caracas.png"
import rateSpotAppIcon from "../../../public/projects/ratespot-app-icon.png"
import rateSpotApp from "../../../public/projects/ratespot-app.png"
import rivkaDevelopmentIcon from "../../../public/projects/rivka-development-icon.svg"
import rivkaDevelopmentWebsite from "../../../public/projects/rivka-development-website.png"

const ProjectBackground = ({ className, ...props }: ImageProps) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image
    {...props}
    className={cn(
      "absolute inset-0 h-full w-full object-cover object-top transition-opacity group-hover:opacity-25 group-hover:blur-sm",
      className,
    )}
  />
)

const PROJECTS: BentoCardProps[] = [
  {
    Icon: (props) => (
      <Image src={rateSpotAppIcon} alt="RateSpot Icon" {...props} />
    ),
    background: <ProjectBackground src={rateSpotApp} alt="RateSpot" />,
    name: "RateSpot",
    description:
      "A Mortgage Pricing Engine that helps users find listings, compare rates, and run complete mortgage scenarios.",
    href: "https://www.ratespot.io",
    target: "_blank",
    cta: "Explore RateSpot",
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: (props) => (
      <Image
        src={rivkaDevelopmentIcon}
        alt="Rivka Development Icon"
        {...props}
      />
    ),
    background: (
      <ProjectBackground
        src={rivkaDevelopmentWebsite}
        alt="Rivka Development"
      />
    ),
    name: "Rivka Development",
    description:
      "A website that showcases the services offered by Rivka Development, a Software and Shopify Development Agency.",
    href: "https://rivkadevelopment.com",
    target: "_blank",
    cta: "Visit Website",
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: (props) => (
      <Image
        src={esquinaDelCodigoIcon}
        alt="Esquina del Codigo Icon"
        {...props}
      />
    ),
    background: (
      <ProjectBackground src={esquinaDelCodigo} alt="Esquina del Codigo" />
    ),
    name: "La Esquina del Codigo",
    description:
      "A personal blog where I share tutorials, tips, and tricks about web development, programming, and technology.",
    href: "https://esquinadelcodigo.com",
    target: "_blank",
    cta: "Visit Blog",
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: Radar,
    background: (
      <ProjectBackground src={radarCiudadCaracas} alt="Radar Ciudad Caracas" />
    ),
    name: "Radar Ciudad Caracas",
    description:
      "A public service failure reporting software that allows citizens to report issues in their community.",
    href: "https://radarciudad.info",
    target: "_blank",
    cta: "Play with the Radar",
    className: "col-span-3 lg:col-span-2",
  },
]

export function Showcase() {
  return (
    <section className="container space-y-8">
      <hgroup>
        <H2 id="showcase" className="text-center">
          Projects That Speak Volumes
        </H2>
        <Paragraph className="mx-auto max-w-3xl text-center">
          Discover the projects that showcase my journey from front-end finesse
          to full-stack versatility. Each project is a testament to my ability
          to turn ideas into impactful solutions, blending creativity with
          technical expertise to make a real difference.
        </Paragraph>
      </hgroup>
      <BentoGrid>
        {PROJECTS.map((project) => (
          <BentoCard key={project.name} {...project} />
        ))}
      </BentoGrid>
    </section>
  )
}
