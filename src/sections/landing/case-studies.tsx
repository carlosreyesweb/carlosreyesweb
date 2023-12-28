import { SectionSubHeading } from "@/components/section-subheading"
import { SectionTitle } from "@/components/section-title"
import { Anchor, H3, Paragraph } from "@/components/ui/typography"
import { ArrowUpRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"
import radarCiudadCaracas from "../../../public/projects/radar-ciudad-caracas.jpg"

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-m-20 py-20">
      <div className="container flex flex-col gap-y-8">
        <Header />
        <Showcase />
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="text-center">
      <SectionTitle>Case Studies</SectionTitle>
      <SectionSubHeading>
        How I Solved Real-World Web Challenges.
      </SectionSubHeading>
    </header>
  )
}

function Showcase() {
  return (
    <div>
      <CaseStudy
        title="Radar Ciudad Caracas"
        mockup={radarCiudadCaracas}
        url="https://radarciudad.info"
      >
        <Paragraph>
          Due to the null maintenance policies taken on public utilities in
          Venezuela, hundreds of failures occur daily, affecting the quality of
          life of the citizens of Caracas. Reporting them was often a complex
          task due to the failure or lack of direct communication lines between
          the population and the providers.
        </Paragraph>
        <Paragraph>
          That&apos;s why{" "}
          <Anchor
            href="https://www.linkedin.com/company/neuralgeeks/"
            target="_blank"
          >
            neuralgeeks
          </Anchor>{" "}
          hired me to develop a web application that would allow citizens to
          report failures in public services in a simple and intuitive way. The
          results? See for yourself.
        </Paragraph>
        <ul className="mt-8 flex gap-x-10">
          <ImpactMetric value="60K+" description="Reports created until now" />
          <ImpactMetric
            value="450+"
            description="Users and providers registered"
          />
        </ul>
      </CaseStudy>
      <CaseStudy
        title="Radar Ciudad Caracas"
        mockup={radarCiudadCaracas}
        url="https://radarciudad.info"
      >
        <Paragraph>
          Due to the null maintenance policies taken on public utilities in
          Venezuela, hundreds of failures occur daily, affecting the quality of
          life of the citizens of Caracas. Reporting them was often a complex
          task due to the failure or lack of direct communication lines between
          the population and the providers.
        </Paragraph>
        <Paragraph>
          That&apos;s why{" "}
          <Anchor
            href="https://www.linkedin.com/company/neuralgeeks/"
            target="_blank"
          >
            neuralgeeks
          </Anchor>{" "}
          hired me to develop a web application that would allow citizens to
          report failures in public services in a simple and intuitive way. The
          results? See for yourself.
        </Paragraph>
        <ul className="mt-8 flex gap-x-10">
          <ImpactMetric value="60K+" description="Reports created until now" />
          <ImpactMetric
            value="450+"
            description="Users and providers registered"
          />
        </ul>
      </CaseStudy>
    </div>
  )
}

interface CaseStudyProps {
  title: string
  mockup: string | StaticImageData
  url: string
  children?: ReactNode
}
function CaseStudy({ title, mockup, url, children }: CaseStudyProps) {
  return (
    <article className="group flex flex-col items-center justify-center gap-x-20 gap-y-6 py-8 lg:flex-row lg:items-stretch">
      <Image
        src={mockup}
        alt={title}
        className="w-full max-w-lg rounded-lg object-cover object-top"
      />
      <div className="w-full max-w-lg space-y-6 group-even:md:-order-1">
        <header>
          <H3>
            <a href={url} target="_blank" className="hover:text-primary">
              <span>{title}</span>
              <ArrowUpRight className="ml-1 inline-block" />
            </a>
          </H3>
        </header>
        {children}
      </div>
    </article>
  )
}

interface ImpactMetricProps {
  value: string
  description: string
}
function ImpactMetric({ value, description }: ImpactMetricProps) {
  return (
    <li className="flex flex-col gap-y-2">
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm text-muted-foreground">{description}</span>
    </li>
  )
}
