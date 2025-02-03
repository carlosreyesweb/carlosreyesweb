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

const JOBS = [
  {
    company: {
      name: "Rivka Development",
      logo: rivkaDevelopment,
    },
    title: "Full Stack Developer",
    startDate: new Date("2023-06-01T15:00:00Z"),
    remote: true,
    accomplishments: [
      "Revamped their website to create a contemporary, professional site highlighting the company's projects and services, fully responsive and SEO-optimized, successfully attracting new clients.",
      "Worked closely with the client to successfully manage and enhance both frontend and backend of RateSpot, a crucial mortgage product engine for the U.S. market, significantly improving its efficiency and stability.",
    ],
  },
  {
    company: {
      name: "neuralgeeks",
      logo: neuralgeeks,
    },
    title: "Frontend Developer",
    startDate: new Date("2020-09-01T12:00:00Z"),
    endDate: new Date("2022-03-01T12:00:00Z"),
    remote: true,
    accomplishments: [
      "Built a frontend for Radar Ciudad Caracas' public service failure reporting software, processing over 60,000 reports and serving 450+ users using React and Google Maps.",
      "Developed React dashboards for Invisible Ink, a chat service, and a medical device monitoring app for Emmimed.",
      "Designed and implemented a CMS-like frontend for Solar Cutters, a solar energy company, using React and TypeScript.",
      "Improved the IPA construction project management software frontend by addressing missing features for Innotica, a contracting company in Venezuela.",
      "Coached development teams on establishing standards for organizing new codebases to ensure maintainability and code quality.",
    ],
  },
  {
    company: {
      name: "Academia Web",
    },
    title: "Website Maintainer",
    startDate: new Date("2020-06-01T13:00:00Z"),
    endDate: new Date("2020-08-01T13:00:00Z"),
    remote: true,
    accomplishments: [
      "Redesigned the main WordPress website using OptimizePress plugin to enhance student experience.",
      "Improved website SEO performance by writing curated blog posts about programming.",
      "Reduced website bounce rate from 54% to 27% using Google Analytics to analyze visitors' behavior metrics.",
    ],
  },
]

function Job(props: (typeof JOBS)[number]) {
  return (
    <AccordionItem
      value={`${props.company}-${props.title}`}
      className="group relative flex flex-col gap-y-6 overflow-hidden border px-6 py-4"
    >
      <AccordionTrigger className="items-start p-0 text-left hover:no-underline sm:items-center">
        <div className="relative top-1.5 h-12 w-12 overflow-hidden rounded sm:static sm:top-0">
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
        <div className="ml-4 flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 whitespace-nowrap">
            <H3>
              {props.company.name}
              <ChevronRight className="relative bottom-0.5 ml-1 inline-block h-6 w-6 transition-transform group-data-[state=open]:rotate-90" />
            </H3>
            <Small>{props.title}</Small>
          </div>
          <div className="flex flex-col gap-2 whitespace-nowrap text-muted-foreground sm:text-right">
            <Small>{props.remote ? "Remote" : "Onsite"}</Small>
            <Small>
              {format(props.startDate, "MMM yyyy")} -{" "}
              {props.endDate ? format(props.endDate, "MMM yyyy") : "Present"}
            </Small>
            <Small>
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
      <AccordionContent className="ml-10">
        <Ul className="my-0">
          {props.accomplishments.map((accomplishment, index) => (
            <li key={index}>
              <Paragraph>{accomplishment}</Paragraph>
            </li>
          ))}
        </Ul>
      </AccordionContent>
      <BorderBeam colorFrom="#0a0a0a" colorTo="#33DFBD" />
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
