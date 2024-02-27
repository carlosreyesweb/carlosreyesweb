import { Menu as MenuIcon } from "lucide-react"
import { useState } from "react"
import { Logo } from "./logo"
import { Navigation } from "./navigation"
import { SocialLinks } from "./social-links"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { H3 } from "./ui/typography"

export function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <MenuIcon className="w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="text-left">
          <Logo />
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 py-5">
          <div className="space-y-4">
            <H3 className="border-b pb-1">Navigation</H3>
            <Navigation variant="menu" onLinkClick={() => setOpen(false)} />
          </div>
          <div className="space-y-4">
            <H3 className="border-b pb-1">Social</H3>
            <SocialLinks />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
