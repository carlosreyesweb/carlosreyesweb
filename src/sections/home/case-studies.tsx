import { LaptopMockup } from "@/components/mockups"
import { SectionTitle } from "@/components/section-title"
import { Separator } from "@/components/ui/separator"
import { H3, Paragraph } from "@/components/ui/typography"
import { ArrowUpRight } from "lucide-react"
import { StaticImageData } from "next/image"
import esquinaDelCodigo from "../../../public/projects/esquina-del-codigo.png"
import radarCiudadCaracas from "../../../public/projects/radar-ciudad-caracas.png"
import rateSpotLandingPage from "../../../public/projects/ratespot-landing-page.png"
import rivkaDevelopmentWebsite from "../../../public/projects/rivka-development-website.png"
import tours360LandingPage from "../../../public/projects/tours360-landing-page.png"

export function CaseStudies() {
  return (
    <section className="container flex flex-col space-y-8 py-20">
      <SectionTitle id="case-studies" className="text-center">
        Projects That Speak Volumes
      </SectionTitle>
      <Paragraph className="mx-auto max-w-4xl text-center">
        Discover the projects that showcase my journey from front-end finesse to
        full-stack versatility. Each project is a testament to my ability to
        turn ideas into impactful solutions, blending creativity with technical
        expertise to make a real difference.
      </Paragraph>
      <div>
        <RateSpotLandingPage />
        <Tours360LandingPage />
        <RivkaDevelopmentWebsite />
        <LaEsquinaDelCodigo />
        <RadarCiudadCaracas />
      </div>
    </section>
  )
}

function RateSpotLandingPage() {
  return (
    <CaseStudy
      title="RateSpot Landing Page"
      description="I've been working closely with the RateSpot team to develop a
      landing page that showcases their product and services. The site is
      built with Next.js, and it's hosted on Vercel. The design is modern,
      clean, and user-friendly, making it easy for visitors to learn more
      about RateSpot and sign up for their services."
      screenshot={rateSpotLandingPage}
      url="https://www.ratespot.io"
    />
  )
}

function Tours360LandingPage() {
  return (
    <CaseStudy
      title="TOURS360 Landing Page"
      description="I was hired to develop an eye-catching landing page to 
      promote a new Real Estate virtual tour service for anyone who wants 
      to showcase their properties without having to make an appointment 
      upfront. The site is built with Next.js, and it's hosted on Vercel."
      screenshot={tours360LandingPage}
      url="https://tours360.io"
    />
  )
}

function RadarCiudadCaracas() {
  return (
    <CaseStudy
      title="Radar Ciudad Caracas"
      description="I developed a high-impact public service 
      failure reporting software for Radar Ciudad Caracas, handling over 
      74,000 reports and aiding more than 800 users across the Capital 
      District of Venezuela. This software greatly improved communication 
      between citizens and service providers."
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
      title="Rivka Development Website"
      description="I was engaged to revamp their website, resulting in a 
      contemporary, professional site that highlights their projects and 
      services, reflecting their brand and professionalism. The site is fully 
      responsive, SEO-optimized, and has successfully attracted new clients."
      screenshot={rivkaDevelopmentWebsite}
      url="https://rivkadevelopment.com"
    />
  )
}

function LaEsquinaDelCodigo() {
  return (
    <CaseStudy
      title="La Esquina del Código"
      description="During my downtime, I created a blog to share my insights 
      and experiences in web development. I aimed for a minimalist yet modern 
      and professional look. It was a fantastic opportunity to learn new 
      technologies and share my expertise with the community."
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
