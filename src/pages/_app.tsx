import { clientEnvironment } from "@/config/environment"
import { SEO } from "@/config/seo"
import { GlobalLayout } from "@/layouts/global"
import { roboto, robotoMono } from "@/styles/fonts"
import "@/styles/globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import { DefaultSeo } from "next-seo"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --font-roboto: ${roboto.style.fontFamily};
          --font-roboto-mono: ${robotoMono.style.fontFamily};
        }
      `}</style>
      <DefaultSeo {...SEO} />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
      {clientEnvironment.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
        <GoogleAnalytics
          gaId={clientEnvironment.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
      ) : null}
    </>
  )
}
