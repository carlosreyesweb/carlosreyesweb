import { LaptopMockup } from "@/components/mockups"
import { SectionTitle } from "@/components/section-title"
import { Separator } from "@/components/ui/separator"
import { H3, Paragraph } from "@/components/ui/typography"
import { ArrowUpRight } from "lucide-react"
import { StaticImageData } from "next/image"
import radarCiudadCaracas from "../../../public/projects/radar-ciudad-caracas.png"
import rivkaDevelopmentWebsite from "../../../public/projects/rivka-development-website.png"

export function CaseStudies() {
  return (
    <section className="container flex flex-col space-y-8 py-20">
      <SectionTitle id="case-studies" className="text-center">
        How I Solved Real-World Web Challenges
      </SectionTitle>
      <Paragraph className="mx-auto max-w-4xl text-center">
        Forget theory, see real-world web challenges solved! From complex
        e-commerce platforms to high-traffic websites, I share not just
        successes but the thought processes and strategies behind them,
        equipping you with valuable insights for your own projects.
      </Paragraph>
      <div>
        <RivkaDevelopmentWebsite />
        <RadarCiudadCaracas />
      </div>
    </section>
  )
}

function RivkaDevelopmentWebsite() {
  return (
    <CaseStudy
      title="Rivka Development"
      description="I was hired to redo their website, and the result was a 
      modern and professional website that showcases their projects and 
      services in a way that reflects their brand and professionalism."
      metrics={[
        {
          value: "100%",
          description: "customer satisfaction",
        },
        {
          value: "3X",
          description: "increase in leads",
        },
      ]}
      screenshot={rivkaDevelopmentWebsite}
      url="https://rivkadevelopment.com"
    />
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
          value: "60K+",
          description: "reports created",
        },
        {
          value: "450K+",
          description: "users and providers registered",
        },
      ]}
      screenshot={radarCiudadCaracas}
      url="https://radarciudad.info"
    />
  )
}

interface CaseStudyProps {
  title: string
  description: string
  screenshot: string | StaticImageData
  url: string
  metrics: {
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
        <Separator />
        <dl className="flex gap-x-10">
          {metrics.map((metric, index) => (
            <div key={index}>
              <dt className="text-3xl font-bold">{metric.value}</dt>
              <dd className="text-muted-foreground">{metric.description}</dd>
            </div>
          ))}
        </dl>
      </figcaption>
    </figure>
  )
}
