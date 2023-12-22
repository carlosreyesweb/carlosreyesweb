import { SectionSubHeading } from "@/components/section-subheading"
import { SectionTitle } from "@/components/section-title"

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-m-20 py-20">
      <div className="container flex flex-col gap-y-8">
        <Header />
      </div>
    </section>
  )
}

function Header() {
  return (
    <header className="text-center">
      <SectionTitle>Portfolio</SectionTitle>
      <SectionSubHeading>
        My Digital Canvas: A Gallery of Interactive Masterpieces.
      </SectionSubHeading>
    </header>
  )
}
