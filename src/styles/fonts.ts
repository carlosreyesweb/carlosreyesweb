import { Roboto, Roboto_Mono } from "next/font/google";

export const robotoMono = Roboto_Mono({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-roboto-mono",
});

export const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "900"],
  variable: "--font-roboto",
});
