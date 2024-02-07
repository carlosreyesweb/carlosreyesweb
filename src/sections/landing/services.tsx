import { SectionTitle } from "@/components/section-title"
import { H3, Paragraph } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import { Globe2, LayoutGrid, LucideIcon, Plane } from "lucide-react"
import { ReactNode } from "react"

export function Services() {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-y-8">
        <SectionTitle id="services" className="text-center">
          Custom Solutions for Your Unique Challenges
        </SectionTitle>
        <ServicesGrid />
      </div>
    </section>
  )
}

function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
      <Service
        title="Websites"
        description="Best overall for most use cases. It's the most common type of website."
        icon={Globe2}
      />
      <Service
        title="Web Applications"
        description="Best suited for complex applications that require a lot of interactivity and real-time updates."
        icon={LayoutGrid}
      />
      <Service
        title="Landing Pages"
        description="Perfect for marketing campaigns, a landing page is a single page website that is designed to convert visitors into leads."
        icon={Plane}
      />
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
function Service({ className, title, description, icon: Icon }: ServiceProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end space-y-2 rounded-2xl border-2 bg-secondary/30 p-8 transition-colors first:min-h-[300px] hover:border-primary first:md:row-span-2 first:md:min-h-[500px]",
        className,
      )}
    >
      {Icon && (
        <Icon
          className="absolute right-4 top-4 h-20 w-20 origin-top-right text-primary/10 transition-all group-first:h-32 group-first:w-32 group-hover:scale-125 group-hover:text-primary/25"
          aria-hidden
        />
      )}
      <H3 className="relative group-first:lg:text-4xl">{title}</H3>
      <Paragraph className="relative">{description}</Paragraph>
    </div>
  )
}
