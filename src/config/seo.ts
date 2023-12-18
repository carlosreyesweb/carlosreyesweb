import { DefaultSeoProps } from "next-seo";

const disableRobots = process.env.VERCEL_ENV !== "production";
const title = "Carlos Reyes: Frontend Developer";
const host = process.env.NEXT_PUBLIC_HOST;

export const SEO: DefaultSeoProps = {
  dangerouslySetAllPagesToNoIndex: disableRobots,
  dangerouslySetAllPagesToNoFollow: disableRobots,
  title,
  description:
    "Hi! I'm Carlos Reyes, a Frontend Developer with 3+ years of experience building websites and web applications. I specialize in JavaScript and TypeScript, and I have professional experience working with React.",
  themeColor: "#0A0A0A",
  canonical: host,
  openGraph: {
    type: "website",
    images: [
      {
        url: host + "/og-image.jpg",
        width: 600,
        height: 338,
        alt: title,
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
};
