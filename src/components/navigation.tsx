import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const links = [
  {
    label: "Showcase",
    href: "/#showcase",
  },
  {
    label: "Work Experience",
    href: "/#work-experience",
  },
  {
    label: "Blog",
    href: "https://www.esquinadelcodigo.com",
  },
  {
    label: "Get in Touch",
    href: "/contact",
    asCTA: true,
  },
]

const variants = {
  navbar: "inline-flex sr-only lg:not-sr-only",
  menu: "flex flex-col space-y-3",
  footer: "flex flex-wrap justify-center",
}

interface NavigationProps {
  variant: keyof typeof variants
  onLinkClick?: () => void
}
export function Navigation(props: NavigationProps) {
  const { variant, onLinkClick } = props

  return (
    <ul className={variants[variant]}>
      {links.map((item) => (
        <li key={item.label}>
          <Button
            asChild
            variant={item.asCTA ? "default" : "link"}
            size="sm"
            className={cn(
              variant === "menu" && !item.asCTA && "p-0",
              variant === "footer" && !item.asCTA && "text-foreground",
            )}
          >
            <Link
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              onClick={onLinkClick}
            >
              <span>{item.label}</span>
              {item.href.startsWith("http") ? (
                <ArrowUpRight className="ml-1 inline-block h-4 w-4" />
              ) : null}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  )
}
