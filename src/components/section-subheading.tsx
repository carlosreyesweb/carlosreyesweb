import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export function SectionSubHeading({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p className={cn("text-3xl font-bold", className)} {...props}>
      {children}
    </p>
  )
}
