import { navigation } from "@/config/navigation"
import Link from "next/link"
import { Button } from "../ui/button"
import { LogoLink } from "./logo-link"

export function DesktopNavigation() {
  return (
    <nav className="flex items-end gap-x-6">
      <LogoLink />
      <ul className="sr-only flex items-center lg:not-sr-only">
        {navigation.map((item) => (
          <li key={item.name}>
            <Button asChild variant="link">
              <Link href={item.path}>{item.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
