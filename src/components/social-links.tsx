import { cn } from "@/lib/utils"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/carlosreyesweb",
    icon: Github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/carlosreyesweb",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/carlosreyesweb",
    icon: Instagram,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/carlosreyesweb",
    icon: Twitter,
  },
]

interface SocialLinksProps {
  className?: string
}
export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("inline-flex space-x-1", className)}>
      {socialLinks.map(({ name, link, icon: Icon }) => (
        <li key={name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant="outline" size="icon">
                <a href={link} target="_blank">
                  <Icon className="w-5" />
                  <span className="sr-only">{name}</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  )
}
