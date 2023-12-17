import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export function Iso({ className, ...props }: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      viewBox="0 0 232 278"
      className={cn("fill-none stroke-current stroke-2", className)}
    >
      <path d="M218.4,184.6c7.85,13.57,12.36,29.34,12.36,46.15v46.14h-46.15v-46.14c0-25.49-20.66-46.15-46.15-46.15h-46.15v-46.15h46.15c25.49,0,46.15-20.66,46.15-46.15s-20.66-46.14-46.15-46.14V0c16.81,0,32.58,4.5,46.15,12.35,14.02,8.1,25.7,19.79,33.8,33.8,7.86,13.57,12.36,29.33,12.36,46.14s-4.49,32.57-12.36,46.15c-5.02,8.69-11.42,16.48-18.9,23.08,7.48,6.59,13.88,14.39,18.9,23.07Z" />
      <polygon points="46.15 230.76 138.45 230.76 138.45 276.9 0 276.9 0 46.15 138.45 46.15 138.45 92.3 46.15 92.3 46.15 230.76" />
    </svg>
  )
}
