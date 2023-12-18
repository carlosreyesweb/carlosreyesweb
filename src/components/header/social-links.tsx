import { socialLinks } from "@/config/social-links"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export function SocialLinks() {
  return (
    <ul className="sr-only flex items-center lg:not-sr-only">
      {socialLinks.map(({ name, link, icon: Icon }) => (
        <li key={name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant="ghost" size="icon">
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
