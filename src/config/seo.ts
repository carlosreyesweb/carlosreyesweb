import { DefaultSeoProps } from "next-seo"
import { clientEnvironment } from "./environment"

const defaultTitle = "Carlos Reyes: Frontend Developer"
const host = clientEnvironment.NEXT_PUBLIC_HOST
const disableRobots = process.env.VERCEL_ENV !== "production"

export const SEO: DefaultSeoProps = {
  dangerouslySetAllPagesToNoIndex: disableRobots,
  dangerouslySetAllPagesToNoFollow: disableRobots,
  defaultTitle,
  titleTemplate: `%s | ${defaultTitle}`,
  description:
    "Hi! I'm Carlos Reyes, a Frontend Developer with 3+ years of experience building websites and web applications using modern technologies like React and Next.js. I'm passionate about web performance, accessibility, and user experience. Let's work together!",
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
