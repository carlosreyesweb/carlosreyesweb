import { SectionSubHeading } from "@/components/section-subheading"
import { SectionTitle } from "@/components/section-title"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function Services() {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-y-6">
        <header>
          <SectionTitle id="services">Services</SectionTitle>
          <SectionSubHeading>What Can I Do For You?</SectionSubHeading>
        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
          <Service className="h-96 md:col-span-2 lg:row-span-2" />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </div>
    </section>
  )
}

function Service({ className }: { className?: string }) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
