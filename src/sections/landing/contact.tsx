import { GridBackgroundWrapper } from "@/components/grid-background-wrapper"
import { SectionTitle } from "@/components/section-title"
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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export function Contact() {
  return (
    <section>
      <GridBackgroundWrapper>
        <div className="container space-y-8 py-20">
          <SectionTitle className="text-center" id="contact">
            Let&apos;s Work Together!
          </SectionTitle>
          <Paragraph className="mx-auto max-w-4xl text-center">
            Ready to turn your vision into reality? I&apos;m eager to
            collaborate! Together, we&apos;ll explore innovative solutions,
            overcome obstacles, and achieve remarkable results. Don&apos;t
            hesitate to reach out and discuss your project. Let&apos;s embark on
            this exciting journey together and unlock your full potential.
          </Paragraph>
          <ContactForm />
        </div>
      </GridBackgroundWrapper>
    </section>
  )
}

const formSchema = z.object({
  firstName: z.string({ required_error: "First name is required." }),
  lastName: z.string({ required_error: "Last name is required." }),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Invalid email format." }),
  message: z.string({ required_error: "Message is required." }),
})
type FormValues = z.infer<typeof formSchema>

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

  function onSubmit(data: FormValues) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-lg space-y-4"
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
                  rows={10}
                  placeholder="Type your message here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="sm" className="w-full">
          Let&apos;s Chat!
        </Button>
      </form>
    </Form>
  )
}
