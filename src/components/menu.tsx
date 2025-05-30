import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navigationLinks } from "@/constants/navigation-links";
import { Menu as MenuIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Anchor } from "./ui/anchor";
import { Button } from "./ui/button";

interface MenuProps {
  socialLinks?: ReactNode;
}
export function Menu({ socialLinks }: MenuProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <MenuIcon className="size-8" />
          <span className="sr-only">Open Drawer</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="sr-only">
          <DrawerTitle>Navigation Menu</DrawerTitle>
          <DrawerDescription>
            Use the links below to navigate through the site. For any inquiries,
            feel free to reach out via the contact page.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-12 flex flex-col gap-y-4">
          <ul role="list" className="flex flex-col gap-y-4">
            {navigationLinks.map(({ label, href, asCTA }) => (
              <li key={href}>
                {asCTA ? (
                  <Button asChild>
                    <a href="/contact">Get in Touch</a>
                  </Button>
                ) : (
                  <Anchor
                    href={href}
                    className="text-foreground no-underline hover:underline text-lg md:text-xl"
                  >
                    {label}
                  </Anchor>
                )}
              </li>
            ))}
          </ul>
          {socialLinks}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
