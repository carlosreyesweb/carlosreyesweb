import Link from "next/link"
import { Logo } from "./logo"
import { Menu } from "./menu"
import { Navigation } from "./navigation"

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background py-4">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <Navigation variant="navbar" />
        <Menu />
      </div>
    </nav>
  )
}
