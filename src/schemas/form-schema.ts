import { z } from "zod"

export const formSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().min(1, "Email is required.").email("Invalid email format."),
  message: z.string().min(1, "Message is required."),
})
