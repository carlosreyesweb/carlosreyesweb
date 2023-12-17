import { ThemeProvider } from "@/components/theme-provider";
import { roboto, robotoMono } from "@/styles/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <style jsx global>{`
        html {
          --font-roboto: ${roboto.style.fontFamily};
          --font-roboto-mono: ${robotoMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
