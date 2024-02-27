import { SectionTitle } from "@/components/section-title"
import { H3, Paragraph } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import { Globe2, LayoutGrid, LucideIcon, Plane } from "lucide-react"
import { ReactNode } from "react"

export function Services() {
  return (
    <section className="container flex flex-col space-y-8 py-20">
      <SectionTitle id="services" className="text-center">
        Your One-Stop Solution for Frontend Development
      </SectionTitle>
      <Paragraph className="mx-auto max-w-4xl text-center">
        Be it an innovative concept or an existing project requiring a
        rejuvenated perspective, I work intimately with you to comprehend your
        objectives and vision. I convert this understanding into a user-friendly
        interface, utilizing state-of-the-art technology and a sharp eye for
        design.
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
        description="From small business websites to large corporate portals, 
        I work across a wide range of industries and use cases, always 
        prioritizing a clean design and an intuitive user journey."
        icon={Globe2}
      />
      <Service
        title="Web Applications"
        description="From sophisticated e-commerce platforms to streamlined 
        internal tools, I develop web applications that are not only functional 
        but also engaging and user-friendly, making complex processes feel 
        simple and intuitive."
        icon={LayoutGrid}
      />
      <Service
        title="Landing Pages"
        description="Whether you're launching a new product or promoting a 
        significant event, a well-designed landing page can make all the 
        difference. I create responsive, visually compelling landing pages that 
        drive conversions and enhance your brand's online presence."
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
        "group relative flex flex-col justify-end space-y-2 border-2 bg-secondary/30 p-8 transition-colors first:min-h-[300px] hover:border-primary first:md:row-span-2 first:md:min-h-[600px]",
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
