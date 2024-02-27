import { DefaultSeoProps } from "next-seo"
import { clientEnvironment } from "./environment"

const defaultTitle = "Carlos Reyes - Frontend Developer"
const host = clientEnvironment.NEXT_PUBLIC_HOST

export const SEO: DefaultSeoProps = {
  defaultTitle,
  titleTemplate: `%s | ${defaultTitle}`,
  description:
    "Welcome! I'm Carlos Reyes, a passionate frontend developer. I specialize in crafting dynamic, user-friendly websites and web applications. Let's collaborate to bring your digital vision to life.",
  themeColor: "#0A0A0A",
  openGraph: {
    type: "website",
    images: [
      {
        url: host + "/og-image.jpg",
        width: 600,
        height: 338,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@carlosreyesweb",
    site: "@carlosreyesweb",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.svg",
    },
  ],
}
