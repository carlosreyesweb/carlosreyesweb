import { SectionTitle } from "@/components/section-title"
import { H3, Paragraph } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import { Globe2, LayoutGrid, LucideIcon, Plane } from "lucide-react"
import { ReactNode } from "react"

export function Services() {
  return (
    <section className="container flex flex-col space-y-8 py-20">
      <SectionTitle id="services" className="text-center">
        Custom Solutions for Your Unique Challenges
      </SectionTitle>
      <Paragraph className="mx-auto max-w-4xl text-center">
        No cookie-cutter solutions here. I create custom strategies tailored to
        your specific challenges, integrating seamlessly into your workflow to
        unlock your full potential. Let me help you achieve the unique success
        you deserve.
      </Paragraph>
      <ServicesGrid />
    </section>
  )
}

function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
      <Service
        title="Websites"
        description="Your digital heartbeat. I craft bespoke websites to 
        achieve your goals, from branding to sales to community. 
        Beautiful, optimized, effective."
        icon={Globe2}
      />
      <Service
        title="Web Applications"
        description="Ditch the clunky. I build powerful, custom web apps that 
        simplify tasks, automate workflows, and boost productivity. Smarter, 
        not harder."
        icon={LayoutGrid}
      />
      <Service
        title="Landing Pages"
        description="Conversion champions. Captivating copy, strategic design, 
        clear calls to action. Get the clicks, drive results."
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
    <article
      className={cn(
        "group relative flex flex-col justify-end space-y-2 border-2 bg-secondary/30 p-8 transition-colors first:min-h-[300px] hover:border-primary first:md:row-span-2 first:md:min-h-[500px]",
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
    </article>
  )
}
