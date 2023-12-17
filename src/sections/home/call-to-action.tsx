import { ContactButton } from "@/components/contact-button"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { H2, Paragraph } from "@/components/ui/typography"

export function CallToAction() {
  return (
    <section className="container relative space-y-8 py-20 text-center">
      <AnimatedGridPattern
        className="absolute inset-0 opacity-10"
        duration={1}
      />
      <H2>Ready to Build Something Great Together?</H2>
      <Paragraph className="mx-auto max-w-3xl">
        Whether you&apos;re looking for a dedicated team member or a skilled
        freelancer to tackle your next project, I&apos;m here to help. Reach out
        to discuss how we can collaborate and create impactful solutions
        together.
      </Paragraph>
      <ContactButton />
    </section>
  )
}
