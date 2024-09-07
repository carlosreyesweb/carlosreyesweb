import { DefaultSeoProps } from "next-seo"
import { clientEnvironment } from "./environment"

const defaultTitle = "Carlos Reyes - Web Developer"
const host = clientEnvironment.NEXT_PUBLIC_HOST

export const SEO: DefaultSeoProps = {
  defaultTitle,
  titleTemplate: `%s | ${defaultTitle}`,
  description:
    "I'm a Web Developer specializing in sleek, responsive front-end designs, with the versatility to handle the full stack. I bring your vision to life with clean code and seamless user experiences.",
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
