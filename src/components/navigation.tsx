import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "./ui/button"

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Case Studies",
    href: "/#case-studies",
  },
  {
    label: "Testimonials",
    href: "/#testimonials",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
]

const variants = {
  navbar: "inline-flex sr-only lg:not-sr-only",
  menu: "flex flex-col",
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
            variant="link"
            size="sm"
            className={cn(
              variant === "menu" && "px-0",
              variant === "footer" && "text-foreground",
            )}
          >
            <Link href={item.href} onClick={onLinkClick}>
              {item.label}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  )
}
