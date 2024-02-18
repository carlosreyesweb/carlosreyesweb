import { ReactNode } from "react"

export function GridBackgroundWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[linear-gradient(to_right,#2B2B2B_1px,transparent_1px),_linear-gradient(to_bottom,#2B2B2B_1px,transparent_1px)] bg-[size:100px_100px] bg-center">
      <div className="bg-gradient-to-b from-background via-transparent to-background backdrop-blur-sm">
        {children}
      </div>
    </div>
  )
}
