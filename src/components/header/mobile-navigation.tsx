import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { navigation } from "@/config/navigation"
import { socialLinks } from "@/config/social-links"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import { H3 } from "../ui/typography"
import { LogoLink } from "./logo-link"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="text-left">
          <LogoLink />
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 py-5">
          <div className="space-y-2">
            <H3 className="border-b pb-1">Navigation</H3>
            <ul>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Button asChild variant="link" className="p-0">
                    <Link href={item.path} onClick={() => setOpen(false)}>
                      {item.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <H3 className="border-b pb-1">Social</H3>
            <ul>
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <Button asChild variant="link" className="p-0">
                    <Link
                      href={item.link}
                      target="_blank"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
