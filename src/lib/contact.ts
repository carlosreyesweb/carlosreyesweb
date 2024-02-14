import { FormValues } from "@/types/form-values"
import emailjs from "@emailjs/browser"

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ""
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""

export function sendMail(data: FormValues, recaptchaToken: string) {
  emailjs.init(EMAILJS_PUBLIC_KEY)
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    ...data,
    "g-recaptcha-response": recaptchaToken,
  })
}
