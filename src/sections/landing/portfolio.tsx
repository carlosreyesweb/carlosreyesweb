import { SectionSubHeading } from "@/components/section-subheading"
import { SectionTitle } from "@/components/section-title"
import { ArrowUpRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-m-20 py-20">
      <div className="container flex flex-col gap-y-8">
        <Header />
        <ProjectsShowcase />
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
        title="Project Test"
        description="Project Test For Layout"
        coverImage="https://picsum.photos/seed/fdfsfsdfsd/1920/1080"
        url="http://localhost:3000"
      />
      <ProjectCard
        title="Project Test"
        description="Project Test For Layout"
        coverImage="https://picsum.photos/seed/sdfjhfjdhjsf/1920/1080"
        url="http://localhost:3000"
      />
      <ProjectCard
        title="Project Test"
        description="Project Test For Layout"
        coverImage="https://picsum.photos/seed/fhdjfhdjsf/1920/1080"
        url="http://localhost:3000"
      />
      <ProjectCard
        title="Project Test"
        description="Project Test For Layout"
        coverImage="https://picsum.photos/seed/sdfgfyuwei/1920/1080"
        url="http://localhost:3000"
      />
      <ProjectCard
        title="Project Test"
        description="Project Test For Layout"
        coverImage="https://picsum.photos/seed/dshadjhjkfsd/1920/1080"
        url="http://localhost:3000"
      />
      <ProjectCard
        title="Project Test"
        description="Project Test For Layout"
        coverImage="https://picsum.photos/seed/sdhjshdfjskhf/1920/1080"
        url="http://localhost:3000"
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
      <figure className="group relative overflow-hidden rounded-lg focus-within:ring focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
        <Image
          src={coverImage}
          alt={title}
          width={1920}
          height={1080}
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
