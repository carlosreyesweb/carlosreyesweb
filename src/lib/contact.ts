import { clientEnvironment } from "@/config/environment"
import { FormValues } from "@/types/form-values"
import emailjs from "@emailjs/browser"

export function sendMail(data: FormValues, recaptchaToken: string) {
  emailjs.init(clientEnvironment.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

  return emailjs.send(
    clientEnvironment.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    clientEnvironment.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    {
      ...data,
      "g-recaptcha-response": recaptchaToken,
    },
  )
}
