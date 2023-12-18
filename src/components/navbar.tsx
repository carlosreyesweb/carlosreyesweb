import { useMediaQuery } from "@/hooks/use-media-query"
import Link from "next/link"
import { Logo } from "./logo"
import { Menu } from "./menu"
import { Navigation } from "./navigation"
import { SocialLinks } from "./social-links"

export function Navbar() {
  const isDesktop = useMediaQuery("lg")

  return (
    <div className="sticky top-0 border-b bg-background py-4">
      <div className="container flex items-center justify-between">
        <nav className="flex items-end gap-x-6">
          <Link href="/">
            <Logo />
          </Link>
          <Navigation variant="navbar" />
        </nav>
        <SocialLinks className="sr-only lg:not-sr-only" />
        {isDesktop ? null : <Menu />}
      </div>
    </div>
  )
}
