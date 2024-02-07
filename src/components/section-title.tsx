import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"
import { H2 } from "./ui/typography"

export function SectionTitle({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <H2 {...props} className={cn("", className)}>
      {children}
    </H2>
  )
}
