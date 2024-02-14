import { GridBackgroundWrapper } from "@/components/grid-background-wrapper"
import { SectionTitle } from "@/components/section-title"
import { SocialLinks } from "@/components/social-links"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Paragraph } from "@/components/ui/typography"
import { useToast } from "@/hooks/use-toast"
import { sendMail } from "@/lib/contact"
import { formSchema } from "@/schemas/form-schema"
import { FormValues } from "@/types/form-values"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"

export function Contact() {
  return (
    <section>
      <GridBackgroundWrapper>
        <div className="container grid grid-cols-1 gap-16 py-20 lg:grid-cols-2">
          <div className="space-y-8">
            <SectionTitle id="contact">Let&apos;s Work Together!</SectionTitle>
            <Paragraph>
              Ready to turn your vision into reality? I&apos;m eager to
              collaborate! Together, we&apos;ll explore innovative solutions,
              overcome obstacles, and achieve remarkable results. Don&apos;t
              hesitate to reach out and discuss your project. Let&apos;s embark
              on this exciting journey together and unlock your full potential.
            </Paragraph>
            <Address />
          </div>
          <ContactForm />
        </div>
      </GridBackgroundWrapper>
    </section>
  )
}

function Address() {
  return (
    <address className="space-y-6 not-italic">
      <Paragraph>
        <span className="text-base text-muted-foreground">Email:</span>
        <br />
        <span>contact@carlosreyesweb.com</span>
      </Paragraph>
      <Paragraph>
        <span className="text-base text-muted-foreground">Phone:</span>
        <br />
        <span>+58 (412) 938-0768</span>
      </Paragraph>
      <Paragraph>
        <span className="text-base text-muted-foreground">Location:</span>
        <br />
        <span>Earth, Milky Way Galaxy</span>
      </Paragraph>
      <SocialLinks />
    </address>
  )
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""
function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  })
  const toaster = useToast()
  const captchaRef = useRef<ReCAPTCHA>(null)

  async function executeReCAPTCHA() {
    return captchaRef.current?.executeAsync() ?? null
  }

  async function onSubmit(data: FormValues) {
    const token = await executeReCAPTCHA()
    if (!token) {
      toaster.toast({
        title: "Oops!",
        description: "Please complete the reCAPTCHA challenge.",
      })
      return
    }
    try {
      await sendMail(data, token)
      toaster.toast({
        title: "Congratulations!",
        description: "Email sent successfully.",
      })
    } catch (error: any) {
      console.error(error)
      let msg = "An error occurred while sending the email."
      if (error instanceof Error) msg = error.message
      if ("text" in error) msg = error.text
      toaster.toast({
        title: "Oops!",
        description: msg,
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <fieldset className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="johndoe@domain.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  placeholder="Type your message here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-x-4 gap-y-2 md:flex-row-reverse">
          <Button
            type="submit"
            size="sm"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          <Button
            type="reset"
            size="sm"
            className="w-full"
            variant="secondary"
            disabled={form.formState.isSubmitting}
            onClick={() => form.reset()}
          >
            Clear
          </Button>
        </div>
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          size="invisible"
          badge="bottomleft"
        />
      </form>
    </Form>
  )
}
