import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ReactNode } from "react"

export function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delayDuration={0}>
      <Navbar />
      {children}
      <Footer />
      <Toaster position="top-center" />
    </TooltipProvider>
  )
}
