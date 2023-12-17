import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BorderBeam } from "@/components/ui/border-beam"
import { H2, H3, Paragraph, Small, Ul } from "@/components/ui/typography"
import { format, formatDuration, intervalToDuration } from "date-fns"
import { Building2, ChevronRight } from "lucide-react"
import Image from "next/image"
import neuralgeeks from "../../../public/companies/neuralgeeks.jpeg"
import rivkaDevelopment from "../../../public/companies/rivka-development.svg"
import carlosReyesWeb from "../../../public/favicon.svg"

const JOBS = [
  {
    id: "rivka-development-full-stack-web-developer",
    company: {
      name: "Rivka Development",
      logo: rivkaDevelopment,
    },
    title: "Full Stack Web Developer",
    startDate: new Date("2023-06-01T15:00:00Z"),
    remote: true,
    accomplishments: [
      "Orchestrated the full lifecycle buildout of the RateSpot V2 AI pricing engine, providing comprehensive full-stack engineering for real estate and mortgage applications.",
      "Enhanced Rivka Development's web presence through strategic platform improvements, markedly accelerating client acquisition workflows.",
      "Engineered automated data aggregation systems, extracting vital real estate insights and enabling data-driven decision-making for major accounts, including RateSpot.",
    ],
  },
  {
    id: "carlos-reyes-web-full-stack-web-developer",
    company: {
      name: "Freelance",
      logo: carlosReyesWeb,
    },
    title: "Full Stack Web Developer",
    startDate: new Date("2022-06-01T15:00:00Z"),
    endDate: new Date("2023-06-01T15:00:00Z"),
    remote: true,
    accomplishments: [
      "Engineered a high-impact landing page for a 3D real estate virtual tours startup, resulting in increased user engagement.",
      "Created a vehicle fleet management frontend solution for Hidrocapital, a Venezuelan public water service company, to streamline operations.",
      "Implemented frontend and backend features for Wauu!, Venezuela's first coupons app, to enhance user experience and expand platform capabilities.",
    ],
  },
  {
    id: "neuralgeeks-frontend-developer",
    company: {
      name: "neuralgeeks",
      logo: neuralgeeks,
    },
    title: "Frontend Developer",
    startDate: new Date("2020-09-01T12:00:00Z"),
    endDate: new Date("2022-06-01T12:00:00Z"),
    remote: true,
    accomplishments: [
      "Conceptualized the client-facing architecture for Radar Ciudad Caracas leveraging React and Google Maps, facilitating 60,000+ reports for over 450 users.",
      "Deployed responsive React dashboards for Invisible Ink's real-time chat solution and Emmimed's remote medical device platform.",
      "Designed a dynamic, CMS-driven frontend leveraging React and TypeScript for Solar Cutters, enabling enhanced solar energy solution delivery.",
      "Transformed the user interface for Innotica's IPA project management suite to meet functional specifications for a key Venezuelan contractor.",
      "Led team initiatives to define and institute new frontend development standards to improve code maintainability and project consistency.",
    ],
  },
  {
    id: "academia-web-webmaster",
    company: {
      name: "Academia Web",
    },
    title: "Webmaster",
    startDate: new Date("2020-06-01T13:00:00Z"),
    endDate: new Date("2020-09-01T13:00:00Z"),
    remote: true,
    accomplishments: [
      "Engineered the core WordPress site's redesign utilizing OptimizePress to elevate the student digital experience.",
      "Accelerated organic SEO performance for the company website through strategic blog post creation focused on programming topics.",
      "Reduced website bounce rate from 54% to 27% using Google Analytics to analyze visitors' behavior metrics.",
    ],
  },
]

function Job(props: (typeof JOBS)[number]) {
  return (
    <AccordionItem
      value={props.id}
      className="group relative flex flex-col gap-y-6 overflow-hidden border px-6 pb-5 pt-4"
    >
      <AccordionTrigger className="items-start gap-4 p-0 text-left hover:no-underline">
        <div className="relative top-2 hidden h-12 w-12 overflow-hidden rounded sm:block">
          {props.company.logo ? (
            <Image
              src={props.company.logo}
              alt={props.company.name}
              className="h-full w-full"
            />
          ) : (
            <Building2 className="h-full w-full text-muted-foreground" />
          )}
        </div>
        <div className="flex-1 space-y-1 whitespace-nowrap">
          <H3>{props.company.name}</H3>
          <div className="flex flex-col gap-y-2">
            <Small>{props.title}</Small>
            <Small className="text-muted-foreground">
              {format(props.startDate, "MMM yyyy")} -{" "}
              {props.endDate ? format(props.endDate, "MMM yyyy") : "Present"}
            </Small>
            <Small className="text-muted-foreground">
              {formatDuration(
                intervalToDuration({
                  end: props.endDate || new Date(),
                  start: props.startDate,
                }),
                { format: ["years", "months"] },
              )}
            </Small>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="sm:ml-10">
        <Ul className="my-0">
          {props.accomplishments.map((accomplishment, index) => (
            <li key={index}>
              <Paragraph>{accomplishment}</Paragraph>
            </li>
          ))}
        </Ul>
      </AccordionContent>
      <BorderBeam colorFrom="#0a0a0a" colorTo="#33DFBD" />
      <ChevronRight className="absolute right-4 top-5 h-6 w-6 transition-transform group-data-[state=open]:rotate-90" />
    </AccordionItem>
  )
}

export function WorkExperience() {
  return (
    <section className="container space-y-8">
      <hgroup>
        <H2 id="work-experience" className="text-center">
          My Journey with Companies and Clients
        </H2>
        <Paragraph className="mx-auto max-w-3xl text-center">
          Check out the companies and clients I&apos;ve had the pleasure to work
          with over the years. Each experience has been a stepping stone in my
          career growth.
        </Paragraph>
      </hgroup>
      <Accordion type="multiple" className="mx-auto max-w-4xl space-y-4">
        {JOBS.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </Accordion>
    </section>
  )
}
