import { ComponentPropsWithoutRef, ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { H3, Paragraph } from "./typography"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

export interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  target?: ComponentPropsWithoutRef<"a">["target"]
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[25rem] grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  target,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden",
      "transform-gpu border bg-background [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 translate-y-full transform-gpu space-y-2 px-8 py-7 transition-all duration-300 group-hover:translate-y-0">
      <Icon className="h-12 w-12 origin-left transform-gpu text-muted-foreground transition-all duration-300 ease-in-out group-hover:scale-75" />
      <H3>{name}</H3>
      <Paragraph className="max-w-lg">{description}</Paragraph>
      <Button variant="link" asChild className="pointer-events-auto p-0">
        <a href={href} target={target}>
          {cta}
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    </div>
  </div>
)

export { BentoCard, BentoGrid }
