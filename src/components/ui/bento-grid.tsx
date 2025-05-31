import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { Anchor } from "./anchor"
import { Typography } from "./typography"

interface BentoGridProps extends ComponentProps<"div"> {
  children: ReactNode
  className?: string
}

export interface BentoCardProps extends ComponentProps<"figure"> {
  name: string
  className: string
  background?: ReactNode
  icon?: ReactNode
  description: string
  href: string
  target?: ComponentProps<"a">["target"]
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
  icon,
  description,
  href,
  cta,
  target = "_blank",
  ...props
}: BentoCardProps) => (
  <figure
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden",
      "bg-background transform-gpu border [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <figcaption className="pointer-events-none z-10 translate-y-full transform-gpu space-y-2 px-8 py-7 transition-all duration-300 group-hover:translate-y-0">
      <div className="text-muted-foreground size-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75">
        {icon}
      </div>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="p" className="max-w-lg [&:not(:first-child)]:mt-0">
        {description}
      </Typography>
      <Anchor
        href={href}
        target={target}
        className="pointer-events-auto no-underline hover:underline md:text-xl"
      >
        {cta}
        <ArrowRight className="ml-1 inline-block size-5" />
      </Anchor>
    </figcaption>
  </figure>
)

export { BentoCard, BentoGrid }
