import { LetsChatButton } from "@/components/lets-chat-button"
import { SectionTitle } from "@/components/section-title"
import { Paragraph } from "@/components/ui/typography"

export function CallToAction() {
  return (
    <section className="container space-y-8 pb-40 pt-20 text-center">
      <SectionTitle>
        Let&apos;s Make Something Great{" "}
        <span className="text-primary">Together</span>!
      </SectionTitle>
      <Paragraph className="mx-auto max-w-4xl">
        Whether you&apos;re looking for a dedicated team member or a skilled
        freelancer to tackle your next project, I&apos;m here to help. Reach out
        to discuss how we can collaborate and create impactful solutions
        together.
      </Paragraph>
      <LetsChatButton />
    </section>
  )
}
