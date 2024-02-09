import { Logo } from "@/components/logo"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center space-y-4 py-12">
        <Link href="/">
          <Logo className="w-28" />
        </Link>
        <SocialLinks />
        <p className="text-center text-foreground">
          &copy; {new Date().getFullYear()} Carlos Reyes. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
