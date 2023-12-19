import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"
import { H2 } from "./ui/typography"

export function SectionTitle({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <H2
      className={cn("border-none text-lg uppercase text-primary", className)}
      {...props}
    >
      {children}
    </H2>
  )
}
