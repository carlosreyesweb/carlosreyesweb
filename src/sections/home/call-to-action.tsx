import { LetsChatButton } from "@/components/lets-chat-button"
import { SectionTitle } from "@/components/section-title"
import { Paragraph } from "@/components/ui/typography"

export function CallToAction() {
  return (
    <section className="container space-y-8 pb-40 pt-20 text-center">
      <SectionTitle>
        Let&apos;s Create Something Remarkable.
        <br />
        <span className="text-primary">Connect with Me!</span>
      </SectionTitle>
      <Paragraph className="mx-auto max-w-4xl">
        Don&apos;t hesitate to get in touch if you&apos;re seeking a website
        overhaul, a new web application, or simply wish to discuss your project
        ideas. I&apos;m thrilled to help bring your vision to life.
      </Paragraph>
      <LetsChatButton />
    </section>
  )
}
