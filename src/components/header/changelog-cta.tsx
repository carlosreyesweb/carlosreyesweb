import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { ComponentPropsWithoutRef } from "react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Small } from "../ui/typography"

interface ChangelogCTAProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href" | "target"> {
  redirectTo: string
}
export function ChangelogCTA({
  redirectTo,
  children,
  className,
  ...props
}: ChangelogCTAProps) {
  return (
    <Button
      asChild
      variant="secondary"
      className={cn("rounded-full", className)}
    >
      <a href={redirectTo} target="_blank" {...props}>
        <Badge>New!</Badge>
        <Small className="ml-2 mr-1">{children}</Small>
        <ArrowUpRight className="w-5" />
      </a>
    </Button>
  )
}
