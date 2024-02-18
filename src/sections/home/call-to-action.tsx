import { LetsChatButton } from "@/components/lets-chat-button"
import { SectionTitle } from "@/components/section-title"
import { Paragraph } from "@/components/ui/typography"

export function CallToAction() {
  return (
    <section className="container bg-gradient-to-t from-background via-background to-border p-[1px]">
      <div className="space-y-8 bg-background py-20 text-center">
        <SectionTitle>
          Let&apos;s Build Something Amazing Together.
          <br />
          <span className="text-primary">Get in Touch!</span>
        </SectionTitle>
        <Paragraph className="mx-auto max-w-4xl">
          Ready to discuss your project and see how I can contribute? Drop me a
          line. I&apos;m excited to hear from you and turn your vision into
          reality.
        </Paragraph>
        <LetsChatButton />
      </div>
    </section>
  )
}
