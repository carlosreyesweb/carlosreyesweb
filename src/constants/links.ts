import { PROFILE } from "@/constants/profile"
import { parsePhoneNumber } from "@/lib/utils"
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

// Main navigation links for the site
export const NAVIGATION_LINKS = [
  {
    label: "Showcase",
    href: "/#showcase",
  },
  {
    label: "Links",
    href: "/links",
  },
  {
    label: "Contact Me",
    href: "/#contact",
    asCTA: true,
  },
]

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

const formatHandle = (handle: string) => `@${handle}`

// Central source of truth for all profile links
export const PROFILE_LINKS: ProfileLink[] = [
  {
    name: "Website",
    link: PROFILE.website,
    icon: Globe,
    kind: "website",
    subtitle: new URL(PROFILE.website).hostname,
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
    link: `https://github.com/${PROFILE.handles.github}`,
    icon: Github,
    kind: "social",
    handle: formatHandle(PROFILE.handles.github),
    external: true,
  },
  {
    name: "LinkedIn",
    link: `https://www.linkedin.com/in/${PROFILE.handles.linkedin}`,
    icon: Linkedin,
    kind: "social",
    handle: formatHandle(PROFILE.handles.linkedin),
    external: true,
  },
  {
    name: "Instagram",
    link: `https://www.instagram.com/${PROFILE.handles.instagram}`,
    icon: Instagram,
    kind: "social",
    handle: formatHandle(PROFILE.handles.instagram),
    external: true,
  },
  {
    name: "Twitter",
    link: `https://twitter.com/${PROFILE.handles.twitter}`,
    icon: Twitter,
    kind: "social",
    handle: formatHandle(PROFILE.handles.twitter),
    external: true,
  },
  {
    name: "Email",
    link: `mailto:${PROFILE.email}`,
    icon: Mail,
    kind: "contact",
    handle: PROFILE.email,
    external: true,
  },
  {
    name: "WhatsApp",
    link: `https://wa.me/${parsePhoneNumber(PROFILE.phone)}`,
    icon: MessageCircle,
    kind: "contact",
    handle: PROFILE.phone,
    external: true,
  },
]

// Used for social buttons
export const SOCIAL_LINKS = PROFILE_LINKS.filter(
  (link) => link.kind === "social",
)

// Used for JSON-LD "sameAs" property
export const SAME_AS_LINKS = PROFILE_LINKS.filter(
  (link) => link.kind !== "contact",
).map((link) => link.link)
