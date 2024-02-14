import { formSchema } from "@/schemas/form-schema"
import { z } from "zod"

export type FormValues = z.infer<typeof formSchema>
