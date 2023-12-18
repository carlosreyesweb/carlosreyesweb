import { useMediaQuery } from "@/hooks/use-media-query"
import { DesktopNavigation } from "./desktop-navigation"
import { MobileNavigation } from "./mobile-navigation"
import { SocialLinks } from "./social-links"

export function Navbar() {
  const isDesktop = useMediaQuery("lg")

  return (
    <div className="sticky top-0 border-b bg-background py-4">
      <div className="container flex items-center justify-between">
        <DesktopNavigation />
        <SocialLinks />
        {isDesktop || <MobileNavigation />}
      </div>
    </div>
  )
}
