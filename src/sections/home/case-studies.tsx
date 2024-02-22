import { LaptopMockup } from "@/components/mockups"
import { SectionTitle } from "@/components/section-title"
import { Separator } from "@/components/ui/separator"
import { H3, Paragraph } from "@/components/ui/typography"
import { ArrowUpRight } from "lucide-react"
import { StaticImageData } from "next/image"
import esquinaDelCodigo from "../../../public/projects/esquina-del-codigo.png"
import radarCiudadCaracas from "../../../public/projects/radar-ciudad-caracas.png"
import rivkaDevelopmentWebsite from "../../../public/projects/rivka-development-website.png"

export function CaseStudies() {
  return (
    <section className="container flex flex-col space-y-8 py-20">
      <SectionTitle id="case-studies" className="text-center">
        Real-World Impact: Witness the Power of Collaboration
      </SectionTitle>
      <Paragraph className="mx-auto max-w-4xl text-center">
        See how I&apos;ve partnered with diverse clients to deliver successful
        frontend projects that drove results. Explore case studies showcasing
        diverse challenges and solutions.
      </Paragraph>
      <div>
        <RadarCiudadCaracas />
        <RivkaDevelopmentWebsite />
        <LaEsquinaDelCodigo />
      </div>
    </section>
  )
}

function RadarCiudadCaracas() {
  return (
    <CaseStudy
      title="Radar Ciudad Caracas"
      description="neuralgeeks hired me to develop a web application that would 
      allow citizens to report failures in public services in a simple and 
      intuitive way. The results? See for yourself."
      metrics={[
        {
          value: "60,000+",
          description: "Reports created",
        },
        {
          value: "450,000+",
          description: "Users registered",
        },
      ]}
      screenshot={radarCiudadCaracas}
      url="https://radarciudad.info"
    />
  )
}

function RivkaDevelopmentWebsite() {
  return (
    <CaseStudy
      title="Rivka Development"
      description="I was hired to redo their website, and the result was a 
      modern and professional website that showcases their projects and 
      services in a way that reflects their brand and professionalism. The
      website is also fully responsive and optimized for SEO, which has
      helped them to attract new clients."
      screenshot={rivkaDevelopmentWebsite}
      url="https://rivkadevelopment.com"
    />
  )
}

function LaEsquinaDelCodigo() {
  return (
    <CaseStudy
      title="La Esquina del Código"
      description="During my time off, I developed a blog to share my knowledge
      and experiences in the world of web development. I wanted it to be as 
      minimal as possible, but also to have a modern and professional look. It 
      was a great opportunity to learn new technologies and to share my 
      knowledge with the community."
      screenshot={esquinaDelCodigo}
      url="https://www.esquinadelcodigo.com"
    />
  )
}

interface CaseStudyProps {
  title: string
  description: string
  screenshot: string | StaticImageData
  url: string
  metrics?: {
    value: string
    description: string
  }[]
}
function CaseStudy({
  title,
  description,
  screenshot,
  url,
  metrics,
}: CaseStudyProps) {
  return (
    <figure className="group flex flex-col items-center justify-center gap-x-20 gap-y-6 py-8 lg:flex-row lg:items-center lg:py-12">
      <LaptopMockup screenshot={screenshot} alt={title} className="max-w-lg" />
      <figcaption className="w-full max-w-lg space-y-6 lg:group-even:-order-1">
        <H3>
          <a href={url} target="_blank" className="hover:text-primary">
            <span>{title}</span>
            <ArrowUpRight className="ml-1 inline-block h-6 w-6" />
          </a>
        </H3>
        <Paragraph>{description}</Paragraph>
        {metrics ? <Separator /> : null}
        {metrics ? (
          <dl className="flex gap-x-10">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col">
                <dt className="text-muted-foreground">{metric.description}</dt>
                <dd className="order-first text-3xl font-bold">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </figcaption>
    </figure>
  )
}
