import {
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Rss,
  Twitter,
  type LucideIcon,
} from "lucide-react"

type ProfileLinkKind = "social" | "website" | "blog" | "contact"

export interface ProfileLink {
  name: string
  link: string
  icon: LucideIcon
  kind: ProfileLinkKind
  handle?: string
  subtitle?: string
  external?: boolean
}

export const profileLinks: ProfileLink[] = [
  {
    name: "Website",
    link: "https://www.carlosreyesweb.com",
    icon: Globe,
    kind: "website",
    subtitle: "carlosreyesweb.com",
    external: false,
  },
  {
    name: "Blog",
    link: "https://www.esquinadelcodigo.com",
    icon: Rss,
    kind: "blog",
    subtitle: "esquinadelcodigo.com",
    external: true,
  },
  {
    name: "GitHub",
    link: "https://github.com/carlosreyesweb",
    icon: Github,
    kind: "social",
    handle: "@carlosreyesweb",
    external: true,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/carlosreyesweb",
    icon: Linkedin,
    kind: "social",
    handle: "@carlosreyesweb",
    external: true,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/carlosreyesweb",
    icon: Instagram,
    kind: "social",
    handle: "@carlosreyesweb",
    external: true,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/carlosreyesweb",
    icon: Twitter,
    kind: "social",
    handle: "@carlosreyesweb",
    external: true,
  },
  {
    name: "Email",
    link: "mailto:contact@carlosreyesweb.com",
    icon: Mail,
    kind: "contact",
    handle: "contact@carlosreyesweb.com",
    external: true,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/+584129380768",
    icon: MessageCircle,
    kind: "contact",
    handle: "+58 (412) 938-0768",
    external: true,
  },
]
