import { z } from "zod"

const clientEnvironmentSchema = z
  .object({
    NEXT_PUBLIC_HOST: z.string().trim().url(),
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().trim().min(1),
    NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().trim().min(1).optional(),
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().trim().min(1),
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().trim().min(1),
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().trim().min(1),
  })
  .readonly()
const serverEnvironmentSchema = z.object({}).readonly()

export type Environment = z.infer<typeof clientEnvironmentSchema> &
  z.infer<typeof serverEnvironmentSchema>

// Client environment must be parsed this way. Otherwise it throws an error.
export const clientEnvironment = parseEnv(clientEnvironmentSchema, {
  NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
})
export const serverEnvironment = parseEnv(serverEnvironmentSchema, process.env)

function parseEnv<T extends z.Schema>(
  schema: T,
  env: NodeJS.ProcessEnv | Record<string, string | undefined>,
): z.infer<T> {
  const parseResult = schema.safeParse(env)
  const formatErrorMessage = (errors: z.ZodIssue[]) =>
    "\n" + errors.map((error) => `${error.path} ${error.message}`).join("\n")

  if (!parseResult.success) {
    throw new Error(formatErrorMessage(parseResult.error.errors))
  }

  return parseResult.data
}
