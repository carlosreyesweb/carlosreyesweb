import { Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function ContactMeButton() {
  return (
    <Button asChild className="space-x-2">
      <Link href="/#contact">
        <Mail className="w-5" />
        <span>Contact me</span>
      </Link>
    </Button>
  )
}
