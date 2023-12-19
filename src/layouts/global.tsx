import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ReactNode } from "react"

export function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delayDuration={0}>
      {children}
      <Footer />
      <Toaster />
    </TooltipProvider>
  )
}

function Footer() {
  return <footer></footer>
}
