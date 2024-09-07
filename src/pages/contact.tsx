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
import { H1, Paragraph } from "@/components/ui/typography"
import { clientEnvironment } from "@/config/environment"
import { sendMail } from "@/lib/contact"
import { formSchema } from "@/schemas/form-schema"
import { FormValues } from "@/types/form-values"
import { zodResolver } from "@hookform/resolvers/zod"
import { NextSeo } from "next-seo"
import { useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact"
        description="Ready to turn your vision into reality? I'm eager to 
        collaborate! Together, we'll explore innovative solutions, overcome 
        obstacles, and achieve remarkable results."
        canonical={clientEnvironment.NEXT_PUBLIC_HOST + "/contact"}
      />
      <main className="container mt-20 space-y-8 py-20">
        <hgroup className="mx-auto max-w-xl text-center">
          <H1 className="font-sans text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
            Let&apos;s Work <span className="text-primary">Together</span>!
          </H1>
          <Paragraph>
            Whether you&apos;re looking for a dedicated team member or a skilled
            freelancer to tackle your next project, I&apos;m here to help. Reach
            out to discuss how we can collaborate and create impactful solutions
            together.
          </Paragraph>
        </hgroup>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
        <ContactForm />
      </main>
    </>
  )
}

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
  const captchaRef = useRef<ReCAPTCHA>(null)

  async function onSubmit(data: FormValues) {
    return toast.promise(
      async () => {
        const token = await executeReCAPTCHA()
        if (!token) {
          toast.error("Please complete the reCAPTCHA challenge.")
          return
        }
        return sendMail(data, token)
      },
      {
        loading: "Sending email. Please wait...",
        success: () => {
          form.reset()
          resetReCAPTCHA()
          return "Email sent successfully!"
        },
        error: (err) => {
          console.error(err)
          let msg = "An error occurred while sending the email."
          if (err instanceof Error) msg = err.message
          if ("text" in err) msg = err.text
          return msg
        },
      },
    )
  }

  async function executeReCAPTCHA() {
    return captchaRef.current?.executeAsync() ?? null
  }

  function resetReCAPTCHA() {
    return captchaRef.current?.reset() ?? null
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-xl space-y-4"
      >
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
                  rows={7}
                  placeholder="Type your message here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="sm"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={clientEnvironment.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
          badge="bottomleft"
        />
      </form>
    </Form>
  )
}
