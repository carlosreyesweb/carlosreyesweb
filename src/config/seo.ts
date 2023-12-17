import { DefaultSeoProps } from "next-seo"
import { clientEnvironment } from "./environment"

const defaultTitle = "Carlos Reyes - Full Stack Web Developer"
const host = clientEnvironment.NEXT_PUBLIC_HOST

export const SEO: DefaultSeoProps = {
  defaultTitle,
  titleTemplate: `%s | ${defaultTitle}`,
  description:
    "Hi, I'm Carlos Reyes, a Full Stack Web Developer with 5 years of experience specializing in sleek, responsive front-end designs and robust back-end solutions. I bring your vision to life with clean code and seamless user experiences.",
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
