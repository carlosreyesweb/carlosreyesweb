import { SectionSubHeading } from "@/components/section-subheading"
import { SectionTitle } from "@/components/section-title"

export function Portfolio() {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-y-8">
        <Header />
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="text-center">
      <SectionTitle id="portfolio">Portfolio</SectionTitle>
      <SectionSubHeading>
        My Digital Canvas: A Gallery of Interactive Masterpieces.
      </SectionSubHeading>
    </header>
  )
}
