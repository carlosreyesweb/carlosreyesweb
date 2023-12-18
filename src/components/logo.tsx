import { cn } from "@/lib/utils"
import Image from "next/image"
import logo from "../../public/logo.svg"

export function Logo({ className }: { className?: string }) {
  return (
    <Image src={logo} alt="Carlos Reyes" className={cn("w-24", className)} />
  )
}
